import React from "react";
import "./Card.css";


function Card(props){
return(
    <div className="list-items">
    <img src={`/images/${props.img}`} alt="image" className="card--image" />
    <div className="card--stats">
    <img src="../../public/images/star.png" alt=""  className="rating--icon"/>
    <span className="card--rating" >{props.rating}</span>
    <span className="card--review">({props.review})•</span>
    <span className="card--location">{props.location}</span>
    </div>
    <p className="card--title">{props.Title}</p>
    <p >from<span className="card--price">{`${props.price}$`}</span><span className="card_price_per-person">/person</span></p>
    
    
    </div>
)
}
export default Card