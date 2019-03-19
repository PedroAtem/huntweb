import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';

// import rootReducer from './reducers';
import course from './reducers/course';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    combineReducers({
        course,
    }),
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

export default store;