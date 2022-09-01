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
    this.pointOne = null;
    this.pointTwo = null;
    this.pointThree = null;

    if (this.scene) {
      this.init();
    }
  }

  set() {
    this.decor.forEach((el) => {
      this.pointOne = Math.floor(Math.random() * this.scene.clientWidth - 50);
      this.pointTwo = Math.floor(Math.random() * this.scene.clientHeight - 50);
      this.pointThree = Math.floor(Math.random() * 720 - 360);

      if (this.pointOne >= this.scene.clientWidth) {
        this.pointOne = this.scene.clientWidth - 50;
      }
      if (this.pointTwo >= this.scene.clientHeight) {
        this.pointTwo = this.scene.clientHeight - 50;
      }
      if (this.pointThree >= 360) {
        this.pointThree = 360;
      }

      el.style.transform = `translate(${this.pointOne}px, ${this.pointTwo}px) rotate(${this.pointThree}deg)`;
    });
  }

  interval() {
    const THIS = this;
    setInterval(THIS.set.bind(THIS), 5000);
  }

  init() {
    this.set();
    this.interval();
  }
}

export default AnimDecor;
