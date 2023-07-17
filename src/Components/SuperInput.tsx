import React from 'react';
import styled from 'styled-components';
import {isBooleanObject} from 'util/types';
import {Simulate} from 'react-dom/test-utils';


type SuperInputType = {
    type: string
    value: number
    onChange: (value: number) => void
    error: boolean
};

export const SuperInput: React.FC<SuperInputType> = ({type, value, onChange, error}) => {
    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange(Number(e.currentTarget.value))
    }

    return (
        <div>
            <StyledInput type={type} value={value} onChange={onChangeHandler} error={error}/>
        </div>

    );
};

const StyledInput = styled.input<{ error: boolean; }>`
  border: 2px solid mediumturquoise;
  border-radius: 10px;
  padding: 5px; 
  text-align: center; 
  box-sizing: border-box;
  outline: none;
  background-color: ${props => props.error ? 'red' : 'white'};
`;