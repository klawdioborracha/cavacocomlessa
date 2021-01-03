import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Button } from 'reactstrap';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas);

function Section6() {
    return (
        <div>
            <Container className="text-center">
                <h2>O que vou aprender?</h2>
                <div className="row">
                    <div className="col-lg">
                        <h5 className="m-3"><FontAwesomeIcon className="fas fa-sm fa-spinner mx-1" icon="guitar" />módulo 1 - levada de samba e pagode</h5>
                        <dl className="text-center">
                            <dt>Batida na prática</dt>
                            <dt>Aprendendo a tocar</dt>
                            <dt>Criando autonomia com as duas mãos</dt>
                            <dt>Variações</dt>
                        </dl>
                        <h5 className="m-3"><FontAwesomeIcon className="fas fa-sm fa-spinner mx-1" icon="guitar" />módulo 2 - partido alto</h5>
                        <dl className="text-center">
                            <dt>Levada de Partido Alto</dt>
                            <dt>Música na levada de Partido Alto</dt>
                            <dt>Variações</dt>
                        </dl>
                        <h5 className="m-3"><FontAwesomeIcon className="fas fa-sm fa-spinner mx-1" icon="guitar" />módulo 3 - cifras</h5>
                        <dl className="text-center">
                            <dt>Forma universal</dt>
                            <dt>Alterações nas notas</dt>
                        </dl>
                        <h5 className="m-3"><FontAwesomeIcon className="fas fa-sm fa-spinner mx-1" icon="guitar" />módulo 4 - formação de acordes</h5>
                        <dl className="text-center">
                            <dt>Acorde Maior e Menor</dt>
                            <dt>Quinto Grau Dominante</dt>
                            <dt>Três opções pra fazer um acorde</dt>
                            <dt>Tríades aumentadas</dt>
                            <dt>Acordes tétrades</dt>
                            <dt>Sistematização dos acordes tétrades</dt>
                        </dl>
                        <h5 className="m-3"><FontAwesomeIcon className="fas fa-sm fa-spinner mx-1" icon="guitar" />módulo 5 - técnicas de solo</h5>
                        <dl className="text-center">
                            <dt>Exercícios de solo</dt>
                            <dt>Exercícios avançados de solo</dt>
                            <dt>Técnica de Sweep</dt>
                        </dl>
                        <h5 className="m-3"><FontAwesomeIcon className="fas fa-sm fa-spinner mx-1" icon="guitar" />módulo 6 - bora tocar</h5>
                        <dl className="text-center">
                            <dt>Tocando com você - Na prática</dt>
                            <dt>Música: Conselho</dt>
                            <dt>Música: Insensato Destino</dt>
                            <dt>Música: Ah Moleque</dt>
                            <dt>Solo de música</dt>
                        </dl>
                    </div>

                    <div className="col-lg">
                        <h5 className="m-3"><FontAwesomeIcon className="fas fa-sm fa-spinner mx-1" icon="guitar" />módulo 7 - nível intermediário</h5>
                        <dl className="text-center">
                            <dt>Acorde Diminuto + Arpejo</dt>
                            <dt>Fraseados diminutos</dt>
                            <dt>Diminuto Cromático</dt>
                            <dt>Função Acorde Diminuto</dt>
                            <dt>Aquarela do Brasil</dt>
                            <dt>Água de Chuva no Mar</dt>
                            <dt>Pirata e Tesouro</dt>
                            <dt>João Nogueira</dt>
                            <dt>Pura Adrenalina</dt>
                        </dl>
                        <h5 className="m-3"><FontAwesomeIcon className="fas fa-sm fa-spinner mx-1" icon="guitar" />módulo 8 - linha interna</h5>
                        <dl className="text-center">
                            <dt>Parte 01</dt>
                            <dt>Parte 02</dt>
                        </dl>
                        <h5 className="m-3"><FontAwesomeIcon className="fas fa-sm fa-spinner mx-1" icon="guitar" />módulo 9 - cavacolim</h5>
                        <dl className="text-center">
                            <dt>Sonoridade do Bandolim</dt>
                            <dt>Música: Caviar (Zeca Pagodinho)</dt>
                            <dt>Música: Malandro</dt>
                            <dt>Música: Coisa de Pele</dt>
                        </dl>
                        <h5 className="m-3"><FontAwesomeIcon className="fas fa-sm fa-spinner mx-1" icon="guitar" />módulo 10 - balanço</h5>
                        <dl className="text-center">
                            <dt>Música: Carolina</dt>
                            <dt>Música: Quando a Gente Ama</dt>
                        </dl>
                        <h5 className="m-3"><FontAwesomeIcon className="fas fa-sm fa-spinner mx-1" icon="guitar" />módulo 11 - levadas</h5>
                        <dl className="text-center">
                            <dt>Fundamentos aplicados em FUNK</dt>
                            <dt>Fundamentos aplicados em MARCHINHAS</dt>
                            <dt>Fundamentos aplicados em CALANGO</dt>
                            <dt>Fundamentos aplicados em IJEXÁ</dt>
                            <dt>Fundamentos aplicados em XOTE</dt>
                            <dt>Fundamentos aplicados em CHORO</dt>
                            <dt>Fundamentos aplicados em SAMBA ENREDO</dt>
                        </dl>
                    </div>

                    <div className="col-lg">
                        <h5 className="m-3"><FontAwesomeIcon className="fas fa-sm fa-spinner mx-1" icon="guitar" />módulo 12 - efeitos</h5>
                        <dl className="text-center">
                            <dt>Como abrilhantar a forma de tocar (Parte 1)</dt>
                            <dt>Como abrilhantar a forma de tocar (Parte 2)</dt>
                            <dt>Efeito Blues</dt>
                        </dl>
                        <h5 className="m-3"><FontAwesomeIcon className="fas fa-sm fa-spinner mx-1" icon="guitar" />módulo 13 - nivel avançado</h5>
                        <dl className="text-center">
                            <dt>Escala Maior e Intervalos</dt>
                            <dt>Campo Harmônico Maior</dt>
                            <dt>Funções Harmônicas</dt>
                            <dt>Cadências II-V Alvos Maiores</dt>
                            <dd>m7-V7-I7M</dd>
                            <dd>V7sus4-V7-I7M</dd>
                            <dd>IIm7-V7sus4-I7M</dd>
                            <dd>IIm7-V7-I7M(#5)</dd>
                            <dt>Cadências alvos menores:</dt>
                            <dd>IIm7(b5)-V7-Im7M</dd>
                            <dd>IIm7(b5)-Diminuto-Im7M ou Im7</dd>
                            <dt>Paralelismo</dt>
                            <dt>Vozes ou voices</dt>
                            <dt>Como achar tensões</dt>
                            <dt>Acordes tríades com tensões</dt>
                            <dt>Acordes tétrades com tensões</dt>
                            <dt>Acordes sobre um baixo</dt>
                            <dt>Diminuto com tensões</dt>
                            <dt>Considerações finais</dt>
                        </dl>
                        <h5 className="m-3"><FontAwesomeIcon className="fas fa-sm fa-spinner mx-1" icon="guitar" />e muito mais...</h5>
                    </div>
                </div>
                <Button className="btn btn-lg mt-5 button-2 p-4">quero aprendar a tocar cavaquinho</Button>
            </Container>
        </div>
    );
}

export default Section6;