<script setup>
import { ref } from 'vue'
import Projekty from "../components/Projekty.vue"
definePageMeta({
  middleware: 'auth'
})
const pridatProjekt = ref(false)
const seznamProjektu = ref([])

const zadaneHodnoty = ref({
  nahled: '',
  datum: '',
  klient: '',
  status: 'Probíhá'
})

const handleFileUpload = (event) => {
  const file = event.target.files[0]
  if (file) {
    zadaneHodnoty.value.nahled = URL.createObjectURL(file)
  }
}

const nahratInformace = (event) => {
  if (!zadaneHodnoty.value.klient || !zadaneHodnoty.value.datum) {
    alert("Minimálně pole klienta a datumu musí být vyplněné");
    return
  }

  seznamProjektu.value.push({
    ...zadaneHodnoty.value
  })

  pridatProjekt.value = false;
  zadaneHodnoty.value = {
    nahled: '',
    datum: '',
    klient: '',
    status: 'Probíhá'
  }
}

const smazatProjekt = (index) => {
  if (confirm('Opravdu chcete tento projekt smazat?')) {
    seznamProjektu.value.splice(index, 1)
  }
}

</script>
<template>
  <div class="h-screen flex flex-col overflow-hidden">
    <header>
      <Header />
    </header>

    <main class="bg-[#0F0A1D] flex flex-1 overflow-hidden">
      <Sidebar />
      <div class="flex-1 flex flex-col gap-6 px-8 py-6 text-[#FFF0FE]">
        <div class="flex justify-between items-center">
          <div class="flex flex-col">
            <h1 class="text-3xl font-semibold">Projekty</h1>
            <p> Seznam všech našich projektů </p>
          </div>
          <button type="button" @click="pridatProjekt = true"
            class="flex justify-center items-center bg-[#5E548E] h-12 px-4 gap-2 font-bold cursor-pointer hover:bg-[#5E548E]/80">
            <span>+</span>
            <span>Přidat nový projekt</span>
          </button>
        </div>
        <Projekty :projekty="seznamProjektu" @smazat-projekt="smazatProjekt" />

        <div v-if="pridatProjekt" class="fixed inset-0 bg-black/60 flex justify-center items-center z-50">
          <div class="bg-[#1F1630] border border-[#5E548E] py-4 px-6 rounded-2xl w-1/4">

            <h3> Přidat nový projekt </h3>

            <div class="flex flex-col gap-4">
              <div class="flex flex-col gap-1">
                <label class="text-sm font-medium text-gray-400">Fotka pro náhled projektu:</label>
                <input id="file-upload" type="file" accept="image/*" class="hidden" @change="handleFileUpload" />
                <label for="file-upload"
                  class="flex flex-col items-center justify-center border border-dashed border-[#5E548E]/60 bg-[#150E22] rounded-lg h-32 cursor-pointer hover:border-[#5E548E] transition-colors overflow-hidden relative">
                  <div v-if="!zadaneHodnoty.nahled"
                    class="flex flex-col items-center gap-1 text-gray-400 p-4 text-center">
                    <p class="text-xs font-medium">Klikni pro nahrání obrázku</p>
                    <p class="text-[10px] text-gray-500">PNG, JPG</p>
                  </div>
                  <img v-else :src="zadaneHodnoty.nahled" class="w-full h-full object-cover" alt="Náhled" />
                </label>
              </div>

              <div class="flex flex-col gap-1">
                <label> Datum začátku spolupráce: </label>
                <input v-model="zadaneHodnoty.datum" type="date"
                  class="bg-[#150E22] border border-[#5E548E]/40 rounded-lg p-2.5 text-[#FFF0FE] focus:outline-none focus:border-[#5E548E] [&::-webkit-calendar-picker-indicator]:invert cursor-pointer">
              </div>
              <div class="flex flex-col gap-1">
                <label> Jméno/Název klienta: </label>
                <input v-model="zadaneHodnoty.klient" type="text"
                  class="bg-[#150E22] border border-[#5E548E]/40 rounded-lg p-2.5 text-[#FFF0FE] focus:outline-none focus:border-[#5E548E]">

              </div>
              <div class="flex flex-col gap-1">
                <label> Status projektu: </label>
                <div class="relative w-full">
                  <select v-model="zadaneHodnoty.status"
                    class="w-full bg-[#150E22] border border-[#5E548E]/40 rounded-lg p-2.5 pr-12 text-[#FFF0FE] focus:outline-none focus:border-[#5E548E] cursor-pointer appearance-none">
                    <option value="Probíhá" class="bg-[#150E22]"> Probíhá</option>
                    <option value="Dokončeno" class="bg-[#150E22]"> Dokončeno</option>
                    <option value="Čeká se" class="bg-[#150E22]"> Čeká se</option>
                  </select>

                  <div
                    class="absolute inset-y-0 right-6 flex items-center pointer-events-none text-[#FFF0FE] text-[10px]">
                    ▼
                  </div>
                </div>

                <div class="flex justify-end gap-3 mt-6">
                  <button type="button" @click="pridatProjekt = false"
                    class="px-4 py-2 text-sm font-medium rounded-lg hover:bg-white/10 cursor-pointer">
                    Zrušit
                  </button>
                  <button type="button" @click="nahratInformace"
                    class="px-4 py-2 bg-[#5E548E] text-sm font-bold rounded-lg hover:bg-[#5E548E]/80 cursor-pointer">
                    Uložit projekt
                  </button>
                </div>

              </div>
            </div>

          </div>

        </div>
      </div>

    </main>

  </div>
</template>