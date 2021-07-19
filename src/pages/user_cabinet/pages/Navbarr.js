import React, { Component } from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import style from '../css/Navbarr.module.css'
import cx from 'classnames'

export default class Navbarr extends Component {
    render() {
        return (
            <div>
                <nav>
                    <div className={style.container}>
                        <Navbar expand="lg">
                            <Container>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="me-auto">
                                        <Nav.Link className={style.ll}><NavLink className={style.linked} activeClassName={style.selected} to="/courses">Mening kurslarim</NavLink></Nav.Link>
                                        <Nav.Link className={style.ll}><NavLink className={style.linked} activeClassName={cx(style.selected, style.selected2)} to="/knowledge">O’rganilgan bilimlarim</NavLink></Nav.Link>
                                        <Nav.Link className={style.ll}><NavLink className={style.linked} activeClassName={cx(style.selected, style.selected3)} to="/certificate">Sertifikatlarim</NavLink></Nav.Link>
                                        <Nav.Link className={style.ll}><NavLink className={style.linked} activeClassName={cx(style.selected, style.selected4)} to="/mentors">A’zo mentorlarim</NavLink></Nav.Link>
                                    </Nav>
                                </Navbar.Collapse>
                            </Container>
                        </Navbar>
                    </div>
                    </nav>
            </div>
        )
    }
}
