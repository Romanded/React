import React from 'react';

const Fields = ({fieldsCountArr, limit, setStart}) => {
    return (
        <div>
            {fieldsCountArr.map((e, i) =>
                <button onClick={() => setStart(i * limit)}>{i + 1}</button>
            )}
        </div>
    );
};

export default Fields;