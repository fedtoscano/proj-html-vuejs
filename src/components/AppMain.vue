
<script>
import MainArticles from './AppMainComponents/MainArticles.vue'
import MainLeagueTables from './AppMainComponents/MainLeagueTables.vue'
import MainNextMatch from './AppMainComponents/MainNextMatch.vue'
import MainPlayers from './AppMainComponents/MainPlayers.vue'
import MainSponsors from './AppMainComponents/MainSponsors.vue'
import MainUpcomingMatches from './AppMainComponents/MainUpcomingMatches.vue'
import { store } from '../store.js';


export default {
    components:{
        MainArticles,
        MainLeagueTables,
        MainNextMatch,
        MainPlayers,
        MainSponsors,
        MainUpcomingMatches
        

    },
data() {
return {  
    store,
}
}}
</script>

<template>
    
    <main>
        <p> main </p>
        <MainArticles/>
        <MainLeagueTables/>
        <MainNextMatch/>
        <MainPlayers/>
        <MainSponsors/>
        <MainUpcomingMatches/>
    </main>

</template>

<style>
</style>