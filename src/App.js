import { useState } from "react";
import "./styles.css";
import Bhairav from "./Music/Bhairav.mp3";
import Asavari from "./Music/Asavari.mp3";
import Bhupali from "./Music/Bhupali.mp3";
import Baul from "./Music/Baul.mp3";
import Bihu from "./Music/Bihu.mp3";
import ElectroFolk from "./Music/ElectroFolk.mp3";
import PyarHua from "./Music/PyarHua.mp3";
import JeenaYahan from "./Music/JeenaYahan.mp3";
import EkAjnabee from "./Music/EkAjnabee.mp3";
import github from "../src/icons8-github.svg";
import linkedin from "../src/icons8-linkedin.svg";
import twitter from "../src/icons8-twitter.svg";
import telegram from "../src/icons8-telegram-app.svg";

function App() {
  const [music, setMusic] = useState("Classical");
  var musicRecommendationDB = {
    Classical: [
      {
        title: "Bhairav",
        rating: 4.5,
        src: Bhairav
      },
      {
        title: "Asavari",
        rating: 4.3,
        src: Asavari
      },
      {
        title: "Bhupali",
        rating: 4,
        src: Bhupali
      }
    ],
    Folk: [
      {
        title: "Baul-Bengal",
        rating: 4.4,
        src: Baul
      },
      {
        title: "Electro Folk",
        rating: 3.5,
        src: ElectroFolk
      },
      {
        title: "Bihugeet-Assam",
        rating: 3.8,
        src: Bihu
      }
    ],
    Retro: [
      {
        title: "Pyar hua iqrar hua",
        rating: 4.8,
        src: PyarHua
      },
      {
        title: "Jeena yahan marna yahan",
        rating: 4.6,
        src: JeenaYahan
      },
      {
        title: "Ek Ajnabee haseena se",
        rating: 4.5,
        src: EkAjnabee
      }
    ]
  };

  var genreList = Object.keys(musicRecommendationDB);

  function showMusicRecommendation(event) {
    var recommendation = event.target.innerText;
    setMusic(recommendation);
    
  }
  return (
    <div className="App">
      <nav className="navbar">Indian Music Recommendations</nav>
      <div className="container">
        <h1>🎶 Let's the music speak!</h1>
        <p>Checkout my favourite musics. Select a genre to get started.</p>
        {genreList.map((genre, index) => {
          if(music === genre) {
            return (
              <button
              className="btn-active"
              key={index}
              onClick={showMusicRecommendation}
            >
              {genre}
            </button>
            );
          }
          return (
            <button
              className="btn"
              key={index}
              onClick={showMusicRecommendation}
            >
              {genre}
            </button>
          );
        })}
        <hr style={{ margin: "2rem 0rem" }} />
        <ul>
          {musicRecommendationDB[music].map((genre, index) => {
            return (
              <li key={index}>
                <p id="genre-title">{genre.title}</p>
                <p id="genre-rating">{genre.rating}</p>
                <audio controls src={genre.src}></audio>
              </li>
            );
          })}
        </ul>
      </div>
      <footer>
        <p>© | 2022 | <a href="https://sudiptachakraborty.netlify.app/" class="portfolio">Sudipta
                Chakraborty</a></p>
        <ul class="footer-list">
            <div class="social-media">
                <a href="https://github.com/SudiptaChakraborty51" class="links">
                    <img src={github} alt="pic not found"></img>
                </a>
            </div>
            <div class="social-media">
                <a href="https://www.linkedin.com/in/sudipta-chakraborty-4a371a212/" class="links">
                    <img src={linkedin} alt="pic not found"></img>
                </a>
            </div>
            <div class="social-media">
                <a href="https://twitter.com/Sudipta41158180" class="links">
                    <img src={twitter} alt="pic not found"></img>
                </a>
            </div>
            <div class="social-media">
                <a href="https://t.me/sudichakraborty" class="links">
                    <img src={telegram} alt="pic not found"></img>
                </a>
            </div>
        </ul>
    </footer>
    </div>
  );
}

export default App;
