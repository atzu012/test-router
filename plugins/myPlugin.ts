import PrimeVue from "primevue/config";
import Button from "primevue/button";
import InputText from 'primevue/inputtext';
import Dropdown from 'primevue/dropdown';
import Toast from 'primevue/toast';
import ToastService from 'primevue/toastservice';

export default defineNuxtPlugin(nuxtApp => {
    // Doing something with nuxtApp
    nuxtApp.vueApp.use(PrimeVue, { ripple: true });
    nuxtApp.vueApp.use(ToastService);

    nuxtApp.vueApp.component("Button", Button);
    nuxtApp.vueApp.component("InputText", InputText);
    nuxtApp.vueApp.component("Toast", Toast);
    nuxtApp.vueApp.component("Dropdown", Dropdown);
})