import { all } from 'redux-saga/effects'

// import { receiveApi } from 'YOUR MAIN ACTION FILE';

// function* fetchMessage(data) {
//
//     const json = yield fetch('API URL', {
//         method: 'API TYPE (GET | POST)',
//         headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(data.data),
//     })
//         .then(response => response.json());
//
//     yield put(receiveApi({ json: json || [{ error: json }] }));
// }

function* actionWatcher() {
    // yield takeLatest('YOUR_ACTION_KEY_TO_TRIGGER_SAGA_API', fetchMessage);
}

export default function* rootSaga() {
    yield all([
        actionWatcher(),
    ]);
}