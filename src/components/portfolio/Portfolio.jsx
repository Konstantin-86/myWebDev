import "../../styles/components/portfolio/portfolio.scss";

import lime from "../../images/limePage.png";
import shance from "../../images/shancePage.png";
import elDacha from "../../images/ElDacha.png";
import denis from "../../images/denis.png";
import gastro from "../../images/gastro.png";

import html from "../../images/html.png";
import css from "../../images/css.png";
import react from "../../images/react.webp";
import next from "../../images/next.png";
import gulp from "../../images/gulp.webp";
import vite from "../../images/vite.svg";
import scss from "../../images/scss.png";
import redux from "../../images/redux.png";

const Portfolio = () => {
  return (
    <>
      <div className="container">
        <h2 id="portfolio" className="portfolio__title">
          My Portfolio
        </h2>
        <div className="portfolio__wrap">
          <div className="portfolio__item">
            <div className="portfolio__item-image">
              <img className="portfolio-image animate" src={lime} alt="lime" />
              <a
                className="portfolio__link"
                href="https://lime-studio-next-js.vercel.app/"
                target="_blank"
              >
                посмотреть
              </a>
            </div>
            <div className="portfolio__item-text">
              <a
                href="https://lime-studio-next-js.vercel.app/"
                target="_blank"
                title="Открыть в новой вкладке"
                className="item-text__title"
              >
                Lime Studio
              </a>
              <p className="item-text__description">Многостраничный сайт</p>
              <ul className="stack__list">
                <li>
                  <img title="HTML" src={html} alt="html" />
                </li>
                <li>
                  <img title="scss" src={scss} alt="scss" />
                </li>
                <li>
                  <img title="react" src={react} alt="react" />
                </li>
                <li>
                  <img title="Next.js" src={next} alt="next" />
                </li>
                <li>
                  <img title="Redux Toolkit" src={redux} alt="redux" />
                </li>
              </ul>
            </div>
          </div>

          <div className="portfolio__item">
            <div className="portfolio__item-image ">
              <img
                className="portfolio-image animate"
                src={elDacha}
                alt="elDacha"
              />
              <a
                className="portfolio__link"
                href="https://dacha-web.vercel.app/"
                target="_blank"
              >
                посмотреть
              </a>
            </div>
            <div className="portfolio__item-text">
              <a
                href="https://dacha-web.vercel.app/"
                target="_blank"
                title="Открыть в новой вкладке"
                className="item-text__title"
              >
                El Dacha Home
              </a>
              <p className="item-text__description">Landing page</p>
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
                  <img title="Vite" src={vite} alt="vite" />
                </li>
              </ul>
            </div>
          </div>
          <div className="portfolio__item">
            <div className="portfolio__item-image ">
              <img
                loading="lazy"
                className="portfolio-image animate"
                src={denis}
                alt="denis"
              />
              <a
                className="portfolio__link"
                href="https://konstantin-86.github.io/english-landing/"
                target="_blank"
              >
                посмотреть
              </a>
            </div>
            <div className="portfolio__item-text">
              <a
                href="https://konstantin-86.github.io/english-landing/"
                target="_blank"
                title="Открыть в новой вкладке"
                className="item-text__title"
              >
                Denis School Школа английского языка
              </a>
              <p className="item-text__description">Landing page</p>
              <ul className="stack__list">
                <li>
                  <img title="HTML" src={html} alt="html" />
                </li>
                <li>
                  <img title="CSS" src={css} alt="css" />
                </li>
                <li>
                  <img title="gulp" src={gulp} alt="gulp" />
                </li>
              </ul>
            </div>
          </div>

          <div className="portfolio__item">
            <div className="portfolio__item-image ">
              <img
                loading="lazy"
                className="portfolio-image animate"
                src={gastro}
                alt="gastro"
              />
              <a
                className="portfolio__link"
                href="https://gastro-web.vercel.app/"
                target="_blank"
              >
                посмотреть
              </a>
            </div>
            <div className="portfolio__item-text">
              <a
                href="https://gastro-web.vercel.app/"
                target="_blank"
                title="Открыть в новой вкладке"
                className="item-text__title"
              >
                Gastro Chef
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
                  <img title="Vite" src={vite} alt="vite" />
                </li>
              </ul>
            </div>
          </div>

          <div className="portfolio__item">
            <div className="portfolio__item-image">
              <img
                loading="lazy"
                className="portfolio-image"
                src={shance}
                alt="shance"
              />
              <a
                className="portfolio__link"
                href="https://shance-sigma.vercel.app/"
                target="_blank"
              >
                посмотреть
              </a>
            </div>
            <div className="portfolio__item-text">
              <a
                href="https://shance-sigma.vercel.app/"
                target="_blank"
                title="Открыть в новой вкладке"
                className="item-text__title"
              >
                Shance 2.0
              </a>
              <p className="item-text__description">
                Приложение для тестирование работников предприятия
              </p>
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
                  <img title="Vite" src={vite} alt="vite" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Portfolio;
