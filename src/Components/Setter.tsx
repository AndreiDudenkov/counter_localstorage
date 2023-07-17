import React, {useEffect, useState} from 'react';
import {SuperButton} from './SuperButton';
import {SuperInput} from './SuperInput';
import {useDispatch, useSelector} from 'react-redux';
import {AppStateType} from '../BLL/store';
import {setMaxValueAC, setMinValueAC} from '../BLL/set-reducer';
import {setResetCounterAC} from '../BLL/counter-reducer';
import styled from 'styled-components';
import {setCounterValueAC} from '../BLL/countMessage-reducer';


export const Setter: React.FC = () => {
    const valueMin = useSelector<AppStateType, number>(state => state.set.valueMin)
    const valueMax = useSelector<AppStateType, number>(state => state.set.valueMax)
    const countMessage = useSelector<AppStateType, string>(state => state.message.message)

    const dispatch = useDispatch()

    const onChangeMaxHandler = (valueMax: number) => {
        dispatch(setMaxValueAC(valueMax))
        dispatch(setCounterValueAC('enter values and press \'set\''))
    }
    const onChangeMinHandler = (valueMin: number) => {
        dispatch(setMinValueAC(valueMin))
        dispatch(setCounterValueAC('enter values and press \'set\''))

    }
    const setOnclickHandler = () => {
        dispatch(setResetCounterAC(valueMin))
        dispatch(setCounterValueAC(''))

    }
    if (valueMax < 0 || valueMin < 0 || valueMin > valueMax || valueMin === valueMax) {
        dispatch(setCounterValueAC('incorrect value!'))
    }
    return (

        <SetWrapper>

            <SetInputsWrapper>
                <ValueMaxWrapper>
                    value max:
                    <SuperInput
                        type={'number'}
                        value={valueMax}
                        onChange={onChangeMaxHandler}
                        error={valueMax < 0 || valueMin > valueMax || valueMin === valueMax}
                    />
                </ValueMaxWrapper>

                <ValueMinWrapper>
                    value min:
                    <SuperInput
                        type={'number'}
                        value={valueMin}
                        onChange={onChangeMinHandler}
                        error={valueMin < 0 || valueMin === valueMax || valueMin > valueMax}
                    />
                </ValueMinWrapper>
            </SetInputsWrapper>

            <ButtonWrapper>
                <SuperButton
                    name={'set'}
                    callback={setOnclickHandler}
                    disabled={valueMax < 0 || valueMin < 0 || valueMin > valueMax || valueMin === valueMax}
                />
            </ButtonWrapper>

        </SetWrapper>
    );
};
const SetWrapper = styled.div`
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
const ButtonWrapper = styled.div`
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
const SetInputsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgb(40, 40, 45);
  border: 2px solid mediumturquoise;
  justify-content: space-around;
  align-items: center;
  height: 120px;
  width: 300px;
  color: black;
  font-size: 1em;
  font-weight: bold;
  border-radius: 10px;
  color: mediumturquoise;
`
const ValueMaxWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`
const ValueMinWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`
