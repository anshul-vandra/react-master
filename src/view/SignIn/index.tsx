import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ILoginApiParam } from "Types/Entity/AuthEntity";
import { authFail, authSuccess, loginAction } from "../../services/AuthSlice";
import { useAppSelector } from '../../services/store'
import "./signin.scss";
import { ROUTES } from "constants/routes";
import { IApiError, IApiSuccess } from "Types/Common";
import Button from "components/common/Button";

const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isLoggedIn } = useAppSelector((state) => state.auth)
  const { userList } = useAppSelector((state) => state.user)

  console.log('userList: ', userList);
  console.log('isLoggedIn: ', isLoggedIn);

  const [count, setcount] = useState<number>(0)

  const handleClick = () => {

    let requestPayload: ILoginApiParam = {
      email: 'admin@clefill.com',
      password: "123456",
      deviceId: '12',
      deviceType: "web",
      fcmToken: ''
    }

    dispatch(loginAction(requestPayload))
      .then((res: IApiSuccess) => {
        dispatch(authSuccess(res?.data))
        navigate(ROUTES.dashboard)
      })
      .catch((err: IApiError) => {
        dispatch(authFail({}))
      })

    navigate(ROUTES.dashboard)
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
        <Button
          variant="primary"
          type="button"
          onClick={handleClick}
        >
          Login Test
        </Button>
      </div>
    </>
  );
};

export default SignIn;
