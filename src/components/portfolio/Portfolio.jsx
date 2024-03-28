import "../../styles/components/portfolio/portfolio.scss";

import lime from "../../images/limePage.png";
import html from "../../images/html.png";
import css from "../../images/css.png";
import react from "../../images/react.webp";
import next from "../../images/next.png";
import vite from "../../images/vite.png";

const Portfolio = () => {
  return (
    <>
      <div className="container">
        <h2>My Portfolio</h2>
        <div className="portfolio__wrap">
          <div className="portfolio__item">
            <div className="portfolio__item-image">
              <img className="portfolio-image animate" src={lime} alt="lime" />
            </div>
            <div className="portfolio__item-text">
              <a
                href="https://lime-studio-next-js.vercel.app/"
                target="_blank"
                title="Открыть в новой вкладке"
                className="item-text__title"
              >
                Lime Studio
                <svg
                  height="25px"
                  width="25px"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  enable-background="new 0 0 512 512"
                >
                  <g fill="#231F20">
                    <path d="m34,256l26.2,26.2c108,108 283.7,108 391.7,0l26.1-26.2-26.2-26.2c-108-108-283.7-108-391.7,0l-26.1,26.2zm222,126.2c-75.8,0-151.6-28.9-209.3-86.6l-32.9-32.9c-3.7-3.7-3.7-9.7 0-13.5l32.9-32.9c115.4-115.4 303.2-115.4 418.6,0l32.9,32.9c3.7,3.7 3.7,9.7 0,13.5l-32.9,32.9c-57.7,57.7-133.5,86.6-209.3,86.6z" />
                    <path d="m256,183.5c-40,0-72.5,32.5-72.5,72.5s32.5,72.5 72.5,72.5c40,0 72.5-32.5 72.5-72.5s-32.5-72.5-72.5-72.5zm0,164c-50.5,0-91.5-41.1-91.5-91.5 0-50.5 41.1-91.5 91.5-91.5s91.5,41.1 91.5,91.5c0,50.5-41,91.5-91.5,91.5z" />
                  </g>
                </svg>
              </a>
              <p className="item-text__description">Многостраничный сайт</p>
              <ul className="stack__list">
                <li>
                  <img title="HTML" src={html} alt="html" />
                </li>
                <li>
                  <img title="CSS" src={css} alt="css" />
                </li>
                <li>
                  <img title="react" src={react} alt="react" />
                </li>
                <li>
                  <img title="Next.js" src={next} alt="next" />
                </li>
                <li>
                  <img title="Vite" src={vite} alt="vite" />
                </li>
              </ul>
            </div>
          </div>
          <div className="portfolio__item"></div>
          <div className="portfolio__item"></div>
        </div>
      </div>
    </>
  );
};
export default Portfolio;
