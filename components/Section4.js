import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Button } from 'reactstrap';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas);

function Section4() {
    return (
        <div>
            <Container className="text-center">
                <h2>Porque fazer o curso?</h2>
                <div className="d-md-flex flex-md-row">
                    <div className="col-md">
                        <FontAwesomeIcon className="fas fa-3x m-3" icon="user-clock" />
                        <h4>seu tempo vale muito</h4>
                        <p>Se você valoriza o seu tempo e não quer perdê-lo procurando materiais avulsos,
                    aqui você recebe tudo organizado e pronto pra você só focar em desenvolver suas técnicas.</p></div>
                    <div className="col-md">
                        <FontAwesomeIcon className="fas fa-3x m-3" icon="guitar" />
                        <h4>exemplos práticos</h4>
                        <p>Todos os temas estudados são sempre exemplificados com prática, para você ver
                        exatamente onde pode ser aplicada cada técnica.
                        Tudo PASSO A PASSO.
                Simples e fácil!</p>
                    </div>
                </div>
                <div className="d-md-flex flex-md-row">
                    <div className="col-md">
                        <FontAwesomeIcon className="fas fa-3x m-3" icon="headset" />
                        <h4>suporte 24 horas por dia</h4>
                        <p>Vou te acompanhar diariamente pelo nosso Grupo de Estudos Exclusivo, onde estou
                        disponível O DIA TODO para quaisquer dúvidas que surgirem.
                Será um prazer te ajudar!</p>
                    </div>
                    <div className="col-md">
                        <FontAwesomeIcon className="fas fa-3x m-3" icon="running" />
                        <h4>liberdade geográfica</h4>
                        <p>Estude no conforto e na segurança da sua casa ou onde preferir! Ninguém pra te incomodar,
                    nem horas perdidas no trânsito.</p>
                    </div>
                </div>
                <Button className="btn btn-lg mt-5 button-2 p-4">quero me inscrever agora!</Button><br />
            </Container>
        </div>
    );
}

export default Section4;