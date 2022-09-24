import React from "react";
import ReactPlayer from "react-player";
import styled from "styled-components";
import Vid from "../../assets/videos/intro.mp4";

const Container = styled.div`
  width: 100%;
  height: 100%;
`;
const Movie = styled.div`
  margin: 0 auto;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;
export default function Video() {
  // (duration === 6.734)

  return (
    <>
      <div>
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
            />
          </Movie>
        </Container>
      </div>
    </>
  );
}
