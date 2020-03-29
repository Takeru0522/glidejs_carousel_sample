// 
// new Glide('.glide').mount()
console.log('Hello')
const config = {
    type: 'crousel',
    perView: 3,
    breakpoints:  {
        800: {
            perView: 2
        }
    }
};
new Glide('.glide', config).mount()