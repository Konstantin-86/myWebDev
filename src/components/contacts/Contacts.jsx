import telegram from "../../images/telegram.webp";
import hh from "../../images/hh.png";
import github from "../../images/github.webp";

import "../../styles/components/contacts/contacts.scss";

const Contacts = () => {
  return (
    <>
      <div className="container">
        <div className="contacts__inner">
          <h2 id="contacts" className="portfolio__title">
            Contacts
          </h2>
          <ul className="contacts__list">
            <li>
              <a href="https://t.me/YakimtsevKonstantin" target="_blank">
                <span>Телеграмм</span>
                <img src={telegram} alt="telegram" />
              </a>
            </li>
            <li>
              <a
                href="https://orenburg.hh.ru/resume/7c09a4beff0c594a830039ed1f697078575576"
                target="_blank"
              >
                <span>Head Hunter</span>
                <img src={hh} alt="hh" />
              </a>
            </li>
            <li>
              <a href="https://github.com/Konstantin-86" target="_blank">
                <span>GitHub</span>
                <img src={github} alt="github" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
export default Contacts;
