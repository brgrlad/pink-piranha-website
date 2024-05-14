import { useState } from "react";

export default function Menu() {
  let [isClicked, setIsClicked] = useState(false);

  return (
    <nav>
      <button> MENU</button>
    </nav>
  );
}
