import { RenderInput } from "components/common/FormField";
import { Link } from "react-router-dom";
import PropExample from '../../components/common/PropExample'
import "./dashboard.scss";

let users = [
  {
    _id: 'string',
    userName: 'string',
    email: 'string',
    phoneNumber: 'string',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    _id: 'string2',
    userName: 'string2',
    email: 'string2',
    phoneNumber: 'string2',
    createdAt: new Date(),
    updatedAt: new Date(),
  }
]

const Dashboard = () => {

  return (
    <>
      <h2 style={{ textAlign: "center" }}>Dashboard </h2>

      <br />

      <h4 style={{ textAlign: "center" }}>
        <Link to="/my-account">My Account</Link>
      </h4>

      <br />

      <div>
        <PropExample
          age={12}
          firstName="anshul agile"
          friends={users}
        />
      </div>

      <div>
        <RenderInput
          labelName="User Name"
          name="userName"
          type="text"
        />
      </div>
    </>
  );
};

export default Dashboard;
