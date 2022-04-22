import React, { useContext } from "react";
import { PersonalContext } from "../context";

function Weight() {

    const {weightHandler} = useContext(PersonalContext);
    const {weight} = useContext(PersonalContext)

    return (
        <div className="input">
        <div className="input__heading">
          <label className="heading" for="weight">
            Вес
          </label>
          <span className="input__heading-unit">
            кг
          </span>
        </div>
        <div className="input__wrapper">
          <input onChange={evt => weightHandler(evt)} value={weight} type="number" id="weight" name="weight" placeholder="0" inputMode="decimal" maxLength="3" required></input>
        </div>
      </div>
    )
}

export default Weight