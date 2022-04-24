
import {infoProps, resultProps} from "../interfaces";


function weightGain(info: infoProps): object {


    const activityCoef = {
        min: 1.2,
        low: 1.375,
        medium: 1.55,
        high: 1.725,
        max: 1.9
    }
    const weight = Number(info.weight);
    const height = Number(info.height);
    const age = Number(info.age)
    //const coef: number = activityCoef[info.activity]


    let result: resultProps = {
      main: 0,
      gain: 0,
      loss: 0,
      isFat: true
    };

    if (info.male === 'male') {
     result.main = Math.round(((10 * weight) + (height * 6.25 ) - (5 * age) + 5));

    } else {
      result.main = Math.round(((10 * weight) + (6.25 * height) - (5 * age) - 161));
    }
    result.gain = Math.round(result.main + result.main * 0.35);
    result.loss = Math.round(result.main - result.main * 0.35);
    const normal = Math.round((height / 2 - 20));
    if (normal > weight) {
    result.isFat = false
    }
    return result
  }

  export default weightGain