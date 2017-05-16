import React, { Component } from 'react'
import MessageList from '../MessageList'


class Main extends Component {

    constructor() {
        super()
        this.state = {
            messages: [{
                text: 'Mensaje de prueba',
                picture: 'http://gol-cdn.nexofin.com/wp-content/uploads/2017/02/kate-upton-diariopoliticacom.jpg',
                displayName: 'LaKeitApton',
                username: 'Keit Upton García',
                date: Date.now()
            },
            {
                text: 'Mensaje segundo',
                picture: 'http://gol-cdn.nexofin.com/wp-content/uploads/2017/02/kate-upton-diariopoliticacom.jpg',
                displayName: 'LaKeitApton',
                username: 'Keit Upton García',
                date: Date.now()
            }
            ]
        }
    }

    render () {
        return <MessageList messages={this.state.messages} />
    }
}

export default Main
