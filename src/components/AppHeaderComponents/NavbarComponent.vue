<script>
import { store } from '../../store.js';

export default {
data() {
return {
    store,
}
}
}
</script>

<template>
    <div class="nav-container">
        <div class="logobar">
            <div class="sponsor">
                <img src="../../assets/imgs/sponsor1.png" alt="coca cola">
                <img src="../../assets/imgs/sponsor2.png" alt="nike">
            </div>
            <div class="team-logo">
                <img src="../../assets/imgs/favicon-football.png" alt="logo squadra">
            </div>
            <div class="socials">
                <font-awesome-icon icon="fa-brands fa-facebook-f" />
                <font-awesome-icon icon="fa-brands fa-instagram" />
                <font-awesome-icon icon="fa-brands fa-twitter" />
            </div>
        </div>
        <nav >
            <ul class="navbar">
                <li v-for="(link, index) in store.navLinks" :key="index">
                    <a href="#" class="link">{{ link }}</a>
                </li>
            </ul>
        </nav>
    </div>
</template>

<style lang="scss" scoped>
.nav-container{
    background-color: rgba(0, 0, 0, 0.7);
}
.logobar{
    display: flex;
    justify-content: center;
    max-width: 55%;
    margin: 0 auto;
    div{
        width: calc((100% / 3) - 3px);
        display: flex;
        justify-content: center;
    }
    .socials{
        color: white;
    }
}
nav{
    max-width: 70%;
    margin: 0 auto;
}
.navbar{
        display: flex;
        justify-content: space-around;
        list-style: none;
        text-transform: uppercase;
        font-weight: 900;
}
a{
    text-decoration: none;
    color: white;
}
</style>