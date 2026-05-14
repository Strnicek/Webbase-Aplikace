<script setup>
import FirstCard from './components/FirstCard.vue';
import Header from './components/Header.vue'
import SecondCard from './components/SecondCard.vue';
import Sidebar from './components/Sidebar.vue';
import ThirdCard from './components/ThirdCard.vue';
</script>

<template>
  <header>
    <Header />

  </header>
  <main class="bg-[#0F0A1D] flex">
    
      <Sidebar />
      <div class="grid grid-cols-4 grid-rows-3 gap-6 max-h-fit px-8 pt-6">
        <FirstCard class="col-span-1 row-span-1" />
        <FirstCard class="col-span-1 row-span-1" />
        <FirstCard class="col-span-1 row-span-1" />
        <FirstCard class="col-span-1 row-span-1" />
        <SecondCard class="col-span-3 row-span-2" />
        <ThirdCard class="col-span-1 row-span-2" />
      </div>
      

  </main>
  
  
</template>
 