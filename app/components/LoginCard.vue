<script setup>
const email = ref('');
const password = ref('');
const checkbox = ref('');
</script>
<template>
    <div class="flex flex-col bg-[#231942]  border-2 border-white text-white w-120 items-center">

        <h1 class="text-4xl font-bold"> Webbase Aplikace </h1>
        <p> Moderní aplikace pro náš bussines</p>
        <form>
          <div>
            <label> Email </label>
            <input type="email" required v-model="email"/>
           </div>

           <div>
             <label> Heslo </label>
             <input type="password" required v-model="password"/>
           </div>
           
           <div>
            <input type="checkbox" required v-model="checkbox"/>
            <label> Pamatovat si mě </label>
           </div>

           <button type="submit"> Přihlásit se </button>
        </form>

        <p> Lorem ipsum </p>
    </div>
    

    
</template>