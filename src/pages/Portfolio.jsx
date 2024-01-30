export default function Portfolio() {
  return (
    <div class="row">
      <h1>Portfolio</h1>
      <div className="column">
        <div className="card">
          <h2>Marvel Quiz </h2>
          <img className="portfolio-pic" src="/Marvel.png" />
          <p>
            {" "}
            The Marvel Personality Quiz is a fun and interactive web application
            that allows users to discover which Marvel superhero they are most
            like, based on a series of carefully crafted questions. Whether
            you're a die-hard Marvel fan or just curious about your inner
            superhero, this quiz is sure to provide you with an entertaining
            experience.
          </p>
          <a href="https://marrasmith.github.io/Marvel-Heroes-Personality-Quiz/">
            <button>Website</button>
          </a>
          <a href="https://github.com/MArrasmith/Marvel-Heroes-Personality-Quiz.git">
            <button>Github</button>
          </a>
        </div>
      </div>

      <div className="column">
        <div className="card">
          <h2>Nerdmazon </h2>
          <img className="portfolio-pic" src="/Nerdmazon.JPG" />
          <p>
            {" "}
            Experience shopping with only products to meet your Nerdy needs.
            Browse your favorite shows, movies, games, and coding gear.
          </p>
          <a href="https://cryptic-castle-11006-b2c2b99712fd.herokuapp.com">
            <button>Website</button>
          </a>
          <a href="https://github.com/Trinity16201/Nerdmazon.git">
            <button>Github</button>
          </a>
        </div>
      </div>
      <div className="column">
        <div className="card">
          <h2>Work Day Scheduler </h2>
          <img className="portfolio-pic" src="/WorkDay.PNG" />
          <p>
            {" "}
            This application provides an easy to use daily calendar. You can add
            events to each hour to schedule your work day. Color coding is used
            to show if the current time is before, during, or after the hour.
            You can aslo delete events as needed.
          </p>
          <a href="https://trinity16201.github.io/Create-Calendar/">
            <button>Website</button>
          </a>
          <a href="https://github.com/Trinity16201/Create-Calendar.git">
            <button>Github</button>
          </a>
        </div>
        <div className="card">
          <h2>Password Generator </h2>
          <img className="portfolio-pic" src="/Password.jpg" />
          <p>
            {" "}
            Create your own unique password by using this password generator
            application.
          </p>
          <a href="https://trinity16201.github.io/Password-Generator/">
            <button>Website</button>
          </a>
          <a href="https://github.com/Trinity16201/Password-Generator.git">
            <button>Github</button>
          </a>
        </div>
      </div>
      <div className="column">
        <div className="card">
          <h2>Weather Dashboard </h2>
          <img className="portfolio-pic" src="/Weather.JPG" />
          <p>
            {" "}
            Utilizing an API, this application looks up current weather
            information and a 5 day forcast for your area.
          </p>
          <a href="https://trinity16201.github.io/Weather-Dash/">
            <button>Website</button>
          </a>
          <a href="https://github.com/Trinity16201/Weather-Dash.git">
            <button>Github</button>
          </a>
        </div>
      </div>
      <div className="column">
        <div className="card">
          <h2>My first portfolio</h2>
          <img className="portfolio-pic" src="/First-Portfolio.JPG" />
          <p>
            {" "}
            This page was the first portfolio I created early on in my
            development process.
          </p>
          <a href="https://trinity16201.github.io/Personal-Portfolio/">
            <button>Website</button>
          </a>
          <a href="https://github.com/Trinity16201/Personal-Portfolio.git">
            <button>Github</button>
          </a>
        </div>
      </div>
    </div>
  );
}
