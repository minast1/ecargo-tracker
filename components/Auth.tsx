import SignIn from './SignIn';
import SignUp from './SignUp';
//import PasswordReset from './PasswordReset';
import { authStore } from '../src/authStore';

  
const Auth = () => {

  const { authView } = authStore();
  return (
  <main>
       {
          authView === 'sign_in' ? (<SignIn/>) : (<SignUp/>) 
      }
      </main>
     )
     
}

export default Auth