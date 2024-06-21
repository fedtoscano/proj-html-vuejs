<script>
import { store } from '../../../store.js';
export default {
data() {
return {  
    store,
    fixturesArray:[],
}
},
methods:{

    getFixtures(){
        for(let index=0; index < 2; index++){

            for(let index=0; index < this.store.teams.length; index++){
            this.fixturesArray.push(this.store.teams[index])
            // console.log(this.fixturesArray)
            }
        }
    }


},created(){
    this.getFixtures()
}

}
</script>

<template>
    <article>

        <h1>Fixtures & Results</h1>
        <div class="container">
            

            <div   class="incontri">
                
                <div class="team">
                    <img :src="fixturesArray[0].logo" alt="">

                    <p>{{fixturesArray[0].name }} </p>
                </div>
               


                <p class="vs">vs</p>
                

               
                <div class="team">
                    <p>{{fixturesArray[1].name }} </p>
                    <img :src="fixturesArray[1].logo" alt="">
               </div>
           
            
            </div>


            <div   class="incontri">

                <div class="team">
                    <img :src="fixturesArray[2].logo" alt="">
                    <p>{{fixturesArray[2].name }} </p>
                </div>

                

                <p class="vs">vs</p>

                <div class="team">
                    <p>{{fixturesArray[3].name }} </p>
                    <img :src="fixturesArray[3].logo" alt="">

                </div>



                

            </div>


            <div   class="incontri">

                <div class="team">
                    <img :src="fixturesArray[4].logo" alt="">
                    <p>{{fixturesArray[4].name }} </p>
                </div>

                

                <p class="vs">vs</p>


                <div class="team">
                    <p>{{fixturesArray[5].name }} </p>
                    <img :src="fixturesArray[5].logo" alt="">

                </div>
               

            </div>


            <div   class="incontri">

                <div class="team">
                    <img :src="fixturesArray[6].logo" alt="">
                    <p>{{fixturesArray[6].name }} </p>
                </div>

               

                <p class="vs">vs</p>


                <div class="team">
                    <p>{{fixturesArray[7].name }} </p>
                    <img :src="fixturesArray[7].logo" alt="">

                </div>
                

            </div>


            <div   class="incontri">


                <div class="team">
                    <img :src="fixturesArray[8].logo" alt="">
                    <p>{{fixturesArray[8].name }} </p>
                </div>
                
                <p class="vs">vs</p>


                <div class="team">
                    <p>{{fixturesArray[9].name }} </p>
                    <img :src="fixturesArray[9].logo" alt="">
                </div>
               

             </div>


            <div   class="incontri">

                <div class="team">
                    <img :src="fixturesArray[10].logo" alt="">
                    <p>{{fixturesArray[10].name }} </p>
                </div>
                
                <p class="vs">vs</p>


                <div class="team">
                    <p>{{fixturesArray[11].name }} </p>
                    <img :src="fixturesArray[11].logo" alt="">
                </div>
                

            </div>


            <div   class="incontri">
            
                <div class="team">
                    <img :src="fixturesArray[12].logo" alt="">
                    <p>{{fixturesArray[12].name }} </p>
                </div>
 
                

                <p class="vs">vs</p>


                <div class="team">
                    <p>{{fixturesArray[13].name }} </p>
                    <img :src="fixturesArray[13].logo" alt="">
                </div>
              

            </div>


            <div   class="incontri">

                <div class="team">
                    <img :src="fixturesArray[14].logo" alt="">
                    <p>{{fixturesArray[14].name }} </p>
                </div>

               

                <p class="vs">vs</p>


                <div class="team">
                    <p>{{fixturesArray[15].name }} </p>
                    <img :src="fixturesArray[15].logo" alt="">
                </div>
              
            </div>

            
            <div   class="incontri">

                <div  class="team">
                    <img :src="fixturesArray[16].logo" alt="">
                    <p>{{fixturesArray[16].name }} </p>
                </div>
            

                <p class="vs">vs</p>
                


                <div  class="team">
                    <p>{{fixturesArray[17].name }} </p>
                    <img :src="fixturesArray[17].logo" alt="">
                </div>
              

            </div>

            <div class="full">
                <p>View Full Fixtures</p>
            </div>

          

        </div>




      



    </article>
</template>

<style lang="scss" scoped>

article{
    width: 650px;
    display: flex;
    flex-wrap: wrap;

    h1{
        font-weight: bold;
        color: black;
        font-size: 2.5rem;
        margin: 3rem 0;
        text-align: center;

    }

    .container .incontri:nth-child(2n + 0){
        background-color: #ebebeb;

    }
    .container .incontri:nth-child(2n + 1){
        background-color:#f3f3f3;

    }

    .container{
        display: flex;
        flex-wrap: wrap;
        width: 100%;

        .full{
            width: 100%;
            text-align: center;
            padding: 1.5rem;
            background-color: black;
            color: white;
        }
       

        .incontri{
            width: 100%;
            margin: 0 auto;
            display: flex;
            justify-content:space-around;
            padding:  1rem 3rem ;
            

            img{
            width: 60px;
            }

            .team{
                width: 35%;
                display: flex;
            }


            
        }
    
        p{
            align-self: center;

            font-size: 1.2rem;

            

        }
        
        .vs{
            font-size: 1.5rem;
            font-weight: bold;
            text-transform: uppercase;
            margin-right: 2rem;
        }

        
    }

}
</style>