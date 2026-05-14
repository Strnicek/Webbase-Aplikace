<template>
    <aside class="bg-[#231942]  w-74 py-6 flex flex-col gap-10">
        <div class="flex gap-4 pl-8">
            <div class="bg-[#5E548E] justify-center items-center pt-2 pb-1 px-2 rounded-[8px]">
                <Icon class="text-2xl text-white" name="material-symbols:event-note-outline"/>
            </div>
            
            <h1 class="text-3xl text-[#FFF0FE] "> Přehled </h1>
        </div>
        
        <div class="flex flex-col gap-4 px-4 border-b-2 border-white pb-4"> 
            <div class="text-[#FFF0FE] flex items-center gap-4  h-15 pl-8 bg-[#5E548E] rounded-xl">
                <Icon class="text-2xl" name="material-symbols:dashboard-outline" />
                <p> Dashboard </p>
            </div>
    
            <div class="text-[#FFF0FE] flex items-center gap-4 h-15 pl-8 rounded-xl hover:bg-[#5E548E] cursor-pointer">
                <Icon class="text-2xl" name="material-symbols:group-outline"/>
                <p> Klienti </p>
            </div>
    
            <div class="text-[#FFF0FE] flex items-center gap-4 h-15 pl-8 rounded-xl hover:bg-[#5E548E] cursor-pointer">
                <Icon class="text-2xl" name="material-symbols:task-outline-rounded"/>
                <p> Projekty </p>
            </div>
    
            <div class="text-[#FFF0FE] flex  items-center gap-4 h-15 pl-8 rounded-xl hover:bg-[#5E548E] cursor-pointer">
                <Icon class="text-2xl" name="material-symbols:attach-money"/>
                <p> Peníze </p>
            </div>
    
            <div class="text-[#FFF0FE] flex items-center gap-4 h-15 pl-8 rounded-xl hover:bg-[#5E548E] cursor-pointer">
                <Icon class="text-2xl" name="material-symbols:robot-2-outline-rounded"/>
                <p> AI bot </p>
            </div>
        </div>
    
        <div class=" px-4 -mt-4">
            <div class="text-[#FFF0FE] flex items-center gap-4 h-15 pl-8 rounded-xl hover:bg-[#5E548E] cursor-pointer">
                <Icon class="text-2xl" name="material-symbols:settings"/>
                <p> Nastavení </p>
            </div>
    
            <div class="text-[#FFF0FE] flex items-center gap-4 h-15 pl-8 rounded-xl hover:bg-[#5E548E] cursor-pointer">
                <Icon class="text-2xl" name="material-symbols:contact-support-outline"/>
                <p> Podpora </p>
            </div>
        </div>
        
    </aside>
    
    </template>