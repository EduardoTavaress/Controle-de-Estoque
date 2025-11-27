import data from '../database.json';
import { useParams } from 'react-router-dom';


export default function ViewItem() {
    const { id } = useParams();
    const item = data.find(item => item.id == id);

    if (!item) {
        return <div>Item não encontrado</div>;
    }

    return (
         <div className="view-item">

            <div className="view-header">

            <h3>{item.name}</h3>
            
            <div className="view-actions">

             <button className='btn-update'>Atualizar</button>
                            <button className='btn-delete'>Excluir</button>

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