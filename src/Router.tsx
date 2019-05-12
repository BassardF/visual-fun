import * as React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ReactSpringPage from './components/react-spring/Page';


export default function AppRouter() {
    return (
        <Router>
            <Route path="/" exact component={ReactSpringPage} />
        </Router>
    );
  }