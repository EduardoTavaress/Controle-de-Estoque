import data from '../database.json';
import { useParams } from 'react-router-dom';


export default function ViewItem() {
    const { id } = useParams();
    const item = data.find(item => item.id == id);

    if (!item) {
        return <div>Item não encontrado</div>;
    }

    return (
         <div>
            
            <h3>{item.name}</h3>
            <button>Atualizar</button>
            <button>Excluir</button>

            <div>
                <span>Categoria: {item.category}</span>
                <span>Quatidade em estoque: {item.quantity}</span>
                <span>Preço: {item.price}</span>
            </div>
            <p>{item.description}</p>

            <p>Cadastro em: {item.createdAt} - <small>Atualizado em: {item.updatedAt}</small></p> 
            
        

        </div>
    );
}   