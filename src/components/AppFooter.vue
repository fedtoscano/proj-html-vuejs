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
        <div class="container">
            <div class="row d-flex">
                <div class="contacts-list col-lg-4">
                    <div class="logo">
                        <img src="../assets/imgs/logo-footer-football.png" alt="Logo">
                    </div>
                    <div class="contacts">
                        <nav>
                            <ul>
                                <li>
                                    <font-awesome-icon class="icon" icon="fa-regular fa-map" />
                                    <p>
                                        New Jersey, USA
                                    </p>
                                </li>
                                <li>
                                    <font-awesome-icon class="icon" icon="fa-regular fa-note-sticky" />
                                    <p>
                                        +1 (234) 5678910
                                    </p>
                                </li>
                                <li>
                                    <font-awesome-icon class="icon" icon="fa-regular fa-message" />
                                    <p>
                                        example@example.come
                                    </p>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div class="footer-newsletter col-lg-4">
                    <h3>
                        Join our newsletter
                    </h3>
                    <p>
                        Subscribe to be informed about important developments in our club and football world. 
                    </p>
                    <div class="mb-3">
                        <form action="">
                            <label for="exampleFormControlInput1" class="form-label"></label>
                            <input required type="email" class="email form-control form" id="exampleFormControlInput1" placeholder="Your Email Address">
                        </form>
                    </div>
                        <form action="">
                            <label for="exampleFormControlInput2" class="form-label"></label>
                            <input type="submit" class="submit form-control form" id="exampleFormControlInput2" value="Subscribe"/>
                        </form>
                    </div>
                <div class="footer-education col-lg-2">
                    <h3>
                        Education
                    </h3>
                    <nav>
                        <ul>
                            <li v-for="(element,index) in navbarFooterEdu" :key="index">
                                <a href="">
                                    {{ element.name }}
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div class="footer-quick-links col-lg-2">
                    <h3>
                        Quick Links
                    </h3>
                    <nav>
                        <ul>
                            <li v-for="(element,index) in navbarFooterQuickLinks" :key="index">
                                <a href="">
                                    {{ element.name }}
                                </a>                        
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
        <div class="footer-rights d-flex justify-content-center">
            <p>
                2022 Football Club - All rights reserved
            </p>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
    @use '../node_modules/bootstrap/scss/bootstrap.scss';
    @use '../style/general.scss';
    
    ul {
        list-style-type: none;
    }

    div.contacts nav ul li{
        display: flex;
        margin-bottom: 2rem;
    }

    footer{
        background-image: url(../assets/imgs/footer-bg-football.jpg);
        background-position: center;
        background-repeat: repeat-x;
        background-size: cover;
        color: white;
        padding: 2rem 3rem;
    }

    footer .footer-education li:before,
    footer .footer-quick-links li:before {
        content: "";
        width: 11px;
        height: 4px;
        display: inline-block;
        background: #ffffff;
        margin-right: 9px;
    }

    footer .footer-education li,
    footer .footer-quick-links li{
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        margin: 0;
        padding: 5px 0;
    }

    a{
        text-decoration: none;
    }

    .form{
        background-color: white;
        border-radius: 3.5rem;
        padding: 1.5rem 2rem;
    }

    .email {
        color: #a1a1a1;
    }

    .submit{
        color: #062961;
    }

    img{
        width: 15%;
    }

    .icon{
        font-size: 25px;
    }

    input {
        width: 100%;
    line-height: 70px;
    display: inline-block;
    background: #fff;
    color: #062860;
    border: 1px solid;
    padding: 0 50px;
    position: relative;
    font-size: 17px;
    border-radius: 3rem;
    }

    .logo{
        margin-bottom: 2rem;
    }

    h3{
        font-weight: bold ;
    }
</style>
