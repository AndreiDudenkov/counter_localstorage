import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from './Components/Counter';
import {Setter} from './Components/Setter';


function App() {
    const [minSetValue, setMinSetValue] = useState<number>(0)
    const [maxSetValue, setMaxSetValue] = useState<number>(0)
    const [minValue, setMinValue] = useState<number>(minSetValue)
    const [maxValue, setMaxValue] = useState<number>(minSetValue)


    return (
        <div className="App">
            <Counter minSetValue={minSetValue}
                     maxSetValue={maxSetValue}
                     minValue={minValue}
                     maxValue={maxValue}
            />

            <Setter
                setMin={setMinSetValue}
                setMax={setMaxSetValue}
                setMinValue={setMinValue}
                setMaxValue={setMaxValue}
            />
        </div>
    );
}

export default App;
