
<script>
import MainArticles from './AppMainComponents/MainArticles.vue'
import MainLeagueTables from './AppMainComponents/MainLeagueTables.vue'
import MainNextMatch from './AppMainComponents/MainNextMatch.vue'
import MainPlayers from './AppMainComponents/MainPlayers.vue'
import MainSponsors from './AppMainComponents/MainSponsors.vue'
import MainUpcomingMatches from './AppMainComponents/MainUpcomingMatches.vue'
import MainTournament from "./AppMainComponents/MainTournament.vue"
import { store } from '../store.js';


export default {
    components:{
        MainArticles,
        MainLeagueTables,
        MainNextMatch,
        MainPlayers,
        MainSponsors,
        MainUpcomingMatches,
        MainTournament
        

    },
data() {
return {  
    store,
}
}}
</script>

<template>
    
    <main>
        <MainNextMatch/>
        <MainTournament/>
        <MainUpcomingMatches/>
        <MainPlayers/>
        <MainLeagueTables/>
        <MainSponsors/>
        <MainArticles/>
    </main>

</template>

<style>
</style>