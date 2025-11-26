import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import data from "../database.json";

export default function Home() {
  
  const navigate = useNavigate();

  return (

    <div>

    <Header />

      <h1>Dashboard</h1>

      <section>
        {data.map(item => (
          <div key={item.id}>
           
        <div>
            <p>Diversidade de itens</p>
            <span>{data.length}</span>
        </div>
        <div>
            <p>Inventário total</p>
            <span>{data.reduce((total, item) => total + item.quantity, 0)}</span>
        </div>
        <div>
            <p>Itens recentes</p>
            <span>{data.filter(item => {
              const days = 7; // Defina o número de dias para considerar como "recente"
              const hoje = new Date();
              const dataItem = new Date(item.createdAt);
              const diff = (hoje - dataItem) / (1000 * 60 * 60 * 24);
              return diff <= days;
            }).length}</span>
        </div>
        <div>
            <p>Itens acabando</p>
            <span>{data.filter(item => item.quantity < 6).length}</span>
        </div>

        <div>
          {data.filter(item => {
            const days = 7;
            const hoje = new Date();
            const dataItem = new Date(item.createdAt);
            const diff = (hoje - dataItem) / (1000 * 60 * 60 * 24);
            return diff <= days;
          }).map(item => (
            <div key={item.id}>

              <p>Itens Recentes</p>
              <span>{item.name}</span>

              <p>Ações</p>

              <button onClick={() => navigate(`/stock-item/ver/${item.id}`)}>
                  Ver
              </button>

            </div>
          ))}
        </div>

        <div>
          {data.filter(item => item.quantity < 6).map(item => (
            <div key={item.id}>
            <p>Itens Acabando</p>
            <span>{item.name}</span>

            <p>Qtd.</p>
            <span>{item.quantity}</span>

            <p>Ações</p>

            <button onClick={() => navigate(`/stock-item/ver/${item.id}`)}>
                  Ver
            </button>

            </div>
          ))}
        </div>

          </div>
        ))}
      </section>
    </div>
  );
}