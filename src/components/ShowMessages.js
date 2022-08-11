import React, { useState, useEffect } from "react";

// css
import "../css/Messages.css";

/// imges
import img1 from "../imges/img1.jpg";
import img2 from "../imges/img2.jpg";
import img3 from "../imges/img3.jpg";
import img4 from "../imges/img4.jpg";
import img5 from "../imges/img5.jpg";
import img6 from "../imges/img6.jpg";
import img7 from "../imges/img7.jpg";
import img8 from "../imges/img8.jpg";
import img9 from "../imges/img9.jpg";
import img10 from "../imges/img10.jpg";

function ShowMessages() {
  const [data, setData] = useState([
    {
      id: 1,
      img: img1,
      name: "israel israel",
      date: Date.now(),
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has",
    },
    {
      id: 2,
      img: img2,
      name: "israel 2",
      date: Date.now(),
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has",
    },
    {
      id: 3,
      img: img3,
      name: "israel 3",
      date: Date.now(),
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has",
    },
    {
      id: 4,
      img: img4,
      name: "israel 4",
      date: Date.now(),
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has",
    },
    {
      id: 5,
      img: img5,
      name: "israel 5",
      date: Date.now(),
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has",
    },
    {
      id: 6,
      img: img6,
      name: "israel 6",
      date: Date.now(),
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has",
    },
    {
      id: 7,
      img: img7,
      name: "israel 7",
      date: Date.now(),
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has",
    },
    {
      id: 8,
      img: img8,
      name: "israel 8",
      date: Date.now(),
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has",
    },
    {
      id: 9,
      img: img9,
      name: "israel 9",
      date: Date.now(),
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has",
    },
    {
      id: 10,
      img: img10,
      name: "israel 10",
      date: Date.now(),
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has",
    },
  ]);

  useEffect(() => {
    setTimeout(() => {
      filterShowData();
    }, 3000);
  }, [data]);

  const filterShowData = () => {
    let lastObj = data.pop();
    data.unshift(lastObj);
    // console.log(data, "origin data");
    // console.log(lastObj, "lastObj ");
    setData([...data]);
  };

  return (
    <div>
      <h1 className="titleMain">Ticker Demo</h1>
      <div>
        {data.slice(0, 3).map((message) => {
          return (
            <div key={message.id} className="cardsDiv">
              <div>
                <img
                  src={message.img}
                  alt={message.name}
                  width="100%"
                  height="50%"
                />
              </div>
              <div>
                <h2>{message.name}</h2>
                <p>{message.text}</p>
                <p>{message.date}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ShowMessages;
