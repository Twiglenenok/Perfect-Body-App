import React, {useContext} from "react";
import { PersonalContext } from "../context";

export const Height: React.FC = () => {

    const {heightHandler} = useContext(PersonalContext)
    const {height} = useContext(PersonalContext)

    return(
        <div className="input">
        <div className="input__heading">
          <label className="heading" htmlFor="height">
            Рост
          </label>
          <span className="input__heading-unit">
            см
          </span>
        </div>
        <div className="input__wrapper">
          <input onChange={evt => heightHandler(evt)} value={height} type="number" id="height" name="height" placeholder="0" inputMode="decimal" min="70" max="200" required></input>
        </div>
      </div>
    )
}
