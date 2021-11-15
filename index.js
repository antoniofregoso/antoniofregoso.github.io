import Reveal from './reveal.js/dist/reveal.esm.js';
import RevealAnimate from './reveal.js-animate/animate.esm.js';

let deck1 = new Reveal(document.querySelector( '.deck1' ), {
    animated: {
        'H1':{'animated':'backInDown'},
        'H2':{'animated':'bounceIn', 'repeat':'repeat-3'},
        'P':{'animated':'fadeInUpBig'},
        'UL':{'animated':'fadeInTopLeft'},
        'OL':{'animated':'jackInTheBox'},
        'IMG':{'animated':'rotateIn'}
    },
    plugins: [RevealAnimate]
});


deck1.initialize();