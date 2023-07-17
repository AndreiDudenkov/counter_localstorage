import React, {useEffect, useState} from 'react';
import {SuperButton} from './SuperButton';
import {useDispatch, useSelector} from 'react-redux';
import {AppStateType} from '../BLL/store';
import {incCounterAC, setResetCounterAC} from '../BLL/counter-reducer';
import styled from 'styled-components';


export const Counter: React.FC = () => {

    const countValue = useSelector<AppStateType, number>(state => state.counter.value)
    const valueMin = useSelector<AppStateType, number>(state => state.set.valueMin)
    const valueMax = useSelector<AppStateType, number>(state => state.set.valueMax)
    const countMessage = useSelector<AppStateType, string>(state => state.message.message)

    const dispatch = useDispatch()


    const resetOnclickHandler = () => {
        dispatch(setResetCounterAC(valueMin))
    }


    const incOnclickHandler = () => {
        dispatch(incCounterAC())
    }

    return (
        <CounterWrapper>
            <CountWrapper maxCount={countValue === valueMax && countValue !== 0} countMessage={countMessage}>
                {countMessage.length > 0
                    ? countMessage
                    : countValue
                }
            </CountWrapper>

            <CountButtonsWrapper>
                <SuperButton
                    name={'reset'}
                    callback={resetOnclickHandler}
                    disabled={countValue <= valueMin}
                />
                <SuperButton
                    name={'inc'}
                    callback={incOnclickHandler}
                    disabled={countValue >= valueMax || countMessage.length > 0}
                />
            </CountButtonsWrapper>
        </CounterWrapper>

    );
};
const CounterWrapper = styled.div`
  display: flex;
  justify-content: center;
  background-color: rgb(40, 40, 45);
  width: 340px;
  height: 250px;
  flex-direction: column;
  align-items: center;
  border: 2px solid mediumturquoise;
  border-radius: 10px;
  margin: 10px;
`

const CountWrapper = styled.div<{ maxCount: boolean, countMessage:string}>`
  display: flex;
  background-color: rgb(40, 40, 45);
  border: 2px solid mediumturquoise;
  justify-content: center;
  align-items: center;
  height: 120px;
  width: 300px;
  font-size:${props => props.countMessage.length>0  ? '1.2em' : '400%'} ;
  font-weight: bold;
  border-radius: 10px;
  color: ${props => props.maxCount || props.countMessage ==='incorrect value!' ? 'red' : 'mediumturquoise'} ;
`

const CountButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background-color: rgb(40, 40, 45);
  height: 80px;
  width: 300px;
  margin-block: 5px;
  border: 2px solid mediumturquoise;
  border-radius: 10px;
`

