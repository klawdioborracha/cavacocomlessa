import React, { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Button, Card, CardBody, Collapse, CardHeader } from 'reactstrap';

const Accordion = () => {
    const [toggleQuestion, setTogglequestion] = useState(1)

    return (
        <div>
            <Card>
                <Button className="button-3" onClick={() => setTogglequestion(1)}>
                    <span className="font-weight-bold">SE EU COMPRAR AGORA, QUANDO RECEBO O CURSO?</span>
                </Button>
                <Collapse isOpen={toggleQuestion === 1 ? true : false}>
                    <CardBody>
                        Comprando pelo cartão de crédito você recebe na hora todo o material, já que trata-se
                        de um produto digital.
                        Caso escolha o boleto como forma de pagamento, você receberá o acesso ao curso em
                        até três dias úteis após a confirmação do pagamento.
                    </CardBody>
                </Collapse>
            </Card>
            <Card>
                <Button className="button-3" onClick={() => setTogglequestion(2)}>
                    <span className="font-weight-bold">VOU TER ALGUM CUSTO ALÉM DO QUE ESTOU PAGANDO HOJE?</span>
                </Button>
                <Collapse isOpen={toggleQuestion === 2 ? true : false}>
                    <CardBody>
                        Não! O curso não possui taxa de matrícula, mensalidade ou anuidade.
                        Você paga apenas o valor completo e tem direto automático a todo o conteúdo do
                        curso.
                    </CardBody>
                </Collapse>
            </Card>
            <Card>
                <Button className="button-3" onClick={() => setTogglequestion(3)}>
                    <span className="font-weight-bold">COMO TEREI ACESSO AO CURSO?</span>
                </Button>
                <Collapse isOpen={toggleQuestion === 3 ? true : false}>
                    <CardBody>
                        Após a compra, enviaremos seus dados de acesso da área de membros para poder
                        acessar o conteúdo do curso de onde estiver.
                    </CardBody>
                </Collapse>
            </Card>
            <Card>
                <Button className="button-3" onClick={() => setTogglequestion(4)}>
                    <span className="font-weight-bold">VOU RECEBER O LIVRO IMPRESSO DO CURSO DE CAVAQUINHO?</span>
                </Button>
                <Collapse isOpen={toggleQuestion === 4 ? true : false}>
                    <CardBody>
                        Não. Nós não enviaremos o conteúdo impresso ou qualquer material físico do curso.
                        Mas se quiser você poderá imprimir as apostilas por conta própria.
                    </CardBody>
                </Collapse>
            </Card>
            <Card>
                <Button className="button-3" onClick={() => setTogglequestion(5)}>
                    <span className="font-weight-bold">NÃO RECEBI O CURSO, E AGORA?</span>
                </Button>
                <Collapse isOpen={toggleQuestion === 5 ? true : false}>
                    <CardBody>
                        Certifique-se de que utilizou um e-mail válido e se digitou corretamente o seu
                        endereço de e-mail no ato da compra ou ainda, se o email que enviamos com o curso
                        não caiu na caixa de
                        Spam. Caso ainda assim não tenha solucionado o problema, entre em contato conosco que nossa equipe de
                        suporte estará pronta para auxiliá-lo o mais rápido possível.
                    </CardBody>
                </Collapse>
            </Card>
        </div>
    );
}

export default Accordion;