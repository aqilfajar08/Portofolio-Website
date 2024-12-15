// Navigationbar animation
gsap.from('.header', { duration: 1,  y: '-100%'})
// End Navigationbar animation

// Homepage animation
gsap.from('.links0', { duration: 1, opacity: 0, y: '-50%'})
gsap.from('.links', { duration: 1, opacity: 0, y: '-50%', delay: 1.2})
gsap.from('.links2', { duration: 1, opacity: 0, y: '-100%', delay: 1.3})
gsap.from('.links5', { duration: 1, opacity: 0, y: '-100%', delay: 1.4})
gsap.from('.links3', { duration: 1, opacity: 0, y: '-100%', delay: 1.5})
gsap.from('.links4', { duration: 1, opacity: 0, y: '-100%', delay: 1.6})

gsap.from('.greeting1', { duration: 1, x: '-100%', opacity: '0'})
gsap.from('.yourName', { duration: 1, x: '-100%', delay: 1, opacity: '0'})
gsap.from('.description', { duration: 1, x: '-100%', delay: 1.2, opacity: '0'})

gsap.from('.mySelfe', { duration: 2, y: '10%', opacity: '0'})

gsap.from('.icon1', { duration: 1, x: '100%', opacity: '0'})
gsap.from('.icon2', { duration: 1, delay: 1, x: '-100%', opacity: '0'})
gsap.from('.icon3', { duration: 1, delay: 1.2, y: '100%', opacity: '0'})
// End Homepage animation
