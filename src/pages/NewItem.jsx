export default function NewItem() {
    
    return (
    <form className="new-item-form">
        <div className="input-row">

            <div className="input-group"> 
            <label htmlFor="name">Nome</label>
            <input type="text" id="name" name="name" />
            </div>
        
            <div className="input-group">
            <label htmlFor="quantity">Quantidade em estoque</label>
            <input type="number" id="quantity" name="quantity" />
            </div>


            <div className="input-group">   
            <label htmlFor="price">Preço</label>
            <input type="number" id="price" name="price" step="0.01" />
            </div>
            
            <div className="input-group">
            <label htmlFor="category">Categoria</label>
            <input type="text" id="category" name="category" /> 
            </div>


            <div className="input-group full">
            <label htmlFor="description">Descrição</label>
            <textarea id="description" name="description"></textarea>
            </div>
        
            <button type="submit" className="btn-save">Salvar</button>
        </div>
    </form>
    );
}