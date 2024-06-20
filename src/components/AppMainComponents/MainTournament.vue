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
    <div class="contaier-tournament">
        <h1>tournaments</h1>
        <ul>
            <li v-for="(data, index) in tournamentData" :key="index">
                <div class="poster">
                    <img :src="data.image" alt="championship-image">
                </div>
                <div class="content">
                    <h3>{{ data.event_name }}</h3>
                    <h4>{{ data.type }}</h4>
                    <div class="date">
                        <p><font-awesome-icon icon="fa-regular fa-calendar" /> {{ data.start_date }}</p>
                        <p><font-awesome-icon icon="fa-regular fa-calendar" /> {{ data.end_date }}</p>
                        <p><font-awesome-icon icon="fa-solid fa-location-dot" />  {{ data.location }}</p>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
.contaier-tournament{
    background-image: url(../../assets/imgs/slider2-1.jpg);
    background-color: #000000;
    color: #ffffff;
    padding: 3rem;
    h1{
        padding-bottom: 3rem;
        text-align: center;
    }
}
ul{
    display: flex;
    justify-content: space-around;
    align-items: center;
    list-style: none;
    overflow: auto;
    flex-wrap: wrap;
}
li{
    width: calc((100% / 5) - 20px);
    background-color: rgba($color: #000000, $alpha: .5);
    margin-bottom: 2rem;
    border: none;
    border-radius: 1.5rem;
    overflow: hidden;
    height: 375px;
    transition: width 1s, height 1s;
    .poster{
        width: 100%;
        img{
            width: 100%;
            height: 178px;
        }
    }
    .content{
        padding: 1rem;
        font-weight: 800;
        text-align: center;
        line-height: 24px;
    }
    &:hover{
        width: 22%;
        cursor: pointer;
    }
}
</style>