<script setup>
import Register from '../components/Register.vue';
</script>

<template>
  <div class="relative bg-[#0F0A1D] min-h-screen w-full flex flex-col justify-between items-center p-6 overflow-hidden select-none">
    
    <div class="flex-grow flex flex-col justify-center items-center w-full max-w-md z-10">
      
      <Register />

      <div class="mt-8 text-center space-y-3 font-sans">
        
        <div class="flex items-center justify-center space-x-2 text-xs text-[#5C5870]">
          <a href="#" class="hover:text-gray-300 transition-colors">Kontaktovat</a>
          <span class="text-[#3D3A4E]">•</span>
          <a href="#" class="hover:text-gray-300 transition-colors">Ochrana osobních údajů</a>
          <span class="text-[#3D3A4E]">•</span>
          <a href="#" class="hover:text-gray-300 transition-colors">Podpora</a>
        </div>
      </div>

    </div>

    <footer class="text-center text-[11px] text-[#3D3A4E] font-sans z-10 mt-6">
      © 2026 Webbase vytvořeno talentovaným a slavným Jakubem Strnadem
    </footer>

  </div>
</template>