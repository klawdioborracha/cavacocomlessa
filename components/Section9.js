import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Button } from 'reactstrap';

import Selo from '../components/Selo.js'

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas);

function Section9() {
    return (
        <div className="fluid bg-gradient">
            <Container className="text-center py-2">
                <h2>oferta especial</h2>
                <Container className="d-md-flex h-100 justify-content-around align-items-center my-4">
                    <div className="col-md">
                        <h5>Economize tempo e dinheiro</h5>
                        <p><br />Apenas 10x de <br /><br /><span className="display-4" style={{ color: 'springgreen', fontWeight: 'bolder' }}> R$17,02 </span> <br /><b>(menos de 1 real por dia) </b><br /><br />ou R$149,00 no Boleto Bancário</p>
                        <h5>E avance anos de estudo em <span style={{ color: 'darkorange', fontWeight: 'bolder' }}>poucas semanas</span></h5>
                    </div>
                    <div className="col-md">
                        <div>
                            <Button className="btn btn-lg mt-5 button-1 p-3">aproveitar a oferta!</Button>
                            <Selo />
                        </div>
                    </div>
                    <div className="col-md my-4"><FontAwesomeIcon className="fas fa-3x m-3 gold" icon="key" />
                        <h5>compra <span style={{ color: 'springgreen', fontWeight: 'bolder' }}>100% segura</span>! receba <b>imediatamente</b> seu produto após a confirmação de pagamento</h5></div>
                </Container>
            </Container>
        </div>
    );
}

export default Section9;