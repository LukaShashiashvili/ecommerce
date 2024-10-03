import Main from "../components/mainStyle/main";
import Footer from "../home/footer/footer";
import Header from "../home/header/header";
import styles from './authorization.module.css';
import { Login } from "./login/login";
import { Register } from "./register/register";

export default function Authorization(){
    return (
    <Main>
        <Header></Header>
        <div className={styles.content}>
            <img src={'/images/auth.png'} className={styles.photo} />
            {/* <Register></Register> */}
            <Login></Login>
        </div>
        <Footer></Footer>
    </Main>
    )
}