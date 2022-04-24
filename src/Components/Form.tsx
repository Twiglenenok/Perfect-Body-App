import React, {useState, useEffect} from "react";
import {animateScroll as scroll} from "react-scroll"
import {Activity} from "./Activity";
import {Calculate} from "./Calculate";
import {Gender} from "./Gender";
import {Personal} from "./Personal";
import {Results} from "./Results";
import weightGain from "../calculateFunction/calculateFunction";
import { DEFAULT_MAN_AGE,DEFAULT_MAN_HEIGHT, DEFAULT_WOMAN_HEIGHT, DEFAULT_MAN_WEIGHT, DEFAULT_WOMAN_WEIGHT } from "../DefaultConsts";
import { PersonalContext} from "../context";


export const Form: React.FC = () => {

  const [male, setMale] = useState<string>('');
  const [age, setAge] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);
  const [weight, setWeight] = useState<number>(0);
  const [activity, setActivity] = useState<string>('');
  const [calculate, setCalculate] = useState<boolean>(false);
  const [isResult, setIsResult] = useState<boolean>(false);
  const [info, setInfo] = useState({
    main: 0,
    gain: 0,
    loss: 0,
    isFat: true
  });


  const allInfo: Object = {
    male: male,
    age: age,
    height: height,
    weight: weight,
    activity: activity
  }

  function toggleGender(evt: React.ChangeEvent<HTMLInputElement>) {
    if (evt.target.value === 'male') {
      setHeight(DEFAULT_MAN_HEIGHT);
      setWeight(DEFAULT_MAN_WEIGHT);
    } else {
      setHeight(DEFAULT_WOMAN_HEIGHT);
      setWeight(DEFAULT_WOMAN_WEIGHT);
    }
    setAge(DEFAULT_MAN_AGE);
    setMale(evt.target.value);
}

function ageHandler(evt: React.ChangeEvent<HTMLInputElement>) {
  const convertedValue: number = Number(evt.target.value)
  setAge(convertedValue)
}


  function activityHandler(evt: React.ChangeEvent<HTMLInputElement>) {
    setActivity(evt.target.value)
  }


  function heightHandler(evt: React.ChangeEvent<HTMLInputElement>) {
    const convertedValue: number = Number(evt.target.value)
    setHeight(convertedValue)
  }

  function weightHandler(evt: React.ChangeEvent<HTMLInputElement>) {
    const convertedValue: number = Number(evt.target.value)
    setWeight(convertedValue)
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
    //setTimeout(scroll.scrollToBottom(), 400);
  }

  function clearButton(evt: React.MouseEvent<HTMLButtonElement>) {
    evt.preventDefault();
    setAge(DEFAULT_MAN_AGE);
    setHeight(DEFAULT_MAN_HEIGHT);
    setWeight(DEFAULT_MAN_WEIGHT);
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


