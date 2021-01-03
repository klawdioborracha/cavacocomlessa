import React from 'react';
import Image from 'next/image'

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'reactstrap';

function Section7() {
    return (
        <div className="fluid bg-gradient my-5 py-2">
            <h2>quem é leandro lessa?</h2>
            <Container className="d-lg-flex justify-content-around align-items-center text-center">
                <Image
                    src="/about.jpg"
                    alt="Foto do Autor"
                    width={450}
                    height={450}
                    className="col-lg bg-primary rounded-circle" />
                <p className="col-lg" style={{ fontSize: 17 }}>Fala, gente boa. Me chamo Leandro Lessa. Cavaquinista há 20 anos e há 15 venho lecionando e ajudando <span style={{ color: 'darkorange', fontWeight: 'bolder' }}>centenas de alunos</span> a aprenderem também.
                Apaixonado por música desde a infância. Com o tempo fui me aperfeiçoando e me profissionalizando. Hoje vivo da minha música, da minha arte, graças a Deus.
                Ainda estou longe de atingir todos os meus objetivos, mas confesso que uma das coisas que mais sinto prazer é em ajudar as pessoas aprenderem sobre este lindo instrumento que é o cavaquinho.
                <br />Há 20 anos quando eu comecei, tudo era mais difícil e é por isso que eu me sinto na obrigação e muito orgulhoso ao compartilhar com vocês o conhecimento que adquiri ao longo da minha trajetória. Meus erros e acertos, dicas que te colocarão <span style={{ color: 'darkorange', fontWeight: 'bolder' }}>50 passos na frente</span>.
Então me segue nas redes sociais, entre no meu grupo do Telegram e te espero lá no curso.</p>
            </Container>
        </div>
    );
}

export default Section7;