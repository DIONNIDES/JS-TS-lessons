import React from 'react';
import {ManType} from './07_destructuring_asignment.test';

export type DestructuringPropsType = {
    title:string
    man:ManType
}

export const Destructuring:React.FC<DestructuringPropsType> = ({title, man, ...props}) => {
    return (
        <div>
            <h3>{title}</h3>
            <hr/>
            <div>{man.name}</div>
        </div>
    );
};
