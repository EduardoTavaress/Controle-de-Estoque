import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';


export default function ViewItem() {

   const [data, setData]  = useState ([])

  useEffect (() => {
    fetch ('http://localhost:3001/items')
    .then (response => response.json())
    .then (json => setData (json))
    .catch (error => console.error ('Erro ao buscar dados:', error));
  }, [])
  
    const { id } = useParams();
    const navigate = useNavigate();

    if (data.length === 0) {
    return <div>Carregando...</div>;
  }
  
    const item = data.find(item => item.id == id);

    if (!item) {
        return <div>Item não encontrado</div>;
    }


    function handleDelete() {

      const confirmDelete = confirm(`Tem certeza que deseja excluir ${item.name} ?`);

      if (!confirmDelete) {
        return;
      }

      fetch(`http://localhost:3001/items/${item.id}`, {
        method: 'DELETE',
      })
      .then(() => {
        alert("Item excluído com sucesso!");
        navigate("/stock-item/todos-os-items");
      })
      .catch((error) => {
        console.error("Erro ao excluir item:", error);
      });
    }

    return (
         <div className="view-item">

            <div className="view-header">

            <h3>{item.name}</h3>
            
            <div className="view-actions">
      
             <button className='btn-update' onClick={() => navigate (`/stock-item/atualizar/${item.id}`)}>Atualizar</button>
             <button className='btn-delete' onClick={handleDelete}>Excluir</button>

            </div>
        </div>

 <div className="info-cards">
        <div className="info-card">
          <span className="label">Categoria:</span> {item.category}
        </div>

        <div className="info-card">
          <span className="label">Quantidade em estoque:</span> {item.quantity}
        </div>

        <div className="info-card">
          <span className="label">Preço:</span> R$ {Number(item.price).toFixed(2)}
        </div>
      </div>
            <p className='description'>{item.description}</p>

    <div className="dates">
        <span>Cadastrado em: {item.createdAt}</span>
        <span>Atualizado em: {item.updatedAt}</span>
      </div>            
            </div>
            
        

        
    );
}   