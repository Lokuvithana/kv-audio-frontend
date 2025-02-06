import "./productCard.css"

//name should be start with capital letter
function ProductCard(props){

    return(
        <div className="product-card">
            <img src = {props.image} />
            <span className="product-name">{props.name}</span>
            <span className="product-price">LKR.{props.price}</span>
            <p>{props.description}</p>
        </div>
    )
}

export default ProductCard;