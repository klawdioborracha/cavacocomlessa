import React from 'react';
import Image from 'next/image'

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'reactstrap';

function Section8() {
    return (
        <div>
            <h2>Mais depoimentos...</h2>
            <Container className="text-center d-lg-flex justify-content-center">
                <div className="col-lg-6">
                    <Image
                        src="/socialproof1.png"
                        alt="Depoimento de Aluno"
                        width={350}
                        height={350}
                    />
                </div>
                <div className="col-lg-6">
                    <Image
                        src="/socialproof2.png"
                        alt="Depoimento de Aluno"
                        width={360}
                        height={640}
                    />
                </div>
            </Container>
            <Container className="text-center d-lg-flex justify-content-center">
                <div className="col-lg-6">
                    <Image
                        src="/socialproof3.png"
                        alt="Depoimento de Aluno"
                        width={360}
                        height={640}
                    />
                </div>
                <div className="col-lg-6">
                    <Image
                        src="/socialproof4.png"
                        alt="Depoimento de Aluno"
                        width={360}
                        height={640}
                    />
                </div>
            </Container>
        </div>
    );
}

export default Section8;