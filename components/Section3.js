import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'reactstrap';

function Section3() {
    return (
        <div className="fluid bg-gradient">
            <Container className="py-2 text-center">
                <h2>Evolução Incrível!</h2>
                <iframe width="522" height="294" src="https://www.youtube.com/embed/0TmN6yms4zs" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <p>APENAS <span style={{ color: 'darkorange' }}> 13 ANOS DE IDADE</span></p>
            </Container>
        </div>
    );
}

export default Section3;