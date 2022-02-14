 import React, { useState, useEffect } from "react";
 import { Card, Stack } from "react-bootstrap"
 // import items from "../items/items"
 
 const ItemListContainer = (props) => {

    const [stock, setStock] = useState(0)

  añadirCarrito(() => {
        stock = stock - 1
  })

  

  useEffect(() => {
    console.log('El componente se monto')
    setStock(stock + 1)
    
    return () => {
        console.log('Me voy a desmontar')
        setStock(0)          
    }
}, [])

useEffect(() => {
    console.log('count cambio')

    return () => {
        console.log('return count')
        if(stock === 10) {
            setStock(0)
        }
    }
}, [stock])


  const decrement = () => {
    if(stock > 0) {
        setStock(count - 1)

    }
}

const increment = () => {
    setStock(count + 1)
}

}

    return( 
        <>
         <button onClick={increment}>+</button>
        <button onClick={ decrement }>-</button>
        </>
    
        
    )

  //  return (
       // <>
         //    <Card style={{ width: '18rem' }} key ={item.id} >
         //   <Card.Img variant="top" src="{item.image}" />
          //   <Card.Body>
          //   <Card.Title>Darkest Dungeon</Card.Title>
          //           <h3>{stock}</h3>
          //   <button onClick={ decrement }>-</button>
         //   <button onClick={increment}>+</button>
         //    <Button variant="primary" onAdd={añadirCarrito} >COMPRAR</Button>
           //  </Card.Body>
         //    </Card>

       // </>
       
  //  )
 

 export default ItemListContainer