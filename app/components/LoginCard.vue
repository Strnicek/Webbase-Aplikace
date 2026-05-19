<script setup>
const email = ref('');
const password = ref('');
const checkbox = ref('');


</script>
<template>
    <div class="flex flex-col bg-[#211824] text-white w-115 px-10 py-12"> 
        <img src="../assets/Webbase-logo.svg" alt="logo" class="h-15">

        <h1 class="text-4xl font-bold text-center"> Webbase Aplikace </h1>
        <p class="text-center text-white/60"> Moderní aplikace pro náš bussines</p>
        <form>
          <div class="flex flex-col gap-4"> 
          <div class="flex flex-col gap-2">
            <label> Email </label>
            <input type="email" required v-model="email" class="bg-[#201921] border-2 border-white/20 h-10 px-2"/>
          </div>

           <div class="flex flex-col w-full gap-2">
            <div class="flex justify-between">
              <label> Heslo </label>
              <p class="text-[#705FB4] hover:text-[#8271C9] cursor-pointer"> Zapoměli jste heslo? </p>
            </div>
             <input type="password" required v-model="password" class="bg-[#201921] border-2 border-white/20 h-10 px-2"/>
           </div>
           
           <div>
            <input type="checkbox" required v-model="checkbox"/>
            <label> Pamatovat si mě po dobu 30 dní </label>
           </div>

           <button type="submit" @click="handleLogin" class="bg-[#705FB4] py-2 w-full cursor-pointer hover:bg-[#705FB4]/80"> Přihlásit se </button>

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