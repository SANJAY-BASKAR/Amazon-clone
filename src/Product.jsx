import React from 'react';
import './Product.css';
import { useStateValue } from './StateProvider';
import 'react-toastify/dist/ReactToastify.css';

function Product({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();



  const addToBasket = () => {
    // Dispatch the item into the data layer
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  // Handle the button click event
  const handleButtonClick = () => {
    addToBasket(); // Add product to the basket
 // Show toast notification
    
  };

  return (
    <div className='product'>
      <div className='product__info'>
        <p>{title}</p>
        <p className='product__price'>
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className='product__rating'>
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>🌟</p>
            ))}
        </div>
      </div>

      <img src={image} alt='' />

      <button onClick={handleButtonClick}>Add to Basket</button>


    </div>
  );
}

export default Product;