import React, { useContext } from "react";
import { PersonalContext } from "../context";

export const Weight: React.FC = () => {

    const {weightHandler} = useContext(PersonalContext);
    const {weight} = useContext(PersonalContext)

    return (
        <div className="input">
        <div className="input__heading">
          <label className="heading" htmlFor="weight">
            Вес
          </label>
          <span className="input__heading-unit">
            кг
          </span>
        </div>
        <div className="input__wrapper">
          <input onChange={evt => weightHandler(evt)} value={weight} type="number" id="weight" name="weight" placeholder="0" inputMode="decimal" required></input>
        </div>
      </div>
    )
}
