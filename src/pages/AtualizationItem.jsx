import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function AtualizationItem() {

  const { id } = useParams();
  const navigate = useNavigate();

  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    fetch(`http://localhost:3001/items/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setItem(data);
        setLoading(false);
      });
  }, [id]);

    useEffect(() => {
    if (item) {
        setName(item.name);
        setQuantity(item.quantity);
        setPrice(item.price);
        setCategory(item.category);
        setDescription(item.description);
    }
  }, [item]);


  function handleSubmit(event) {
    event.preventDefault();

    const updatedItem = {
      ...item,
      name,
      quantity,
      price,
      category,
      description,
      updatedAt: new Date().toISOString(),
    };


    fetch(`http://localhost:3001/items/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedItem),
    })
      .then(() => {
        alert("Item atualizado com sucesso!");
        navigate(`/stock-item/ver/${id}`);
      })
      .catch((error) => {
        console.error("Erro ao atualizar item:", error);
      });
  }

  
  if (loading) {
    return <div>Carregando...</div>;
  }
  if (!item) {
    return <div>Item não encontrado.</div>;
  }




  return (
    <div>
      <h2>{`Atualizar item - ${item.name}`}</h2>

      <form className="new-item-form" onSubmit={handleSubmit}>
        <div className="input-row">
          <div className="input-group">
            <label htmlFor="name">Nome</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="input-group">
            <label htmlFor="quantity">Quantidade em estoque</label>
            <input
              type="number"
              id="quantity"
              name="quantity"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
          </div>

          <div className="input-group">
            <label htmlFor="price">Preço</label>
            <input
              type="number"
              id="price"
              name="price"
              step="0.01"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>

          <div className="input-group">
            <label htmlFor="category">Categoria</label>
            <input
              type="text"
              id="category"
              name="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>

          <div className="input-group full">
            <label htmlFor="description">Descrição</label>
            <textarea
              id="description"
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>

          <button type="submit" className="btn-save">
            Salvar
          </button>
        </div>
      </form>
    </div>
  );
}
