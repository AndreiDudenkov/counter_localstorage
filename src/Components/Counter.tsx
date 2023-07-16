import React, {useEffect, useState} from 'react';

import {SuperButton} from './SuperButton';
import {useSelector} from 'react-redux';
import {AppRootStateType} from '../BLL/store';

type CounterType = {
    minValueForCounter: number
    maxValueForCounter: number
}

export const Counter: React.FC<CounterType> = ({minValueForCounter, maxValueForCounter}) => {

    const [counterCurrentValue, setCounterCurrentValue] = useState<number>(minValueForCounter)
    const storeCount = useSelector<AppRootStateType, number>(state => state.counter.value)

    useEffect(() => {
        setCounterCurrentValue(minValueForCounter)
    }, [minValueForCounter])


    const resetOnclickHandler = () => {
        setCounterCurrentValue(minValueForCounter)
    }


    const incOnclickHandler = () => {
        setCounterCurrentValue(
            counterCurrentValue < maxValueForCounter
                ? counterCurrentValue + 1
                : counterCurrentValue
        )
    }

    return (
        <div className={'counter'}>
            <div className={'count'}>
                {counterCurrentValue}
            </div>

            <div className={'buttons'}>
                <SuperButton name={'reset'} callback={resetOnclickHandler}/>
                <SuperButton name={'inc'} callback={incOnclickHandler}/>
            </div>
        </div>

    );
};

