import Formulario from '../src/Components/Form/Formulario';

import ItemCart from '../src/Components/ItemCart/ItemCart';
import Table from 'react-bootstrap/Table';

function CartList() {
    const { cart, removeToCart, increment, decrement } = useCartContext()

    const handleDelete = (id) => {
        removeToCart(id)
    }

    const onIncrement = (id) => {
        increment(id)  
    }

    const onDecrement = (id) => {
        decrement(id)
    }

    return (
        <div className = 'container-fluid d-flex gap-4 justify-content-around'>
            <div className = 'col-8'>
                <h1>Detalles de la compra</h1>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Cantidad</th>
                            <th>Producto</th>
                            <th>Precio</th>
                            <th>Subtotal</th>
                            <th>Acción</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map(item => <CartItem key = {item.id} item = {item} handleDelete = {handleDelete} handleIncrement = {onIncrement} handleDecrement = {onDecrement}></CartItem>)}        
                    </tbody>
                </Table>
            </div>
        <div className = 'clo-3'>
            <h1>Datos del usuario</h1>
            <Formulario/>
        </div>
    </div>
    );
}

export default CartList