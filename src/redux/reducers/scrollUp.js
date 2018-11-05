export default function scrollUp(state = 0, action) {
    switch (action.type){
        case 'SCROLL':
            return window.pageYOffset;
        default:
            return state;
    }
}