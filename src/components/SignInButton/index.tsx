import { FaGithub } from "react-icons/fa";
import { FiX } from 'react-icons/fi'
import styles from './styles.module.scss';
import { signIn, signOut, useSession } from 'next-auth/client';
export function SignInButton() {
  const [session] = useSession();
  console.log(session)
  return session ? (
    <button type="button" className={styles.SignInButton}>
      <FaGithub color="#84d361"/>
      Sign in with Github

      <FiX color="#737388" className={styles.closeIcon} 
        onClick={() => signOut()}
      />
    </button>
  ) : (
    <button type="button" className={styles.SignInButton}
      onClick={() => signIn('github')}>
      <FaGithub color="#eba417"/>
      Sign in with Github
    </button>
  )
}