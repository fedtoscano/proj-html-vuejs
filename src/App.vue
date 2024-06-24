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
        }
    } ,
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
        },
    created(){
        this.circleAroundPointer();
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

    circleAroundPointer () {
    document.addEventListener('mousemove', function(e){
    const circlePointer = document.querySelector(".circle-pointer")
    circlePointer.style.left = e.pageX + 'px';
    circlePointer.style.top = e.pageY + 'px';
    })
    }

    },
    }


</script>


<template>
        <AppHeader />
        <AppMain />
        <AppFooter />        
        <button class="go-up-btn" v-show="showButton" @click="scrollToTop">
            <font-awesome-icon :icon="['fas', 'chevron-up']"/>
        </button>

    <div class="circle-pointer">
        <div class="little-dot"></div>
    </div>
    <AppLoader/>
</template>

<style lang="scss">
@use './style/general.scss' as *;

.circle-pointer{
    position: absolute;
    width: 60px; 
    height: 60px;
    border: 2px solid rgb(245, 245, 245); 
    border-radius: 50%; 
    pointer-events: none; 
    transform: translate(-50%, -50%);
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all ease-out .05s;
    z-index: 2;
    .little-dot{
        width: 5px;
        height: 5px;
        background-color: grey;
        border-radius: 50%;
    }
}

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



