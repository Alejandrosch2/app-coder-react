import React, { useState } from "react";

import Button from "react-bootstrap/Button";

const ItemCount =({ stock, initial })  => {
    const [count, setCount] = useState(initial);

    const sumaItem = () => {

        count > stock ? alert("no hay mas stock") : setCount(count + 1)
    };

    const restaItem = () => {
        if(count > initial ) setCount(count - 1)

    };

    const onAdd = () => {
        alert("agregaste $.{count} al carrito")
    };


    return (
        <div>

            <h3>  Darkest dungeon      </h3>
            <p> $150  </p>
            <Button id="button" onClick={restaItem}>-</Button>
                <label> {count} </label>
            <Button id="button" onClick={sumaItem} >+</Button>
            <Button id="button" onClick={onAdd}>Add</Button>   

        </div>

    )

};

export default ItemCount;