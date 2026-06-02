<script setup>
import { computed, ref } from 'vue'

const isDropdownOpen = ref(false)

const { data } = await useFetch('/api/auth/me', {
  default: () => ({ user: null })
})
const user = computed(() => data.value?.user ?? null)

const odhlasitSe = async () => {
    const tokenCookie = useCookie('auth_token')
    tokenCookie.value = null 
    await navigateTo('/login')   
}
</script>

<template>
    <header class="bg-[#0F0A1D] border-b-2 border-[#FFF0FE]/40 flex items-center justify-between p-6">
        <div>
            <NuxtLink to="/" class="text-[#FFF0FE] font-semibold text-xl">Webbase App</NuxtLink>
        </div>
        
        <div class="flex gap-4 text-white items-center">
            <Icon name="material-symbols:notifications-active-outline" class="cursor-pointer text-3xl"/>
            <Icon name="material-symbols:help-outline" class="cursor-pointer text-3xl"/>

            <div 
                class="relative flex items-center" 
                @mouseenter="isDropdownOpen = true" 
                @mouseleave="isDropdownOpen = false"
            >
                <Icon name="material-symbols:account-circle-full" class="cursor-pointer text-[26px]"/>

                <div 
                    v-if="isDropdownOpen && user"
                    class="absolute right-0 top-full pt-2 z-50"
                >
                    <div class="w-60 bg-[#161026] border border-[#FFF0FE]/20 rounded-xl shadow-2xl py-3 text-sm text-[#FFF0FE]">
                        
                        <div class="px-4 py-2 border-b border-[#FFF0FE]/10">
                            <p class="font-bold text-base text-[#FFF0FE]">{{ user.username }}</p>
                            <p class="text-xs text-[#FFF0FE]/60 truncate mt-0.5">{{ user.email }}</p>
                        </div>

                        <div class="px-2 pt-2">
                            <button 
                                @click="odhlasitSe"
                                class="w-full text-left px-3 py-2 text-red-400 hover:bg-red-500/10 rounded-lg transition-colors font-medium flex items-center cursor-pointer"
                            >
                                Odhlásit se
                            </button>
                        </div>
                    </div>
                </div>
                </div>
        </div>
    </header>
</template>