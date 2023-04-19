import { Form, FormGroup, Button } from 'react-bootstrap';
// import Chip from '@material-ui/core/Chip';
import { useEffect, useState } from 'react';
import MostraSaloes from './MostraSaloes';
import Salao from './Salao';
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { db } from '../../firebase';
import EditButton from './EditButton';

const FormSalao = (props) => {
    // console.log("mostra o form");

    const collectionRef = collection(db, "saloes");
    const [salao, setSalao] = useState([]);

    const [nome, setNome] = useState("")
    const [descricao, setDescricao] = useState("")
    const [localizacao, setLocalizacao] = useState("")
    const [cnpj, setCnpj] = useState(0)

    const [editMode, setEditMode] = useState(false)

    const isFormValid = nome && descricao && localizacao && cnpj;

    let salaoEdit = props.salao;


    useEffect(() => {
        if (salaoEdit) {
            // console.log(props.salao)
            console.log(salaoEdit)
            setEditMode(true);

            setNome(salaoEdit.nome);
            setDescricao(salaoEdit.descricao);
            setLocalizacao(salaoEdit.localizacao);
            setCnpj(salaoEdit.cnpj);

        }
    }, []);

    const addSalao = async e => {
        e.preventDefault()
        // console.log(input)
        console.log(nome)

        const docRef = await addDoc(collectionRef, {
            nome: nome,
            descricao: descricao,
            localizacao: localizacao,
            cnpj: cnpj,
        })
        console.log(docRef.id)

        setNome("");
        setDescricao("");
        setLocalizacao("");
        setCnpj(0);
    }

    const updSalao = async e => {
        e.preventDefault();

        await updateDoc(doc(db, "saloes", salaoEdit.id), {
            nome: nome,
            descricao: descricao,
            localizacao: localizacao,
            cnpj: cnpj,
        })
        setSalao({})
        setNome('')
        setDescricao('')
        setLocalizacao('')
        setCnpj(0)

        setEditMode(false);
    }


    return (

        <div className="form-saloes">
            <h2>Formulário</h2>
            <Form>
                <FormGroup>
                    {/* <Chip for="nome" label="Nome do Salão: " /> */}
                    <Form.Label htmlFor="nome">Nome do Salão:</Form.Label>
                    <Form.Control
                        as="input"
                        type="text"
                        name="nome"
                        className="form-control"
                        placeholder="Nome"
                        onChange={(e) => setNome(e.target.value)}
                        value={nome || ""}
                        required
                    />
                </FormGroup>
                <FormGroup>
                    {/* <Chip for="descricao" label="Insira uma breve descrição: " /> */}
                    <Form.Label htmlFor="descricao">Insira uma breve descrição:</Form.Label>
                    <Form.Control
                        as="input"
                        type="textarea"
                        name="descricao"
                        className="form-control"
                        placeholder="Descricao"
                        rows="3"
                        onChange={(e) => setDescricao(e.target.value)}
                        value={descricao || ""}
                        required
                    />
                </FormGroup>
                <FormGroup>
                    {/* <Chip for="localizacao" label="Qual a localização:  " /> */}
                    <Form.Label htmlFor="localizacao">Qual a localização:</Form.Label>
                    <Form.Control
                        as="input"
                        type="text"
                        name="localizacao"
                        className="form-control"
                        placeholder="Localizacao"
                        onChange={(e) => setLocalizacao(e.target.value)}
                        value={localizacao || ""}
                        required
                    />
                </FormGroup>
                <FormGroup>
                    {/* <Chip for="cnpj" label="E o CNPJ:  " /> */}
                    <Form.Label htmlFor="cnpj">E o CNPJ:</Form.Label>
                    <Form.Control
                        as="input"
                        type="text"
                        name="cnpj"
                        className="form-control"
                        placeholder="CNPJ"
                        onChange={(e) => setCnpj(e.target.value)}
                        value={cnpj || ""}
                        required
                    />
                </FormGroup>

                <Button
                    type="submit"
                    onClick={editMode ? updSalao : addSalao}
                    color={editMode ? "success" : "primary"}
                    disabled={!editMode ? !isFormValid : ""}
                >
                    {editMode ? "Edit" : "Add"} &nbsp;Salão
                </Button>
            </Form>
        </div>

    )
}

export default FormSalao;