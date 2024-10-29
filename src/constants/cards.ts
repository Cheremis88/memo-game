import * as iconsKit from './iconsKit';
import createCards from '../helpers/createCards';

const icons = iconsKit as Record<string, any>;
const CARDS = createCards(icons);

export default CARDS;