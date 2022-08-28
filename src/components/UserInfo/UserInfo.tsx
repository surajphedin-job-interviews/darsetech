import "./userinfo.css";

const UserInfo = (props: UserInfoProps) => {
  const { name, email, phoneNumber } = props;
  return (
    <div className="root">
      <ul>
        <li>
          <p>Name: </p>
          <p>{name}</p>
        </li>

        <li>
          <p>Email: </p>
          <p>{email}</p>
        </li>

        <li>
          <p>Phone Number: </p>
          <p>{phoneNumber}</p>
        </li>
      </ul>
    </div>
  );
};

export default UserInfo;

interface UserInfoProps {
  name: string;
  email: string;
  phoneNumber: string;
}
