import React from 'react';
import styled from 'styled-components';

type SuperButtonType = {
    name: string
    callback: () => void
    disabled: boolean
}

export const SuperButton: React.FC<SuperButtonType> = ({name, callback, disabled}) => {
    const onClickHandler = () => {
        callback()
    }
    return (
        <div>
            <StyledButton onClick={onClickHandler} disabled={disabled}>{name}</StyledButton>
        </div>
    );
};

 const StyledButton = styled.button`
   height: 60%;
   width: 100%;
   background-color:mediumturquoise;
   font-size: 2em;
   font-weight: bold;
   border-radius: 10px;
`