import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'reactstrap';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas);

function Selo() {
    return (
        <Container className="text-center">
            <div className="d-inline-flex text-light"
                style={{ fontSize: 12, lineHeight: '13px', textTransform:'none' }}>
                <FontAwesomeIcon className="fas fa-2x my-auto mx-1" icon="shield-alt" />
                <p className="my-auto mr-2">Compra <br /> <b>Segura</b></p>
                <FontAwesomeIcon className="fas fa-2x my-auto mx-1" icon="trophy" />
                <p className="my-auto mr-2"><b>Satisfação</b> <br /> Garantida</p>
                <FontAwesomeIcon className="fas fa-2x my-auto mx-1" icon="user-lock" />
                <p className="my-auto mr-2">Privacidade <br /> <b>Protegida</b></p>
            </div>
        </Container>
    );
}

export default Selo;