import './App.css'
import React, { Fragment } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

function App() {
  // const [isGameOver, setIsGameOver] = useState(false);
  // const [userName, setUserName] = useState();
  // const [score, setScore] = useState();

  const { unityProvider, sendMessage, addEventListener, removeEventListener } =
    useUnityContext({
      loaderUrl: "build/build.loader.js",
      dataUrl: "build/build.data",
      frameworkUrl: "build/build.framework.js",
      codeUrl: "build/build.wasm",
    });

  // const handleGameOver = useCallback((userName, score) => {
  //   setIsGameOver(true);
  //   setUserName(userName);
  //   setScore(score);
  // }, []);

  // useEffect(() => {
  //   addEventListener("GameOver", handleGameOver);
  //   return () => {
  //     removeEventListener("GameOver", handleGameOver);
  //   };
  // }, [addEventListener, removeEventListener, handleGameOver]);

  function handleClickSpawnEnemies() {
    sendMessage("KeyBoard", "OnRandomKey");
  }

  return (
    <Fragment>
      <Unity
        unityProvider={unityProvider}
        style={{
          width: "100%", 
          height: "600px", 
          border: "2px solid #000", 
        }}
      />
      <button onClick={handleClickSpawnEnemies}>Random key</button>
      {/* {isGameOver === true && (
        <p>{`Game Over ${userName}! You've scored ${score} points.`}</p>
      )} */}
      
    </Fragment>
  );
}
export default App
