'use client'
import React, { useState } from 'react';
import styles from './authButton.module.css';

interface Props{
    title: string | number;
    clName?: string;
}

export const Authbutton = (props: Props) => {

    const clNames = [styles.container];

    if(props.clName){
        clNames.push(props.clName)
    }

    return (
        <div className={clNames.join(' ')}>
            {props.title}
        </div>
    )
}