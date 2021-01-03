import React from 'react';
import Head from 'next/head';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Button } from 'reactstrap';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas);

import Section1 from '../components/Section1.js'
import Section2 from '../components/Section2.js'
import Section3 from '../components/Section3.js'
import Section4 from '../components/Section4.js'
import Section5 from '../components/Section5.js'
import Section6 from '../components/Section6.js'
import Section7 from '../components/Section7.js'
import Section8 from '../components/Section8.js'
import Section9 from '../components/Section9.js'
import Section10 from '../components/Section10.js'
import Section11 from '../components/Section11.js'
import Footer from '../components/Footer.js'

function MainPage() {
    return (
        <div>
            <Head>
                <title>Cavaquinho Com Lessa</title>
                <meta className="viewport" content="width=device-width, initial-scale=1.0" />
                <meta className="description" content="Curso Online de Cavaquinho" />
                <meta className="robots" content="index" />
                <meta charSet="UTF-8" />
                <html lang="pt-br" />
            </Head>
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
            <Section5 />
            <Section6 />
            <Section7 />
            <Section8 />
            <Section9 />
            <Section10 />
            <Section11 />
            <Footer />
        </div>
    )
}
export default MainPage