import './App.css'
import React, { Fragment, useState, useCallback, useEffect } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

function App() {
   const [keyPress, setKeyPess] = useState();
   const [keySelect, setKeySelect] = useState();

  const { unityProvider, sendMessage, addEventListener, removeEventListener } =
    useUnityContext({
      loaderUrl: "build/build.loader.js",
      dataUrl: "build/build.data",
      frameworkUrl: "build/build.framework.js",
      codeUrl: "build/build.wasm",
    });

  const handleKeyPress = useCallback((keyCode) => {
    setKeyPess(keyCode);
  }, []);

  const handleKeySelect = useCallback((keyCode) => {
    setKeySelect(keyCode);
  }, []);

  useEffect(() => {
    addEventListener("KeyPress", handleKeyPress);
    return () => {
      removeEventListener("KeyPress", handleKeyPress);
    };
  }, [addEventListener, removeEventListener, handleKeyPress]);

  useEffect(() => {
    addEventListener("KeySelect", handleKeySelect);
    return () => {
      removeEventListener("KeySelect", handleKeySelect);
    };
  }, [addEventListener, removeEventListener, handleKeySelect]);

  function handleClickRandomKey() {
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
      <button onClick={handleClickRandomKey}>Random key</button>    
      <div style={{ marginTop: "20px", textAlign: "center" }}>
        <h2>Last Key Pressed:</h2>
        <p style={{ fontSize: "24px", fontWeight: "bold", color: "#333" }}>
          {keyPress ? keyPress : "No key pressed yet"}
        </p>
      </div>
      <div style={{ marginTop: "20px", textAlign: "center" }}>
        <h2>Last Key Select:</h2>
        <p style={{ fontSize: "24px", fontWeight: "bold", color: "#333" }}>
          {keySelect ? keySelect : "No key select yet"}
        </p>
      </div>
    </Fragment>
  );
}
export default App
