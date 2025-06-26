const nav = document.querySelector('nav')
const header = document.querySelector('header')

const anim = gsap.from(header, {
    autoAlpha: 0,
    duration: .2,
    paused: true,
}).progress(1)


ScrollTrigger.create({
  trigger: document.body,
  start: "top top",
  end: "+=1",
  onEnter: () => nav.classList.add('nav--scrolled'),
  onLeaveBack: () => nav.classList.remove('nav--scrolled'),
});

Observer.create({
  target: window,
  type: "wheel,touch",
  onUp: () => anim.play(),
  onDown: () => anim.reverse(),
});








// ScrollTrigger.create({
//     start: 'top top',
//     end: 99999,
//     onUpdate: (self) => {
//         console.log(self.direction)
//         if (self.direction == -1) {
//             anim.play()
//         } else {
//             anim.reverse()
//         }
//     },
// })



// ScrollTrigger.create({
//     onUpdate: () => {
//         window.scrollY === 0
//             ? nav.classList.remove('nav--scrolled')
//             : nav.classList.add('nav--scrolled')
//     },
// })
