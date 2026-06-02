<script setup>
definePageMeta({
  middleware: 'auth'
})
</script>
<template>
  <div class="h-screen flex flex-col overflow-hidden">
    <header>
      <Header />
    </header>

    <main class="bg-[#0F0A1D] flex flex-1 overflow-hidden">
      <Sidebar />
      <div class="flex-1 px-8 py-6 text-[#FFF0FE]">
        <div class="flex justify-between items-center">
            <div class="flex flex-col">
                <h1 class="text-3xl font-semibold">Projekty</h1>
                <p> Seznam všech našich projektů </p>
            </div>
            <div class="flex justify-center items-center bg-[#5E548E] h-12 px-4 gap-2 font-bold cursor-pointer hover:bg-[#5E548E]/80">
                <p> + </p>
                <p> Přidat nový projekt </p>
            </div>
            
            
        </div>

        <div class="relative w-full border-2 border-red-500">

            <button>◀</button>

          <div>
             <div>

             </div>
          </div>

        </div>
        
      </div>
    </main>
  </div>
</template>