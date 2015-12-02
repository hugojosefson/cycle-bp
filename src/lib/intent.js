export default DOM => ({
    changeWeight$: DOM.select('#weight').events('input').map(ev => ev.target.value),
    changeHeight$: DOM.select('#height').events('input').map(ev => ev.target.value)
});