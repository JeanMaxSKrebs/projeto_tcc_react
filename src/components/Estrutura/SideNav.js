import React, { useState } from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseFlag, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import perfilImg from '../../assets/img/perfil.jpg';


const SideNav = () => {
    const [searchText, setSearchText] = useState('');

    const handleSearch = () => {
        console.log(`Search Text: ${searchText}`);
    };

    return (
        <Navbar bg="dark" variant="dark" expand="lg" fixed="top" id="sideNav">

            <Navbar.Brand href="/home">
                <img id="perfil" className="rounded-circle img-fluid img-profile mx-auto mb-lg-5"
                    src={perfilImg} alt="Foto Perfil" />
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="navbarDiv" />
            <Navbar.Collapse id="navbarDiv">
                <Nav className="mr-auto">
                    <Nav.Link href="/login-cliente" id="loginC">Login Cliente</Nav.Link>
                    <Nav.Link href="/login-salao" id="loginS">Login Salão</Nav.Link>
                    <Nav.Link href="/cadastro-cliente" id="cadastro">Cadastro</Nav.Link>
                    <Nav.Link href="/sobre" id="sobre">Sobre</Nav.Link>
                    <Nav.Link href="/contato" id="contato">Contato</Nav.Link>
                    <Nav.Link href="https://jeanmaxskrebs.github.io/#page-top">Desenvolvedor</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default SideNav;
