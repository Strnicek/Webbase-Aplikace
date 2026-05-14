<script setup>
 const props = defineProps(['title', 'number','subtitle'])
</script>

<template>
    <div class=" w-70 py-6  bg-[#231942] text-white rounded-2xl">
        <p>{{ title }}</p>
        <p class="text-3xl"> {{ number }}</p>
    </div>

</template>