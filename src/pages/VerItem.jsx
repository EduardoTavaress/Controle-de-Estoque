import data from '../database.json';


export default function ViewItem() {
    return (
         <div>
            {data.map(item => (
                <div key={item.id}>
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
            ))}

        </div>
    );
}   