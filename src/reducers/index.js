import { combineReducers } from 'redux';
import musicselection  from './musicselection';


const rootreducer = combineReducers({
    musicselection:musicselection
});
export default rootreducer;