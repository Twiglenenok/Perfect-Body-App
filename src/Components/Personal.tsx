import React from "react";
import Age from "./age";
import Height from "./height";
import Weight from "./weight";

function Personal(props) {
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