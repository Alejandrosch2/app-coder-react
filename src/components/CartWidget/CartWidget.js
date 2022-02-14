const CartWidget = () => {
    return(
        <button className="Option" style={{ backgroundColor: 'white', color: 'black', fontSize: 14}}>
            <img src="/images/cart.svg" alt='cart' style={{marginRight: 10}}/>
            0
        </button>
    );
}

export default CartWidget
