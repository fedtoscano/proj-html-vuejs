<script>
import { store } from '../../store.js';
import VanillaTilt from 'vanilla-tilt';
export default {
data() {
return {
    store,
    buttonSelected: 1,
    isDown: false,
    startX: 0,
    scrollLeft: 0
};
},
computed: {
duplicatedArticles() {
    return [...this.store.blogArticles, ...this.store.blogArticles, ...this.store.blogArticles];
}
},
methods: {
selectButton(index) {
    this.buttonSelected = index;
},
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
    const walk = (x - this.startX) * 2; 
    this.$refs.carousel.scrollLeft = this.scrollLeft - walk;

    const maxScrollLeft = this.$refs.carousel.scrollWidth - this.$refs.carousel.clientWidth;
    const thirdScrollWidth = maxScrollLeft / 3;

    if (this.$refs.carousel.scrollLeft < thirdScrollWidth) {
    this.$refs.carousel.scrollLeft += thirdScrollWidth;
    } else if (this.$refs.carousel.scrollLeft >= 2 * thirdScrollWidth) {
    this.$refs.carousel.scrollLeft -= thirdScrollWidth;
    }
}
},
mounted() {
this.$refs.carousel.scrollLeft = this.$refs.carousel.scrollWidth / 3;
},
// Initialize VanillaTilt on article elements
VanillaTilt.init(this.$refs.articles, {
    max: 15,
    speed: 100,
    glare: true,
    "max-glare": 0.5
});
};
</script>

<template>
<div class="full-container">
    <section class="title">
        <div class="img-container">
        <img src="../../assets/imgs/thumb-up-icon.png" alt="">
        </div>
        <div class="title-container">
        <h2>Recent News & Articles</h2>
        <p>Be aware of the football world.</p>
        </div>
    </section>

    <section class="article-container" ref="carousel" @mousedown="startDrag" @mousemove="isDragging" @mouseup="stopDrag" @mouseleave="stopDrag">
        <article v-for="(article, index) in duplicatedArticles" :key="index" ref="articles">
        <div class="article-info">
            <img :src="article.img" alt="" draggable="false">
            <p><span>{{ article.date }}</span> - <span>{{ article.topic }}</span></p>
            <h3>{{ article.title }}</h3>
        </div>

        <div class="article-text">
            <p>{{ article.text }}</p>
        </div>

        <button><a href="#">More</a></button>
        </article>
    </section>
</div>

</template>


<style scoped lang="scss">
.full-container {

padding: 4rem;
background-color: rgb(250, 250, 250);
}

.title {
display: flex;
flex-direction: column;
align-items: center;
text-align: center;
margin-bottom: 5rem;
}

.img-container {
padding: 1rem;
background-color: black;
width: fit-content;
border-radius: 100%;
img {
width: 100px;
}
}

.article-container {
display: flex;
gap: 2rem;
overflow: hidden;
margin-bottom: 3rem;
cursor: grab;

&::-webkit-scrollbar {
width: 0;
}

&:active {
cursor: grabbing;
}

article {
user-select: none;
padding: 1em;
display: flex;
flex-direction: column;
gap: 1em;
flex: 0 0 auto;
overflow-x: hidden;
white-space: none;
width: calc((100% / 4) - 1em);
background-color: white;
border-radius: 3rem;

button {
    padding: 1.5rem 2.7rem;
    font-size: 1rem;
    font-weight: bold;
    color: white;
    margin-top: 1em;
    background-color: black;
    align-self: center;
    border-radius: 70px;
    border: 1px solid white;
    a {
    text-decoration: none;
    color: white;
    }
}

.article-info {
    margin-bottom: 2em;
    width: 100%;
    text-align: center;
    h3{
        font-size: 1.5em;
    }
}

img {
    padding: 1rem;
    width: 100%;
    user-select: none;
    -webkit-user-drag: none;
}
}
}
</style>

