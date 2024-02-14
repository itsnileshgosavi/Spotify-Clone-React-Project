import React from "react";
import styled from "styled-components";

export default function Login() {
  const handleClick = () => {
    const clientId = "057d420adec64095904ebee27e73f91d";
    const redirectURL ="https://itsnileshgosavi.github.io/Spotify-Clone-React-Project/";
    const apiurl = "https://accounts.spotify.com/authorize";
    const scope = [
      "streaming",
      "user-read-email",
      "user-read-private",
      "user-modify-playback-state",
      "user-read-playback-state",
      "user-read-currently-playing",
      "user-read-recently-played",
      "user-read-playback-position",
      "user-top-read",
    ];

    window.location.href = `${apiurl}?client_id=${clientId}&redirect_uri=${redirectURL}&scope=${scope.join()}&response_type=token&show_daialog=true`;
  };
  return (
    <Container>
      <img
        src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Black.png"
        alt="Spotify_logo"
      />
      <button onClick={handleClick}>Login to Spotify</button>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-color: #1db954;
  gap: 5rem;
  img {
    height: 20vh;
  }
  button {
    padding: 10px;
    margin: 1 rem 5 rem;
    border-radius: 100px;
    border: none;
    background-color: black;
    color: white;
    font-size: 1.4 rem;
    cursor: pointer;
  }
`;
