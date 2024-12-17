import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { LayoutDashboard } from "lucide-react";

const Header = () => {
  return (
    <div className="fixed top-0 w-full bg-white/80 backdrop-blur-md shadow-md border-b border-gray-200 z-50">
      <nav className="container mx-auto flex justify-between items-center py-4 px-4">
        <Link href="/">
          Logo
          {/* <Image src={"/next.svg"} alt='logo' height={60} width={200} className='h-12 w-auto object-contain' /> */}
        </Link>

    <div className="flex items-center space-x-4">
      <SignedIn>
        <Link href="/dashboard">
          <Button variant="outline" className="mr-4">
            <LayoutDashboard size={18} className="mr-2" /> 
            <span className="hidden md:inline">Dashboard</span>
          </Button>
        </Link>
      </SignedIn>

        <SignedOut>
            {/* //? After sign in forceRedirectUrl will take the user to dashboard  */}
          <SignInButton forceRedirectUrl="/dashboard">
          <Button variant = "outline" className="mr-4">
            Login
          </Button>
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <UserButton appearance={{
            elements:{
              avatarBox: "w-10 h-10"
            }
          }}  />
        </SignedIn>
    </div>
      </nav>
    </div>
  );
};

export default Header;
