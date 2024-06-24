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
    <div class="container">

        <h1>Upcoming Matches</h1>
        <article v-for="element in store.upcomingMatches">
                <div class="match">

                    <img :src="element.team1_logo" alt="">
                    <p>{{ element.team1 }}</p>
                    <p class="vs">vs</p>
                    <p>{{ element.team2  }}</p>
                    <img :src="element.team2_logo" alt="">
                </div>

                <div class="data">
                    <font-awesome-icon icon="fa-regular fa-calendar" />
                    <p>{{ element.date }}</p>

                    <span><p>+</p></span>
                    <p>Expert Stadium</p>
                </div>

            </article>
    </div>

</template>


<style lang="scss" scoped>

.container{
    background-image: url(../src/assets/imgs/saha.jpg);
    background-repeat:no-repeat ;
    background-size:100% 100%;
    color: white;
    padding: 2rem 16rem;

    h1{
        text-align: center;
        
        margin-bottom: 2rem;
    }

}
article{
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
    
    
    
    .match{
        display:flex ;
        justify-content: center;
        background-color: rgba(0, 0, 0, .2);

        img{
            align-self:center;
            height: auto;
        }

        p{
            align-self: center;
            font-size: 2rem;
            font-weight: bold;
        }

        .vs{
            font-size: 3rem;
            text-transform: uppercase;
            font-weight: bold;
            margin-left: 1rem;
            margin-right: 1rem;
        }
    }

    .data{
        width: 100%;
        align-self: center;
        display: flex;
        justify-content: center;
        background-color: rgba(0, 0, 0, .5);
        padding: .2rem;

        p{
            margin-right: 1rem;
            font-weight: bold;
        }

        span{
            border: 1px solid white;
            width: 15px;
            height: 15px;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-right: .5rem;
            p{
                margin-right: .5px;
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