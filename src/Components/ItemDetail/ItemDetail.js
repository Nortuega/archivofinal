import React from 'react'
import ItemCount from '../ItemCount/ItemCount'


const ItemDetail = ({item}) => {

  const onAdd = () => {

  }



  return (
    <div className='row'>
        <div className = 'col-md4 offset-md4'>
        <img src = {item.img} className = 'card-fluid' alt = {item.title}/>
        <h2>{item.title}</h2>
        <p>{item.description}</p>
        <p>Cantidad: {item.stock}</p>
        <p>$ {item.price}</p>
        <ItemCount stockItems = {10} onAdd = {onAdd}/>
        </div>
    </div>
  )
}

export default ItemDetail