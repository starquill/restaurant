
import "./style.css";

import {loadAbout} from "./about";
import {loadHome} from "./home";
import {loadMenu} from "./menu";

const home=document.querySelector("#home");
const menu=document.querySelector("#menu");
const about=document.querySelector("#about");

menu.addEventListener('click',async()=>{
loadMenu();
});
home.addEventListener('click', () => {
    loadHome();
});
about.addEventListener('click', () => {
    loadAbout();
});

console.log("hi");