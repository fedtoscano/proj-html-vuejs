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
    <div class="container">
        <div class="row">
            <div class="col-lg-6">
                <h1>League table</h1>
                <table>
                    <thead>
                        <tr>
                            <th class="w-40 ">TEAM</th>
                            <th>W</th>
                            <th>D</th>
                            <th>L</th>
                            <th>PTS</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(team, index) in store.teams" :key="team.id">
                            <td class="lg-col">
                                {{ team.id }}
                                <img :src="team.logo" :alt="team.name" class="team-logo">
                                {{ team.name }}
                            </td>
                            <td class="sm-col">
                                {{ team.win }}
                            </td>
                            <td class="sm-col">
                                {{ team.draw }}
                            </td>
                            <td class="sm-col">
                                {{ team.lost }}
                            </td>
                            <td class="sm-col">
                                {{ team.points }}
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div class="table-button">
                    <button>
                        <a href="#">
                            View full league table
                        </a>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../node_modules/bootstrap/scss/bootstrap.scss';
    h1{
        font-weight: bold;
        color: black;
        text-align: center;
    }

    table {
        background-color: #f5f5f5;
        text-align: center;
        width: 100%;
        font-size: 20px;

        thead tr th:first-child{
            text-align: start;
            padding-left: 1rem;
        }

        thead{
            color: white;
            background-color: #212121;
        }

        tbody tr td:last-child{
            font-weight: bold;
        }

        tbody tr td.lg-col {
            padding-left: 1rem;
            text-align: justify;
            width: 60%;
        }

        tbody tr td img.team-logo{
            width: 60px;
        }

        tbody tr td.sm-col{
            width: 10%;
        }
    }

    button {
    width: 100%;
    background-color: #212121;
    padding: 1rem 2rem;
    color: white;

        a{
            text-decoration: none;
        }
    }
</style>