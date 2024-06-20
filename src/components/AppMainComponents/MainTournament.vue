<script>
import axios from 'axios';

export default {
data() {
return {  
    tournamentUrl: 'http://152.89.170.170:3000/events/soccer',
    tournamentData: [],
}
},
methods: {
    getTournamentData(url){
            axios.get(url, {
        params: {
        }
    })
    .then( (response) => {
        console.log(response.data);
        for (let index = 0; index < response.data.length; index++) {
            this.tournamentData.push(response.data[index]);
        }
    })
    .catch(function (error) {
        console.log(error);
    })
    .finally(function () {
        // always executed
    }); 
    }
},
created() {
    this.getTournamentData(this.tournamentUrl);
}
}
</script>

<template>
    <ul>
        <li v-for="(data, index) in tournamentData" :key="index">
            <div class="poster">
                <img :src="data.image" alt="championship-image">
            </div>
            <div class="content">
                <h3>{{ data.event_name }}</h3>
                <h4>{{ data.type }}</h4>
                <div class="date">
                    <p>start: {{ data.start_date }}</p>
                    <p>start: {{ data.end_date }}</p>
                </div>
            </div>
        </li>
    </ul>
</template>

<style lang="scss" scoped>
ul{
    display: flex;
    justify-content: space-around;
    align-items: center;
    list-style: none;
    background-color: #000000;
    background-image: url(../../assets/imgs/slider2-1.jpg);
    color: #ffffff;
    padding: 3rem;
    overflow: auto;
    li{
        width: calc((100% / 3) - 10px);
        background-color: rgba($color: #000000, $alpha: .5);
        margin-bottom: 2rem;
        border: none;
        border-radius: 1.5rem;
        overflow: auto;
        .poster{
            width: 100%;
            img{
                width: 100%;
            }
        }
        .content{
            padding: 1rem;
            font-weight: 800;
        }
    }
}
</style>