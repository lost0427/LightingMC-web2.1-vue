/// <reference types="vite/client" />
declare module '@views/'
declare module '@/assets/Gallery'
declare module '@/assets/Test'
declare module '@/assets/Material/gui/tab/tab_img.js'
declare module '@/components/Docs/Welcome.vue'
declare module '@/components/Docs/Covenant.vue'
declare module '@/components/Docs/Join.vue'
declare module 'vue-client-recaptcha' {
    import { DefineComponent } from 'vue';
    const VueClientRecaptcha: DefineComponent<{}, {}, any>;
    export default VueClientRecaptcha;
}