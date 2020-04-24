<template>
    <h1 id = "time">  {{time}}</h1>
</template>

<script>

export default {
    name: "Time",
    data(){
        return{
            interval: null,
            time: new Date().toLocaleTimeString(),

        }
    },

    mounted(){
        //this allows the time function to be called multiple times to have a constant time tracker
        this.interval = setInterval(() => {
            this.getCurrentTime();
        }, 1000);

        this.getCurrentTime();
    },
    destroyed(){
        clearInterval(this.interval);
    },
    methods: {



        getCurrentTime(){
            this.time = new Date().toLocaleTimeString();
            return this.time;
        }


    }, 

}
</script>

<style scoped>
    #time{
        font-size: 125px;
        position: relative;
        top: 150px;
        color: white;

    }
</style>