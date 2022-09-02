// function test() {
//   // decor.style.animation = 'flash 1s linear infinite';
//   decor.forEach((el) => {
//     let rand1 = Math.floor(Math.random() * scene.clientWidth - 50);
//     let rand2 = Math.floor(Math.random() * scene.clientHeight - 50);
//     let rand3 = Math.floor(Math.random() * 720 - 360);
//     if (rand1 >= scene.clientWidth) {
//       rand1 = scene.clientWidth - 50;
//     }
//     if (rand2 >= scene.clientHeight) {
//       rand2 = scene.clientHeight - 50;
//     }
//     if (rand3 >= 360) {
//       rand3 = 360;
//     }
//     el.style.transform = `translate(${rand1}px, ${rand2}px) rotate(${rand3}deg)`;
//   });
// }
// test();
// setInterval(test, 5000);

class AnimDecor {
  constructor() {
    this.scene = document.querySelector('.js-scene');
    this.decor = document.querySelectorAll('.js-decor');
    this.x = null;
    this.y = null;
    this.rotate = null;

    if (this.scene) {
      this.init();
    }
  }

  set() {
    this.decor.forEach((el) => {
      this.x = Math.floor(Math.random() * this.scene.clientWidth);
      this.y = Math.floor(Math.random() * this.scene.clientHeight);
      this.rotate = Math.floor(Math.random() * 720 - 360);

      if (this.x >= this.scene.clientWidth) {
        this.x = this.scene.clientWidth;
      }
      if (this.y >= this.scene.clientHeight) {
        this.y = this.scene.clientHeight;
      }
      if (this.rotate >= 360) {
        this.rotate = 360;
      }

      el.style.transform = `translate(${this.x}px, ${this.y}px) rotate(${this.rotate}deg)`;
    });
  }

  interval() {
    const THIS = this;
    setInterval(THIS.set.bind(THIS), 7000);
  }

  init() {
    this.set();
    this.interval();
  }
}

export default AnimDecor;
