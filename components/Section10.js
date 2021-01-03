import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Button } from 'reactstrap';

import Accordion from '../components/Accordion.js'

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas);

function Section10() {
    return (
        <div>
            <Container className="d-lg-flex h-100 justify-content-center align-items-center text-center my-4">
                <div className="col-lg-6">
                    <h2>perguntas frequentes</h2>
                    <Accordion />
                </div>
                <div className="col-lg-6">
                    <h2>atendimento via whatsapp</h2>
                    <p style={{ fontSize: 23 }}>Ainda restam dúvidas a respeito do curso ou forma de pagamento?<br />Fale com nossa equipe via Whatsapp! Será um prazer te ajudar.</p>
                    <Button className="btn btn-lg button-1 p-3 my-3">
                        <FontAwesomeIcon className="fas fa-md mx-2 shadow" icon="phone-alt" />chamar no whatsapp!</Button>
                </div>
            </Container>
        </div>
    );
}

export default Section10;