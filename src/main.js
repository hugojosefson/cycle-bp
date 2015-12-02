import Rx from 'rx';
import Cycle from '@cycle/core';
import {h, makeDOMDriver} from '@cycle/dom';

const renderWeightSlider = weight => h('div', [
    'Weight ' + weight + 'kg',
    h('input#weight', {type: 'range', min: 40, max: 140, value: weight})
]);

const renderHeightSlider = height => h('div', [
    'Height ' + height + 'cm',
    h('input#height', {type: 'range', min: 140, max: 210, value: height})
]);

const calculateBMI = (weight, height) => Math.round(weight / Math.pow(height * 0.01, 2));

const intent = DOM => ({
    changeWeight$: DOM.select('#weight').events('input').map(ev => ev.target.value),
    changeHeight$: DOM.select('#height').events('input').map(ev => ev.target.value)
});

const model = actions => Rx.Observable.combineLatest(
    actions.changeWeight$.startWith(70),
    actions.changeHeight$.startWith(170),
    (weight, height) => ({weight, height, bmi: calculateBMI(weight, height)})
);

const view = state$ => state$.map(({weight, height, bmi}) =>
    h('div', [
        renderWeightSlider(weight),
        renderHeightSlider(height),
        h('h2', 'BMI is ' + bmi)
    ])
);

const main = ({DOM}) => ({DOM: view(model(intent(DOM)))});

Cycle.run(main, {DOM: makeDOMDriver('#app')});