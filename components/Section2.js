import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'reactstrap';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas);

function Section2() {
    return (
        <div>
            <Container className="d-md-flex flex-md-row text-center" style={{ fontSize: 23 }}>
                <Container>
                    <h2>O que é o programa?</h2>
                    <p>Cavaquinho com Lessa é o programa ideal para quem
                    quer aprender a tocar cavaquinho <b>DO ZERO </b>
                    ou evoluir e melhorar suas habilidades. <br /> No curso serão ensinadas
                    técnicas usadas pelos <b><span style={{ color: 'darkorange' }}>cavaquinistas
                    profissionais</span> </b> para que você
                    aprenda a tocar de maneira <span style={{ color: 'darkorange', fontWeight: 'bold' }}>simples </span>
                    e <span style={{ color: 'darkorange', fontWeight: 'bold' }}>fácil</span>.</p>
                    <h2>O curso é para mim?</h2>
                    <p>Se você...</p>
                    <ul className="fa-ul text-center">
                        <li><FontAwesomeIcon className="fas fa-sm fa-spin" icon="compact-disc" /> Quer aprender tocar mesmo que não tenha nenhuma experiência</li>
                        <li><FontAwesomeIcon className="fas fa-sm fa-spin" icon="compact-disc" /> Já toca, mas tem dificuldade em executar solinhos</li>
                        <li><FontAwesomeIcon className="fas fa-sm fa-spin" icon="compact-disc" /> Tem dificuldade em formar e executar acordes difíceis</li>
                        <li><FontAwesomeIcon className="fas fa-sm fa-spin" icon="compact-disc" /> Quer aprender tocar música de ouvido e mandar bem na roda de samba</li>
                        <li><FontAwesomeIcon className="fas fa-sm fa-spin" icon="compact-disc" /> Não tem um cronogrma prático de estudos ou não sabe no que focar</li>
                        <li><FontAwesomeIcon className="fas fa-sm fa-spin" icon="compact-disc" /> Quer aprender improviso, dominando as escalas do instrumento</li>
                    </ul>
                    <p>Então é para você!</p>
                </Container>
            </Container>
        </div>
    );
}

export default Section2;