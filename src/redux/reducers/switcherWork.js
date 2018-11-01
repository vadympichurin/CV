export default function switchWork(state = false, action) {
    switch (action.type) {
        case 'WORK_VISIBLE':
            return true;
        case 'WORK_INVISIBLE':
            return false;
        default:
            return state;
    }
}