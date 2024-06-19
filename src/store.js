import { reactive } from 'vue'

export const store = reactive({
    players: [
        {
        name: "Adam Brown",
        number: "07",
        role: "Forwarder",
        pic: "./assets/imgs/player1.jpg"
        },

        {
        name: "Michael Kayn",
        number: "09",
        role: "Forwarder",
        pic: "./assets/imgs/player2.jpg"
        },  
        
        {
        name: "Michael Lee",
        number: "11",
        role: "Forwarder",
        pic: "./assets/imgs/player3.jpg"
        },        

        {
        name: "Ethan Smith",
        number: "15",
        role: "Forwarder",
        pic: "./assets/imgs/player4.jpg"
        },
    ],

    teams: [
        {
            id: 1,
            name: "Istanbul Sports",
            win: 18,
            draw: 2,
            lost: 0,
            points: 42,
            logo: "./assets/imgs/league-club-1.png"
        },
        {
            id: 2,
            name: "United FS Club",
            win: 14,
            draw: 2,
            lost: 1,
            points: 35,
            logo: "./assets/imgs/league-club-2.png"
        },
        {
            id: 3,
            name: "Schalke Club",
            win: 13,
            draw: 3,
            lost: 0,
            points: 32,
            logo: "./assets/imgs/league-club-3.png"
        },
        {
            id: 4,
            name: "Inter Club",
            win: 13,
            draw: 2,
            lost: 1,
            points: 31,
            logo: "./assets/imgs/league-club-4.png"
        },
        {
            id: 5,
            name: "Madrid Club",
            win: 12,
            draw: 1,
            lost: 2,
            points: 30,
            logo: "./assets/imgs/league-club-5.png"
        },
        {
            id: 6,
            name: "Schalke Club",
            win: 11,
            draw: 0,
            lost: 3,
            points: 30,
            logo: "./assets/imgs/league-club-6.png"
        },
        {
            id: 7,
            name: "Arsenal Club",
            win: 10,
            draw: 5,
            lost: 0,
            points: 26,
            logo: "./assets/imgs/league-club-7.png"
        },
        {
            id: 8,
            name: "Bayern Club",
            win: 10,
            draw: 2,
            lost: 2,
            points: 24,
            logo: "./assets/imgs/league-club-8.png"
        },
        {
            id: 9,
            name: "Atletico Club",
            win: 9,
            draw: 0,
            lost: 4,
            points: 20,
            logo: "./assets/imgs/league-club-9.png"
        },


    ]
})