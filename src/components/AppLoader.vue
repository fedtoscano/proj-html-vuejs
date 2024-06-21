<script>
export default {
data() {
return {

}
}
}
</script>

<template>
    <section>
        <img src="../assets/imgs/loader-football.png" alt="logo">
    </section>
</template>

<style lang="scss" scoped>
    section{
        position: absolute;
        top: -100%;
        left: 0;
        background-color: black;
        padding: 2rem;
        animation: attivo 1300ms ease-in;
        z-index: 2;
            img{
                position: absolute;
                top: -50%;
                left: 50%;
                transform: translate(-50%,-50%);
                padding: 1rem;
                height: 150px;
                width: 150px;
                border: 2px solid gold;
                border-radius: 50%;
                animation: logo-animation 1300ms ease-in;
            }
        }
    @keyframes attivo {
        0%{
            width: 100vw;
            height: 100vh;
            top: 0%;
        }
        100%{
            width: 100vw;
            height: 100vh;
            top: 100%;
        }
    }
    @keyframes logo-animation {
        0%{
            top: 50%;
    }
    100%{
        top: 100%;
    }
}
</style>