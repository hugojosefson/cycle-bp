import intent from './intent';
import model from './model';
import view from './view';

export default ({DOM}) => ({DOM: view(model(intent(DOM)))});