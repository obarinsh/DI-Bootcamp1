import React from "react"

class Child extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            show: true
        }
    }

    componentWillUnmount() {
        alert('This component is now unmounted (removed from the screen).')
    }

    toggleShow = () => {
        this.setState((prevState) => ({
            show: !prevState.show
        }))
    }
    render() {
        return (
            <div>
                {this.state.show && <header>Hello World!</header>}
                < button onClick={this.toggleShow} > Delete Header</ button>
            </div>
        )
    }

}
export default Child