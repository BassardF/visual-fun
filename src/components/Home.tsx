import * as React from 'react'
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
        <ul>
            <li><Link to="/tensor-flow">Toxicity analysis using TensorFlow.js</Link></li>
            <li><Link to="/react-spring">React Spring</Link></li>
        </ul>
    </>
  )
}
