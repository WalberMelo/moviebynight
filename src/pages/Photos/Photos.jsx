import React, { useContext } from "react";
import { Context } from "../../context/Context";
import Image from "../../components/Image";

function Photos() {
  const { allPhotos } = useContext(Context);
  const allImg = allPhotos.map((img, index) => (
    <Image key={img.id} img={img} className="wide" />
  ));
  return <main className="photos">{allImg}</main>;
}
export default Photos;
