import React from "react";
import './FavoriteRestaurantCard.css'; 

const FavoriteRestaurant = ({ name, cuisine, imageUrl, menuUrl }) => { // Fixed the prop name to imageUrl
    return (
        <div className="favorite-restaurant-card">
          <img src={imageUrl} alt={`Restaurant ${name}`} className="favorite-restaurant-image" /> 
          <h3>{name}</h3>
          <p>{cuisine}</p>
          <a href={menuUrl} className="view-menu-btn">View Menu</a>
        </div>
      );
}

export default FavoriteRestaurant;
