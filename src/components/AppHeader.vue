
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
    <div class="container-header">
        <NavbarComponent class="nav-comp"/>
        <CarouselComponent class="catousel-comp"/>
    </div>
</template>

<style lang="scss" scoped>
.container-header{
    position: relative;
    .nav-comp{
        position: absolute;
        top: 0%;
        left: 0%;
        right: 0;
        z-index: 1;
        padding: 1rem;
    }
}
</style>