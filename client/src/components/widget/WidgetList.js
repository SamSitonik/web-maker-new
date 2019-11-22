import React from "react";
import { Link } from "react-router-dom"; 

export default function WidgetList() {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar bg-light navbar-light fixed-top">
        <div>
          <Link to="/user/:uid/website/:wid/page" className="text-dark">
            <i className="fas fa-chevron-left" />
          </Link>
          <span className="navbar-brand h1 mb-0 ml-4 text-secondary">
            Widgets
          </span>
        </div>
        <Link className="text-dark" to="/user/:uid/website/:wid/page/:pid/widget/new">
          <i className="fas fa-plus" />
        </Link>
      </nav>
      {/* Large Heading*/}
      <main className="container-fluid">
        <section>
          {/* div to create the ICONS 1st, both icons. float-right won't work right here, so we had to use "absolute-right" */}
          <div className="position-absolute absolute-right p-1 bg-light rounded-left">
            <Link to="/user/:uid/website/:wid/page/:pid/widget/:wgid">
              <i className="fas fa-cog" />
            </Link>
            <i className="fas fa-bars" />
          </div>
          <h1>GIZMODO</h1>
        </section>
        {/* Smaller Heading*/}
        <section>
          <div className="position-absolute absolute-right p-1 bg-light rounded-left">
            <Link to="/user/:uid/website/:wid/page/:pid/widget/:wgid">
              <i className="fas fa-cog" />
            </Link>
            <i className="fas fa-bars" />
          </div>
          <h3>Best names for my Blonde Golden Retriever Puppy :)</h3>
        </section>
        {/*IMAGE*/}
        <section>
          <div className="position-absolute absolute-right p-1 bg-light rounded-left">
            <Link to="/user/:uid/website/:wid/page/:pid/widget/:wgid">
              <i className="fas fa-cog" />
            </Link>
            <i className="fas fa-bars" />
          </div>
          {/* 1)Any picture on web, right click and "copy image address" 2)Added with because it was JUMBO size, we made it 100% */}
          <img
            src="https://i.etsystatic.com/6348803/r/il/747fef/423833021/il_794xN.423833021_7rjo.jpg"
            alt="dogs"
            width="100%"
          />
        </section>
        {/*Paragraph with LINK inside */}
        <section>
          <div className="position-absolute absolute-right p-1 bg-light rounded-left">
            <Link to="/user/:uid/website/:wid/page/:pid/widget/:wgid">
              <i className="fas fa-cog" />
            </Link>
            <i className="fas fa-bars" />
          </div>
          {/* "Lorem10" was used to get the dummy text */}
          <p>
            It's easier than ever to find a pure bred Golden Retriever Puppy on{" "}
            <a href="https://puppyfinder.com/golden-retriever-puppies-for-sale-in-boston-massachusetts-usa">
              {" "}
              Puppyfinder.com
            </a>
            ! Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            quod optio cum debitis magnam suscipit nobis non cupiditate quasi at
            obcaecati dolores minus nostrum, modi saepe consequatur rerum
            doloribus aperiam?
          </p>
        </section>
        {/* Heading for the video*/}
        <section>
          <div className="position-absolute absolute-right p-1 bg-light rounded-left front">
            <Link to="/user/:uid/website/:wid/page/:pid/widget/:wgid">
              <i className="fas fa-cog" />
            </Link>
            <i className="fas fa-bars" />
          </div>
          <h3>Funny &amp; Cute Video! </h3>
        </section>
        {/* YouTube video*/}
        <section>
          <div className="position-absolute absolute-right p-1 bg-light rounded-left">
            <Link to="/user/:uid/website/:wid/page/:pid/widget/:wgid">
              <i className="fas fa-cog" />
            </Link>
            <i className="fas fa-bars" />
          </div>
          {/*1) We got the embed code from Bootstrap to make it responsive(when screen size changes=video size changes) We searched for "embed" or "Iframe", 2) then we went to YouTube, right click and "copy embed code" 3) Most videos are 16by9, but it can be other aspect ratios i.e. 1by1, 21by9, 4by3, 16by9 */}
          <div className="embed-responsive embed-responsive-16by9">
            <iframe
              src="https://www.youtube.com/embed/8sUOvDzmrks"
              title="video"
              frameBorder={0}
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </section>
        {/* Last Paragraph*/}
        <section>
          <div className="position-absolute absolute-right p-1 bg-light rounded-left">
            <Link to="/user/:uid/website/:wid/page/:pid/widget/:wgid">
              <i className="fas fa-cog" />
            </Link>
            <i className="fas fa-bars" />
          </div>
          <p>
            Thank you for caring about Golden Retrievers! Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Blanditiis atque aut temporibus
            dolorem culpa vel ab in sit accusamus perferendis est saepe
            doloremque exercitationem quod commodi, dicta reiciendis ducimus
            excepturi.
          </p>
        </section>
      </main>
      {/* Footer */}
      <footer className="navbar navbar-light bg-light fixed-bottom">
        <div>
          <i className="fas fa-play" />
          <i className="far fa-eye ml-2" />
        </div>
        <Link className="text-dark" to="/user/:uid">
          <i className="fas fa-user" />
        </Link>
      </footer>
    </div>
  );
}
