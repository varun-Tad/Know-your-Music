import React, { useState } from "react";
import "./styles.css";

const genreDictionary = {
  POP: [
    "Happy: Happy is a song written, produced, and performed by American singer Pharrell Williams, released as the first and only single from the soundtrack album for the film Despicable Me 2 (2013). This is a fun and upbeat  song sung by pharrel which reminds us to learn to be happy.",
    "Butter:  Butter is a song recorded by South Korean boy group BTS.It was a commercial success, topping charts in South Korea, Japan, Malaysia, Mexico, Singapore and the United States, as well as Billboard's Global 200 chart.",
    "Cheap thrills: It is a song by Australian singer and songwriter Sia from her seventh studio album.It was written by Sia Furler and Greg Kurstin, while solely produced by Kurstin."
  ],
  ROCK: [
    "Numb: Numb is a song by American rock band Linkin Park. It was released as the third single from their second studio album, Meteora (2003), and is the closing track on the album. One of Linkin Park's most well-known and critically acclaimed songs, 'Numb' topped the Billboard Alternative Songs chart for 12 weeks",
    "Faint: Faint is a song by the American rock band Linkin Park from their second studio album, Meteora. The song was released as the album's second single on June 9, 2003 and is the seventh track. It entered the top thirty on the majority of the charts it appeared on. ",
    "In the End: It is a song by American rock band Linkin Park. It is the eighth track on their debut album, Hybrid Theory (2000), and was released as the album's fourth and final single."
  ],
  ROMANCE: [
    "Tum hi ho : 'Tum Hi Ho' (transl. You are the one) is a Indian Hindi-language song from the 2013 Indian movie Aashiqui 2, sung by Arijit Singh. Tum Hi Ho songs composed and written by Mithoon",
    "Marry you : Marry You is a song by American singer and songwriter Bruno Mars from his debut studio album . The recording focuses on spontaneous marriage and therefore, since its release, has frequently been used as a proposal song",
    "Senorita : It is a song by Canadian singer Shawn Mendes and Cuban-American singer Camila Cabello. It was released on June 21, 2019, through Island and Epic Records as the second single (seventh overall) from the deluxe edition of Mendes' self-titled third studio album and later included on Cabello's second studio album Romance (2019)"
  ]
};

var genreWeKnow = Object.keys(genreDictionary);
var color = "#0A75BC";

export default function App() {
  var [meaning, setMeaning] = useState("POP");

  function genreClickhandler(genre) {
    // var meaning = genreDictionary[genre];
    setMeaning(genre);
  }

  return (
    <div className="App">
      <h1 id="Kym">
        Know Your <span style={{ color: color }}>Music</span>
      </h1>
      <p style={{ color: "#0A75BC", fontWeight: "700" }}>
        Check out some of my favourite songs across various genres. Hope you
        like these songs!
      </p>
      {genreWeKnow.map(function (genre) {
        return (
          <button onClick={() => genreClickhandler(genre)} key={genre}>
            {genre}
          </button>
        );
      })}

      <div id="line"></div>
      <ul>
        {genreDictionary[meaning].map(function (item) {
          return (
            <li
              key={item}
              style={{
                color: "black",
                backgroundColor: "white",
                padding: "1rem",
                textAlign: "left",
                marginTop: "20px",
                borderRadius: "0.5rem",
                border: "5px solid #0A75BC"
              }}
            >
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
