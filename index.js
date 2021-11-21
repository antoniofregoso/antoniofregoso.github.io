import Reveal from './reveal.js/dist/reveal.esm.js';
import RevealAnimate from './reveal.js-animate/animate.esm.js';

let deck1 = new Reveal(document.querySelector( '.deck1' ), {
    hash: true,
    animated: {
        'H1':{'animated':'backInDown'},
        'H2':{'animated':'bounceIn', 'repeat':'repeat-3'},
        'P':{'animated':'fadeInUpBig', 'speed':'slower'},
        'UL':{'animated':'fadeInTopLeft'},
        'OL':{'animated':'jackInTheBox'},
        'IMG':{'animated':'rotateIn', 'speed':'fast', 'repeat':'infinite'}
    },
    plugins: [RevealAnimate]
});


deck1.initialize();