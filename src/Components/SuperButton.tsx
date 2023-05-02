import React from 'react';

type SuperButtonType = {
    name: string
    callback: () => void
}

export const SuperButton: React.FC<SuperButtonType> = ({name, callback}) => {
    const onClickHandler = () => {
        callback()
    }
    return (
        <div>
            <button onClick={onClickHandler}>{name}</button>
        </div>
    );
};

