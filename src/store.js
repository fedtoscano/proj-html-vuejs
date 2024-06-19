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
    
    ]
})