import React from "react";

import './MainPage.css';

function MainPage(props) {

  return (
    <main className="news">
      <ol className="news__list">
        <li className="news__item new">
          <h2 className="new__title">An insane baseball proposal: Dual league restructuring</h2>
          <div className="new__container">
            <p className="new__info">	50 points</p>
            <p className="new__info">by SubiculumCode</p>
            <p className="new__info">1 hour ago</p>
          </div>
        </li>
        <li className="news__item new">
          <h2 className="new__title">An insane baseball proposal: Dual league restructuring</h2>
          <div className="new__container">
            <p className="new__info">	50 points</p>
            <p className="new__info">by SubiculumCode</p>
            <p className="new__info">1 hour ago</p>
          </div>
        </li>
        <li className="news__item new">
          <h2 className="new__title">An insane baseball proposal: Dual league restructuring</h2>
          <div className="new__container">
            <p className="new__info">	50 points</p>
            <p className="new__info">by SubiculumCode</p>
            <p className="new__info">1 hour ago</p>
          </div>
        </li>
      </ol>
    </main>
  )
}

export default MainPage