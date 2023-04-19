import EditButton from './EditButton';
import DeleteButton from './DeleteButton';
import FormSalao from './FormSalao';

import { Card, Col } from 'react-bootstrap';

const Salao = (props) => {

    // console.log("entrou no salao");

    let salao = props.salao;
    let saloes = props.saloes

    return (
        <Col xs={12} md={6} lg={6}>
            {/* coluna com 12 de largura em telas pequenas (xs), 6 em médias (md) e 4 em grandes (lg) */}
            <Card className='salao' >
                <Card.Body>
                    <Card.Title>{salao.nome}</Card.Title>
                    <Card.Text>{salao.descricao}</Card.Text>
                    <Card.Text>{salao.localizacao}</Card.Text>
                    <Card.Text>{salao.cnpj}</Card.Text>
                    <EditButton id={salao.id} saloes={saloes}></EditButton>
                    <DeleteButton id={salao.id}></DeleteButton>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default Salao;