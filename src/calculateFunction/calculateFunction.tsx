/*type infoProps = {
  male: String,
  age: Number,
  height: Number,
  weight: Number,
  activity: String
}*/

function weightGain(info: any): object {

    const activityCoef = {
        min: 1.2,
        low: 1.375,
        medium: 1.55,
        high: 1.725,
        max: 1.9
    }
    
    //const coef: number = activityCoef[info.activity]


    let result: any = {};
    if (info.male === 'male') {
     result.main = Math.round(((10 * info.weight) + (info.height * 6.25 ) - (5 * info.age) + 5));

    } else {
      result.main = Math.round(((10 * info.weight) + (6.25 * info.height) - (5 * info.age) - 161));
    }
    result.gain = Math.round(result.main + result.main * 0.35);
    result.loss = Math.round(result.main - result.main * 0.35);
    result.isFat = true;
    const normal = Math.round((info.height / 2 - 20));
    if (normal > info.weight) {
    result.isFat = false
    }
    return result
  }

  export default weightGain