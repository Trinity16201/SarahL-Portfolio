export default function Portfolio() {
  return (
    <div class="row">
      <h1>Portfolio</h1>
      <div class="column">
        <div class="card">
          <h2>Marvel Quiz </h2>
          <img
            className="portfolio-pic"
            src="/Marvel.png"
          />
          <p>
            {" "}
            The Marvel Personality Quiz is a fun and interactive web application
            that allows users to discover which Marvel superhero they are most
            like, based on a series of carefully crafted questions. Whether
            you're a die-hard Marvel fan or just curious about your inner
            superhero, this quiz is sure to provide you with an entertaining
            experience.
          </p>
          {/* <a href="https://marrasmith.github.io/Marvel-Heroes-Personality-Quiz/"</a> */}
          <button>Website</button>
          {/* <a href="https://github.com/MArrasmith/Marvel-Heroes-Personality-Quiz.git"</a> */}
          <button>Github</button>
        </div>
      </div>

      <div class="column">
        <div class="card">
          <h2>Nerdmazon </h2>
          <img
            className="portfolio-pic"
            src="/Doctor-who-hat.jpg"
          />
          <p>
            {" "}
            Experience shopping with only products to meet your Nerdy needs. Browse your favorite shows, movies, games, and coding gear.
          </p>
          {/* <a href="https://cryptic-castle-11006-b2c2b99712fd.herokuapp.com"</a> */}
          <button>Website</button>
          {/* <a href="https://github.com/Trinity16201/Nerdmazon.git"</a> */}
          <button>Github</button>
        </div>
      </div>
      <div class="column">
        <div class="card">..</div>
      </div>

      <div class="row">
        <div class="card">..</div>
      </div>
      <div class="column">
        <div class="card">..</div>
      </div>
      <div class="column">
        <div class="card">..</div>
      </div>
      <div class="column">
        <div class="card">..</div>
      </div>
    </div>
  );
}
