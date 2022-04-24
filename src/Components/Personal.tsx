import React from "react";
import {Age} from "./Age";
import {Height} from "./Height";
import {Weight} from "./Weight";

export const Personal: React.FC = () => {
    return (
        <fieldset className="form__item form__parameters" name="parameters">
        <legend className="visually-hidden">
          Физические параметры
        </legend>
        <div className="inputs-group">
            <Age></Age>
            <Height></Height>
            <Weight></Weight>
        </div>
      </fieldset>
    )
}


export default Personal