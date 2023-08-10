// const contents = document.getElementById('contents')
// contents.parentNode.removeChild(contents)
// const customCursorImage = new Image();
// customCursorImage.src = 'https://cdn5.vectorstock.com/i/1000x1000/33/19/cute-fireman-cartoon-vector-16563319.jpg';


// document.body.addEventListener('mouseover', () => {
//   document.body.style.cursor = `url(${customCursorImage.src}), auto`;
// });


// document.body.addEventListener('mouseout', () => {
//   document.body.style.cursor = 'auto';
// });
// // setInterval(changeFire, 1000)
let firearray = [];
spreadFire();

function spreadFire() {
// let x = Math.floor(Math.random()*window.innerWidth);
// let y = Math.floor(Math.random()*window.innerHeight);
// let thingOnFire = document.elementFromPoint(x,y);
// while(thingOnFire !== undefined){
//     x = Math.floor(Math.random()*window.innerWidth);
//     y = Math.floor(Math.random()*window.innerHeight);
//     thingOnFire = document.elementFromPoint(x,y);
// }
const elems = document.body.getElementsByTagName("*");
let randelement = Math.floor(Math.random() * elems.length);
let thingOnFire = elems[randelement];
let fire  = document.createElement("img");
thingOnFire.appendChild(fire);
fire.setAttribute("src", "chrome-extension://kfhkbjoljjhbohffgpiddemfbkkopled/fire.webp");
fire.style.position = "absolute";
fire.style.visibility = "visible";
//  fire.style.left = `${x} px`;
//  fire.style.top = `${y} px`;
 fire.style.left = fire.parentNode.style.left;
 fire.style.top = fire.parentNode.style.top;
fire.style.zIndex = 9999;
firearray.push(fire);

fire.addEventListener("click", () => {
    fire.parentNode.removeChild(fire);
    firearray = firearray.filter((e)=>e!==fire);
})
thingOnFire.style.position = "relative";
console.log(firearray);
for(const e of firearray){
    console.log(e.style.left, e.style.top);
    const elems2 = document.body.getElementsByTagName("*");
    let randelement2 = Math.floor(Math.random() * elems2.length);
    let thingOnFire2 = elems2[randelement2];
    let fire2  = document.createElement("img");
    thingOnFire2.appendChild(fire);
    let angle = Math.random()*Math.PI * 2
    let distance = Math.floor(Math.random() * 50) + 50;
    let x2 = Math.floor(Math.abs(Number(thingOnFire2.style.left.replace('px', '')) + Math.cos(angle) * distance));
    let y2 = Math.floor(Math.abs(Number(thingOnFire2.style.top.replace('px', '')) + Math.sin(angle) * distance));
    fire.setAttribute("src", "chrome-extension://kfhkbjoljjhbohffgpiddemfbkkopled/fire.webp");
    thingOnFire2.appendChild(fire2);
    fire2.style.position = "relative";
    fire2.style.visibility = "visible";
    fire2.style.left = `${x2} px`
    fire2.style.top = `${y2} px`
    fire2.style.zIndex = 9999;
    fire.addEventListener("click", () => {
        fire.parentNode.removeChild(fire);
        firearray = firearray.filter((e)=>e!==fire);
    })
}
// fire.style.left = 
// fire.style.top =

setTimeout(spreadFire, 1000);
}


// x_pos+'px';
// y_pos+'px';

// document.getElementById('contents');