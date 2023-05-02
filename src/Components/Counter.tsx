import React, {ChangeEvent, FC, useEffect, useState, useSyncExternalStore} from 'react';
import {SuperInput} from './SuperInput';
import {SuperButton} from './SuperButton';

type CounterType = {
    minSetValue: number
    maxSetValue: number
    minValue:number
    maxValue:number
}

export const Counter: React.FC<CounterType> = ({minSetValue, maxSetValue,minValue,maxValue}) => {
   const [currentValue, setCurrentValue] = useState<number>(minValue)

    useEffect(() => {
        setCurrentValue(minValue)
    }, [minValue])



    const resetOnclickHandler = () => {
        setCurrentValue(0)
    }



    const incOnclickHandler = () => {
        currentValue < maxValue
            ? setCurrentValue(currentValue + 1)
            : null

    }

    return (
        <div className={'counter'}>
            <div className={'count'}>
                {currentValue}
            </div>

            <div className={'buttons'}>
                <SuperButton name={'reset'} callback={resetOnclickHandler}/>
                <SuperButton name={'inc'} callback={incOnclickHandler}/>
            </div>
        </div>

    );
};

