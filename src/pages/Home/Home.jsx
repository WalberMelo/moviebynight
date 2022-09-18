import React from "react";
import styled from "styled-components";

const Hero = styled.div`
  display: flex;
  flex-direction: column;
`;

const HereTitle = styled.h1`
  margin-bottom: 2px;
`;

function Home() {
  return (
    <Hero>
      <HereTitle className="hero">Welcome.</HereTitle>
      <h2>Millions of movies, TV shows and people to discover. Explore now.</h2>
    </Hero>
  );
}

export default Home;
