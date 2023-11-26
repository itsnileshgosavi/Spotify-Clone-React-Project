import React from 'react'
import styled from 'styled-components'
import { useStateProvider } from '../utils/StateProvider'
import axios from 'axios';
import { IoVolumeHighSharp } from 'react-icons/io5';

export default function Volume() {
  const [{ token }] = useStateProvider();
  const setVolume = async (e) => {
    await axios.put(
      "https://api.spotify.com/v1/me/player/volume",
      {},
      {
        params: {
          volume_percent: parseInt(e.target.value),
        },
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      }
    );
  };
  return (
    <Container>
        <IoVolumeHighSharp />
        <input type="range" min={0} max={100} onMouseUp={(e=>setVolume(e))}/>
    </Container>
  )
}

const Container=styled.div`  
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    svg {
    color: white;
    transition: 0.2s ease-in-out;
    &:hover {
        color: white;
    }
    }
    .state {
    svg {
        color: white;
    }
    }
    .previous,
    .next,
    .state {
    font-size: 2rem;
    }`;