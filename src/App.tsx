import UserInfo from "./components/UserInfo/UserInfo";

const dummyData = {
  name: "John Smith",
  email: "johnsmith@gmail.com",
  phoneNumber: "9800000000",
};

function App() {
  return (
    <>
      <UserInfo
        name={dummyData.name}
        email={dummyData.email}
        phoneNumber={dummyData.phoneNumber}
      ></UserInfo>
    </>
  );
}

export default App;
