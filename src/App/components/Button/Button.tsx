import React from 'react';
import { IButtonProps } from './types';


export const Button = React.memo(function Button({ onClick }: IButtonProps): JSX.Element {
    return (
        <button type="button" onClick={onClick}>
            get random user
        </button>
    );
})
