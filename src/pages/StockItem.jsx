import { Link, Outlet } from "react-router-dom";
import Header from "../components/Header";

export default function StockItem() {


    function handleAllItems() {
        // Lógica para exibir todos os items
         
    }

  return (
    <div>
      <Header />

      <section>
        <h1>Stock Item </h1>
        <div>
            <Link to="todos-os-items">Todos os Items</Link>
            <Link to="novo-item">Novo Item</Link>
        </div>
        <div>

            <Outlet />
        </div>
      </section>
    </div>
  );
}
