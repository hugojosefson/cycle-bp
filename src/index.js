import Cycle from '@cycle/core';
import {makeDOMDriver} from '@cycle/dom';

import main from './lib/main';

Cycle.run(main, {DOM: makeDOMDriver('#app')});