import { Link } from "react-router-dom";

export default function Header () {
    return (
        <header className="header">

            <h2>REACT STOCK</h2>

            <nav className="header-nav">
                <Link className="header-link" to="/">Início</Link>
                <Link className="header-link" to="/stock-item">Itens</Link>
            </nav>
            
        </header>
    );
}