export default function NewItem() {
    return (
        <div>
            <label htmlFor="name">Nome</label>
            <input type="text" id="name" name="name" />

            <label htmlFor="quantity">Quantidade em estoque</label>
            <input type="number" id="quantity" name="quantity" />

            <label htmlFor="price">Preço</label>
            <input type="number" id="price" name="price" step="0.01" />

            <label htmlFor="category">Categoria</label>
            <input type="text" id="category" name="category" /> 

            <label htmlFor="description">Descrição</label>
            <textarea id="description" name="description"></textarea>

            <button type="submit">Salvar</button>
        </div>
    );
}