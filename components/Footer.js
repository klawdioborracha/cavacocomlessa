import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Button } from 'reactstrap';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas);

function Footer() {
    return (
        <footer>
            <p>Termos de Uso | Política de Privacidade <br />
                Propriedade de Leandro Lessa | Copyright © 2020 - Todos os direitos reservados</p>
        </footer>
    );
}

export default Footer;