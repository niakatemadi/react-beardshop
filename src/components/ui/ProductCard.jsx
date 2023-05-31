import "../../styles/components/ProductCard.scss";

function ProductCard({title, description, price}){

    return (    
        <div className="Card">
            <div className="Card_img"></div>
            <p className="Card_title">{title}</p>
            <p className="Card_description">{description}</p>
            <div className="Card_button">
                <p>Ajouter</p>
                <p>{price} €</p> 
            </div>                     
        </div>
    )
}

export default ProductCard;