import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Button } from 'reactstrap';

function Section5() {
    return (
        <div className="fluid my-5 pt-2 pb-4" style={{ backgroundColor: "LightGrey" }}>
            <Container className="text-center">
                <h2>o que os alunos dizem</h2>
                <div className="d-md-flex flex-md-row">
                    <div className="col-xl my-3">
                        <iframe className="firstVideo" src="https://www.youtube.com/watch?v=FmwqkvR5rC4s"></iframe>
                        <h5>vittinho</h5>
                        <p>Jogador do Flamengo</p>
                    </div>
                    <div className="col-xl my-3">
                        <iframe className="firstVideo" src="https://www.youtube.com/watch?v=FmwqkvR5rC4s"></iframe>
                        <h5>roobertg</h5>
                        <p>Atleta de Futebol</p>
                    </div>
                    <div className="col-xl my-3">
                        <iframe className="firstVideo" src="https://www.youtube.com/watch?v=FmwqkvR5rC4s"></iframe>
                        <h5>ramon ramos</h5>
                        <p>Cantor</p>
                    </div>
                </div>
                <div className="d-md-flex flex-md-row">
                    <div className="col-xl my-3">
                        <iframe className="firstVideo" src="https://www.youtube.com/watch?v=FmwqkvR5rC4s"></iframe>
                        <h5>edu bauermann</h5>
                        <p>Zagueiro do América FC</p>
                    </div>
                    <div className="col-xl my-3">
                        <iframe className="firstVideo" src="https://www.youtube.com/watch?v=FmwqkvR5rC4s"></iframe>
                        <h5>roberto mohammad</h5>
                        <p>Cavaquinista do Gustavo Lins</p>
                    </div>
                    <div className="col-xl my-3">
                        <iframe className="firstVideo" src="https://www.youtube.com/watch?v=FmwqkvR5rC4s"></iframe>
                        <h5>vittinho</h5>
                        <p>Jogador do Flamengo</p>
                    </div>
                </div>
                <h4>Inscreva-se hoje e faça como os <span style={{ color: 'darkorange' }}> mais de 500 alunos</span> que estão tocando cavaquinho como <b>profissionais</b></h4>
                <Button className="btn btn-lg mt-3 button-2 p-4">fazer minha inscrição</Button>
            </Container>
        </div>
    );
}

export default Section5;