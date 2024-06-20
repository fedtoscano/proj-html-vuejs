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
                <a href="#">
                    <img src="../../assets/imgs/sponsor1.png" alt="coca cola">
                </a>
                <a href="#">
                    <img src="../../assets/imgs/sponsor2.png" alt="nike">
                </a>
            </div>
            <div class="team-logo">
                <a href="#">
                    <img src="../../assets/imgs/loader-football.png" alt="logo squadra">
                </a>
            </div>
            <div class="socials">
                <a href="#">
                    <font-awesome-icon icon="fa-brands fa-facebook-f" />
                </a>
                <a href="#">
                    <font-awesome-icon icon="fa-brands fa-instagram" />
                </a>
                <a href="#">
                    <font-awesome-icon icon="fa-brands fa-twitter" />
                </a>
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
    max-width: 47%;
    margin: 0 auto;
    padding-bottom: 1rem;
    div{
        width: calc((100% / 3) - 3px);
        display: flex;
        justify-content: space-evenly;
    }
    .socials{
        color: white;
        font-size: 2rem;
        padding-top: 2rem;
    }
    .sponsor{
        padding-top: 2rem;
        height: fit-content;
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
        font-size: 18px;
}
a{
    text-decoration: none;
    color: white;
    padding-bottom: 5px;
}
.link:hover{
        border-bottom: 3px solid white;
    }
</style>