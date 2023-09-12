import React, {ErrorInfo} from 'react';

type PropsType = {
    messageText?: React.ReactNode;
    children: React.ReactNode;
};
type StateType = {
    error: Error | null;
    errorInfo: ErrorInfo | null;
};

class ErrorBoundary extends React.Component<PropsType, StateType> {
    constructor(props: PropsType) {
        super(props);
        this.state = {
            error: null,
            errorInfo: null,
        };
    }

    static getDerivedStateFromError(error: Error) {
        return {error: error};
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        this.setState({
            error: error,
            errorInfo: errorInfo,
        });
    }

    render() {
        const {messageText, children} = this.props;
        const {error} = this.state;
        if (error) {
            return <div>{messageText}</div>;
        }

        return children;
    }
}

export default ErrorBoundary;
