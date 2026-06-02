<script setup>
import FirstCard from '../components/FirstCard.vue';
import Header from '../components/Header.vue'
import SecondCard from '../components/SecondCard.vue';
import Sidebar from '../components/Sidebar.vue';
import ThirdCard from '../components/ThirdCard.vue';

definePageMeta({
  middleware: 'auth'
})
</script>

<template>
  <div class="h-screen flex flex-col overflow-hidden">
    
    <header>
      <Header />
    </header>

    <main class="bg-[#0F0A1D] flex flex-1  overflow-hidden">
      
      <Sidebar />

      <div class="grid grid-cols-4 grid-rows-3 gap-6 px-8 py-6 flex-1 overflow-y-auto">
        <FirstCard class="col-span-1 row-span-1"
        title="Všichni Klienti"
        number="1233"
        />
        <FirstCard class="col-span-1 row-span-1" />
        <FirstCard class="col-span-1 row-span-1" />
        <FirstCard class="col-span-1 row-span-1" />
        <SecondCard class="col-span-3 row-span-2" />
        <ThirdCard class="col-span-1 row-span-2" />
      </div>

    </main>
    
  </div>
</template>