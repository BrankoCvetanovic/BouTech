import { useRef, useEffect, useContext } from "react";
import { createPortal } from "react-dom";
import Cart from "./Cart";
import { CartContext } from "./CartContext";
import { Link } from "react-router-dom";

const CartModal = () => {
  const dialog = useRef<HTMLDialogElement>(null);

  const cartContext = useContext(CartContext);

  useEffect(() => {
    dialog.current?.showModal();
  }, []);

  function handleCloseCart() {
    cartContext?.closeModal();
  }

  const totalPrice = cartContext?.userItems.reduce(
    (acumulator, current) => acumulator + current.price * current.amount,
    0
  );
  const total = Math.round(totalPrice! * 100) / 100;

  return createPortal(
    <dialog
      onClose={handleCloseCart}
      className="cart modal"
      id="modal"
      ref={dialog}
    >
      <h2>Your Cart</h2>
      <Cart />
      <p className="cart-total">{total}$</p>
      <div className="modal-action">
        <form method="dialog" className="modal-actions">
          <button className="text-button">Close</button>
          {
            <Link to="/checkout" onClick={handleCloseCart} className="button">
              Go to Checkout
            </Link>
          }
        </form>
      </div>
    </dialog>,
    document.getElementById("modal")!
  );
};

export default CartModal;
