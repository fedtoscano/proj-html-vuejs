<script>
import { store } from '../../store.js';

export default {
    components:{
    
        

    },
data() {
return {  
    store,
}
}}
</script>

<template>
    <p>MainSponsors</p>

    <section id="bet777">

        <div class="bet">
            <h2>BET777</h2>
        </div>

        <div class="sign-up">
            <p><strong>Sign Up Now</strong></p>
            <p>Get <strong>100%</strong> Bonus for your first investment!</p>
            <p>Deadline 20 June</p>
        </div>

    </section>

    <section id="sponsor-list">
        <div class="sponsor-container">
            <img :src="sponsor.img" alt="" v-for="sponsor in store.sponsors" :key="sponsor.id">
        </div>
    </section>

</template>

<style scoped lang="scss">
    #bet777{
        display: flex;
        align-items: center;
        width: 100%;
        justify-content: space-around;
        margin-bottom: 2rem;

        h2{
            font-size: 6rem;
        }

        .sign-up{
            font-size: 3rem;
            text-align: center;
            & p:last-child{
                font-size: 2rem;
            }
        }
    }

    #sponsor-list{
        background-color: black;
        padding-top: 1rem;

        .sponsor-container{
            display: flex;
            justify-content: space-evenly;
            padding: 2em;

            img{
                border: 1px solid white;
                border-radius: 2rem;
                padding: 1em .5em;
                width: calc(100% / 7)
            }
        }
    }
</style>