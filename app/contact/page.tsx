'use client'
import Link from 'next/link';
import Main from '../components/mainStyle/main';
import { NavLink } from '../components/navLink/navLink';
import Footer from '../home/footer/footer';
import Header from '../home/header/header';
import styles from './contact.module.css';
import {useForm, SubmitHandler} from 'react-hook-form';

type Input = {
    name: string;
    email: string;
    number: number;
    message: string;
}

export default function Contact(){
    const {register, handleSubmit, formState:{errors}, control} = useForm<Input> ()
    const onSubmit: SubmitHandler<Input> = (data) => alert('Your message is sent');
    
    return(
        <Main clName={styles.main}>
            <Header></Header>
            <NavLink title={'contact'}></NavLink>
            <Main clName={styles.content}>
                <div className={styles.left}>
                    <div className={styles.contactInfo}>
                        <h3 className={styles.call}>Call To Us</h3>
                        <div className={styles.text}>
                            <span>We are available 24/7, 7 days a week.</span>
                            <Link className={styles.links} href={'tel:+123456789'}>Phone +123 456 789</Link>
                        </div>
                    </div>
                    <div className={styles.contactInfo}>
                    <h3 className={styles.mail}>Write To Us</h3>
                        <div className={styles.text}>
                            <span>Fill out our form and we will contact you within 24 hours.</span>
                            <Link className={styles.links} href={'mailto:example@mail.com'}>Email example@mail.com</Link>
                        </div>
                    </div>
                </div>

                <div className={styles.right}>
                    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                        <input {...register('name', 
                            {required: 'Name is required',
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
                            placeholder='Your Name'/>
                        <span className={styles.error}>{errors.name?.message}</span>
                        <input {...register('email', 
                            {required: 'Email is required', 
                            pattern: {
                                value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                                message: 'This is not email'}
                        })}
                            placeholder='Your Email'/>
                        <span className={styles.error}>{errors.email?.message}</span>
                        <input {...register('number', 
                            {pattern: {
                                value: /[+][0-9]{1,4}[-\s\./0-9]*$/,
                                message: 'Number should start with +'}
                        })}
                            placeholder='Your Number'/>
                        <span className={styles.error}>{errors.number?.message}</span>
                        <textarea className={styles.message} cols={70} rows={7} maxLength={1000}
                            {...register('message',
                                {required: 'This is required'}
                            )}
                            placeholder='Your Message'></textarea>
                        <span className={styles.error}>{errors.message?.message}</span>
                        <input className={styles.submit} id='submit' type="submit" value="Send your message" />
                    </form>
                </div>
            </Main>
            <Footer></Footer>
        </Main>
    )
}