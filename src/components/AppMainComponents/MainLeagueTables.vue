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
    <LeagueTable/>
    <FixtureTables/>
</template>

<style>
</style>