<script> 
import NavbarComponent from './AppHeaderComponents/NavbarComponent.vue';
import CarouselComponent from './AppHeaderComponents/CarouselComponent.vue';
import { store } from '../store.js';

export default {
components: {
        NavbarComponent,
        CarouselComponent,
    },
data() {
return {
    store,
}
}
}
</script>

<template>
<NavbarComponent/>
<CarouselComponent/>
</template>

<style scoped>

</style>