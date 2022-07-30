import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

import SignUpForm from "../../components/sigh-up-form/sign-up-form.component";

const SighIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };
  return (
    <div>
      <button onClick={logGoogleUser}>Sign in Page</button>
      <SignUpForm />
    </div>
  );
};

export default SighIn;
