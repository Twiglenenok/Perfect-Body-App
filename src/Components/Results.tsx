import React from "react";
import Fat from "./resultVariation/fat";
import Lean from "./resultVariation/lean";

function Results(props) {

    return (
        <div>
        <section className="counter__result" hidden={!props.active}>

        <h2 className="heading">
          Ваша норма калорий
        </h2>
        <ul className="counter__result-list">
          <li className="counter__result-item">
            <h3>
              <span id="calories-norm">{props.value.main}</span> ккал
            </h3>
            <p>
              поддержание веса
            </p>
          </li>
          <li className="counter__result-item">
            <h3>
              <span id="calories-minimal">{props.value.loss}</span> ккал
            </h3>
            <p>
              снижение веса
            </p>
          </li>
          <li className="counter__result-item">
            <h3>
              <span id="calories-maximal">{props.value.gain}</span> ккал
            </h3>
            <p>
              набор веса
            </p>
          </li>
        </ul>
      </section> 
       <section className="counter__result info" hidden={!props.active}>
       <h2 className="heading">
        Советы по тренировочному процессу
        </h2>
          {props.value.isFat ? <Fat></Fat> : <Lean></Lean>}
         </section>
         </div>
    )
}

export default Results