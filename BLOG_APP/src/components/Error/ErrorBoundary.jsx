import React, { Component } from 'react';

class ErrorBoundary extends Component {
 constructor(props) {
    super(props);
    this.state = { hasError: false };
 }

 static getDerivedStateFromError(error) {
    // Hata durumunda, state'i güncelleyerek hata durumunu yakalayın.
    return { hasError: true };
 }

 componentDidCatch(error, errorInfo) {
    // Hata durumunda, hata detaylarını loglayabilirsiniz.
    console.error("Error caught by ErrorBoundary:", error, errorInfo);
 }

 render() {
    if (this.state.hasError) {
      // Hata durumunda, kullanıcıya bir hata mesajı gösterin.
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children; 
 }
}

export default ErrorBoundary;