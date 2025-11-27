import { Link, Outlet } from "react-router-dom";
import Header from "../components/Header";

export default function StockItem() {


  return (
    <div>
      <Header />

      <section>
        <h1 className="stock-title">Stock Item </h1>

        
        <nav className="stock-nav">
            <Link className="header-link-stock" to="todos-os-items">Todos os Items</Link>
            <Link className="header-link-stock" to="novo-item">Novo Item</Link>
        </nav>

<hr />
        <div>

            <Outlet />
        </div>
      </section>
    </div>
  );
}
