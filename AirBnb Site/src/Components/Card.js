import React from "react"
import Star from "../Images/star-64.png"

export default function Card(props) {
    
    return (
        
        <div className="card">
            {props.openSpots === 0 && <div className="card-badge">Meow</div>}
            <img src={props.img} width="200px" alt="catto" className="card-cat"/>
            <div className="card-stats">
                <img src={Star} alt="star" className="card-star"/>
                <span>{props.rating}</span>
                <span className="gray">({props.reviewCount}) • </span>
                <span className="gray">{props.country}</span>
            </div>
            <p ClassName="card-title">{props.title}</p>
            <p ClassName="card-price"><span className="bold">From ${props.price}</span> / person</p>
        </div>
    )
}