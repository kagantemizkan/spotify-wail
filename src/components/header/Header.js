import React from "react";
import "./header.css";
import SpotifyWAIL from "../../images/spotifywail-transformed.png";


export default function Footer() {
  return (
    <div className="header">
      <div className="headerContent">
        <div className="spotifyWail">
        <img className="spotifyImage" src={SpotifyWAIL} alt="Spotify Logo" width={225} />
        </div>
        
        <div className="headerListExit">
        <p className="exit">Exit</p>
        </div>
        
        <div className="headerListAbout">
        <p className="aboutUs">About Us</p>
        </div>
      </div>
    </div>
  );
}
