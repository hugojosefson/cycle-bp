import Rx from 'rx';

const calculateBMI = (weight, height) => Math.round(weight / Math.pow(height * 0.01, 2));

export default actions => Rx.Observable.combineLatest(
    actions.changeWeight$.startWith(70),
    actions.changeHeight$.startWith(170),
    (weight, height) => ({weight, height, bmi: calculateBMI(weight, height)})
);