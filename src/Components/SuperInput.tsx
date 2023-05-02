import React from 'react';

type SuperInputType = {
    type: string
    value: number
    onChange: (value:number) => void
};

export const SuperInput: React.FC<SuperInputType> =({type, value, onChange })=>{
    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange(Number(e.currentTarget.value))
    }
    return (
        <div>
            <input type={type} value={value} onChange={onChangeHandler}/>
        </div>
    );
}
;