<script>
import { store } from '../../store.js';

export default {
data() {
return {  
    store,
    isDown: false,
    startX: 0,
    scrollLeft: 0
}
},
computed: {
duplicatedPlayers() {
    return [...this.store.players, ...this.store.players, ...this.store.players];
}
},
methods: {
startDrag(event) {
    this.isDown = true;
    this.startX = event.pageX - this.$refs.carousel.offsetLeft;        
    this.scrollLeft = this.$refs.carousel.scrollLeft;
},
stopDrag() {
    this.isDown = false;
},
isDragging(event) {
    if (!this.isDown) return;
    event.preventDefault();
    const x = event.pageX - this.$refs.carousel.offsetLeft;
    const walk = (x - this.startX) * 3; // Adjust scrolling speed
    this.$refs.carousel.scrollLeft = this.scrollLeft - walk;
    
    const maxScrollLeft = this.$refs.carousel.scrollWidth - this.$refs.carousel.clientWidth;
    if (this.$refs.carousel.scrollLeft === 0) {
    this.$refs.carousel.scrollLeft = maxScrollLeft / 3;
    } else if (this.$refs.carousel.scrollLeft >= maxScrollLeft) {
    this.$refs.carousel.scrollLeft = maxScrollLeft / 3;
    }
}
},
mounted() {
// Initialize scroll position to the middle set of duplicated players
this.$refs.carousel.scrollLeft = this.$refs.carousel.scrollWidth / 3;
}
}
</script>



<template>
    <div class="container">
        <div class="players-container">
        <h2>Players</h2>
        <div class="players-carousel" ref="carousel" @mousedown="startDrag" @mousemove="isDragging" @mouseup="stopDrag" @mouseleave="stopDrag">
            <article v-for="(player, index) in duplicatedPlayers" :key="index">
            <div class="image-container">
                <a>
                <img :src="player.pic" :alt="`${player.name} official photo`" draggable="false">
                </a>
                <div class="info-container">
                <p>{{player.number}}</p>
                <p><span>{{ player.name }}</span> - <span>{{ player.role }}</span></p>
                </div>
            </div>
            </article>
        </div>
        <button><a href="#">View All Players</a></button>
        </div>
    </div>
</template>



<style scoped lang="scss">
@use "../../style/general.scss";

.container{
background-image: url(../../assets/imgs/player.jpg);
background-size: cover;
background-repeat: no-repeat;

.players-container{
max-width: 1600px;
margin: 0 auto;
color: white;
display: flex;
flex-direction: column;
align-items: center;
padding: 3rem;

h2{
    font-size: 2em;
    margin-bottom: 3rem;
}

button{
    padding: 1.5rem 2.7rem;
    font-size: 1rem;
    font-weight: bold;
    color: white;
    background-color: black;
    align-self: center;
    border-radius: 70px;
    border: 1px solid white;
    
    a{
    text-decoration: none;
    color: white;
    }
}

.players-carousel{
    display: flex;
    overflow-x: auto;
    gap: 2rem;
    align-items: center;
    margin-bottom: 2em;
    cursor: grab;
    
    &::-webkit-scrollbar{
    width: 0;
    }

    &:active {
    cursor: grabbing;
    }
}

    article{
        user-select: none;
        flex: 0 0 auto;
        width: calc((100% / 4) - 2rem);
        overflow: hidden;
        border-radius: 3rem;

    .image-container{
        width: 100%;
        position: relative;

    img{
        width: 100%;
        }

    .info-container{
        font-size: 1.1em;
        font-weight: bold;
        text-align: center;
        background-color: black;
        border-radius: 3rem;
        padding: 1rem;
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;

        p{
        margin-bottom: 1em;
        }
    }
    }
}
}
}
</style>
