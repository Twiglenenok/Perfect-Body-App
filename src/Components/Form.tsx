import React, {useState, useEffect} from "react";
import {animateScroll as scroll} from "react-scroll"
import {Activity} from "./Activity";
import {Calculate} from "./Calculate";
import {Gender} from "./Gender";
import {Personal} from "./Personal";
import {Results} from "./Results";
import weightGain from "../calculateFunction/calculateFunction";
import { PersonalContext} from "../context";
import {infoProps, resultProps} from "../interfaces";


export const Form: React.FC = () => {

  const [male, setMale] = useState<string>('');
  const [age, setAge] = useState<string>('');
  const [height, setHeight] = useState<string>('');
  const [weight, setWeight] = useState<string>('');
  const [activity, setActivity] = useState<string>('');
  const [calculate, setCalculate] = useState<boolean>(false);
  const [isResult, setIsResult] = useState<boolean>(false);
  const [info, setInfo] = useState<resultProps>({
    main: 0,
    gain: 0,
    loss: 0,
    isFat: true
  });


  const allInfo: infoProps = {
    male: male,
    age: age,
    height: height,
    weight: weight,
    activity: activity
  }

  function toggleGender(evt: React.ChangeEvent<HTMLInputElement>) {
    setMale(evt.target.value);
}

  function ageHandler(evt: React.ChangeEvent<HTMLInputElement>) {
  setAge(evt.target.value)
}


  function activityHandler(evt: React.ChangeEvent<HTMLInputElement>) {
    setActivity(evt.target.value)
  }


  function heightHandler(evt: React.ChangeEvent<HTMLInputElement>) {
    setHeight(evt.target.value)
  }

  function weightHandler(evt: React.ChangeEvent<HTMLInputElement>) {
    setWeight(evt.target.value)
  }

  useEffect(() => {
    if(male && age && height && weight && activity) {
      setCalculate(true)} else {
      setCalculate(false)
      setIsResult(false)
      }
  }, [male, age, height, weight, activity])

  let result: any = {};

  function resultButton(evt: React.MouseEvent<HTMLButtonElement>) {
    evt.preventDefault();
    setIsResult(true);
    result = weightGain(allInfo);
    setInfo(result);
    scroll.scrollToBottom()
  }

  function clearButton(evt: React.MouseEvent<HTMLButtonElement>) {
    evt.preventDefault();
    setAge('');
    setHeight('');
    setWeight('');
    setIsResult(false);
  }



    return (
      <PersonalContext.Provider value={{
        ageHandler,
        weightHandler,
        heightHandler,
        age: age,
        height: height,
        weight: weight
        }}>
      <div>
        <form className="counter__form form" name="counter" action="#" method="post">
          <Gender onToggleGender={toggleGender}></Gender>
         <Personal></Personal>
          <Activity activityHandler={activityHandler}></Activity>
          <Calculate value={calculate} resultButton={resultButton} clearButton={clearButton}></Calculate>
        </form>
        <Results value={info} active={isResult}></Results>
        </div>
        </PersonalContext.Provider>
    )
}


