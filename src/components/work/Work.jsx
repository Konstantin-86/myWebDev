import "../../styles/components/work/work.scss";

const Work = () => {
  return (
    <>
      <div className="container">
        <h2 id="workExperience" className="work__title">
          Work experience
        </h2>
        <div className="work__wrap">
          <div className="work__item">
            <h3 className="work__position">Frontend разрабочик</h3>
            <div className="work__name">
              Web-студия Черный лимон <br />
              <a href="https://blacklemon.ru/">Оренбург, blacklemon.ru/</a>
            </div>
            <div className="work__description">
              <ul className="work__list">
                <li className="work__list-item">
                  Проектировал и разрабатывал более 20 сайтов различной
                  сложности
                </li>
                <li className="work__list-item">
                  Занимался оптимизацией скорости загрузки сайтов
                </li>
                <li className="work__list-item">
                  Реализовал многочисленные функции и компоненты
                  пользовательского интерфейса
                </li>
                <li className="work__list-item">
                  Оптимизация и расширение кода - декомпозиция компонентов
                </li>
                <li className="work__list-item">Декомпозиция компонентов</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Work;
