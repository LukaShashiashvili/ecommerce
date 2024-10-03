'use client'
import axios from 'axios';
import {useForm} from 'react-hook-form';
import styles from './login.module.css';
import { Authbutton } from '@/app/components/authButton/authButton';
import { Submit } from '@/app/components/Submit/submit';

type Input = {
    email: string;
    password: string;
    message: string;
}

export function Login(){

    const form = useForm<Input>();

    const onLogin = (values: any) => {
        axios.post('http://localhost:3000/auth/login', values)
            .then((res) => {
                localStorage.setItem('user', JSON.stringify(res.data)) 
            })
    }

    return (
    <div>
        <h1>Log in</h1>
        <form className={styles.form} onSubmit={form.handleSubmit(onLogin)}>
            <input {...form.register('email', {required: 'Please enter your email',
                pattern: {
                    value:/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                    message: 'This is not email'
                }
            })} 
                type="email"
                placeholder='Email'/>
            <span className={styles.error}>
                    {form.formState.errors.email?.message}
            </span>
            <input {...form.register('password', {required: 'Please enter your password'})} 
                type="password" 
                placeholder='Password'/>
            <span className={styles.error}>
                    {form.formState.errors.password?.message}
            </span>
            <Submit title={'Log in'}></Submit>
        </form>
        <Authbutton clName={styles.authButton} title={'Create account'}></Authbutton>
    </div>
    )
}