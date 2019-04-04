import React, { Component } from 'react'

export default class Quiz extends Component {
    state = {
        length: 0,
        disable: false,
    }
    next = () => {
        if (this.state.length === this.props.course.length - 2) {
            this.setState({
                disable: true
            })
        }
        this.setState({
            length: this.state.length += 1,
        })
        console.log('length', this.state.length)
    }
    render() {
        return (
            <div style={{ borderRadius: '10px', margin: '10px auto', padding: '10px', width: '80%', height: '70vh' }} className='text-center text-primary'>
                <h1 className=' mb-3'>Welcome to the Quiz of {this.props.name} </h1>
                <hr />
                <h2 className='text-dark mt-5 mb-5'>{this.props.course[this.state.length]}</h2>

                <table className='table table-striped table-bordered mb-5'>
                    <tr>
                        <td> A: <input type='radio' /></td>
                        <td>B: <input type='radio' /></td>
                    </tr>
                    <tr>
                        <td>C: <input type='radio' /></td>
                        <td>D: <input type='radio' /></td>
                    </tr>
                </table>
                <button disabled={this.state.disable} className='btn btn-danger float-right' onClick={this.next}>Next</button>
            </div>
        )
    }
}