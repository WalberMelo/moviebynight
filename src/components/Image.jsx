import React, { useState } from "react";

function Image({ className, img }) {
  const [hover, setHover] = useState(false);

  console.log("hovered", hover);

  return (
    <div
      className={`${className} image-container`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {<img src={img} className="image-grid" />}
    </div>
  );
}

export default Image;

// 1. Create state boolean for "hovered"
// 2. When the mouse enters the Image's div, set "hovered" to true
// 3. When the mouse leaves the Image's div, set "hovered" to false
// 4. Log "hovered" to the console so you know it's changing successfully
