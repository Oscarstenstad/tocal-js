import { isDisabled } from "@testing-library/user-event/dist/utils";
import React from "react";

class Todo extends React.Component {
    constructor(props){
        super(props);
        this.input = React.createRef();
        this.addTodo = this.addTodo.bind(this);
        this.state = {listOfTodos: []};
    }

    render(){
        return (
            <div id="todoCon">
                <h2>TodoList</h2>
                <form>
                    {this.state.listOfTodos.map((item) => (
                        <>
                        <label key={item}>
                            <input type="checkbox" 
                            />
                            {item}
                        </label>
                        <br></br>
                        </>
                    ))}
                </form>

                <input type="text" ref={this.input}></input>
                <button onClick={(e) => {
                    this.addTodo();
                    e.target.blur();}}>Add Todo</button>
            </div>
        );
    }

    addTodo() {
        if (this.input.current.value != ""){
            this.setState({listOfTodos: [...this.state.listOfTodos, this.input.current.value]})
            this.input.current.value = "";
        }
    }
}

export default Todo;