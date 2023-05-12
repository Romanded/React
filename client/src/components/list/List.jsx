import React, {useEffect, useState} from 'react';
import cl from './List.module.css'
import Item from "../item/Item";

const List = ({list, sortList, setSortList}) => {

    const deleteItem = (i) => {
        setSortList([...sortList].filter((e, index) =>  index !== i))
    }

    return (
        <div className={cl.list}>
            {[...list].map(e =>
                <Item deleteItem={() => deleteItem(list.indexOf(e))} e={e}/>
            )}
        </div>
    )
};

export default List;