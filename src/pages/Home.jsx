import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import data from "../database.json";

export default function Home() {

  const navigate = useNavigate();

  // Cálculos
  const diversidade = data.length;
  const inventarioTotal = data.reduce((total, item) => total + item.quantity, 0);

  const itensRecentes = data.filter(item => {
    const days = 7;
    const hoje = new Date();
    const dataItem = new Date(item.createdAt);
    const diff = (hoje - dataItem) / (1000 * 60 * 60 * 24);
    return diff <= days;
  });

  const itensAcabando = data.filter(item => item.quantity < 6);

  return (
    <div>

      <Header />

      <h1>Dashboard</h1>

      {/* ==== CARDS DO TOPO ==== */}
      <div className="cards-container">

        <div className="card">
          <p>Diversidade de itens</p>
          <h3>{diversidade}</h3>
        </div>

        <div className="card">
          <p>Inventário total</p>
          <h3>{inventarioTotal}</h3>
        </div>

        <div className="card">
          <p>Itens recentes</p>
          <h3>{itensRecentes.length}</h3>
        </div>

        <div className="card">
          <p>Itens acabando</p>
          <h3>{itensAcabando.length}</h3>
        </div>

      </div>

      {/* ==== TABELA 1: ITENS RECENTES ==== */}
      
      <div className="tables-wrapper">

      <div className="table-section">

        <div className="table-header">
          <span>Itens Recentes</span>
          <span>Ações</span>
        </div>

        {itensRecentes.map(item => (
          <div className="table-row" key={item.id}>
            <span>{item.name}</span>

            <span>
              <button onClick={() => navigate(`/stock-item/ver/${item.id}`)}>
                Ver
              </button>
            </span>
          </div>
        ))}

      </div>

      {/* ==== TABELA 2: ITENS ACABANDO ==== */}
      <div className="table-section">

        <div className="table-header-3">
          <span>Itens acabando</span>
          <span>Qtd.</span>
          <span>Ações</span>
        </div>

        {itensAcabando.map(item => (
          <div className="table-row-3" key={item.id}>
            <span>{item.name}</span>
            <span>{item.quantity}</span>

            <span>
              <button onClick={() => navigate(`/stock-item/ver/${item.id}`)}>
                Ver
              </button>
            </span>
          </div>
        ))}

        </div>

      </div>

      <footer>
        Feito com React e React Router!
      </footer>
    </div>
  );
}
