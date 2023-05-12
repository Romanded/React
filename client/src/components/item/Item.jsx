import React from 'react';
import cl from './Item.module.css'

const Item = ({deleteItem, e}) => {

    return (
        <div className={cl.item}>
            <h3>{e.id}</h3>
            <p>{e.task}</p>
            <h3>выполнить до: {e.term}</h3>
            <h6>{e.postDate}</h6>
            <button className={cl.btn} onClick={deleteItem}>&#10006;</button>
        </div>
    );
};

export default Item;