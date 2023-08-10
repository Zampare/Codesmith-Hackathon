// const contents = document.getElementById('contents')
// contents.parentNode.removeChild(contents)
// document.body.style.cursor.style.backgroundImage = "url('/water.jpg')"
// // setInterval(changeFire, 1000)
// cursor
let firearray = [];
spreadFire();
function spreadFire() {
  const path = chrome.runtime.getURL('fire.webp');
  // let x = Math.floor(Math.random()*window.innerWidth);
  // let y = Math.floor(Math.random()*window.innerHeight);
  // let thingOnFire = document.elementFromPoint(x,y);
  // while(thingOnFire !== undefined){
  //     x = Math.floor(Math.random()*window.innerWidth);
  //     y = Math.floor(Math.random()*window.innerHeight);
  //     thingOnFire = document.elementFromPoint(x,y);
  // }
  // document.querySelector('body').style.zIndex = 0;
  const elems = document.body.getElementsByTagName('*');
  let randelement = Math.floor(Math.random() * elems.length);
  let thingOnFire = elems[randelement];
  let fire = document.createElement('img');
  // thingOnFire.style.zIndex = -1;
  // thingOnFire.visibility = "hidden"
  thingOnFire.appendChild(fire);
  fire.setAttribute('src', path);
  // "chrome-extension://kfhkbjoljjhbohffgpiddemfbkkopled/fire.webp"
  fire.style.position = 'absolute';
  fire.style.visibility = 'visible';
  //  fire.style.left = `${x} px`;
  //  fire.style.top = `${y} px`;
  fire.style.left = fire.parentNode.style.left;
  fire.style.top = fire.parentNode.style.top;
  fire.style.zIndex = 9999;
  firearray.push(fire);
  fire.addEventListener('click', event => {
    event.stopPropagation();
    event.preventDefault();
    fire.parentNode.removeChild(fire);
    firearray = firearray.filter(e => e !== fire);
  });
  thingOnFire.style.position = 'relative';
  let count = 0;
  for (const e of firearray) {
    if (count++ % 4 === 0) {
      const elems2 = document.body.getElementsByTagName('*');
      let randelement2 = Math.floor(Math.random() * elems2.length);
      let thingOnFire2 = elems2[randelement2];
      if (thingOnFire2.src !== path) {
        let fire2 = document.createElement('img');
        thingOnFire2.appendChild(fire2);
        // thingOnFire2.style.zIndex = -1
        // thingOnFire2.visiblitiy = "hidden";
        let angle = Math.random() * Math.PI * 2;
        let distance = Math.floor(Math.random() * 50) + 50;
        let x2 = Math.floor(
          Math.abs(
            Number(thingOnFire2.style.left.replace('px', '')) +
              Math.cos(angle) * distance,
          ),
        );
        let y2 = Math.floor(
          Math.abs(
            Number(thingOnFire2.style.top.replace('px', '')) +
              Math.sin(angle) * distance,
          ),
        );
        fire2.setAttribute('src', path);
        thingOnFire2.appendChild(fire2);
        fire2.style.position = 'relative';
        fire2.style.visibility = 'visible';
        fire2.style.left = `${x2} px`;
        fire2.style.top = `${y2} px`;
        fire2.style.zIndex = 9999;
        firearray.push(fire2);
        fire2.addEventListener('click', event => {
          event.stopPropagation();
          event.preventDefault();
          fire2.parentNode.removeChild(fire2);
          firearray = firearray.filter(e => e !== fire2);
        });
      }
    }
  }
  // fire.style.left =
  // fire.style.top =
  console.log(firearray.length);
  if (firearray.length > 200) {
    console.log('hi');
    document.body.style.backgroundImage =
      'url(https://miro.medium.com/v2/0*ZjYSm_q36J4KChdn)';
      // const sound = document.createElement('audio')
      // sound.setAttribute("src", )
      // document.body.appendChild(sound)
    if(document.querySelector("ytd-app") !== null){document.querySelector("ytd-app").style.backgroundImage = 'url(https://miro.medium.com/v2/0*ZjYSm_q36J4KChdn)';
  }
  }
  setTimeout(spreadFire, 1500);
}

// x_pos+'px';
// y_pos+'px';

// document.getElementById('contents');
