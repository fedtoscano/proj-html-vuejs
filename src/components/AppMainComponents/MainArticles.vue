
<script>
import { store } from '../../store.js';


export default {

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
        
        <section class="article-container">
            <article v-for="(article, index) in store.blogArticles" :key="article.id">
        
                <div class="article-info">
                    <img :src="article.img" alt="">
                    <p><span>{{ article.date }}</span> - <span>{{ article.topic }}</span></p>
                    <h3>{{ article.title }}</h3>
                </div>
        
                <div class="article-text">
                    <p>{{ article.text }}</p>
                </div>
            </article>
        </section>
    </div>
</template>

<style scoped lang="scss">
.full-container{
    padding: 2rem;
    background-color: rgb(250, 250, 250);
}
.title{
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
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
    // white-space: ;
    gap: 2rem;

    article{
        padding: 1em;
        flex: 0 0 auto;
        overflow-x: hidden;
        white-space: none;
        width: calc(100% / 4);
        background-color: white;
        border-radius: 3rem;

        article.info{
        margin-bottom: 2em;
        width: 100%;

    }
    img{

        width: 100%;
    }
    }
}
</style>