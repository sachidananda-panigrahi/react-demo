import { createBrowserHistory, createMemoryHistory } from 'history';

const historyObject =
  typeof window === 'undefined'
    ? createMemoryHistory()
    : createBrowserHistory();

export default historyObject;
