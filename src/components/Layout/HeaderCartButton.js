import { useContext, useEffect, useState } from 'react';

import CartContext from '../../store/cart-context';

import CartIcon from '../Cart/CartIcon';

import styles from './HeaderCartButton.module.css';

// button with icon, text, and badge
const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);
  const { items } = cartCtx;

  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);

  const numberOfCartItems = items.reduce((accumulator, item) => {
    return accumulator + item.amount;
  }, 0);

  const btnStyles = `${styles.button} ${btnIsHighlighted ? styles.bump : ''}`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnIsHighlighted(true);
    const timeoutID = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timeoutID);
    };
  }, [items]);

  return (
    <button className={btnStyles} onClick={props.onClick}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
