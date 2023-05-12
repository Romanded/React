import React from 'react';

const Select = ({setValue}) => {
    return (
        <select onChange={(e) => setValue(e.target.value)} className='sort'>
            <option value='Date'>по дате добавления</option>
            <option value='term'>по дате выполнения</option>
            <option value='alphabet'>по алфавиту</option>
        </select>
    );
};

export default Select;