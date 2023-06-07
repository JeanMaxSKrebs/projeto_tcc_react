import React, { useState, createContext, useContext } from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseFlag, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import perfilImg from '../../assets/img/perfil.jpg';
import { BrowserRouter as Router, Routes, Link, Route } from 'react-router-dom';

// Componentes das telas
const Home = () => <h1>Página inicial</h1>;
const Sobre = () => {
        // Resto do código do componente
  };
  const Contato = () => <h1>Contato</h1>;

  
const SideNav = () => {
    const [searchText, setSearchText] = useState('');

    const handleSearch = () => {
        console.log(`Search Text: ${searchText}`);
    };

    return (
        <>
            <Navbar bg="dark" variant="dark" expand="lg" fixed="top" id="sideNav">

                <Navbar.Brand to="/home" element={<Home />}>
                    <img id="perfil" className="rounded-circle img-fluid img-profile mx-auto mb-lg-5"
                        src={perfilImg} alt="Foto Perfil" />
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="navbarDiv" />
                <Navbar.Collapse id="navbarDiv">
                    <Nav className="mr-auto">
                        <Nav.Link href="/login-cliente" id="loginC">Login Cliente</Nav.Link>
                        <Nav.Link href="/login-salao" id="loginS">Login Salão</Nav.Link>
                        <Nav.Link href="/cadastro-cliente" id="cadastro">Cadastro</Nav.Link>
                        <Nav.Link href="/sobre" id="sobre" element={<Sobre />}>Sobre</Nav.Link>
                        <Nav.Link href="/contato" id="contato" element={<Contato />}>Contato</Nav.Link>
                        <Nav.Link href="https://jeanmaxskrebs.github.io/#page-top">Desenvolvedor</Nav.Link>
                    </Nav>
                    {/* <Nav className="mr-auto">
                            <Nav.Link as={Link} to="/login-cliente" id="loginC">Login Cliente</Nav.Link>
                            <Nav.Link as={Link} to="/login-salao" id="loginS">Login Salão</Nav.Link>
                            <Nav.Link as={Link} to="/cadastro-cliente" id="cadastro">Cadastro</Nav.Link>
                            <Nav.Link as={Link} to="/sobre" id="sobre">Sobre</Nav.Link>
                            <Nav.Link as={Link} to="/contato" id="contato">Contato</Nav.Link>
                            <Nav.Link href="https://jeanmaxskrebs.github.io/#page-top">Desenvolvedor</Nav.Link>
                        </Nav> */}

                </Navbar.Collapse>

            </Navbar>
            
            <Router>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/sobre" element={<Sobre />} />
                <Route path="/contato" element={<Contato />} />
            </Routes>
            </Router>
        </>
    );
};

export default SideNav;
