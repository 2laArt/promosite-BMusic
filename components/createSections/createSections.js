import { createSection } from "../repeating/createDOM.js";
// create section //
// attributes //
import { introTagAttributes } from "../tagAttributes/introTagAttributes.js";
import { particlesTagAttributes } from "../tagAttributes/particlesTagAttributes.js";
import { genresTagAttributes } from "../tagAttributes/genresTagAttributes.js";
//attributes //




export const introTags = createSection(introTagAttributes);
export const particlesTags = createSection(particlesTagAttributes);
export const genresTags = createSection(genresTagAttributes);
