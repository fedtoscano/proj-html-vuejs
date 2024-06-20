<script>
    import {store} from '../store.js';

    export default {
        data() {
            return {
                store,
                navbarFooterEdu: [
                    {
                        name: 'FIXTURES & RESULTS',
                        link: '#',
                        active: false,
                    },
                    {
                        name: 'LEAGUE TABLE',
                        link: '#',
                        active: true,
                    },
                    {
                        name: 'PLAYERS',
                        link: '#',
                        active: false,
                    },
                    {
                        name: 'GALLERY',
                        link: '#',
                        active: false,
                    }
                ],
                navbarFooterQuickLinks: [
                    {
                        name: 'HOME',
                        link: '#',
                        active: false,
                    },
                    {
                        name: 'BLOG',
                        link: '#',
                        active: false,
                    },
                    {
                        name: 'GALLERY',
                        link: '#',
                        active: false,
                    },
                    {
                        name: 'CONTACT',
                        link: '#',
                        active: false,
                    }
                ]
            }
        },
        methods: {
    }
}
</script>

<template>
    <footer>
        <div class="d-flex">
            <div class="contacts w-30">
                <img src="../assets/imgs/logo-footer-football.png" alt="Logo">
                <nav>
                    <ul>
                        <li>
                            'New Jersey, USA',
                    '+1(234)5678910',
                    'example@example.com',
                        </li>
                        <font-awesome-icon icon="fa-regular fa-map" />
                    </ul>
                </nav>
            </div>
            <div class="footer-newsletter w-40">
                <h1>
                    Join our newsletter
                </h1>
                <p>
                    Subscribe to be informed about important developments in our club and football world. 
                </p>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label"></label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Your Email Address">
                </div>
            </div>
            <div class="footer-education w-20">
                <h1>
                    Education
                </h1>
                <nav>
                    <ul>
                        <li v-for="(element,index) in navbarFooterEdu" :key="index">
                            {{ element.name }}
                        </li>
                    </ul>
                </nav>
            </div>
            <div class="footer-quick-links w-10">
                <h1>
                    Quick Links
                </h1>
                <nav>
                    <ul>
                        <li v-for="(element,index) in navbarFooterQuickLinks" :key="index">
                            {{ element.name }}
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
        <div class="footer-rights">
            <p>
                2022 Football Club - All rights reserved
            </p>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
    @use '../node_modules/bootstrap/scss/bootstrap.scss';
    @use '../style/general.scss';

</style>
