<script>
import AppMain from './components/AppMain.vue';
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';
import AppLoader from './components/AppLoader.vue';


export default {
components: {
        AppHeader,
        AppMain,
        AppFooter,
        AppLoader
        },
        data() {
        return {
            showButton: false,
            loader: false,
        }
    } ,
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
        },
    beforeDestroy() {
        window.removeEventListener('scroll', this.handleScroll);
    },
methods: {
    handleScroll() {
        this.showButton = window.scrollY > 300;
    },
    scrollToTop() {
        window.scrollTo({
        top: 0,
        behavior: 'smooth'
        });
    },
    getLoad() {
        setTimeout(() => {
            this.loader = true;
        }, 1300);
    }
    },
    created() {
        this.getLoad();
    }
}
</script>


<template>
    <div v-if="loader === true">
        <AppHeader />
        <AppMain />
        <AppFooter />
        
        <button class="go-up-btn" v-show="showButton" @click="scrollToTop">
            <font-awesome-icon :icon="['fas', 'chevron-up']"/>
        </button>
    </div>
    <AppLoader v-else/>
</template>

<style lang="scss">
@use './style/general.scss' as *;

.go-up-btn {
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 60px;
    height: 60px;
    background-color: black;
    color: white;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    opacity: 0.7;
    transition: opacity 0.3s ease;

    &:hover {
        opacity: 1;
    }
}
</style>



