import { useContext } from 'react';

import MealItemForm from './MealItemForm';
import CartContext from '../../../store/cart-context';

import styles from './MealItem.module.css';

const MealItem = (props) => {
  const cartCtx = useContext(CartContext);

  const price = `$${props.price.toFixed(2)}`;

  const handleAddToCart = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount,
      price: props.price,
    });
  };

  return (
    <li className={styles.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={styles.description}>{props.description}</div>
        <div className={styles.price}>{price}</div>
      </div>
      <div>
        <MealItemForm id={props.id} onAddToCart={handleAddToCart} />
      </div>
    </li>
  );
};

export default MealItem;
