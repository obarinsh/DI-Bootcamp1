import React from "react"

class Color extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            favoriteColor: "red",
        }
    }
    componentDidMount() {
        alert('componentDidMount reached')
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate called')
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("in getSnapshotBeforeUpdate")
        return null
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.favoriteColor !== this.state.favoriteColor) {
            console.log("after update", this.state.favoriteColor)
        }
    }

    render() {
        return (
            <div>
                <h1>My favorite color is {this.state.favoriteColor}</h1>
                <button onClick={() => this.setState({ favoriteColor: 'yellow' })}>Change color</button>
            </div>
        )
    }
}

export default Color
