<script setup>


</script>

<template>
    <aside class="hidden md:block bg-[#231942] w-74 py-8 flex flex-col h-full border-r border-white/10">
      
      <div class="flex gap-4 pl-8 mb-12">
        <div class="bg-[#5E548E] flex justify-center items-center p-2 rounded-[8px]">
          <Icon class="text-2xl text-white" name="material-symbols:event-note-outline"/>
        </div>
        <h1 class="text-3xl text-[#FFF0FE] font-semibold"> Přehled </h1>
      </div>
  
      <nav class="flex-1 flex flex-col gap-4 px-4"> 
        <NuxtLink to="/" class="text-[#FFF0FE] flex items-center gap-4 h-14 pl-8 bg-[#5E548E] rounded-xl cursor-pointer">
          <Icon class="text-2xl" name="material-symbols:dashboard-outline" />
          <p> Dashboard </p>
        </NuxtLink>
  
        <div class="text-[#FFF0FE] flex items-center gap-4 h-14 pl-8 rounded-xl hover:bg-[#5E548E]/50 transition-colors cursor-pointer">
          <Icon class="text-2xl" name="material-symbols:group-outline"/>
          <p> Klienti </p>
        </div>
  
        <NuxtLink  
         to="/projekty" 
          class="text-[#FFF0FE] bg-[#5E548E] flex items-center gap-4 h-14 pl-8 rounded-xl hover:bg-[#5E548E]/50 transition-colors cursor-pointer"
         >
          <Icon class="text-2xl" name="material-symbols:task-outline-rounded"/>
          <p> Projekty </p>
        </NuxtLink>
  
        <NuxtLink class="text-[#FFF0FE] flex items-center gap-4 h-14 pl-8 rounded-xl hover:bg-[#5E548E]/50 transition-colors cursor-pointer">
          <Icon class="text-2xl" name="material-symbols:attach-money"/>
          <p> Peníze </p>
        </NuxtLink>
  
        <div class="text-[#FFF0FE] flex items-center gap-4 h-14 pl-8 rounded-xl hover:bg-[#5E548E]/50 transition-colors cursor-pointer">
          <Icon class="text-2xl" name="material-symbols:robot-2-outline-rounded"/>
          <p> AI bot </p>
        </div>
      </nav>
  
      <div class="px-4 mt-auto flex flex-col gap-2">
        <hr class="border-white/20 mb-4 mx-4">
        
        <div class="text-[#FFF0FE] flex items-center gap-4 h-14 pl-8 rounded-xl hover:bg-[#5E548E]/50 transition-colors cursor-pointer">
          <Icon class="text-2xl" name="material-symbols:settings"/>
          <p> Nastavení </p>
        </div>
  
        <div class="text-[#FFF0FE] flex items-center gap-4 h-14 pl-8 rounded-xl hover:bg-[#5E548E]/50 transition-colors cursor-pointer">
          <Icon class="text-2xl" name="material-symbols:contact-support-outline"/>
          <p> Podpora </p>
        </div>
      </div>
  
    </aside>
  </template>