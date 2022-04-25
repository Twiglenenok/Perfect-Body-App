import React, { useContext } from "react";
import { PersonalContext } from "../context";

export const Age: React.FC = () => {

    const {ageHandler} = useContext(PersonalContext)
    const {age} = useContext(PersonalContext)

    return (
        <div className="input">
        <div className="input__heading">
          <label className="heading" htmlFor="age">
            Возраст
          </label>
          <span className="input__heading-unit">
            лет
          </span>
        </div>
        <div className="input__wrapper">
          <input onChange={ageHandler} value={age} type="number" id="age" name="age" placeholder="0" inputMode="decimal" min="3" max="99" required></input>
        </div>
      </div>
    )
}
