export function toggleLesson(module, lesson) {
    return {
        type: 'ASYNC_TOGGLE_LESSON',
        payload: {
            module,
            lesson
        }
    };
}