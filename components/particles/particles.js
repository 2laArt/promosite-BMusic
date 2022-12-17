/**@type {HTMLCanvasElement}*/

import { particlesTags } from "../createSections/createSections.js";
import { Particle, ParticleCluster } from "./particleClass.js";

const tags = particlesTags;
const section = tags.particles[0];
const canvas = tags.canvas[0];
const ctx = canvas.getContext("2d");
let width = canvas.width = window.innerWidth;
let height = canvas.height = window.innerHeight;
let count = 0;
const arrWrapper = [];
const particleArr = [];
const mouse = { x: undefined, y: undefined };

window.addEventListener("resize", () => {
	width = canvas.width = window.innerWidth;
	height = canvas.height = window.innerHeight;
})
section.addEventListener("mousemove", (e) => {
	if (!e) return;
	const top = section.getBoundingClientRect().top;
	[mouse.x, mouse.y] = [e.x, e.y - top];
	for (let i = 0; i < 5; i++) {
		particleArr.push(new Particle(ctx, mouse.x, mouse.y, "hsl(" + (count % 360) + ",100%,50%"))
	}
})
export const createParticles = () => {
	ctx.clearRect(0, 0, width, height);
	for (let i = 0; i < particleArr.length; i++) {
		particleArr[i].size <= 0.2 ? (particleArr.splice(i, 1), i--) : particleArr[i].draw();
	}
	if (count % 20 == 0) {
		arrWrapper.push(new ParticleCluster(ctx, count, width, height))
	}
	for (let i = 0; i < arrWrapper.length; i++) {
		arrWrapper[i].arr.length <= 0 ? (arrWrapper.splice(i, 1), i--) : arrWrapper[i].update();
	}
	count++
	requestAnimationFrame(createParticles)
}