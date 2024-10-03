'use client'
import axios from 'axios';
import styles from './register.module.css';
import {SubmitHandler, useForm} from 'react-hook-form';
import { Button } from '@/app/components/button/button';
import { NavLink } from '@/app/components/navLink/navLink';
import { Authbutton } from '@/app/components/authButton/authButton';
import { Submit } from '@/app/components/Submit/submit';

type Input = {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
    message: string;
}

export function Register(){

    const form = useForm<Input>();

    const onRegister = (values: any) => {
        axios.post('http://localhost:3000/auth/login', values)
            .then((res) => {
                localStorage.setItem('user', JSON.stringify(res.data)) 
            })
    }
    return (
    <div>
        <h1>Create an account</h1>
        <form className={styles.form} onSubmit={form.handleSubmit(onRegister)}>
            <input {...form.register('firstName',{required: 'Firstname is required',
                            pattern: {
                                value :/^[A-Z a-z]+$/i,
                                message: 'Use A-Z a-z'},
                            minLength: {
                                value: 2,
                                message: 'Min Length is 2'},
                            maxLength: {
                                value: 30,
                                message:'Max Length is 30'}
                            })} 
                            type="text" 
                            placeholder='Firstname'
                            />
                <span className={styles.error}>
                    {form.formState.errors.firstName?.message}
                </span>

            <input {...form.register('lastName',{required: 'Lastname is required',
                            pattern: {
                                value :/^[A-Z a-z]+$/i,
                                message: 'Use A-Z a-z'},
                            minLength: {
                                value: 2,
                                message: 'Min Length is 2'},
                            maxLength: {
                                value: 30,
                                message:'Max Length is 30'}
                            })} 
                            type="text" 
                            placeholder='Lastname'
                            />
                <span className={styles.error}>
                                {form.formState.errors.lastName?.message}
                </span>

            <input {...form.register('email',{required: 'Email is required',
                            pattern:{
                                value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                                message: 'This is not email'}
                        })}
                            type='email'
                            placeholder='Your Email'/>
            <span className={styles.error}>
                {form.formState.errors.email?.message}
            </span>

            <input {...form.register('password', {required: 'Password is required',
                            pattern:{
                                value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
                                message: 'At least one uppercase letter, one lowercase letter and one number'
                            },
                            minLength: {
                                value: 8,
                                message: 'Min Length is 8'},})} 
                            type="password" 
                            placeholder='Password'/>
            <span className={styles.error}>
                {form.formState.errors.password?.message}
            </span>

            <input {...form.register('confirmPassword', {required: 'Confirm your password',
                            pattern:{
                                value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
                                message: 'Passwords do not match'
                            }})} 
                                type="password" 
                                placeholder='Confirm password'/>
            <span className={styles.error}>
                {form.formState.errors.confirmPassword?.message}
            </span>
            <Submit title={'Sign up'}></Submit>

            
        </form>
        <div className={styles.addLinks}>
            <button className={styles.google}>Sign up with Google</button>
            <span>Already have account? </span>
            <Authbutton title={'Log in'}></Authbutton>
        </div>
        
    </div>)
}