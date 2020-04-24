<template>
    <div v-if="this.logInDisplay">
        <form id="logInForm" @submit="handleLogIn()">
            <h2>Log In</h2>
            <p> Username: <input type="text" id="username"></p>
            <p> Password: <input type="text>" id="password"></p>
            <button id="logInFormBtn" type="submit"> Log In </button>
            <button id="closeBtn" v-on:click="$emit('closeLog')"> Close </button>

        </form>
    </div>
</template>

<script>
import requestHandler from '../requestHandler'
export default {
    name: 'LogInMenu',
    props: ['logInDisplay'],
    data(){
        return{
            usersArray: [],
        }
    },
    methods:{
        async handleLogIn(){
            event.preventDefault();
            this.usersArray =  await requestHandler.getUsers();
            console.log(this.usersArray);

            let inputUsername = document.getElementById("username").value;
            let inputPassword = document.getElementById("password").value;

            for(let i = 0; i < this.usersArray.length; i++){
                //console.log()
                if(inputUsername == this.usersArray[i].username && inputPassword == this.usersArray[i].password){
                    this.$emit("logInSuccess", this.usersArray[i]);
                    console.log("hot");
                }
            }
        }
    }
}
</script>

<style scoped>

#logInForm{
    position: fixed;
    z-index: 1;
    right: 40%;
    width: 400px;
    height: 200px;
    background-color: lightgray;
}

</style>