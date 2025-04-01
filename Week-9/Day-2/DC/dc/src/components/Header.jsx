import { Component } from "react";
import React from 'react'

class Header extends Component {
    constructor() {
        super()
        this.state = {
            message: ''
        }
    }
    async componentDidMount() {
        try {
            const data = await fetch(`${import.meta.env.VITE_SERVER_URL}/api/hello`)
            const text = await data.text()
            this.setState({ message: text })
        } catch (error) {
            console.error('Error fetching message:', error)
        }
    }
    render() {
        return (
            <h1>{this.state.message}</h1>)

    }

}

export default Header