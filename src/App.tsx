import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from './Components/Counter';
import {Setter} from './Components/Setter';


export const App = () =>{


    const [minValueForCounter, setMinValueForCounter] = useState<number>(0)
    const [maxValueForCounter, setMaxValueForCounter] = useState<number>(0)

    const valueMinAsString = localStorage.getItem('counterMinInputValue')
    const receivedLocalMinValue = valueMinAsString && JSON.parse(valueMinAsString)

    const valueMaxAsString = localStorage.getItem('counterMaxInputValue')
    const receivedLocalMaxValue = valueMaxAsString && JSON.parse(valueMaxAsString)

    useEffect(()=>{
        setMinValueForCounter(receivedLocalMinValue)
        setMaxValueForCounter(receivedLocalMaxValue)
    }, [])

    return (
        <div className="App">

            <Counter
                minValueForCounter={minValueForCounter}
                maxValueForCounter={maxValueForCounter}
            />
            <Setter
                setMinValueForCounter={setMinValueForCounter}
                setMaxValueForCounter={setMaxValueForCounter}
            />


        </div>
    );
}


