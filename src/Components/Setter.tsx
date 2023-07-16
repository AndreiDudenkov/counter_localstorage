import React, {useEffect, useState} from 'react';
import {SuperButton} from './SuperButton';
import {SuperInput} from './SuperInput';

type SetterType = {
    // setMin: (value: number) => void
    // setMax: (value: number) => void
    setMinValueForCounter: (value:number) => void
    setMaxValueForCounter: (value:number) => void
};

export const Setter: React.FC<SetterType> = ({ setMinValueForCounter, setMaxValueForCounter}) => {
    const [maxInputValue, setMaxInputValue] = useState<number>(0)
    const [minInputValue, setMinInputValue] = useState<number>(0)

    const valueMinAsString = localStorage.getItem('counterMinInputValue')
    const receivedLocalMinValue = valueMinAsString && JSON.parse(valueMinAsString)

    const valueMaxAsString = localStorage.getItem('counterMaxInputValue')
    const receivedLocalMaxValue = valueMaxAsString && JSON.parse(valueMaxAsString)

    useEffect(()=>{
        setMinInputValue(receivedLocalMinValue)
        setMaxInputValue(receivedLocalMaxValue)
    }, [])


    const onChangeMaxHandler = (value: number) => {
        setMaxInputValue(value)

    }
    const onChangeMinHandler = (value: number) => {
        setMinInputValue(value)

    }
    const setOnclickHandler = () => {
        setMinValueForCounter(minInputValue)
        setMaxValueForCounter(maxInputValue)
        localStorage.setItem('counterMinInputValue', JSON.stringify(minInputValue))
        localStorage.setItem('counterMaxInputValue', JSON.stringify(maxInputValue))
    }
    return (

        <div className={'set'}>
            <SuperButton name={'set'} callback={setOnclickHandler}/>
            <SuperInput type={'number'} value={maxInputValue} onChange={onChangeMaxHandler}/>
            <SuperInput type={'number'} value={minInputValue} onChange={onChangeMinHandler}/>
        </div>
    );
};