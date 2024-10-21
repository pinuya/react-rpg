import { useEffect } from "react";
import * as C from "./App.styles";
import { Character } from "./components/Character";
import { useCharacter } from "./hooks/useCharacter";

const App = () => {
  const char = useCharacter();

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
  }, []);

  const handleKeyDown = (e: KeyboardEvent) => {
    switch (e.code) {
      case "KeyA":
      case "ArrowLeft":
        break;
      case "KeyW":
      case "ArrowUp":
        break;
      case "KeyD":
      case "ArrowRight":
        break;
      case "KeyS":
      case "ArrowDown":
        break;
    }
  };

  return (
    <C.Container>
      <C.Map>
        <Character x={char.x} y={char.y} />
      </C.Map>
    </C.Container>
  );
};

export default App;
