import React from 'react'


class ErrorBoundry extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            hasError: false,
            error: null,
            errorInfo: null,
        }
    }
    componentDidCatch(error, errorInfo) {
        console.log('my error', error);

        this.setState({
            hasError: true,
            error: error,
            errorInfo: errorInfo,
        })
    }

    render() {
        if (this.state.hasError) {
            return <div><h1>Something went wrong</h1>
                <details style={{ whiteSpace: 'pre-wrap' }}>
                    {this.state.error && this.state.error.toString()}
                    < br />
                    {this.state.errorInfo.componentStack}
                </details >
            </div >
        }

        return this.props.children
    }
}


export default ErrorBoundry