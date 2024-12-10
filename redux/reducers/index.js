import {combineReducers} from 'redux';
import Settings from './Setting';
import Common from './Common';
import Ecommerce from './Ecommerce';
import Layout from './Layout';
import RouteConstants from './RouteConstants';
import SSRApi from './SSRApi';

const reducers = combineReducers({
  settings: Settings,
  common: Common,
  ecommerce: Ecommerce,
  layout: Layout,
  routeConstants: RouteConstants,
  ssrApi: SSRApi,
});
export default reducers;
