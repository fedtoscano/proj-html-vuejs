<script>
import { store } from '../../store.js';
import LeagueTable from './TablesComponents/LeagueTable.vue';
import FixtureTables from "./TablesComponents/FixtureTables.vue"


export default {
    components:{
        LeagueTable,
        FixtureTables
    },
data() {
return {  
    store,
}
}}
</script>

<template>
    <article>
        <LeagueTable/>
        <FixtureTables/>
    </article>
    
</template>

<style>

article{
    display: flex;
    justify-content: space-between;
    padding: 3rem;
}
</style>