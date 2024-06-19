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
    <article>
        <div class="match">
            <div class="match">

                <p>{{ store.teams[0].name }}</p>
                <img :src="store.teams[0].logo" alt="">

            </div>

            <p class="vs">vs</p>

            <div class="match">

                
                <img :src="store.teams[1].logo" alt="">
                <p>{{ store.teams[1].name }}</p>

            </div>
        </div>

        <div class="data">
            <p>May 21, 2022 18:05pm</p>

            <p>Expert Stadium</p>
        </div>

        <button>view Match Details</button>


    </article>
   

</template>

<style lang="scss" scoped>
article{
    margin: 0 auto;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    padding: 2rem;
    .match{
        display:flex ;
        justify-content: center;
        margin-bottom: 1rem;

        img{
            align-self:center;
            width: 150px;
            height: auto;
        }

        p{
            align-self: center;
            font-size: 2rem;
            font-weight: bold;
        }

        .vs{
            font-size: 4rem;
            text-transform: uppercase;
            font-weight: bold;
            margin-left: 1rem;
            margin-right: 1rem;
        }
    }

    .data{
        align-self: center;
        display: flex;
        margin-bottom: 2rem;

        p{
            margin-right: 1rem;
            font-weight: bold;
        }
    }

    button{
        padding: 1.5rem 2.7rem;
        font-size: 1rem;
        font-weight: bold;
        color: white;
        background-color: black;
        align-self: center;
        border-radius: 70px;
        border: transparent;
    }


}
</style>