<template>
    <div id = "header">
        <!--this desplays the log in, log out, and sign up buttons based on the log in sttus-->
        <button v-if="this.isLogged" v-on:click="$emit('logOut')" id="logOutBtn"> Log Out </button>
        <button v-if="!this.isLogged" v-on:click="$emit('signUp')" id="SignUpBtn"> Sign Up</button>
        <button v-if="!this.isLogged" v-on:click="$emit('log')" id="LogInBtn"> Log In </button>
    </div>
</template>

<script>
export default {
    name: 'Header',
    props: ['isLogged'],
    data(){
        return{
            logInDisplay: false
        }
    },
 

    methods:{

    //this method triggers the boolean that will cause the log in pop up to show
        handleLogInDisplay(){
            this.logInDisplay = true;
        }

        
    }

}
</script>

<style scoped>
#header{
    position: relative;
    margin: 0px;
    top: -60px;
    left: -8px;
    width: 100%;
    height: 60px;
    
}

#logOutBtn{
    position: absolute;
    top: 50%;
    right: 10%;

}

#SignUpBtn{

    position: absolute;
    top: 50%;
    right: 10%;
}

#LogInBtn{
    position: absolute;
    top: 50%;
    right: 15%;

}
</style>