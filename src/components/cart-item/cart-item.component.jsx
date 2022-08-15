import { CartItemComponent, ItemContainer } from "./cart-item.styles";

const CartItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;

  return (
    <CartItemComponent>
      <img src={imageUrl} alt={`${name}`} />
      <ItemContainer>
        <span>{name}</span>
        <span>
          {quantity} x ${price}
        </span>
      </ItemContainer>
    </CartItemComponent>
  );
};

export default CartItem;
