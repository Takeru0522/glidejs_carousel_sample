const config = {
    type: 'carousel',
    perView: 1,
    breakpoints:  {
        1100: {
            perView: 1
        }
    }
};
new Glide('.glide', config).mount();