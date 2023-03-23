import { useState, useCallback } from 'react'
import './App.css'

function App() {

  const [catImage, setCatImage] = useState(null);
  const [breed, setBreed] = useState(null);
  const [banList, setBanList] = useState([]);

const fetchCatImage = useCallback(async() => {
  try {
    const response = await fetch('https://api.thecatapi.com/v1/images/search?api_key=live_KwmQu4uyCxa2kkuFDOjxxSVDO0Ah8jTijKGQmaVYn64orm52z9hwR7irwBhb9ezl');
    const data = await response.json();

    const image = data[0];
    const imageBreed = image.breeds[0];

    const name = imageBreed.name;
    const lifeSpan = imageBreed.life_span;
    const weight = imageBreed.weight.imperial;
    const origin = imageBreed.origin;

    if (
      banList.includes(lifeSpan) ||
      banList.includes(origin) ||
      banList.includes(weight)
    ) {
      console.log("Banned breed found. Fetching new image.")
      fetchingImage();
      return;
    }

    setBreed(imageBreed);
    setCatImage(`${image.url}?t=${new Date().getTime()}`);
  } catch (error) {
    console.error(error);
  }
}, [banList]);

  return (

    <div className="App">
      <div className="whole-page">
        <div className="header">
        <h1>Cats Galore</h1>
        <h3>Discover cats from all over the world!</h3>
        </div>
        <br></br>

        {catImage && <img src={catImage} width="250px" height="250px" />}
        <br></br>
        <br></br>

        <button onClick={fetchCatImage}>New Cat!</button>
        {breed && catImage && ( 
          <div>
            <h3>{breed.name}</h3>
            <br></br>
            <button onClick={() => setBanList([...banList, breed.life_span])}>Life Span: {breed.life_span}</button>
            <button onClick={() => setBanList([...banList, breed.origin])}>Origin: {breed.origin}</button>
            <button onClick={() => setBanList([...banList, breed.weight.imperial])}>Weight (Imperial): {breed.weight.imperial}</button>
          </div>
        )}

       <div className="sideNav">
        <h2>Ban List</h2>
        <h3>Select an attribute to ban it</h3>
        <ul>
          {banList.map((attribute, index) => (
            <li key={index}>{attribute}</li>
          ))}
        </ul>

      </div> 

    </div>

    </div>
  )
}

export default App