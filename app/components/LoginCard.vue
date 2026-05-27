<script setup>
const email = ref('');
const password = ref('');
const checkbox = ref(false);

const error = ref('');
const nacitani = ref(false);

const prihlaseni = async () => {

  if(!email.value || !password.value) {
    error.value = "Musíte vyplnit všechna pole."
    return
  }

  nacitani.value = true
  error.value = ''

  try{
    const response = await $fetch('/api/auth/login', {
      method: 'POST',
      body: {
        email: email.value.trim(),
        password: password.value
      }
    })
    
    const maxAge = checkbox.value ? 60 * 60 * 24 * 30 : 60 * 60 * 24 * 7
    const authCookie = useCookie('auth_token', { maxAge: maxAge }) // Použijeme správné useCookie
    authCookie.value = response.token

    await navigateTo('/')

  } catch (err) {
    error.value = err.data?.statusMessage || err.statusMessage || 'Nesprávné údaje.'
  } finally {
    nacitani.value = false
  }
}

</script>
<template>
    <div class="flex flex-col bg-[#211824] text-white w-115 px-10 py-12"> 
        <img src="../assets/Webbase-logo.svg" alt="logo" class="h-15">

        <h1 class="text-4xl font-bold text-center"> Webbase Aplikace </h1>
        <p class="text-center text-white/60"> Moderní aplikace pro náš bussines</p>
        <form @submit.prevent="prihlaseni">
          <div class="flex flex-col gap-4"> 
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

           <div class="flex flex-col w-full gap-2">
            <div class="flex justify-between">
              <label> Heslo </label>
              <p class="text-[#705FB4] hover:text-[#8271C9] cursor-pointer"> Zapoměli jste heslo? </p>
            </div>
              <div class="relative w-full">
                <div class="absolute left-3 top-1/2 -translate-y-1/2 text-white/40">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                  </svg>
               </div>
               <input type="password" placeholder="Vytvořte si heslo" required v-model="password" class="w-full bg-[#201921] border-2 border-white/20 h-10 pl-10 pr-2 text-white placeholder-white/30 focus:outline-none focus:border-[#705FB4] transition-colors"/>
              </div>
            </div>
          
           
           <div>
            <input type="checkbox" v-model="checkbox"/>
            <label> Pamatovat si mě po dobu 30 dní </label>
           </div>

           <button type="submit" :disabled="nacitani" class="bg-[#705FB4] py-2 w-full cursor-pointer hover:bg-[#705FB4]/80">
             {{nacitani ? 'Přihlašuji...' : 'Přihlásit se'}}
            </button>

           <p v-if="error" class="text-red-500 text-center text-sm"> {{ error }} </p>

          </div>
        </form>

        <hr class="mt-12 border-white/40">

        <div class="text-center pt-6 flex w-full justify-center gap-2 ">
          <p class=""> Ještě nemáte vytvořený účet? </p>
          <NuxtLink to="/register" class="text-[#705FB4] hover:text-[#8271C9] transition-colors ml-1 font-medium">
             Registrovat se
          </NuxtLink>
        </div>
    </div>
</template>