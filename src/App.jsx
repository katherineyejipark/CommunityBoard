import './App.css';
import FavoriteRestaurant from './components/FavoriteRestaurant';

const App = () => {

  const favoriteRestaurants = [
    { id: 1, name: 'Sugar Fish', cuisine: 'Sushi Bars, Japanese', imageUrl: '/images/sugarfish.jpg', menuUrl: 'https://sugarfishsushi.com/food-menus/la-singlepg-menu/' },
    { id: 2, name: 'Holbox', cuisine: 'Mexican, Seafood, Latin American', imageUrl: '/images/holbox.jpg', menuUrl: 'https://www.holboxla.com/menu.html#/' },
    { id: 3, name: 'The Halal Guys', cuisine: 'Middle Eastern', imageUrl: '/images/halalguys.jpg', menuUrl: 'https://thehalalguys.com/menu/' },
    { id: 4, name: 'In-N-Out', cuisine: 'Burgers, Fast Food', imageUrl: '/images/inNout.jpg', menuUrl: 'https://www.in-n-out.com/menu' },
    { id: 5, name: 'Blaze Pizza', cuisine: 'Pizza, Salad, Fast Food', imageUrl: '/images/blazepizza.jpg', menuUrl: 'https://www.blazepizza.com/location/blaze-pizza-orange/menu' },
    { id: 6, name: 'Blu Jam Cafe', cuisine: 'Breakfast & Brunch, New American, Sandwiches', imageUrl: '/images/blujam.jpg', menuUrl: 'https://www.blujamcafe.com/menu/' },
    { id: 7, name: 'Marugame Udon', cuisine: 'Japanese, Noodles, Asian Fusion', imageUrl: '/images/marugame.jpg', menuUrl: 'https://www.marugameudon.com/menu/california-texas/' },
    { id: 8, name: 'Boiling Point', cuisine: 'Taiwanese, Hot Pot, Comfort Food', imageUrl: '/images/boilingPoint.jpg', menuUrl: 'https://www.bpgroupusa.com/Food_SC.html' },
    { id: 9, name: 'BCD Tofu House', cuisine: 'Korean', imageUrl: '/images/bcd.jpg', menuUrl: 'https://www.bcdtofuhouse.com/view-the-menu' },
    { id: 10, name: 'Tsujita LA Artisan Noodle', cuisine: 'Ramen, Noodles', imageUrl: '/images/tsujita.jpg', menuUrl: 'https://www.tsujita.com/sawtelle-menu' }
  ];

  return (
    <div className="App">
      <div className="app-header">
        <img src="/images/favorites.jpg" alt="Favorites" className="header-image" /> {/* Add your image here */}
      </div>
      <h1>Favorite Restaurants</h1>
      <div className="favorite-restaurant-container">
        {favoriteRestaurants.map(restaurant => ( // Fixed the variable name
          <FavoriteRestaurant key={restaurant.id} {...restaurant} />
        ))}
      </div>
    </div>
  )
}

export default App;