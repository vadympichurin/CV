
import { en, ru, ua, es } from '../../Language/language';

export default function langObject (state={}, action) {
    switch (action.type){
        case 'EN':
            return en;
        case 'UA':
            return ua;
        case 'RU':
            return ru;
        case 'ES':
            return es;
        default:
            return state;
    }
}