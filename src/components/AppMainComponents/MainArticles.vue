
<script>
import { store } from '../../store.js';
import { dragscroll } from 'vue-dragscroll'


export default {
    directives:{
        dragscroll
    },

data() {
return {  
    store

}
}}
</script>

<template>

    <div class="full-container">
        <section class="title">
            <div class="img-container">
                <img src="../../assets/imgs/thumb-up-icon.png" alt="">
            </div>
            <div class="title-container">
                <h2>Resent New & Articles</h2>
                <p>Be aware of the football world.</p>
            </div>
        </section>
        
        <section class="article-container" v-dragscroll.x>

            <article v-for="(article, index) in store.blogArticles" :key="article.id">
        
                <div class="article-info">
                    <img :src="article.img" alt="">
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
.full-container{
    padding: 4rem;
    background-color: rgb(250, 250, 250);
}
.title{
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-bottom: 5rem;
}
.img-container{
    padding: 1rem;
    background-color: black;
    width: fit-content;
    border-radius: 100%;
        img{
            width: 100px;
        }
}

.article-container{
    display: flex;
    gap: 5rem;
    overflow: hidden;

    article{
        padding: 1em;
        display: flex;
        flex-direction: column;
        gap: 1em;
        flex: 0 0 auto;
        overflow-x: hidden;
        white-space: none;
        width: calc((100% / 4) - 5rem);
        background-color: white;
        border-radius: 3rem;


        button{
        padding: 1.5rem 2.7rem;
        font-size: 1rem;
        font-weight: bold;
        color: white;
        margin-top: 1em;
        background-color: black;
        align-self: center;
        border-radius: 70px;
        border: 1px solid white;
        a{
                    text-decoration: none;
                    color: white;
                }
    }
        article.info{
        margin-bottom: 2em;
        width: 100%;

    }
    img{
        padding: 1rem;
        width: 100%;
    }
    }
}
</style>