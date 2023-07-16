import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {isLabelWithInternallyDisabledControl} from '@testing-library/user-event/dist/utils';
import {useDispatch, useSelector} from 'react-redux';
import {incCounterAC} from './BLL/counter-reducer';
import {AppRootStateType} from './BLL/store';

function App() {
    const value = useSelector<AppRootStateType, number>(state => state.counter.value)
    const dispatch = useDispatch()


    const incHandler = () => {
        dispatch(incCounterAC())
    }

    return (
        <div className="App">
            <h1>{value}</h1>
            <button onClick={incHandler}>inc</button>
        </div>
    );
}

export default App;
