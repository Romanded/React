import React from 'react';
import cl from './PostButton.module.css'

const PostButton = ({setVisibleState}) => {
    const view = () => {
        setVisibleState('')
    }

    return (
        <button className={cl.btn} onClick={view}>Добавить</button>
    );
};

export default PostButton;