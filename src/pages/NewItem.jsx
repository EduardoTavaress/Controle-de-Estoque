import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function NewItem() {

    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(0);
    const [price, setPrice] = useState(0.0);
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        const newItem = {
            name,
            quantity: Number(quantity),
            price: Number(price),
            category,
            description,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
        };

        fetch("http://localhost:3001/items", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newItem),
        })
            .then(() => {
                alert("Item criado com sucesso!");
                navigate("/");
            })
            .catch((error) => {
                console.error("Erro ao criar item:", error);
            });
    };

    
    return (
    <form className="new-item-form" onSubmit={handleSubmit}>
        <div className="input-row">

            <div className="input-group"> 
            <label htmlFor="name">Nome</label>
            <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
        
            <div className="input-group">
            <label htmlFor="quantity">Quantidade em estoque</label>
            <input type="number" id="quantity" name="quantity" value={quantity} onChange={(e) => setQuantity(Number(e.target.value))} />
            </div>


            <div className="input-group">   
            <label htmlFor="price">Preço</label>
            <input type="number" id="price" name="price" step="0.01" value={price} onChange={(e) => setPrice(Number(e.target.value))} />
            </div>
            
            <div className="input-group">
            <label htmlFor="category">Categoria</label>
            <input type="text" id="category" name="category" value={category} onChange={(e) => setCategory(e.target.value)} /> 
            </div>


            <div className="input-group full">
            <label htmlFor="description">Descrição</label>
            <textarea id="description" name="description" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
            </div>
        
            <button type="submit" className="btn-save">Salvar</button>
        </div>
    </form>
    );
}