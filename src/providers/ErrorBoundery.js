import { Component } from "react";
import ErrorAlert from '../components/alerts/DefaultAlert';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        this.setState({ error: error });
        this.setState({ errorInfo: errorInfo });
    }

    render() {
        if (this.state.hasError) {
            //return (<SimpleAlert message="Something went wrong" />);
            const { error, errorInfo } = this.state;
            return (<ErrorAlert error={error} errorInfo={errorInfo} />);;
        }
        return this.props.children;
    }
}

export default ErrorBoundary;