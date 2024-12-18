import React from 'react'
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/appSidebar"

const layout = ({children}) => {
  return (
    <SidebarProvider>
    <AppSidebar />
    <main className='container mx-auto my-32'>
      <SidebarTrigger />
      {children}
    </main>
  </SidebarProvider>
  )
}

export default layout