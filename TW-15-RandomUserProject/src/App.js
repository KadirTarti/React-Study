import "./App.css";
import React, { Fragment, useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import "@fortawesome/fontawesome-free/css/all.css";
import bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [userData, setUserData] = useState([]);
  const [activeLink, setActiveLink] = useState(0);
  const [addedUsers, setAddedUsers] = useState([]); // Yeni durum: eklenen kullanıcıları tutmak için

  useEffect(() => {
    fetchUserData();
  }, []);


  const fetchUserData = () => {
    axios.get("https://randomuser.me/api/").then((response) => {
      setUserData(response.data.results);
    });
  };

  const icons = [
    "fas fa-user fa-3x",
    "fas fa-envelope fa-3x",
    "fas fa-calendar-alt fa-3x",
    "fas fa-map-marker fa-3x",
    "fas fa-phone fa-3x",
    "fas fa-lock fa-3x",
  ];

  const calculateAge = (dob) => {
    const age = new Date().getFullYear() - new Date(dob).getFullYear();
    return age;
  };

  const PhraseGenerator = ({ user }) => {
    const age = calculateAge(user.dob.date);
    const phrases = [
      `Hi, my name is ${user.name.first} ${user.name.last}`,
      `My email adress is ${user.email}`,
      `My age is ${age}`,
      `My street is ${user.location.street.name}`,
      `My phone number is "${user.phone}"`,
      `My password is  "${user.login.password}"`,
    ];
    console.log(user);

    return <h3 className="phrases">{phrases[activeLink]}</h3>;
  };

  const activeLinkHandler = (index) => {
    setActiveLink(index);
  };

  const style = {
    color: "darkred",
  };

  const handleNewUserClick = () => {
    setActiveLink(0);
    fetchUserData(); // Reset active link when fetching new user data
  };

  const handleAddUser = () => {
    // Eğer userData boş değilse, ilk kullanıcıyı addedUsers listesine ekleyin
    if (userData.length > 0) {
      setAddedUsers([...addedUsers, userData[0]]);
    }
  };

  return (
    <div className="App">
      {/* <img
        src="https://coursereport-s3-production.global.ssl.fastly.net/uploads/school/logo/1167/original/Clarusway_Logo.png"
        className="logo"
        alt=""
      /> */}

      <div className="app-user">
        {userData.map((user, index) => {
          return (
            <Fragment key={user.cell}>
              <img src={user.picture.large} alt="#" />
              <PhraseGenerator user={user} />
              <div className="app-icons">
                {icons.map((icon, index) => {
                  return (
                    <i
                      className={
                        index === 0
                          ? userData.length > 0 && userData[0].gender === "male"
                            ? "fas fa-user fa-3x"
                            : "fas fa-star fa-3x"
                          : icon
                      }
                      key={index}
                      onMouseEnter={() => activeLinkHandler(index)}
                      style={activeLink === index ? style : null}
                    ></i>
                  );
                })}
              </div>
            </Fragment>
          );
        })}
        <button onClick={handleNewUserClick}>NEW USER</button>
        <button onClick={handleAddUser}>ADD USER</button>
      </div>

      {/* Eklenen kullanıcıların tablosu */}
      <div>
        <table class="table">
          <thead class="table-dark text-danger">
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Age</th>
          </thead>
          <tbody>
            {addedUsers.map((user, index) => (
              <tr key={index}>
                <td>
                  {user.name.first} {user.name.last}
                </td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>
                  {new Date().getFullYear() -
                    new Date(user.dob.date).getFullYear()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
