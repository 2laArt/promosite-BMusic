/**@type {HTMLCanvasElement}*/

import { particlesTags } from "../createSections/createSections.js";
import { particleCluster } from "./particleClass.js";

const tags = particlesTags;
const canvas = tags.canvas[0];
const ctx = canvas.getContext("2d");
let width = canvas.width = window.innerWidth;
let height = canvas.height = window.innerHeight;
let count = 0;
const arrWrapper = [];


window.addEventListener("resize", () => {
	width = canvas.width = window.innerWidth;
	height = canvas.height = window.innerHeight;
})



export const createParticles = () => {
	ctx.clearRect(0, 0, width, height);
	if (count % 20 == 0) {
		arrWrapper.push(new particleCluster(ctx, count, width, height))
	}
	for (let i = 0; i < arrWrapper.length; i++) {
		arrWrapper[i].arr.length <= 0 ? (arrWrapper.splice(i, 1), i--) : arrWrapper[i].update();
	}
	count++
	requestAnimationFrame(createParticles)
}