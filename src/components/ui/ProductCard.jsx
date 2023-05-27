import "../../styles/ProductCard.scss";

function ProductCard({title, description, price}){

    return (    
        <div className="Card">
            <div className="Card_img"></div>
            <p className="Card_title">Huile de riçin</p>
            <p className="Card_description">Boisé et aromatique</p>
            <div className="Card_button">
                <p>Ajouter</p>
                <p>29 €</p> 
            </div>                     
        </div>
    )
}

export default ProductCard;