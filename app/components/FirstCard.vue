<script setup>
 const props = defineProps(['title', 'number','subtitle'])
</script>

<template>
    <div class=" w-full h-full py-6  bg-[#231942] text-white rounded-2xl border-2 border-white/20">
        <p>{{ title }}</p>
        <p class="text-3xl"> {{ number }}</p>
    </div>

</template>