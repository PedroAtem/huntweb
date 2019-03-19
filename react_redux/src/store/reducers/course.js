const INITIAL_STATE = {
    activeModule: {},
    activeLesson: {},
    modules: [
        {
            id: 1,
            title: 'Modulo 1',
            lessons: [
                { id: 1, title: 'Aula 1' },
                { id: 2, title: 'Aula 2' },
                { id: 3, title: 'Aula 3' },
                { id: 4, title: 'Aula 4' }
            ]
        },
        {
            id: 2,
            title: 'Modulo 2',
            lessons: [
                { id: 5, title: 'Aula 5' },
                { id: 6, title: 'Aula 6' },
                { id: 7, title: 'Aula 7' },
                { id: 8, title: 'Aula 8' }
            ]
        }
    ]
}

export default function course(state = INITIAL_STATE, action) {
    console.log(action);
    switch (action.type) {
        case 'TOGGLE_LESSON':
            return { ...state, activeModule: action.payload.module, activeLesson: action.payload.lesson };
        default:
            return state;
    }
}