import React, {useState} from 'react';
import {SuperButton} from './SuperButton';
import {SuperInput} from './SuperInput';

type SetterType = {
    setMin: (value: number) => void
    setMax: (value: number) => void
    setMinValue: (value:number) => void
    setMaxValue: (value:number) => void
};

export const Setter: React.FC<SetterType> = ({setMin, setMax, setMinValue, setMaxValue}) => {
    const [maxInputValue, setMaxInputValue] = useState<number>(5)
    const [minInputValue, setMinInputValue] = useState<number>(0)


    const onChangeMaxHandler = (value: number) => {
        setMaxInputValue(value)
        setMax(value)
    }
    const onChangeMinHandler = (value: number) => {
        setMinInputValue(value)
        setMin(value)
    }
    const setOnclickHandler = () => {
        setMinValue(minInputValue)
        setMaxValue(maxInputValue)
    }
    return (

        <div className={'set'}>
            <SuperButton name={'set'} callback={setOnclickHandler}/>
            <SuperInput type={'number'} value={maxInputValue} onChange={onChangeMaxHandler}/>
            <SuperInput type={'number'} value={minInputValue} onChange={onChangeMinHandler}/>
        </div>
    );
};