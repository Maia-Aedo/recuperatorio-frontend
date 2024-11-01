import { defineStore } from 'pinia';
import type { Theme } from '@/models/themeState'

export const useThemeStore = defineStore({
    id: 'theme',
    state: (): Theme => ({
        isDark: false,
        mode: 'light Mode'
    }),
    actions: {
        changeMode(){
            this.isDark = !this.isDark;
            this.mode = this.isDark ? 'dark Mode' : 'light Mode';
        }
    },
});
