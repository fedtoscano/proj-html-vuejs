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
    max-width: 75%;
    margin: 0 auto;
    justify-content: space-between;

}
</style>