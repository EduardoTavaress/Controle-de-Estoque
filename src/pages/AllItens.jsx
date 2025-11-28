import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function AllItems() {

     const [data, setData]  = useState ([])

  useEffect (() => {
    fetch ('http://localhost:3001/items')
    .then (response => response.json())
    .then (json => setData (json))
    .catch (error => console.error ('Erro ao buscar dados:', error));
  }, [])

    function handleDelete(item) {

      const confirmDelete = confirm(`Tem certeza que deseja excluir ${item.name} ?`);

      if (!confirmDelete) {
        return;
      }

      fetch(`http://localhost:3001/items/${item.id}`, {
        method: 'DELETE',
      })
      .then(() => {
        alert("Item excluído com sucesso!");

        setData(data.filter(i => i.id !== item.id));
        
        navigate("/stock-item/todos-os-items");
      })
      .catch((error) => {
        console.error("Erro ao excluir item:", error);
      });
    }

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

                            
                            <Link to={`/stock-item/atualizar/${item.id}`}>
                                <button className='btn-update'>Atualizar</button>
                            </Link>
                            
                            <button className='btn-delete' onClick={() => handleDelete(item)}>Excluir</button>
                        </div>
                    
                    </td>
                </tr>    
                
            ))}
            </tbody>
           </table> 
       </div>
    );
}