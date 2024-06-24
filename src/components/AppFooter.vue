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
                voidField: '',
            }
        },
        methods:{
            handleSubmit() {
                // Non è valida perché il campo è vuoto
                if (!this.email) {
                    this.statusMail='This field is required.';
                    this.voidField= 'One or more fields have an error.';
                // E' valida perché include la @
                } else if (this.email.includes('@')) {
                    this.statusMail= '';
                    this.voidField= '';
                // Non è valida perché manca la @
                } else if (!(this.email.includes('@'))) {
                    this.statusMail= 'Invalid email format';
                    this.voidField= 'One or more fields have an error.'
                }
            },
        },
        // lo tolgo sennò si vede
        // created(){
        //     this.handleSubmit()
        // }
    }
</script>

<template>
    <footer>
        <div class="container">
            <div class="footer-contacts">
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
                                    example@example.com
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
                <h2>
                    Join our newsletter
                </h2>
                <p>
                    Subscribe to be informed about important developments in our club and football world. 
                </p>
                <!--  prevent impredisce di refreshare-->
                <!-- ascolta con v-on l'evento di submit del form -->
                <form>
                    <!-- V_model collega l'input dell'email al dato email nei data Vue -->
                    <label for="email"></label>
                    <input id="email" v-model="email" type="email" placeholder="Your email address">
                    <p class="red">
                        {{ statusMail }}
                    </p>
                    <button @click.prevent="handleSubmit" id="subscribe" type="submit">Subscribe →</button>
                    <p class="yellow">
                        {{ voidField }}
                    </p>
                </form>
            </div>
            <div class="footer-education">
                <h2>
                    Education
                </h2>
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
                <h2>
                    Quick Links
                </h2>
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
        <div class="footer-rights">
            <p>
                © 2022 Football Club - All rights reserved
            </p>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
    @use '../style/general.scss';
    @use '../style/partials/mixins' as *;
    
    footer{
        background-image: url(../assets/imgs/footer-bg-football.jpg);
        background-position: center;
        background-repeat: repeat-x;
        background-size: cover;
        color: white;
        padding: 2rem 3rem;
        

            .footer-rights{
                @include flex-justify();
                margin-top: 3rem;
            }

            .container {
            display: flex;

                .footer-contacts {
                    width: 20%;

                    nav ul li{
                        display: flex;
                        margin-bottom: 2rem;
                    }

                    img{
                        width: 20%;
                        margin-bottom: 2rem;
                    }

                    .icon{
                        font-size: 30px;
                        margin-right: 1rem;
                    }

                    .socials a{
                        margin-right: 1rem;
                        font-size: 2rem;
                        border: solid 1px;
                        padding: 0.1rem 1rem;
                    }
                }

                .footer-education {
                    @include flex-column();
                    width: 20%;
                    margin-left: 3rem;

                    li{
                        @include flex-align-center();
                        flex-wrap: wrap;
                        margin: 0;
                        padding: 8px 0;
                        color: white;
                    }

                    li:before {
                        content: "";
                        width: 11px;
                        height: 4px;
                        display: inline-block;
                        background: #ffffff;
                        margin-right: 9px;
                    }
                }

                .footer-newsletter {
                    width: 40%;
                    padding: 0 8rem 0 1rem;

                    p{
                        margin-bottom: 1rem;
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
                        font-size: 17px;
                        border-radius: 3rem;
                    }

                    .form{
                        background-color: white;
                        border-radius: 3.5rem;
                        padding: 1.5rem 2rem;

                        #email {
                            color: #a1a1a1;
                        }

                        #subscribe{
                            color: #062961;
                        }
                    }
                }

                .footer-quick-links{
                    width: 20%;

                    li{
                        @include flex-align-center();
                        flex-wrap: wrap;
                        margin: 0;
                        padding: 5px 0;
                    }

                    li:before {
                        content: "";
                        width: 11px;
                        height: 4px;
                        display: inline-block;
                        background: #ffffff;
                        margin-right: 9px;
                    }
                }
            }
        }
        
        ul {
            list-style-type: none;
            padding: 0;
        }

        a{
            text-decoration: none;
            color: white;
        }

        h2{
            font-weight: bold;
            margin-bottom: 1.5rem;
        }

        .yellow{
            border: 1px solid yellow;
            margin-top: 1rem;
        }

        .red{
            text-align: center;
            color: red;
        }
</style>
