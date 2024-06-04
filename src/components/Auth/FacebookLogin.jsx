import { useSignInWithFacebook } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/firebase.config";

const FacebookLogin = () => {
  const [signInWithFacebook] = useSignInWithFacebook(auth);

  const handleFacebookLoging = () => {
    //

    signInWithFacebook().then((data) => {
      if (data?.user?.email) {
        const userInfo = {
          email: data?.user?.email,
          name: data?.user?.displayName,
        };
        fetch("https://computer-shope-server.onrender.com/user", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userInfo),
        })
          .then((res) => res.json())
          .then((data) => {
            localStorage.setItem("token", data?.token);
          });
      }
    });
  };

  return (
    <div>
      <button onClick={handleFacebookLoging} className=" px-5 py-3 bg-yellow-500 text-white w-full rounded-lg">
        Facebook Login
      </button>
    </div>
  );
};

export default FacebookLogin;
