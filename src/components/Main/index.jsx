import React, { Component } from 'react'
import MessageList from '../MessageList'


class Main extends Component {

    constructor() {
        super()
        this.state = {
            messages: [
                {text: 'Mensaje de prueba'},
                {text: 'Mensaje dos'},
            ]
        }
    }

    render () {
        return <MessageList messages={this.state.messages} />
    }
}

export default Main
