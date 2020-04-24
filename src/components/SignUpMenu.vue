<template>
    <div id="signUpForm" v-if="this.signUpDisplay"  >
       <form @submit="registerUser()">
        <h2>Sign Up</h2>
        <p> Name: <input id="name" type="text"> </p>
        <p> UserName: <input id="userName" type="text"></p>
        <p> Password: <input id="password" type="text"></p>
        <button type="submit" id="signUpSubmitBtn" > Sign Up </button>
        <button id="closeSignUp" v-on:click="$emit('closeSignUp')"> Close </button>
        </form>

    </div>
</template>

<script>
import requestHandler from '../requestHandler'

export default {
    name: 'SignUpMenu',
    props: ['signUpDisplay'],
    methods:{

        registerUser(){
            //v-on:click="$emit('signUpComplete')
            alert("redddddd");
            event.preventDefault();
            console.log("lit");
            let name = document.getElementById("name").value;
            let username = document.getElementById("userName").value;
            let password = document.getElementById("password").value;

            let user={
                'name': name,
                'username': username,
                'password': password

            }
            this.$emit('signUpComplete', user);
            requestHandler.addUser(name, username, password);
        }
        

    }
    }
</script>

<style scoped>

#signUpForm{
    position: fixed;
    z-index: 1;
    right: 40%;
    width: 400px;
    height: 225px;
    background-color: lightgray;
}

</style>