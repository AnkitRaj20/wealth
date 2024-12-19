"use server";

import { db } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

const serializeTransactions = (transactions) =>{
    const serialized = {...transactions}

    if(obj?.balance){
        serialized.balance = transactions.balance.toNumber();
    }
}

export async function createAccount(data) {
  try {
    const { userId } = await auth();
    if (!userId) throw new Error("Unauthorized");

    const user = await db.user.findUnique({
      where: { clerkUserId: userId },
    });

    if (!user) throw new Error("User not found");

    //   * Convert balance to float before saving
    const balanceFloat = parseFloat(data?.balance || 0);
    if (isNaN(balanceFloat)) throw new Error("Invalid balance");

    // ? Check if this is users first account or not
    const existingAccounts = await db.account.findMany({
      where: { userId: user.id },
    });

    // ? Check if this is users default account or not
    const shouldBeDefaultAccount =
      existingAccounts.length === 0 ? true : data?.isDefault;

    //   If it is users default account then update all the accounts with isDefault = false
    if (shouldBeDefaultAccount) {
      await db.account.updateMany({
        where: { userId: user.id },
        data: { isDefault: false },
      });
    }

    const newAccount = await db.account.create({
        data:{
            ...data,
            balance: balanceFloat,
            isDefault: shouldBeDefaultAccount,
            userId: user.id,
        }
    })

    // ! since Next js does not support decimal value, so converting back to number
    const serializedAccount = serializeTransactions(newAccount)

    // ! Used to refetch the value of the page
    revalidatePath("/dashboard")

    return {success:true, data: serializedAccount}
  } catch (error) {
    console.error(error);
    throw new Error(error.message);
  }
}
