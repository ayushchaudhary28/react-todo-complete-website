import React, { Component } from 'react'

export default class Todo extends Component {
    constructor(){
        super();
        this.state ={
            tasks:["Revise js" ,"revise dsa","revise assigment"], 
            currTask:"",

        };

    }

    hanleAddTask = () =>{
        this.setState({
            tasks :[...this.state.tasks,this.state.currTask]
        })


    }
    //
         handleChange = (e) =>{
            console.log(e.target.value);
            this.setState({
                currTask:e.target.value 
            })

         }

  render() {
    return (
      <div>
        <input
        type="text"
        placeholder='Enter your task'
        onChange={this.handleChange}
        />
        <button onClick={this.hanleAddTask}>Add</button>
        {
            this.state.tasks.map(task =>{
                return(
                    <l1>
                        <p>{task}</p>
                        <button onclick={this.handleDeleteTask}>Delete</button>
                    </l1>
                )
            })
        }
         
         </div>
    )
  }
}
