import React, { Component } from 'react'

class MessageList extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
                <div>
                    {
                        this.props.messages.map(msg => {
                            return (
                                <div>{msg.text}</div>
                            )
                        })
                    }
                </div>
        )
    }

}

export default MessageList
