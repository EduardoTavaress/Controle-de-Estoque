import { Link } from 'react-router-dom';
import data from '../database.json';

export default function AllItems() {
    return (
       <div>
            {data.map(item => (
                <div key={item.id}>
                    <ul>
                        <li>ID</li>
                        <p>{item.id}</p>

                        <li>Nome</li>
                        <p>{item.name}</p>

                        <li>Em estoque</li>
                        <p>{item.quantity}</p>

                        <li>Categoria</li>
                        <p>{item.category}</p>


                        <li>Ações</li>
                        <div>
                             <Link to={`/stock-item/ver/${item.id}`}>
                                <button>Ver</button>
                            </Link>

                            <button>Atualizar</button>
                            <button>Excluir</button>
                        </div>
                    
                    </ul>
                </div>    
                
            ))}
            
       </div>
    );
}