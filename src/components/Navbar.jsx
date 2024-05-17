import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav class="bg-gray-800">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
    <div class="relative flex h-16 items-center justify-between">
        <div class="flex items-center">
          <img class="h-8 w-auto" src="./todo2.png"/>
          <a href="#" class="text-gray-300
             rounded-md px-7 py-2 text-xl font-medium">ToDo</a>
        </div>
        <div class="hidden sm:ml-6 sm:block">
          <div class="flex space-x-5">
           
            
            <a href="#" class="bg-gray-900 text-white rounded-md px-3 py-2 text-sm hover:font-bold font-medium transition-all" aria-current="page">Home</a>
            <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white hover:font-bold rounded-md px-3 py-2 text-sm font-medium transition-all">My Tasks</a>
      
      
        </div>
      </div>
      
    </div>
  </div>

  
  <div class="sm:hidden" id="mobile-menu">
    <div class="space-y-1 px-2 pb-3 pt-2">
      <a href="#" class="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium" aria-current="page">Home</a>
      <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Tasks</a>
    </div>
  </div>
</nav>

    </div>
  )
}

export default Navbar
