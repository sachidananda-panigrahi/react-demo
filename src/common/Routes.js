import { CONSTANTS } from './Constants';
import ProductPage from '../pages/ProductPage';

export const getRoutes = () => [
  {
    path: CONSTANTS.APP_LINKS.HOME,
    component: ProductPage,
    protected: false,
    title: 'Home',
    key: 'home-page',
    exact: true
  }
];
