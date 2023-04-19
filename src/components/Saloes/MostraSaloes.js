import { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Salao from './Salao';
import { collection, onSnapshot } from "firebase/firestore";
import { db } from '../../firebase';


const MostraSaloes = () => {
    const [saloes, setSaloes] = useState([]);
    const [loading, setLoading] = useState(0);

    const collectionRef = collection(db, "saloes");

    useEffect(() => {
        const loadData = async () => {
            setLoading(true);

            const unsubscribe = () => {
                unsub();
            };
            return unsubscribe;
        };

        loadData();
    }, []);

    const unsub = onSnapshot(collectionRef, (snapshot) => {
        setSaloes(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
        setLoading(false);
    });

    // const getSaloes = () => {
    //     // console.log("tentando pegar saloes")
    //     setSaloes([])
    //     getDocs(collectionRef)
    //         .then(querySnap => {
    //             // console.log(querySnap);
    //             // console.log(querySnap.docs.map(d=>d.data().todo));
    //             const docs = querySnap.docs
    //             if (!docs.length)
    //                 throw Error("Empty data!")

    //             const saloes = docs.map(
    //                 doc => ({
    //                     id: doc.id,
    //                     nome: doc.data().nome,
    //                     descricao: doc.data().descricao,
    //                     localizacao: doc.data().localizacao,
    //                     cnpj: doc.data().cnpj
    //                 })
    //             )
    //             console.log(saloes);
    //             setSaloes(saloes)
    //             return saloes;
    //         }).catch(e =>
    //             console.error(e.message)
    //         );
    // }

    if (loading) {
        return <h1>Carregando... Aguarde uns Intantes</h1>;
    }


    return (
        <div className="list-saloes">
            <h2>Lista de Salões:</h2>
            <Row>
                {saloes.length === 0 && <p>Não Existem Salões no Banco</p>}
                {saloes.map((salao) => (
                    <Salao key={salao.id} salao={salao} saloes={saloes}
                    />
                ))}
            </Row>
        </div >
    )
}

export default MostraSaloes; 