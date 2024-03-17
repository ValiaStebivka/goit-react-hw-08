import { RegisterForm } from '../../components/Register/RegisterForm';
import css from './PegisterPage.module.css';

export default function RegisterPage() {
 
  return (
    <div className={css.wrapper}>
      <h1 className={css.text}>Registration</h1>
      <RegisterForm/>
    </div>
  );
}
