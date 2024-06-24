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
    <div class="table-league">
        <h1>League table</h1>
        <table>
            <thead>
                <tr>
                    <th>TEAM</th>
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
</template>

<style lang="scss" scoped>
    @use '../../../style/general.scss';
    @use '../../../style/partials/mixins' as *;

    div.table-league{
        margin-left: 2rem;
        width: calc((100% / 2) - 20px);
    }
        h1{
            font-weight: bold;
            color: black;
            text-align: center;
            font-size: 2.5rem;
            margin: 3rem 0;
            text-align: center;
        }

        table {
            background-color: #f5f5f5;
            text-align: center;
            font-size: 20px;

            td{
                padding: .8rem 2rem;
            }

            thead tr th:first-child{
                text-align: start;
                padding-left: 1rem;
                width: 40%;
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
                width: 100%;
                vertical-align: middle;
                display: flex;
                align-items: center;
            }

            tbody tr td img.team-logo{
                width: 60px;
                margin: 0 1rem;
            }

            tbody tr td.sm-col{
                width: 10%;
            }
        }

        button {
        width: 100%;
        background-color: #212121;
        padding: 1.5rem;
        color: white;

            a{
                text-decoration: none;
                color: white;
                font-size: 1.2rem;
                text-transform: capitalize;
            }
        }
</style>