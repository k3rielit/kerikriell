const MData = {



    Azonossagok: {
        konnyu: [
            {
                title:() => 'Azonosság <span class="difficulty_easy">konnyu 1</span>',
                UI: ()=> `<div> (<span id="value_a">${MUtils.getRandomInt(1,11)}</span>+<span id="value_b">${MUtils.getRandomInt(1,11)}</span>)<sup>2</sup> = <input type="number" id="input"> </div>`,
                tooltip: ()=> `<div> hehe segitseg </div>`,
                calc: function(elem) {
                    
                    let a = parseInt(elem.querySelector('#value_a').innerText);
                    let b = parseInt(elem.querySelector('#value_b').innerText);
                    return Math.pow(a+b,2);
                },
            },
            {
                title: ()=> 'Azonosság <span class="difficulty_easy">konnyu 2</span>',
                UI: ()=> `<div> (<span id="value_a">${MUtils.getRandomInt(1,11)}</span>-<span id="value_b">${MUtils.getRandomInt(1,11)}</span>)<sup>2</sup> = <input type="number" id="input"> </div>`,
                tooltip: ()=> `<div> hehe segitseg </div>`,
                calc: function(elem) {
                    
                    let a = parseInt(elem.querySelector('#value_a').innerText);
                    let b = parseInt(elem.querySelector('#value_b').innerText);
                    return Math.pow(a-b,2);
                },
            },
            // more ...
        ],
        kozepes: [
            //(a+bx)^2
            {
                title: ()=> 'Azonosság <span class="difficulty_medium">kozepes 1</span>',
                UI: ()=> `<div> (<span id="value_a">${MUtils.getRandomInt(1,10)}</span>+<span id="value_b">${MUtils.getRandomInt(1,10)}</span>x)<sup>2</sup> = <input type="text" id="input"> </div>`,
                tooltip: ()=> `<div> hehe segitseg </div>`,
                calc: function(elem) {
                    const parser=math.parser();
                    parser.evaluate(`a=${elem.querySelector('#value_a').innerText}`);
                    parser.evaluate(`b=${elem.querySelector('#value_b').innerText}`);
                    parser.evaluate('x=3');
                    let solution=parser.evaluate('(a+b*x)^2');
                    return solution;
                },
            },
            //(ax+b)^2
            {
                title: ()=> 'Azonosság <span class="difficulty_medium">kozepes 2</span>',
                UI: ()=> `<div> (<span id="value_a">${MUtils.getRandomInt(1,10)}</span>x+<span id="value_b">${MUtils.getRandomInt(1,10)}</span>)<sup>2</sup> = <input type="text" id="input"> </div>`,
                tooltip: ()=> `<div> hehe segitseg </div>`,
                calc: function(elem) {
                    const parser=math.parser();
                    parser.evaluate(`a=${elem.querySelector('#value_a').innerText}`);
                    parser.evaluate(`b=${elem.querySelector('#value_b').innerText}`);
                    parser.evaluate('x=3');
                    let solution=parser.evaluate('(a*x+b)^2');
                    return solution;
                }
            },
            //(a-bx)^2
            {
                title: ()=> 'Azonosság <span class="difficulty_medium">kozepes 3</span>',
                UI: ()=> `<div> (<span id="value_a">${MUtils.getRandomInt(1,10)}</span>-<span id="value_b">${MUtils.getRandomInt(1,10)}</span>x)<sup>2</sup> = <input type="text" id="input"> </div>`,
                tooltip: ()=> `<div> hehe segitseg </div>`,
                calc: function(elem) {
                    const parser=math.parser();
                    parser.evaluate(`a=${elem.querySelector('#value_a').innerText}`);
                    parser.evaluate(`b=${elem.querySelector('#value_b').innerText}`);
                    parser.evaluate('x=3');
                    let solution=parser.evaluate('(a-b*x)^2');
                    return solution;
                },
            },
            //(ax-b)^2
            {
                title: ()=> 'Azonosság <span class="difficulty_medium">kozepes 4</span>',
                UI: ()=> `<div> (<span id="value_a">${MUtils.getRandomInt(1,10)}</span>x-<span id="value_b">${MUtils.getRandomInt(1,10)}</span>)<sup>2</sup> = <input type="text" id="input"> </div>`,
                tooltip: ()=> `<div> hehe segitseg </div>`,
                calc: function(elem) {
                    const parser=math.parser();
                    parser.evaluate(`a=${elem.querySelector('#value_a').innerText}`);
                    parser.evaluate(`b=${elem.querySelector('#value_b').innerText}`);
                    parser.evaluate('x=3');
                    let solution=parser.evaluate('(a*x-b)^2');
                    return solution;
                }
            },
            //(ax+b)(ax-b)
            {
                title: ()=> 'Azonosság <span class="difficulty_medium">kozepes 5</span>',
                UI: function(){ 
                    let a=MUtils.getRandomInt(1,10);
                    let b=MUtils.getRandomInt(1,10);
                    return `<div> (<span id="value_a">${a}</span>x+<span id="value_b">${b}</span>)(${a}x-${b}) = <input type="text" id="input"> </div>`;
                },
                tooltip: ()=> `<div> hehe segitseg </div>`,
                calc: function(elem) {
                    const parser=math.parser();
                    parser.evaluate(`a=${elem.querySelector('#value_a').innerText}`);
                    parser.evaluate(`b=${elem.querySelector('#value_b').innerText}`);
                    parser.evaluate('x=3');
                    let solution=parser.evaluate('(a*x+b)*(a*x-b)');
                    return solution;
                }
            },
            //(a+bx)(a-bx)
            {
                title: ()=> 'Azonosság <span class="difficulty_medium">kozepes 6</span>',
                UI: function(){ 
                    let a=MUtils.getRandomInt(1,10);
                    let b=MUtils.getRandomInt(1,10);
                    return `<div> (<span id="value_a">${a}</span>x+<span id="value_b">${b}</span>)(${a}x-${b}) = <input type="text" id="input"> </div>`;
                },
                tooltip: ()=> `<div> hehe segitseg </div>`,
                calc: function(elem) {
                    const parser=math.parser();
                    parser.evaluate(`a=${elem.querySelector('#value_a').innerText}`);
                    parser.evaluate(`b=${elem.querySelector('#value_b').innerText}`);
                    parser.evaluate('x=3');
                    let solution=parser.evaluate('(a+b*x)*(a-b*x)');
                    return solution;
                }
            },
            
            // more ...
        ],
        nehez: [
            //(ay+bx)^2
            {
            title: ()=> 'Azonosság <span class="difficulty_medium">nehez 1</span>',
            UI: ()=> `<div> (<span id="value_a">${MUtils.getRandomInt(1,10)}</span>y+<span id="value_b">${MUtils.getRandomInt(1,10)}</span>x)<sup>2</sup> = <input type="text" id="input"> </div>`,
            tooltip: ()=> `<div> hehe segitseg </div>`,
            calc: function(elem) {
                const parser=math.parser();
                parser.evaluate(`a=${elem.querySelector('#value_a').innerText}`);
                parser.evaluate(`b=${elem.querySelector('#value_b').innerText}`);
                parser.evaluate('x=3');
                parser.evaluate('y=4');
                let solution=parser.evaluate('(a*y+b*x)^2');
                return solution;
            },
        },
            //(ax+bx)^2
        {
            title: ()=> 'Azonosság <span class="difficulty_medium">nehez 2</span>',
            UI: ()=> `<div> (<span id="value_a">${MUtils.getRandomInt(1,10)}</span>x+<span id="value_b">${MUtils.getRandomInt(1,10)}</span>y)<sup>2</sup> = <input type="text" id="input"> </div>`,
            tooltip: ()=> `<div> hehe segitseg </div>`,
            calc: function(elem) {
                const parser=math.parser();
                parser.evaluate(`a=${elem.querySelector('#value_a').innerText}`);
                parser.evaluate(`b=${elem.querySelector('#value_b').innerText}`);
                parser.evaluate('x=3');
                parser.evaluate('y=4');
                let solution=parser.evaluate('(a*x+b*y)^2');
                return solution;
            }
        },
        //(ay-bx)^2

        {
            title: ()=> 'Azonosság <span class="difficulty_medium">nehez 3</span>',
            UI: ()=> `<div> (<span id="value_a">${MUtils.getRandomInt(1,10)}</span>y-<span id="value_b">${MUtils.getRandomInt(1,10)}</span>x)<sup>2</sup> = <input type="text" id="input"> </div>`,
            tooltip: ()=> `<div> hehe segitseg </div>`,
            calc: function(elem) {
                const parser=math.parser();
                parser.evaluate(`a=${elem.querySelector('#value_a').innerText}`);
                parser.evaluate(`b=${elem.querySelector('#value_b').innerText}`);
                parser.evaluate('x=3');
                parser.evaluate('y=4');
                let solution=parser.evaluate('(a*y-b*x)^2');
                return solution;
            },
        },
        //(ax-by)^2
        {
            title: ()=> 'Azonosság <span class="difficulty_medium">nehez 4</span>',
            UI: ()=> `<div> (<span id="value_a">${MUtils.getRandomInt(1,10)}</span>x-<span id="value_b">${MUtils.getRandomInt(1,10)}</span>y)<sup>2</sup> = <input type="text" id="input"> </div>`,
            tooltip: ()=> `<div> hehe segitseg </div>`,
            calc: function(elem) {
                const parser=math.parser();
                parser.evaluate(`a=${elem.querySelector('#value_a').innerText}`);
                parser.evaluate(`b=${elem.querySelector('#value_b').innerText}`);
                parser.evaluate('x=3');
                parser.evaluate('y=4');
                let solution=parser.evaluate('(a*x-b*y)^2');
                return solution;
            }
        },
        //(ax+by)(ax-by)
        {
            title: ()=> 'Azonosság <span class="difficulty_medium">nehez 5</span>',
            UI: function(){ 
                let a=MUtils.getRandomInt(1,10);
                let b=MUtils.getRandomInt(1,10);
                return `<div> (<span id="value_a">${a}</span>x+<span id="value_b">${b}</span>y)(${a}x-${b}y) = <input type="text" id="input"> </div>`;
            },
            tooltip: ()=> `<div> hehe segitseg </div>`,
            calc: function(elem) {
                const parser=math.parser();
                parser.evaluate(`a=${elem.querySelector('#value_a').innerText}`);
                parser.evaluate(`b=${elem.querySelector('#value_b').innerText}`);
                parser.evaluate('x=3');
                parser.evaluate('y=4');
                let solution=parser.evaluate('(a*x+b*y)*(a*x-b*y)');
                return solution;
            }
        },
        //(ay+bx)(ay-bx)
        {
            title: ()=> 'Azonosság <span class="difficulty_medium">nehez 6</span>',
            UI: function(){ 
                let a=MUtils.getRandomInt(1,10);
                let b=MUtils.getRandomInt(1,10);
                return `<div> (<span id="value_a">${a}</span>y+<span id="value_b">${b}</span>x)(${a}y-${b}x) = <input type="text" id="input"> </div>`;
            },
            tooltip: ()=> `<div> hehe segitseg </div>`,
            calc: function(elem) {
                const parser=math.parser();
                parser.evaluate(`a=${elem.querySelector('#value_a').innerText}`);
                parser.evaluate(`b=${elem.querySelector('#value_b').innerText}`);
                parser.evaluate('x=3');
                parser.evaluate('y=4');
                let solution=parser.evaluate('(a*y+b*x)*(a*y-b*x)');
                return solution;
            }
        },
        //(ax+bx)(ax-bx)
        {
            title: ()=> 'Azonosság <span class="difficulty_medium">nehez 7</span>',
            UI: function(){ 
                let a=MUtils.getRandomInt(1,10);
                let b=MUtils.getRandomInt(1,10);
                return `<div> (<span id="value_a">${a}</span>x+<span id="value_b">${b}</span>x)(${a}x-${b}x) = <input type="text" id="input"> </div>`;
            },
            tooltip: ()=> `<div> hehe segitseg </div>`,
            calc: function(elem) {
                const parser=math.parser();
                parser.evaluate(`a=${elem.querySelector('#value_a').innerText}`);
                parser.evaluate(`b=${elem.querySelector('#value_b').innerText}`);
                parser.evaluate('x=3');
                let solution=parser.evaluate('(a*x+b*x)*(a*x-b*x)');
                return solution;
            }
        },
        //(ax+bx)^2
        {
            title: ()=> 'Azonosság <span class="difficulty_medium">nehez 8</span>',
            UI: ()=> `<div> (<span id="value_a">${MUtils.getRandomInt(1,10)}</span>x-<span id="value_b">${MUtils.getRandomInt(1,10)}</span>x)<sup>2</sup> = <input type="text" id="input"> </div>`,
            tooltip: ()=> `<div> hehe segitseg </div>`,
            calc: function(elem) {
                const parser=math.parser();
                parser.evaluate(`a=${elem.querySelector('#value_a').innerText}`);
                parser.evaluate(`b=${elem.querySelector('#value_b').innerText}`);
                parser.evaluate('x=3');
                let solution=parser.evaluate('(a*x+b*x)^2');
                return solution;
            }
        },
        //(ax-bx)^2
        {
            title: ()=> 'Azonosság <span class="difficulty_medium">nehez 9</span>',
            UI: ()=> `<div> (<span id="value_a">${MUtils.getRandomInt(1,10)}</span>x-<span id="value_b">${MUtils.getRandomInt(1,10)}</span>x)<sup>2</sup> = <input type="text" id="input"> </div>`,
            tooltip: ()=> `<div> hehe segitseg </div>`,
            calc: function(elem) {
                const parser=math.parser();
                parser.evaluate(`a=${elem.querySelector('#value_a').innerText}`);
                parser.evaluate(`b=${elem.querySelector('#value_b').innerText}`);
                parser.evaluate('x=3');
                let solution=parser.evaluate('(a*x-b*x)^2');
                return solution;
            }
        },
    
    ],
        emelt: [],
    },



    Geometria: {
        konnyu: [
            //négyzet kerület terület
            {
                title: ()=> '<span class="difficulty_medium">Négyzet kerülete</span>',
                UI: ()=> `<div>Egy négyzetnek az oldalai <span id="value_a">${MUtils.getRandomInt(1,10)}</span> cm. Hány cm a kerülete? <input type="number" id="input"> cm </div>`,
                tooltip: ()=> `<div> hehe segitseg </div>`,
                calc: function(elem) {
                    const parser=math.parser();
                    parser.evaluate(`a=${elem.querySelector('#value_a').innerText}`);
                    let solution=parser.evaluate('4a');
                    return solution;
                }
            },
            {
                title: ()=> '<span class="difficulty_medium">Négyzet területe</span>',
                UI: ()=> `<div>Egy négyzetnek az oldalai <span id="value_a">${MUtils.getRandomInt(1,10)}</span> cm. Hány cm<sup>2</sup> a területe? <input type="number" id="input"> cm<sup>2</sup> </div>`,
                tooltip: ()=> `<div> hehe segitseg </div>`,
                calc: function(elem) {
                    const parser=math.parser();
                    parser.evaluate(`a=${elem.querySelector('#value_a').innerText}`);
                    let solution=parser.evaluate('a*a');
                    return solution;
                }
            },
             //téglalap kerület terület
             {
                title: ()=> '<span class="difficulty_medium">Téglalap kerülete</span>',
                UI: ()=> `<div>Egy téglalap egyik oldala <span id="value_a">${MUtils.getRandomInt(1,10)}</span>, a másik <span id="value_b">${MUtils.getRandomInt(1,10)}</span> cm. Hány cm a kerülete? <input type="number" id="input"> cm </div>`,
                tooltip: ()=> `<div> hehe segitseg </div>`,
                calc: function(elem) {
                    const parser=math.parser();
                    parser.evaluate(`a=${elem.querySelector('#value_a').innerText}`);
                    parser.evaluate(`b=${elem.querySelector('#value_b').innerText}`);
                    let solution=parser.evaluate('2a+2b');
                    return solution;
                }
            },
            {
                title: ()=> '<span class="difficulty_medium">Téglalap területe</span>',
                UI: ()=> `<div>Egy téglalap egyik oldala <span id="value_a">${MUtils.getRandomInt(1,10)}</span>, a másik <span id="value_b">${MUtils.getRandomInt(1,10)}</span> cm. Hány cm<sup>2</sup> a területe? <input type="number" id="input"> cm<sup>2</sup> </div>`,
                tooltip: ()=> `<div> hehe segitseg </div>`,
                calc: function(elem) {
                    const parser=math.parser();
                    parser.evaluate(`a=${elem.querySelector('#value_a').innerText}`);
                    parser.evaluate(`b=${elem.querySelector('#value_b').innerText}`);
                    let solution=parser.evaluate('a*b');
                    return solution;
                }
            },
             //háromszög kerület terület
             {
                title: ()=> '<span class="difficulty_medium">Háromszög kerülete</span>',
                UI:  function(){
                    let a=MUtils.getRandomInt(1,10);
                    let b=MUtils.getRandomInt(1,10);
                    let c=MUtils.getRandomInt(1,10);
                    while(a>b+c&&b>c+a&&c>b+a){
                        a=MUtils.getRandomInt(1,10);
                        b=MUtils.getRandomInt(1,10);
                        c=MUtils.getRandomInt(1,10);
                    }

                      return `<div>Egy háromszög oldalainak hossza <span id="value_a">${a}</span>, <span id="value_b">${b}</span> és <span id="value_c">${c}</span> cm. Hány cm a kerülete? <input type="number" id="input"> cm </div>`;
                    },
                tooltip: ()=> `<div> hehe segitseg </div>`,
                calc: function(elem) {
                    const parser=math.parser();
                    parser.evaluate(`a=${elem.querySelector('#value_a').innerText}`);
                    parser.evaluate(`b=${elem.querySelector('#value_b').innerText}`);
                    parser.evaluate(`c=${elem.querySelector('#value_c').innerText}`);
                    let solution=parser.evaluate('a+b+c');
                    return solution;
                }
            },
             //kőőőőr kerület terület
             {
                title: ()=> '<span class="difficulty_medium">Négyzet kerülete</span>',
                UI: ()=> `<div>Egy körnek a sugara <span id="value_a">${MUtils.getRandomInt(1,10)}</span> cm. Hány cm a kerülete? Válaszodat egész számra kerekítve add meg! <br> <input type="number" id="input"> cm </div>`,
                tooltip: ()=> `<div> hehe segitseg </div>`,
                calc: function(elem) {
                    const parser=math.parser();
                    parser.evaluate(`r=${elem.querySelector('#value_a').innerText}`);
                    let solution=math.round(parser.evaluate('2r*pi'),0);
                    return solution;
                }
            },
            {
                title: ()=> '<span class="difficulty_medium">Négyzet területe</span>',
                UI: ()=> `<div>Egy körnek a sugara <span id="value_a">${MUtils.getRandomInt(1,10)}</span> cm. Hány cm<sup>2</sup> a területe? Válaszodat egész számra kerekítve add meg! <br> <input type="number" id="input"> cm<sup>2</sup> </div>`,
                tooltip: ()=> `<div> hehe segitseg </div>`,
                calc: function(elem) {
                    const parser=math.parser();
                    parser.evaluate(`r=${elem.querySelector('#value_a').innerText}`);
                    let solution=math.round(parser.evaluate('r^2*pi'),0);
                    return solution;
                }
            },
        ],
        kozepes: [
            {
                title: ()=> '<span class="difficulty_medium">Háromszög területe</span>',
                UI: function(){
                    let a=MUtils.getRandomInt(1,10);
                    let b=MUtils.getRandomInt(1,10);
                    let c=MUtils.getRandomInt(1,10);
                    while(a>b+c&&b>c+a&&c>b+a){
                        a=MUtils.getRandomInt(1,10);
                        b=MUtils.getRandomInt(1,10);
                        c=MUtils.getRandomInt(1,10);
                    }

                return `<div>Egy háromszög oldalainak hossza <span id="value_a">${a}</span>, <span id="value_b">${b}</span> és <span id="value_c">${c}</span> cm. Hány cm<sup>2</sup> a területe? Számold ki a Hérón képlet segítségével egészre kerekítve! <br> <input type="number" id="input"> cm<sup>2</sup> </div>`;
                },
                tooltip: ()=> `<div> s=(a+b+c)/2   T=gyök(s(s*a)(s*b)(s*c)) </div>`,
                calc: function(elem) {
                    const parser=math.parser();
                    parser.evaluate(`a=${elem.querySelector('#value_a').innerText}`);
                    parser.evaluate(`b=${elem.querySelector('#value_b').innerText}`);
                    parser.evaluate(`c=${elem.querySelector('#value_c').innerText}`);
                    parser.evaluate('s=(a+b+c)/2')
                    let solution=Math.round(Math.sqrt(parser.evaluate('s*(s*a)*(s*b)*(s*c)')),2);
                    return solution;
                }
            },
            {
                title: ()=> '<span class="difficulty_medium">Derékszögű háromszög átfogója</span>',
                UI: function(){
                    let a=MUtils.getRandomInt(1,10);
                    let b=MUtils.getRandomInt(1,10);
                    let c=math.round(math.parser().evaluate(`sqrt(${a}^2+${b}^2)`),0);
                    while(a>b+c&&b>c+a&&c>b+a){
                        a=MUtils.getRandomInt(1,10);
                        b=MUtils.getRandomInt(1,10);
                        c=math.round(math.parser().evaluate(`sqrt(${a}^2+${b}^2)`),0);
                    }
                return `<div>Egy derékszögű háromszög befogóinak hossza <span id="value_a">${a}</span> és <span id="value_b">${b}</span> cm. Hány cm az átfogója? <input type="hidden" value="${c}" id="value_c"> <br> <input type="number" id="input"> cm </div>`;
                },
                tooltip: ()=> `<div> Pitagorasz tétel </div>`,
                calc: function(elem) {
                 return elem.querySelector('#value_c').value;
                }
            },
            {
                title: ()=> '<span class="difficulty_medium">Derékszögű háromszög egyik befogója</span>',
                UI: function(){
                    let a=MUtils.getRandomInt(1,10);
                    let b=MUtils.getRandomInt(1,10);
                    let c=math.round(math.parser().evaluate(`sqrt(${a}^2+${b}^2)`),2);
                    while(a>b+c&&b>c+a&&c>b+a){
                        a=MUtils.getRandomInt(1,10);
                        b=MUtils.getRandomInt(1,10);
                        c=math.round(math.parser().evaluate(`sqrt(${a}^2+${b}^2)`),2);
                    }
                return `<div>Egy derékszögű háromszög egyik befogójának hossza <span id="value_a">${a}</span>, átfogójának hossza <span id="value_c">${c}</span> cm. Hány cm a másik befogója? <input type="hidden" value="${b}" id="value_b"> <br> <input type="number" id="input"> cm </div>`;
                },
                tooltip: ()=> `<div> Pitagorasz tétel </div>`,
                calc: function(elem) {
                 return elem.querySelector('#value_b').value;
                }
            },
            {
                title: ()=> '<span class="difficulty_medium">Téglalap egyik oldala</span>',
                UI: function(){
                    let a=MUtils.getRandomInt(1,10);
                    let b=MUtils.getRandomInt(1,10);
                    let c=math.round(math.parser().evaluate(`sqrt(${a}^2+${b}^2)`),2);
                return `<div>Egy téglalap egyik oldala <span id="value_a">${a}</span>, átlója <span id="value_c">${c}</span> cm. Hány cm a másik oldala? <input type="hidden" value="${b}" id="value_b"> <br> <input type="number" id="input"> cm </div>`;
                },
                tooltip: ()=> `<div> Pitagorasz tétel </div>`,
                calc: function(elem) {
                 return elem.querySelector('#value_b').value;
                }
            },
        ],
        nehez: [],
        emelt: [],
    },



    // ...



}