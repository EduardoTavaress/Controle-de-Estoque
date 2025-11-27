import { Link } from 'react-router-dom';
import data from '../database.json';

export default function AllItems() {
    return (
       <div>
            <table className="stock-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Em estoque</th>
                        <th>Categoria</th>
                        <th>Ações</th>
                    </tr>
                </thead>

         <tbody>
            {data.map(item => (
                <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.quantity}</td>
                    <td>{item.category}</td>
                    <td>
                        <div className="action">
                             <Link to={`/stock-item/ver/${item.id}`}>
                                <button className='btn-view'>Ver</button>
                            </Link>

                            <button className='btn-update'>Atualizar</button>
                            <button className='btn-delete'>Excluir</button>
                        </div>
                    
                    </td>
                </tr>    
                
            ))}
            </tbody>
           </table> 
       </div>
    );
}