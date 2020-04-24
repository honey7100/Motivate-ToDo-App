import axios from 'axios';

const url = 'http://localhost:5000/api/mongoCommands/';
const userUrl =  'http://localhost:5000/api/UserMongoCommands/';


class requestHandler{

    //get todos

    static getTodos(){
        return axios.get(url).then(response => response.data);
    }



    //create todo
    static createTodo(task, user){
        console.log("yeeeeet");
        return axios.post(url, {
            task: task,
            user: user
        })

    }

    //delete todo
    static deleteTodo(id){
        console.log(url+id);
        return axios.delete(url +id);
    }

    //edit todo
    static editTodo(id, updateText){
        console.log(url+ id);
        return axios.put(url +id, {
         task: updateText
        })
    }




    //add user
    static addUser(name, username, password){
        console.log("this is the addUser method");

        return axios.post(userUrl, {
            name: name,
            username: username,
            password: password
        })
    }

    //get Users
    static getUsers(){
        return axios.get(userUrl).then(response => response.data);
    }



}

export default requestHandler;