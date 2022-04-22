import React from "react";


function Gender({onToggleGender}) {
    return (
        <div className="form__item">
        <h2 className="heading">
          Пол
        </h2>
        <ul className="switcher">
          <li className="switcher__item">
            <input onChange={evt => onToggleGender(evt)} id="gender-male" name="gender" value="male" type="radio"></input>
            <label htmlFor="gender-male">
              Мужчина
            </label>
          </li>
          <li className="switcher__item">
          <input onChange={evt => onToggleGender(evt)} id="gender-female" name="gender" value="female" type="radio"></input>
            <label htmlFor="gender-female">
              Женщина
            </label>
          </li>
        </ul>
      </div>
    )
}

export default Gender
