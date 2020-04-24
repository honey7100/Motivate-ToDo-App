<template>
    <div id="todoContainer" v-if="this.loggedInUser">
        <div id="todoLabel">
            <h3 id="todoWords"> Todos</h3>
        </div>
        <div id="todoItemContainer">
            <div class="tasks"
            v-for="task in todoItems"
            v-bind:task="task"
            v-bind:key="task._id"
            >
            <p class="text" v-if="usersMatch(task.user)"> {{task.task}} <button v-on:click="displayEditMethod(getTaskId(task))">edit </button><button v-bind:id="getTaskId(task)" v-on:click="deleteTodo(getTaskId(task))"> X </button> </p>
            

            </div>
        </div>

    
        <div id="newTodo">

            <form v-if="displayEdit" id="updateTodoForm">
                <input type="text" id="updateTodoInput" placeholder="edit Todo..." >
                <button id="editTodoButton" v-on:click="editTodo()"> Edit </button>
            </form>

            <form id="newTodoForm" >
                <input type="text" id = "newTodoInput" placeHolder="Add new Todo...">
                <button id="addTodoButton" v-on:click="addToDo()"> TExg </button>
            </form>
        </div>

        
        
    </div>
</template>

<script>
import requestHandler from '../requestHandler'

export default {
    name: 'Todo',
    props: ['loggedInUser'],

    //added for implementing backend
    data(){
        return{
            todoItems: [],
            text: '',
            displayEdit: false,
            targetId:'',
        }
    },

    methods:{
    
       async addToDo(){
         event.preventDefault();
           let todoTitle = document.getElementById("newTodoInput").value;
            await requestHandler.createTodo(todoTitle, this.loggedInUser);
            this.todoItems = await requestHandler.getTodos();
            this.todoItems = await requestHandler.getTodos();
            this.todoItems = await requestHandler.getTodos();
            document.getElementById("newTodoInput").value = '';
        },

        getTaskId(task){
            return task._id;
        },


        async deleteTodo(taskId){
            requestHandler.deleteTodo(taskId);
            this.todoItems = await requestHandler.getTodos();
            this.todoItems = await requestHandler.getTodos();
            this.todoItems = await requestHandler.getTodos();

        },
        displayEditMethod(taskId){
            this.displayEdit = true;
            this.targetId = taskId;

        },
        async editTodo(){
            event.preventDefault();
            let updateText = document.getElementById("updateTodoInput").value;

            requestHandler.editTodo(this.targetId, updateText);
            this.todoItems = await requestHandler.getTodos();
            this.todoItems = await requestHandler.getTodos();
            this.todoItems = await requestHandler.getTodos();
            this.displayEdit = false;
            document.getElementByid("updateTodoInput").value = '';
            
        },
        usersMatch(user){
            console.log('user match method');
            console.log(user.name + "   vs    " + this.loggedInUser.name);

            if(user.name == this.loggedInUser.name){
                console.log("true");
                return true;
            }
        }, 

    },

    async created(){
        this.todoItems = await requestHandler.getTodos();
        this.todoItems = await requestHandler.getTodos();
        this.todoItems = await requestHandler.getTodos();

    }
}
</script>

<style scoped>
#todoContainer{
    width: 300px;
    height: 350px;
    background-color: rgba(0,0,0, .85);
    position: relative;
    
}

#todoLabel{
    position: absolute;
    width: 100%;
    height: 10%;
    background-color: rgba(0,0,0, .85);
}

#todoWords{
    position: absolute;
    top: -30%;
    left: 10%;
    color: white;
    background-color: rgba(0,0,0, .85);
    

}

#newTodoInput{
    position: absolute;
    width:98%;
    left: 0px;
    bottom: 0%;
    height: 10%;
    color: white;
    background-color: rgba(0,0,0, .85);
    border-color: rgba(0,0,0, .85);
    
}
::placeholder{
    color: lightgray;
}

#todoItemContainer{
    position: absolute;
    top: 10%;
    width: 100%;
    height: 80%;
}

.tasks{
    color: white;
}

#UpdateTodoForm{
    position: absolute;
    width:98%;
    left: 0px;
    bottom: 0%;
    height: 10%;
    color: white;
    background-color: rgba(0,0,0, .85);
    border-color: rgba(0,0,0, .85);
    
}

#updateTodoInput{
    z-index: 1;
    position: absolute;
    width:98%;
    left: 0px;
    bottom: 0%;
    height: 10%;
    color: white;
    background-color: rgba(0,0,0, .85);
    border-color: rgba(0,0,0, .85);
    
}

#addTodoButton{
    visibility: hidden;
}
#editTodoButton{
    visibility: hidden;
}
</style>