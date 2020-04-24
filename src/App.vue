<template>
  <div id="app">
    <Header v-bind:isLogged="isLogged" v-on:log="handleLogInDisplay()" v-on:signUp="handleSignUpDisplay()" v-on:logOut="userLoggedOut()" />
    <LogInMenu v-bind:logInDisplay="logInDisplay" v-on:closeLog="closeLogInDisplay()" v-on:logInSuccess="handleLogIn"/>
    <SignUpMenu v-bind:signUpDisplay="signUpDisplay" v-on:closeSignUp="closeSignUpDisplay()" v-on:signUpComplete="userSignedUp" />
    <Time />
    <Quotes />
    <Background />
    <Todo v-bind:loggedInUser="loggedInUser"/>
  </div>
</template>

<script>
import Time from './components/Time.vue'
import Header from './components/Header.vue'
import LogInMenu from './components/LogInMenu.vue'
import SignUpMenu from './components/SignUpMenu.vue'
import Background from './components/Background.vue'
import Quotes from './components/Quotes.vue'
import Todo from './components/Todo.vue'  

export default {
  name: 'App',
  components: {
    Time,
    Header,
    LogInMenu,
    SignUpMenu,
    Background,
    Quotes,
    Todo
  },
  data(){
    return{
      //isLogged keeps track of if a user is logged in or not
      isLogged: false,
      logInDisplay: false,
      signUpDisplay: false,
      loggedInUser: '',
    }
  },

  methods:{

    handleLogInDisplay(){
      this.logInDisplay = true;
    },

    closeLogInDisplay(){
      this.logInDisplay = false;
    }, 

    handleSignUpDisplay(){
      this.signUpDisplay = true;
    },

    closeSignUpDisplay(){
      this.signUpDisplay = false;
    }, 

    userSignedUp(user){
      alert("You have been signed up!");
      this.logInDisplay = false;
      this.signUpDisplay = false;
      this.isLogged = true;
      this.loggedInUser = user;
    },

    userLoggedOut(){
      this.loggedInUser = '';
      this.isLogged = false;
    }, 

    handleLogIn(user){
      this.logInDisplay = false;
      this.signUpDisplay = false;
      this.isLogged = true;
      this.loggedInUser = user;
      console.log(this.loggedInUser);
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}



</style>
