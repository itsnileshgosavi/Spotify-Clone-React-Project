import React, { useEffect } from 'react'
import { useStateProvider } from '../utils/StateProvider';
import axios from 'axios';
import { reducerCases } from '../utils/constants';
import styled from 'styled-components';

export default function CurrentTrack() {
    const [{ token, currentlyPlaying } , dispatch] = useStateProvider();

    useEffect (()=>{
        const getCurrentTrack = async ()=> {
            const response = await axios.get("https://api.spotify.com/v1/me/player/currently-playing",{
                headers:{
                    Authorization: "Bearer " + token,
                    "Content-Type":"application/JSON"
                },
            });
         if(response.data !==""){
            const currentlyPlaying = {
                id: response.data.item.id,
                name: response.data.item.name,
                artists: response.data.item.artists.map((artist) => artist.name),
                image: response.data.item.album.images[2].url,
            };
            dispatch({type: reducerCases.SET_PLAYING, currentlyPlaying});

         }else {
            dispatch({ type: reducerCases.SET_PLAYING, currentPlaying: null });
          }
       
         };
         getCurrentTrack();
    }, [token, dispatch]);
  return (
    <Container>
       { currentlyPlaying && (
        <div className="track">
            <div className="track__image">
                <img src={currentlyPlaying.image} alt="track_image" />
            </div>
            <div className="track__info">
            <h4 className="track__info__track__name">{currentlyPlaying.name}</h4>
            <h6 className="track__info__track__artists">
              {currentlyPlaying.artists.join(", ")}
            </h6>
          </div>
        </div>
       )}
    </Container>
  );
};

const Container = styled.div`
  .track {
    display: flex;
    align-items: center;
    gap: 1rem;
    &__image {
    }
    &__info {
      display: flex;
      flex-direction: column;
      gap: 0.3rem;
      &__track__name {
        color: white;
      }
      &__track__artists {
        color: #b3b3b3;
      }
    }
  }
`;

