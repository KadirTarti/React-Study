import React, { useEffect, useState } from "react";
import mailSvg from "./assets/mail.svg";
import manSvg from "./assets/man.svg";
import womanSvg from "./assets/woman.svg";
import manAgeSvg from "./assets/growing-up-man.svg";
import womanAgeSvg from "./assets/growing-up-woman.svg";
import mapSvg from "./assets/map.svg";
import phoneSvg from "./assets/phone.svg";
import padlockSvg from "./assets/padlock.svg";
import cwSvg from "./assets/cw.svg";
import Footer from "./components/footer/Footer";
import axios from "axios";

const url = "https://randomuser.me/api/";
const defaultImage = "https://randomuser.me/api/portraits/men/75.jpg";
console.log(url);
function App() {
  const [userData, setUserData] = useState(null);
  const [activeLink, setActiveLink] = useState(0);
  const [addedUsers, setAddedUsers] = useState([]); // Yeni durum: eklenen kullanıcıları tutmak için

  const fetchUserData = () => {
    axios.get(url).then((response) => {
      if (response.data.results.length > 0) {
        setUserData(response.data.results[0]);
      }
    });
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  const handleNewUserClick = () => {
    setActiveLink(0);
    fetchUserData(); // Reset active link when fetching new user data
  };

  const handleAddUser = () => {
    setAddedUsers([...addedUsers, userData]);
  };

  const activeLinkHandler = (index) => {
    setActiveLink(index);
  };

  console.log(userData);

  const icons = (userData) => [
    {
      svg: userData.gender === 'male' ? manSvg : womanSvg,
      key: "name",
      data: `${userData.name.first} ${userData.name.last}`,
    },
    { svg: mailSvg, key: "mail", data: userData.email },
    { svg:  userData.gender === 'male' ? manAgeSvg : womanAgeSvg, key: "age", data: userData.dob.age },
    {
      svg: mapSvg,
      key: "street",
      data: `${userData.location.street.number} ${userData.location.street.name}`,
    },
    { svg: phoneSvg, key: "phone number", data: userData.cell },

    { svg: padlockSvg, key: "password", data: userData.login.password },
  ];

  const IconRenderer = ({ svgIcon, iconIndex }) => (
    <button className="icon" onMouseEnter={() => setActiveLink(iconIndex)}>
      <img src={svgIcon.svg} alt={svgIcon.key} id="iconImg" />
    </button>
  );

  if (!userData) return null;

  const iconData = icons(userData);

  return (
    <main>
      <div className="block bcg-orange">
        <img src={cwSvg} alt="cw" id="cw" />
      </div>
      <div className="block">
        <div className="container">
          <img
            src={userData.picture.large}
            alt="random user"
            className="user-img"
          />
          <p className="user-title">My {iconData[activeLink].key} is</p>
          <p className="user-value">{iconData[activeLink].data}</p>

          <div className="values-list">
            {iconData.map((icon, index) => (
              <IconRenderer svgIcon={icon} iconIndex={index} />
            ))}
          </div>

          <div className="btn-group">
            <button onClick={handleNewUserClick} className="btn" type="button">
              new user
            </button>

            <button onClick={handleAddUser} className="btn" type="button">
              add user
            </button>
          </div>

          <table className="table">
            <thead>
              <tr className="head-tr">
                <th className="th">Firstname</th>
                <th className="th">Email</th>
                <th className="th">Phone</th>
                <th className="th">Age</th>
              </tr>
            </thead>
            <tbody>
              {addedUsers.map((user) => (
                <tr className="body-tr">
                  <td>{user.name.first} {user.name.last}</td>
                  <td>{user.email}</td>
                  <td>{user.cell}</td>
                  <td>{user.dob.age}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Footer />
      </div>
    </main>
  );
}

export default App;
