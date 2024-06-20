<script> 
import AppMain from './components/AppMain.vue';
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';
export default {
components: {
    AppHeader,
    AppMain,
    AppFooter
},

data() {
return {  
}
}}
</script>

<template>


    <AppHeader/>
    <AppMain/>
    <AppFooter/>


</template>

<style lang="scss">
@use './style/general.scss' as *;
</style>

