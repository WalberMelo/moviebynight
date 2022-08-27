import { useState, useRef, useEffect } from "react";

function userHover() {
  const [hover, setHover] = useState(false);
  const ref = useRef(null);

  function enter() {
    setHover(true);
  }
  function leave() {
    setHover(false);
  }

  useEffect(() => {
    ref.current.addEventListener("mouseenter", enter);
    ref.current.addEventListener("mouseleave", leave);

    return () => {
      ref.current.removeEventListener("mouseenter", enter);
      ref.current.removeEventListener("mouseleave", leave);
    };
  }, []);

  return [hover, ref];
}

export default userHover;

// copy the value of ref.current to a variable inside the effect
// then call removeEventListeners on that variable. Doing this has fixed the issue.
