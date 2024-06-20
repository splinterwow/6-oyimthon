import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";

function useLogin() {
  const signUpWithGoogle = async () => {
    const provider = new GoogleAuthProvider();

    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      alert("yaxshi");
    } catch (error) {
      const errorMessage = error.message;
      alert("error");
    }
  };

  return { signInWithPopup };
}

export { useLogin };
