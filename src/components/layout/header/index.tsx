import { useDispatch } from "react-redux";
import './header.scss';
import Button from "components/common/Button";
import { authFail } from "services/AuthSlice";

const Header = () => {
    const dispatch = useDispatch()

    const onLogout = () => {
        dispatch(authFail({}))
    }
    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <h2 >Header</h2>
                <Button
                    variant="primary"
                    type="button"
                    onClick={onLogout}
                >
                    Logout
                </Button>
            </div>
        </>
    );
}

export default Header;