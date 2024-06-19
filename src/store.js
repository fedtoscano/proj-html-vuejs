// store.js
import { reactive } from 'vue'

export const store = reactive({
    navLinks: [
        'home',
        'fixtures & results',
        'league table',
        'players',
        'gallery',
        'blog',
        'contact',
    ],
    CarouselContent: [
        {
            title: 'welcome to football club',
            text: 'live match fix types and results.',
            image: '../src/assets/imgs/slider1-1.jpg',
        },
        {
            title: 'football club sport club',
            text: 'private football matches.',
            image: '../src/assets/imgs/slider2-1.jpg',
        },
        {
            title: 'professional football football club',
            text: 'football is the poetry of moement.',
            image: '../src/assets/imgs/slider3.jpg',
        },
        {
            title: 'football club sport club',
            text: 'football is a head game.',
            image: '../src/assets/imgs/slider4.jpg',
        },
    ],
})