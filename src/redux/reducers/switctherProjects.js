export default function switchProject(state = false, action) {
    switch(action.type) {
        case 'PROJECT_VISIBLE':
            return true;
        case "PROJECT_INVISIBLE":
            return false;
        default:
            return state;
    }
}
