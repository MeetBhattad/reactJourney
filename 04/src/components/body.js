import { useState, useEffect } from "react";

function Body() {
  const [Profile, setProfile] = useState([]);
  const [numberOfProfiles, setnumberOfProfiles] = useState([]);
  const [nameofProfile, setnameofProfile] = useState([]);

  async function generateProfile(count) {
    const random = Math.floor(1 + Math.random() * 1000);
    const response = await fetch(
      `https://api.github.com/users?since=${random}&per_page=${count}`,
    );
    const data = await response.json();

    if(Array.isArray(data)){
        setProfile(data);
    }
    else{
        setProfile([]);
    }

  }

  useEffect(() => {
    generateProfile(10);
  }, []);

  async function searchProfile(name) {
    if(!name) return;

    const response = await fetch(`https://api.github.com/users/${name}`);
    const data = await response.json();

    setnameofProfile(data);
  }

  useEffect(() => {
    searchProfile("github");
  }, []);

  return (
    <div className="but">
      <input
        type="text"
        className="inpu"
        placeholder="enter number of profiles"
        value={numberOfProfiles}
        onChange={(e) => setnumberOfProfiles(e.target.value)}
      ></input>
      <button
        className="bu"
        onClick={() => generateProfile(Number(numberOfProfiles))}
      >
        Extract Profile
      </button>

      <input
        type="text"
        className="inpu2"
        placeholder="search user"
        value={nameofProfile?.login || ""}
        onChange={(e) =>
          setnameofProfile({ ...nameofProfile, login: e.target.value })
        }
      ></input>

      <button
        className="bu2"
        onClick={() => searchProfile(nameofProfile?.login)}
      >
        Search Profile
      </button>

      {nameofProfile && nameofProfile.login && (
        <div
          className="searched"
          style={{ border: "2px solid blue", margin: "10px", padding: "10px" }}
        >
          <h3>Searched Result: </h3>
          <img src={nameofProfile.avatar_url} alt="avatar" />
          <h2> {nameofProfile.login}</h2>
          <a href={nameofProfile.html_url} target="_blank">
            Profile
          </a>
        </div>
      )}

      <div className="profile">
        {Array.isArray(Profile) &&
          Profile.map((value) => {
            return (
              <div key={value.id} className="cards">
                <img src={value.avatar_url}></img>
                <h2>{value.login}</h2>
                <a href={value.html_url} target="_blank">
                  Profile
                </a>
              </div>
            );
          })}
        
      </div>
    </div>
  );
}

export default Body;
