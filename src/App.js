import React, {Component} from 'react';
import classes from './App.module.css';
import TodoItem from "./components/TodoItem/TodoItem";

let todoData= [
    {
        id: 1,
        text: "Take out the trash",
        completed: true
    },
    {
        id: 2,
        text: "Grocery shopping",
        completed: false
    },
    {
        id: 3,
        text: "Clean gecko tank",
        completed: false
    },
    {
        id: 4,
        text: "Mow lawn",
        completed: true
    },
    {
        id: 5,
        text: "Make dinner",
        completed: false
    }
];

class App extends Component{
    constructor(){
        super();
        this.state = {
            toDo: todoData,
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(id) {
        this.setState(prevState => {
            const updatedtoDo = prevState.toDo.map(t=>{
                debugger
                if(t.id === id){
                    t.completed = !t.completed
                }
                return t
            });
            return{
                toDo: updatedtoDo
        }})
    };
    render(){
        let TodoDataMap = this.state.toDo.map(d=> {
            return (
                <TodoItem key={d.id} id={d.id} text={d.text} completed={d.completed} handleChange={this.handleChange}/>
            )
        });
        return (
            <div className={classes.todolist}>
                {TodoDataMap}
            </div>
        )
    }
}

export default App;
