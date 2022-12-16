import { createSection } from "../repeating/createDOM.js";
// create section //
// attributes //
import { introTagAttributes } from "../tagAttributes/introTagAttributes.js";
import { particlesTagAttributes } from "../tagAttributes/particlesTagAttributes.js";
//attributes //




export const introTags = createSection(introTagAttributes);
export const particlesTags = createSection(particlesTagAttributes);

