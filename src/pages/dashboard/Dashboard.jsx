import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.config";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [userInfo, setUserInfo] = useState();

  // console.log(user.email);
  // console.log(userInfo.email);
  // console.log(userInfo.name);

  useEffect(() => {
    fetch(`https://computer-shope-server.onrender.com/user/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setUserInfo(data));
  }, [user]);
  // const{email, name, age, }=userInfo
  console.log(userInfo);
  console.log(userInfo);
  return (
    <div>
      <div className="flex justify-between mb-7">
        <h1 className="text-3xl ">Profile Information</h1>
        <Link to={`/dashboard/profile/edit/${userInfo?._id}`} className="btn btn-neutral btn-md">
          Edit Profile
        </Link>
      </div>
      <div>
        <h1>{userInfo?.name}</h1>
        <h1>{userInfo?.email}</h1>
        <h1>{userInfo?.age}</h1>
        <h1>{userInfo?.mobileNumber}</h1>
      </div>
    </div>
  );
};

export default Dashboard;
