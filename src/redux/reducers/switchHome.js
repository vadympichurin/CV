export default function switchHome(state = false, action) {
    switch (action.type) {
        case 'HOME_LEFT':
            return true;
        case 'HOME_CENTER':
            return false;
        default:
            return state;
    }
}