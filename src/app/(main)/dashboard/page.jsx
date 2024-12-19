import React from 'react'
import CreateAccountDrawer from '@/components/accountDrawer';
import { Card, CardContent } from '@/components/ui/card';
import { Plus } from 'lucide-react';
const DashboardPage = () => {
  return (
    <div className='px-5'>
      {/* Budget Process */}

      {/* Overview */}

      {/* Account Grid */}
      <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 '>
       <CreateAccountDrawer>
        <Card className="hover:shadow-lg cursor-pointer transition-shadow border-dashed">
          <CardContent className="flex flex-col items-center justify-center text-muted-foreground h-full pt-5"  >
            <Plus className='h-10 w-10 mb-2' />
            <p className="test-sm font-medium">Add new account</p>
          </CardContent>
        </Card>
       </CreateAccountDrawer>
      </div>
    </div>
  )
}

export default DashboardPage