import React from 'react';
import Image from 'next/image'

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Button } from 'reactstrap';

function Section11() {
    return (
        <div className="fluid bg-gradient">
            <Container className="d-lg-flex h-100 justify-content-around align-items-center text-center py-3">
                <Image
                    src="/garantia.png"
                    alt="Garantia Incondicional"
                    width={350}
                    height={350}
                    className="col-lg-6" />
                <p className="col-lg-6" style={{ fontSize: 20, fontWeight: 500 }}>Eu confio tanto no meu método de aprendizado, que ofereço aos novos alunos:<br /><br />
                    <span style={{ textTransform: 'uppercase', fontWeight: 'bolder', color: 'springgreen' }}>7 dias de garantia incondicional.</span><br /><br />
                        Ou seja, se você comprar o curso, seguir e aplicar a metodologia e em <span style={{ textTransform: 'uppercase', fontWeight: 'bolder', color: 'springgreen' }}>7 dias</span> achar que não teve nenhuma evolução, eu te devolverei cada centavo pago, sem complicações e sem aborrecimentos.<br /><br />
                    <span style={{ textTransform: 'uppercase', fontWeight: 'bolder' }}>Simples e fácil...</span>
                </p>
            </Container>
        </div>
    );
}

export default Section11;