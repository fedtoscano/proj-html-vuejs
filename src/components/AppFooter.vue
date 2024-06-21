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
                ],
                email: '',
                statusMail: '',
                voidField: ''
            }
        },
        methods:{
            handleSubmit() {
            // Non è valida perché il campo è vuoto
            if (!this.email) {
                this.statusMail='This field is required.';
                this.voidField= 'One or more fields have an error.'
            // Non è valida perché manca la @
            } else if (this.email.includes('@')) {
                this.statusMail= 'Good'
            } else if (!(this.email.includes('@'))) {
                this.statusMail= 'Invalid email format';
                this.voidField= 'One or more fields have an error.'
            // se l'email è vuota e manca la @
            }},
        },
        created(){
            this.handleSubmit()
        }
    }
</script>

<template>
    <footer>
        <div class="d-flex">
            <div class="contatti">
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
                    <div class="socials">
                        <a href="#">
                            <font-awesome-icon icon="fa-brands fa-facebook-f" />
                        </a>
                        <a href="#">
                            <font-awesome-icon icon="fa-brands fa-instagram" />
                        </a>
                        <a href="#">
                            <font-awesome-icon icon="fa-brands fa-twitter" />
                        </a>
                    </div>
                </div>
            </div>
            <div class="footer-newsletter">
                <h3>
                    Join our newsletter
                </h3>
                <p>
                    Subscribe to be informed about important developments in our club and football world. 
                </p>
                <!--  prevent impredisce di refreshare-->
                <!-- ascolta con v-on l'evento di submit del form -->
                <form @click.prevent="handleSubmit">
                    <label for="email"></label>
                    <!-- V_model collega l'input dell'email al dato email nei data Vue -->
                    <input id="email" v-model="email" type="email" placeholder="Your email address">
                    <p>
                        {{ statusMail }}
                    </p>
                    <button type="submit">Subscribe</button>
                    <p>
                        {{ voidField }}
                    </p>
                </form>
            </div>
            <div class="footer-education">
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
            <div class="footer-quick-links">
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
        padding: 0;
    }

    .contatti,
    .footer-education {
        width: 20%;
    }

    .footer-newsletter {
        width: 40%;
        padding: 0 8rem 0 1rem;
    }

    .footer-quick-links{
        width: 20%;
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

    .footer-education {
        display: flex;
        flex-direction: column;
        margin-left: 3rem;
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
        width: 20%;
    }

    .icon{
        font-size: 30px;
        margin-right: 1rem;
    }

    button,
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

    .error {
        color: red;
    }

    .socials a{
        margin-right: 1rem;
        font-size: 2rem;
        border: solid 1px;
        padding: 0.1rem 1rem;
    }

    .footer-rights{
        margin-top: 3rem;
    }
</style>