import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import './bodycss.css'
export default class body extends Component {
    render() {
        return (
            <div class="hero">
                <div class="hero-content">
                    <h1>Comienza tus cursos hoy mismo</h1>
                    <Button variant='info'>Ver cursos</Button>
                </div>
            </div>
        )
    }
}
