<script>
export default {
data() {
return {

}
}
}
</script>

<template>
    <div>
        <div class="loader-logo">
            <img src="../assets/imgs/loader-football.png" alt="logo">
        </div>
    </div>
</template>

<style lang="scss" scoped>
    div{
        background-color: black;
        width: 100vw;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 2rem;
        .loader-logo{
            height: 150px;
            width: 150px;
            border: 2px solid gold;
            border-radius: 50%;
            img{
                width: 100%;
            }
        }
    }
</style>