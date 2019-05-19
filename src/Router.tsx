import * as React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './components/Home';
import ReactSpringPage from './components/react-spring/Page';
import TensorFlow from './components/tensor-flow/TensorFlow';


export default function AppRouter() {
    return (
        <Router>
            <Route path="/" exact component={Home} />
            <Route path="/react-spring" exact component={ReactSpringPage} />
            <Route path="/tensor-flow" exact component={TensorFlow} />
        </Router>
    );
  }