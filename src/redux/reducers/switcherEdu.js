export default function switchEdu(state = false, action) {
    switch (action.type) {
        case 'EDU_VISIBLE':
            return true;
        case 'EDU_INVISIBLE':
            return false;
        default:
            return state;
    }
}