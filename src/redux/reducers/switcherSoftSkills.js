export default function switchSoft(state = false, action) {
    switch (action.type) {
        case 'SOFT_VISIBLE':
            return true;
        case 'SOFT_INVISIBLE':
            return false;
        default:
            return state;
    }
}