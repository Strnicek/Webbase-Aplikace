<script setup>
const email = ref('');
const password = ref('');
const username = ref('');
const passwordCheck = ref('');



</script>
<template>
    <div class="flex flex-col bg-[#211824] text-white w-115 px-10 py-8 gap-4"> 
        
        <div class="flex flex-col gap-2">
            <h1 class="text-4xl font-bold text-start"> Vytvořit účet </h1>
            <p class="text-start text-[#705FB4]/80"> Připoj se k našemu týmu Webbase </p>
        </div>
       
        <form>
          <div class="flex flex-col gap-6"> 
          <div class="flex flex-col gap-2">
            <label> Email </label>
            <input type="email" placeholder="Zadejte email" required v-model="email" class="bg-[#201921] border-2 border-white/20 h-10 px-2"/>
          </div>

          <div class="flex flex-col gap-2">
            <label class="text-sm font-medium text-[#8E8A9F]"> Uživatelské jméno </label>
              <div class="relative w-full">
    
                <div class="absolute left-3 top-1/2 -translate-y-1/2 text-white/40">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                  </svg>
                </div>

            <input 
              type="text" 
              placeholder="Zadejte uživatelské jméno" 
              required 
              v-model="username" 
             class="w-full bg-[#201921] border-2 border-white/20 h-10 pl-10 pr-2 text-white placeholder-white/30 focus:outline-none focus:border-[#705FB4] transition-colors"
            />
    
              </div>
          </div>

           <div class="flex flex-col w-full gap-2">
              <label> Heslo </label>
             <input type="password" placeholder="Vytvořte si heslo" required v-model="password" class="bg-[#201921] border-2 border-white/20 h-10 px-2"/>
           </div>

           <div class="flex flex-col w-full gap-2">
              <label> Potvrdit Heslo </label>
             <input type="password" placeholder="Zadejte znovu heslo" required v-model="passwordCheck" class="bg-[#201921] border-2 border-white/20 h-10 px-2"/>
           </div>
           

           <button type="submit" @click="handleLogin" class="bg-[#705FB4] py-2 w-full cursor-pointer hover:bg-[#705FB4]/80"> Registrovat se </button>

          </div>
        </form>

        <hr class="mt-8 border-white/40">

        <div class="text-center pt-6 flex w-full justify-center gap-2 ">
          <p class=""> Máte už vytvořený účet? </p>
          <NuxtLink to="/login" class="text-[#705FB4] hover:text-[#8271C9] transition-colors ml-1 font-medium">
             Přihlásit se
          </NuxtLink>
        </div>

   
    </div>
    

    
</template>