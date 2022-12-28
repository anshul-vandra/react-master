import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginAction } from "../../Redux/AuthSlice";
import "./signin.scss";

const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = () => {

    let requestPayload = {
      email: 'admin@clefill.com',
      password: "123456",
      deviceId: '12',
      deviceType: "web",
      fcmToken: ''
    }

    dispatch(loginAction(requestPayload))
      .then((res) => navigate("/dashboard"))
      .catch((err) => alert(err?.message || 'Please try agian!'))

  };

  return (
    <>
      <div>
        <h2 style={{ textAlign: "center" }}>In SignIn</h2>
      </div>
      <br />
      <div style={{ display: "flex", justifyContent: "center" }}>
        {/* <input onChange={(e) => { optimizedFn(e.target.value) }} /> */}
        <button type="button" onClick={handleClick}>
          Login Test
        </button>
      </div>
    </>
  );
};

export default SignIn;
