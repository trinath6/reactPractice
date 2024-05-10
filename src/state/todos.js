import React, { Component } from "react";

class Todo extends Component {
    state = {
        fruit: ["apple", "banana"]
    };

    addTodo = () => {
        this.setState({
            fruit: [...this.state.fruit, "watermelon"]
        });
    };

    clearTodo = () => {
        this.setState({
            fruit: []
        });
    };

    clearThis = (index) => {
        let updatedFruit = [...this.state.fruit];
        updatedFruit.splice(index, 1);
        this.setState({
            fruit: updatedFruit
        });
    };

    render() {
        return (
            <>
                <button onClick={this.addTodo}>Add Todo</button>
                <button onClick={this.clearTodo}>Clear All</button>
                {this.state.fruit.map((value, index) => (
                    <div key={index}>
                        <p>
                            {index + 1} {value}
                            <button onClick={() => this.clearThis(index)} style={{ height: 30 }}>
                                Delete
                            </button>
                        </p>
                    </div>
                ))}
            </>
        );
    }
}

export default Todo;
