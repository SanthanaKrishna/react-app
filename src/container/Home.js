import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <div>
            <ul>
                <li>
                    <Link to='/todos'>Todo App</Link>
                </li>
                <li>
                    <Link to='/stopwatch'>Stop Watch</Link>
                </li>
                <li>
                    <Link to='/CreateAccount'>Create Account</Link>
                </li>
            </ul>
        </div>
    )
}
