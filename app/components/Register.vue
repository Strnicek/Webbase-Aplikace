<script setup>
import { ref } from 'vue'
const email = ref('');
const password = ref('');
const username = ref('');
const passwordCheck = ref('');

const error = ref('');
const nacitani = ref(false);

const zabezpeceni = async () => {
  error.value = '';
  if(!email.value || !username.value || !password.value || !passwordCheck.value) {
    error.value = "Vyplňte prosím všechna pole";
    return;
  }
  if(passwordCheck.value !== password.value) {
    error.value = "Hesla se neshodují zadejte ho prosím znovu";
    return
  }
  if(password.value.length < 8) {
    error.value = "Vaše heslo musí být delší než 8 znaků";
    return
  }

  nacitani.value = true;
  
  try 
  {
    const takenCookie = useCookie('auth_token', {maxAge: 60 * 60 * 24 * 7})
    takenCookie.value = 'faken-jwt-token'

    await navigateTo('/')

  } catch(error) {

    error.value = error.data?.message || 'Registrace selhala'
  } finally {
    nacitani.value = false;
  }
  
}



</script>
<template>
    <div class="flex flex-col bg-[#211824] text-white w-115 px-10 py-8 gap-4"> 
        
        <div class="flex flex-col gap-2">
            <h1 class="text-4xl font-bold text-start"> Vytvořit účet </h1>
            <p class="text-start text-[#705FB4]/80"> Připoj se k našemu týmu Webbase </p>
        </div>
       
        <form @submit.prevent="zabezpeceni">
          <div class="flex flex-col gap-6"> 
          <div class="flex flex-col gap-2">
            <label> Email </label>
            <div class="relative w-full">
              <div class="absolute left-3 top-1/2 -translate-y-1/2 text-white/40">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
               <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0l-7.5-4.615a2.25 2.25 0 0 1-1.07-1.916V6.75" />
               </svg>
              </div>
              <input type="email" placeholder="Zadejte email" required v-model="email" class="w-full bg-[#201921] border-2 border-white/20 h-10 pl-10 pr-2 text-white placeholder-white/30 focus:outline-none focus:border-[#705FB4] transition-colors "/>
            </div>
            
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
              <div class="relative w-full">
                <div class="absolute left-3 top-1/2 -translate-y-1/2 text-white/40">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                  </svg>
               </div>
               <input type="password" placeholder="Vytvořte si heslo" required v-model="password" class="w-full bg-[#201921] border-2 border-white/20 h-10 pl-10 pr-2 text-white placeholder-white/30 focus:outline-none focus:border-[#705FB4] transition-colors"/>
              </div>
           </div>

           <div class="flex flex-col w-full gap-2">
              <label> Potvrdit Heslo </label>
              <div class="relative w-full">
                <div class="absolute left-3 top-1/2 -translate-y-1/2 text-white/40">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                  </svg>
                </div>
                <input type="password" placeholder="Zadejte znovu heslo" required v-model="passwordCheck" class="w-full bg-[#201921] border-2 border-white/20 h-10 pl-10 pr-2 text-white placeholder-white/30 focus:outline-none focus:border-[#705FB4] transition-colors"/>
              </div>
             
           </div>
           

           <button type="submit" :disabled="nacitani" class="bg-[#705FB4] py-2 w-full cursor-pointer hover:bg-[#705FB4]/80">
             {{ nacitani ? 'Vytvářím účet...' : 'Registrovat se ' }}
            </button>

           <p v-if="error" class="text-red-500 text-center text-sm"> {{ error }} </p>

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