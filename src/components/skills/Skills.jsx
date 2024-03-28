import { ReactTyped } from "react-typed";
import "../../styles/components/skills/skills.scss";

export default function Skills() {
  return (
    <>
      <div className="inner__skills">
        <div className="skills__text">
          <ReactTyped
            strings={[
              "Hello world",
              "Привет, мир",
              "Привет, коллеги, меня зовут Константин и я Frontend Developer!",
            ]}
            typeSpeed={40}
          />
        </div>

        <div className="skills__hard">
          <h2>
            <span>Hard</span> skills
          </h2>
          <div className="hard__wrap">
            <ul className="hard__list">
              <li>HTML (HTML5), EJS, JSX</li>
              <li>
                CSS (CSS3), SASS (SCSS), PostCSS, Bootstrap, Tailwind,
                Animations
              </li>
              <li>JavaScript (ES6+, OOP), jQuery, TypeScript</li>
              <li>React</li>
              <li>Redux (Redux Toolkit, Redux Persist), MobX, Zustand</li>
            </ul>
          </div>
        </div>
        <div className="skills__soft">
          <h2>
            <span>Soft</span> skills
          </h2>
        </div>
      </div>
    </>
  );
}