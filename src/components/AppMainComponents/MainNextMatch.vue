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
                <p class="vs">vs</p>
                <img :src="store.teams[1].logo" alt="">
                <p>{{ store.teams[1].name }}</p>

            </div>
        </div>

        <div class="data">
            <font-awesome-icon icon="fa-regular fa-calendar" />
            <p>May 21, 2022 18:05pm</p>

            <span><p>+</p></span>
            <p>Expert Stadium</p>
        </div>

        <button>View Match Details</button>


    </article>


</template>

<style lang="scss" scoped>
article{
    margin: 0 auto;
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

        span{
            border: 1px solid black;
            width: 15px;
            height: 15px;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-right: .5rem;
            p{
                margin-right: 1px;
                font-size: .7rem;
            }
        }

        .fa-calendar{
            margin-right: .5rem;
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