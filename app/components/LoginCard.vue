<script setup>
const email = ref('');
const password = ref('');
const checkbox = ref('');
</script>
<template>
    <div class="flex flex-col bg-[#241c26] text-white w-120 px-10 py-6"> 
        <img src="../assets/Webbase-logo.svg" alt="logo" class="h-15">

        <h1 class="text-4xl font-bold text-center"> Webbase Aplikace </h1>
        <p class="text-center text-white/60"> Moderní aplikace pro náš bussines</p>
        <form>
          <div class="flex flex-col gap-4"> 
          <div class="flex flex-col gap-2">
            <label> Email </label>
            <input type="email" required v-model="email" class="bg-[#201921] border-2 border-white/20 h-10"/>
          </div>

           <div class="flex flex-col w-full gap-2">
            <div class="flex justify-between">
              <label> Heslo </label>
              <p class="text-[#5E548E]"> Zapoměli jste heslo? </p>
            </div>
             <input type="password" required v-model="password" class="bg-[#201921] border-2 border-white/20 h-10"/>
           </div>
           
           <div>
            <input type="checkbox" required v-model="checkbox"/>
            <label> Pamatovat si mě po dobu 30 dní </label>
           </div>

           <button type="submit" class="bg-[#5E548E] py-2 w-full"> Přihlásit se </button>

          </div>
        </form>

        <p> Lorem ipsum </p>
    </div>
    

    
</template>