import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from './Components/Counter';
import {Setter} from './Components/Setter';
import styled from 'styled-components';

export const App = () =>{

    return (
        <AppWrapper>
            <Counter/>
            <Setter/>
        </AppWrapper>
    );
}
const AppWrapper = styled.div`
  height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(40, 40, 45) ;
`