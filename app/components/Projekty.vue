<script setup>
defineProps({
  projekty: {
    type: Array,
    required: true
  }
})

// Tímto říkáme, že komponenta umí poslat akci 'smazat-projekt' do rodiče
const emit = defineEmits(['smazat-projekt'])
</script>

<template>
  <div class="flex flex-col gap-2">
    
    <div class="grid grid-cols-5 bg-[#231942] rounded-xl py-4 px-6 font-bold">
      <div class="flex items-center">
        <p>Náhled</p>
      </div>
      <p>Datum</p>
      <p>Klient</p>
      <p>Status</p>
      <p class="text-right text-gray-400 font-normal text-sm">Akce</p>
    </div>

    <div 
      v-for="(projekt, index) in projekty" 
      :key="index"
      class="grid grid-cols-5 items-center bg-[#150E22]/40 border border-[#5E548E]/10 rounded-xl py-3 px-6 hover:bg-[#150E22]/80 transition-colors"
    >
      <div class="w-50 h-30 rounded-lg bg-[#0F0A1D] overflow-hidden border border-[#5E548E]/20 flex items-center justify-center">
        <img v-if="projekt.nahled" :src="projekt.nahled" class="w-full h-full object-cover" alt="Náhled"/>
        <span v-else class="text-xs text-gray-600">📁</span>
      </div>

      <p class="text-sm text-gray-300">{{ projekt.datum }}</p>

      <p class="text-sm font-medium text-[#FFF0FE]">{{ projekt.klient }}</p>

      <div>
        <span 
          class="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold"
          :class="{
            'bg-amber-500/10 text-amber-400 border border-amber-500/20': projekt.status === 'Probíhá',
            'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20': projekt.status === 'Dokončeno',
            'bg-blue-500/10 text-blue-400 border border-blue-500/20': projekt.status === 'Čeká se'
          }"
        >
          {{ projekt.status || 'Probíhá' }}
        </span>
      </div>

      <div class="text-right">
        <button 
          type="button" 
          @click="emit('smazat-projekt', index)"
          class="text-gray-500 hover:text-red-400 p-2 rounded-lg hover:bg-red-500/10 transition-colors cursor-pointer"
          title="Smazat projekt"
        >
          Smazat
        </button>
      </div>

    </div>

    <div v-if="projekty.length === 0" class="text-center py-10 text-gray-500 text-sm border border-dashed border-[#5E548E]/20 rounded-xl bg-[#150E22]/20">
      Zatím nebyly přidány žádné projekty.
    </div>

  </div>
</template>