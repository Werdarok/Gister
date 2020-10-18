import React, { Component } from "react";

export default class Executor extends Component
{
    constructor (props){
        super (props)
        this.state={
            inputValue:""
        }
    }

    editText=(writtenText)=> {
        this.setState({inputValue:writtenText.target.value})

    }

    render() {
        return (
            <div> 
                <form onSubmit={this.props.executeFunction}> 
                    <label>
                        <input value={this.state.inputValue} onChange={this.editText}/>
                    </label>

                    <button> xd </button>
                </form>
            </div>

        )
    }
}
