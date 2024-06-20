<script>
import {store} from '../../../store'
export default {
data() {
    return {  
        store
        }
    }}
</script>

<template>
    <h1>League table</h1>
    <table>
        <thead>
            <tr>
                <th class="w-40">team</th>
                <th>W</th>
                <th>D</th>
                <th>L</th>
                <th>PTS</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(team, index) in store.teams" :key="team.id">
                <td class="largest-column">
                    {{ team.id }}
                    <img :src="team.logo" :alt="team.name" class="team-logo">
                    {{ team.name }}
                </td>
                <td>
                    {{ team.win }}
                </td>
                <td>
                    {{ team.draw }}
                </td>
                <td>
                    {{ team.lost }}
                </td>
                <td>
                    {{ team.points }}
                </td>
            </tr>
        </tbody>
        <tfoot class="button">
            <tr>
                <td>
                    <button> View full league table</button>
                </td>
            </tr>
        </tfoot>
    </table>
</template>

<style lang="scss" scoped>
@use '../node_modules/bootstrap/scss/bootstrap.scss';
    h1{
        font-weight: bold;
        color: black;
    }
    
    .largest-column {
        width: 50%;
    }

</style>