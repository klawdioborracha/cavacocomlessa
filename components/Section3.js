import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'reactstrap';

function Section3() {
    return (
        <div className="fluid bg-gradient">
            <Container className="py-2 text-center">
                <h2>Evolução Incrível!</h2>
                <iframe className="firstVideo" src="https://www.youtube.com/watch?v=FmwqkvR5rC4s"></iframe>
                <p>APENAS <span style={{ color: 'darkorange' }}> 13 ANOS DE IDADE</span></p>
            </Container>
        </div>
    );
}

export default Section3;