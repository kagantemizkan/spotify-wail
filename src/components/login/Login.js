import React from "react";
import "./login.css";
import Header from "../header/Header"
import Footer from "../footer/Footer";


export default function Login() {
  const handleClick = () => {
    const clientId = "6303653d18084bdf98da2d19aafc0e63";
    const redirectUrl = "http://wail.unaux.com/";
    const apiUrl = "https://accounts.spotify.com/authorize";
    const scope = [
      "user-read-email",
      "user-read-private",
      "user-read-playback-state",
      "user-read-playback-state",
      "user-modify-playback-state",
      "user-read-currently-playing",
      "user-read-playback-position",
      "user-top-read",
      "user-read-recently-played",
    ];

    window.location.href = `${apiUrl}?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scope.join(
      " "
    )}&response_type=token&show_dialog=true`;
  };

  return (
    <>
      <Header />
      <div className="textDiv">
        <h1 className="text1">What Am I Listening</h1>
        <h3 className="text2">This app shows you what you are listening in Spotify</h3>
        </div>    
      <div className="buttonDiv">
        <button className="btn" onClick={handleClick}>
          <p className="loginText">Login with Spotify</p>
        </button>
      </div>
    </>
  );
}
