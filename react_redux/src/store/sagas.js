import { takeLatest, put } from 'redux-saga/effects';

function* asyncToggleLesson(action) {
    yield put({
        type: 'TOGGLE_LESSON',
        payload: {
            module: action.module,
            lesson: action.lesson
        }
    })
}

export default function* root() {
    yield [
        takeLatest('ASYNC_TOGGLE_LESSON', asyncToggleLesson),
    ];
}