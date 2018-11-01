export default function switchTechSkills(state = false, action) {
    switch (action.type){
        case 'TECH_INVISIBLE':
            return false;
        case 'TECH_VISIBLE':
            return true;
        default:
            return state;
    }
}