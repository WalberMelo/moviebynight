import React, { useState } from "react";
import ReactPlayer from "react-player";
import styled from "styled-components";
import Vid from "../../assets/videos/intro.mp4";
import { Route } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  height: 100%;
`;
const Movie = styled.div`
  position: absolute;
  top: 300px;
  left: 200px;
`;
export default function Video() {
  const [duration, setDuration] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const handleDuration = (duration) => {
    console.log("onDuration", duration);
    setDuration({ duration });
  };

  const finishVideo = () => {
    if (duration === 6.734) {
      setIsLoaded(true);
    }
  };

  console.log(isLoaded);

  return (
    <>
      <div className="intro">
        <Container>
          <Movie>
            <ReactPlayer
              url={Vid}
              playing={true}
              controls={false}
              loop={false}
              muted={true}
              playsinline={true}
              onReady={true}
              onDuration={handleDuration}
            />
          </Movie>
        </Container>
        {finishVideo}
      </div>
      {/* <Route>{isLoaded && <Redirect to="/Home" />}</Route> */}
    </>
  );
}
