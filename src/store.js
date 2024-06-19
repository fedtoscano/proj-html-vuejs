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
    upcomingMatches: [
        {
            id: 1,
            team1: "Schalke Club",
            team1_logo: "./assets/imgs/league-club-3.png",
            team2: "Inter Club",
            team2_logo: "./assets/imgs/league-club-4.png",
            date: "October 20, 2022 17.00 pm",
            location: "Expert Stadium"
        },
        {
            id: 2,
            team1: "Atletico Club",
            team1_logo: "./assets/imgs/league-club-9.png",
            team2: "Shalke Club",
            team2_logo: "./assets/imgs/league-club-6.png",
            date: "September 18, 2022 21:00 pm",
            location: "Expert Stadium"
        },
        {
            id: 3,
            team1: "United Fs Club",
            team1_logo: "./assets/imgs/league-club-2.png",
            team2: "Bayern Club",
            team2_logo: "./assets/imgs/league-club-8.png",
            date: "August 3, 2022 19:00 pm ",
            location: "Expert Stadium"
        },
        {
            id: 4,
            team1: "Arsenal Club",
            team1_logo: "./assets/imgs/league-club-7.png",
            team2: "Atletico Club",
            team2_logo: "./assets/imgs/league-club-9.png",
            date: "July 8, 2022 12:00 pm ",
            location: "Expert Stadium"
        },
        {
            id: 1,
            team1: "Istanbul Sports",
            team1_logo: "./assets/imgs/league-club-1.png",
            team2: "United Fs Club",
            team2_logo: "./assets/imgs/league-club-2.png",
            date: "June 12, 2022 09:00 am",
            location: "Expert Stadium"
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
    ],

    blogArticles: [
        {
            id: 1,
            date: "29.05.2022",
            topic: "Football",
            title: "What is Football?",
            text: "Football is a sport that is knows as a ball game and is loved by [...]",
            img: "./assets/imgs/news1-1.png",
        },
        {
            id: 2,
            date: "29.05.2022",
            topic: "Football",
            title: "Football Rules",
            text: "GOLDEN GOAL: In a football match, the goal scored by one of the teams in [...]",
            img: "./assets/imgs/news3-1.png",
        },
        {
            id: 3,
            date: "29.05.2022",
            topic: "Football",
            title: "Football Features",
            text: "Football: it is an aerobic-based anaerobic sport in which jumps, kicks, turns, running with changing [...]",
            img: "./assets/imgs/news2-1.png",
        },
        {
            id: 4,
            date: "29.05.2022",
            topic: "Football",
            title: "Football Terms",
            text: "GOLDEN GOAL: In a football match, the goal scored by one of the teams in [...]",
            img: "./assets/imgs/news4-1.png",
        },
        {
            id: 5,
            date: "29.05.2022",
            topic: "Football",
            title: "How many football players are there in the world?",
            text: "According to this report, there are more than 301 thousand football clubs, over 1.752 million [...]",
            img: "./assets/imgs/news6-1.png",
        },
    ]
})