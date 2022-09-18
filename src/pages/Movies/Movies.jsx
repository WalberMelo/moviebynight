import React, { useContext } from "react";
import { Context } from "../../context/Context";
import Image from "../../components/Imagen/Image";
import Home from "../Home/Home";

function Photos() {
  const { allPhotos } = useContext(Context);

  const allImg = allPhotos.map((img) => (
    <Image key={img.id} img={img} className="wide" />
  ));

  return (
    <>
      <Home />
      <main className="movies">{allImg}</main>
    </>
  );
}
export default Photos;
