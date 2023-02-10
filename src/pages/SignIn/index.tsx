import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { IUserLoginPost } from "Types/Entity/AuthEntity";
import { loginAction } from "../../Redux/AuthSlice";
import { RootState } from '../../Redux/store'
import "./signin.scss";

const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const authData = useSelector((state: RootState) => state.auth)
  const userData = useSelector((state: RootState) => state.user)
  console.log('authData: ', authData);
  console.log('authData: ', userData.userInfo);

  const [count, setcount] = useState<number>(0)

  const handleClick = () => {

    let requestPayload: IUserLoginPost = {
      email: 'admin@clefill.com',
      password: "123456",
      deviceId: '12',
      deviceType: "web",
      fcmToken: ''
    }

    dispatch(loginAction(requestPayload))
      .then((res) => navigate("/dashboard"))
      .catch((err) => { })

    navigate("/dashboard")
  };

  const onPlus = () => { setcount(count + 1) }
  const onMinus = () => { setcount(count - 1) }

  return (
    <>
      <div>
        <h2 style={{ textAlign: "center" }}>In SignIn</h2>
        <div style={{ textAlign: "center" }}>
          <button type="button" onClick={onPlus}>+</button>
          Just a counter {count}
          <button type="button" onClick={onMinus}>-</button>
        </div>
      </div>

      <br />

      <div style={{ display: "flex", justifyContent: "center" }}>
        <button type="button" onClick={handleClick}>
          Login Test
        </button>
      </div>
    </>
  );
};

export default SignIn;
