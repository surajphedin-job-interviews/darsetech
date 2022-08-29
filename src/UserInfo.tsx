const UserInfo = (props: UserInfoProps) => {
  const { name, email } = props;
  return (
    <div
      style={{
        padding: "16px",
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        display: "grid",
        gap: "16px",
        borderRadius: "10px",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "12px",
        }}
      >
        <p>Name:</p>
        <p>{name}</p>
      </div>

      <div
        style={{
          display: "flex",
          gap: "12px",
        }}
      >
        <p>Email:</p>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default UserInfo;

interface UserInfoProps {
  name: string;
  email: string;
}
