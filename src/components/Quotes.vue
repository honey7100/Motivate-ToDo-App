<template>
    <div id="quoteContainer">
        <h3 id="quote"> {{randomQuote()}} </h3>
    </div>
</template>

<script>
export default {
    name: 'Quotes',

    data(){

        return{
    quoteArray: ["Where your focus goes, your energy flows", "Every moment is a fresh beginning",
    "Change the world by being yourself", "Never regret anything that made you smile", "Die with memories, not dreams",
    "Simplicity is the ultimate sophistication",  "What we think, we become", "All limitations are self-imposed",
    "Problems are not stop signs, they are guidelines", "Hate comes from intimidation, love comes from appreciation",
    "Determine your priorities and focus on them", "Be so good they can’t ignore you", "Dream as if you’ll live forever, live as if you’ll die today",
    "Never let your emotions overpower your intelligence", "Don’t you know your imperfections is a blessing?", "There is no substitute for hard work",
    "What consumes your mind controls your life", "Strive for greatness", "Wanting to be someone else is a waste of who you are",
    "And still, I rise", "May your choices reflect your hopes, not your fears.","Turn your wounds into wisdom"
    ],
    }
    },

    methods: {
        randomQuote(){
 

            let quoteIndex = Math.random() * this.quoteArray.length;
            console.log(quoteIndex);
            let indexRoundedQ = Math.floor(quoteIndex); 
            return this.quoteArray[indexRoundedQ];
        }
    }
}
</script>

<style scoped>
    #quoteContainer{
        position: relative;
        top: 70px;
    }

    #quote{
        color: white; 
        font-size: 50px;
    }

</style>