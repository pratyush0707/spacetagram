import { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import PictureCard from "./Components/PictureCard";

function App() {
  const [cardData, setCardData] = useState({});

  useEffect(() => {
    fetch(
      "https://api.nasa.gov/planetary/apod?api_key=wtAAYfWyQgg2iesajcnoeSAFSf3hkKv75R32kxKm",
    )
      .then((res) => res.json())
      .then((data) => setCardData(data));
      console.log(cardData);
  }, []);

  return (
    <>
      <Navbar />
      <PictureCard cardData={cardData} />
    </>
  );
}

export default App;