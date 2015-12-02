import {h} from '@cycle/dom';

const renderWeightSlider = weight => h('div', [
    'Weight ' + weight + 'kg',
    h('input#weight', {type: 'range', min: 40, max: 140, value: weight})
]);

const renderHeightSlider = height => h('div', [
    'Height ' + height + 'cm',
    h('input#height', {type: 'range', min: 140, max: 210, value: height})
]);

export default state$ => state$.map(({weight, height, bmi}) =>
    h('div', [
        renderWeightSlider(weight),
        renderHeightSlider(height),
        h('h2', 'BMI is ' + bmi)
    ])
);