import React, { useState } from "react";

const Main = () => {
  const [imgUrl, setUrl] = useState("");
  const callImg = () => {
    fetch("https://source.unsplash.com/random")
      .then((res) => {
        setUrl(res.url);
      })
      .catch((error) => {
        console.error("Error fetching random image:", error);
      });
  };

  return (
    <>
      <div className="container">
        <div className="box">
          <h2>Enjoy the life you live</h2>
          <br></br>
          <img src={`https://picsum.photos/200/300?random=${Math.random()}`} alt="Random Pic" />
          <br></br>
          <button onClick={() => callImg()}>Click me</button>
        </div>
      </div>
    </>
  );
};

export default Main;
