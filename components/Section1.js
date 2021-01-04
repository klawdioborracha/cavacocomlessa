import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Button } from 'reactstrap';

import Selo from '../components/Selo.js'

function Section1() {
    return (
        <div className="fluid bg-gradient">
            <Container className="pt-3 text-center" >
                <h1 className="m-5">Toque Cavaquinho Como Um <span style={{ color: 'darkorange', fontWeight: 'bolder' }}>Profissional</span></h1>
                <h4 className="m-5">conheça o segredo dos cavaquinistas profissionais e evolua anos de estudo em poucas semanas</h4>
                <iframe src="https://www.youtube.com/embed/T-49Y6G7a0g" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <p className="small">(assista ao vídeo acima)</p>
                <Button className="btn btn-lg mt-5 button-1 p-3">quero tocar como um profissional</Button>
                <Selo />
            </Container>
        </div>
    );
}

export default Section1;