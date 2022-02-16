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
        nehez: [{
            title: ()=> 'Azonosság <span class="difficulty_medium">nehez 1</span>',
            UI: ()=> `<div> (<span id="value_a">${MUtils.getRandomInt(1,10)}</span>y+<span id="value_b">${MUtils.getRandomInt(1,10)}</span>x)<sup>2</sup> = <input type="text" id="input"> </div>`,
            tooltip: ()=> `<div> hehe segitseg </div>`,
            calc: function(elem) {
                const parser=math.parser();
                parser.evaluate(`a=${elem.querySelector('#value_a').innerText}`);
                parser.evaluate(`b=${elem.querySelector('#value_b').innerText}`);
                parser.evaluate('x=3');
                parser.evaluate('y=3');
                let solution=parser.evaluate('(a*y+b*x)^2');
                return solution;
            },
        },
        {
            title: ()=> 'Azonosság <span class="difficulty_medium">nehez 2</span>',
            UI: ()=> `<div> (<span id="value_a">${MUtils.getRandomInt(1,10)}</span>x+<span id="value_b">${MUtils.getRandomInt(1,10)}</span>y)<sup>2</sup> = <input type="text" id="input"> </div>`,
            tooltip: ()=> `<div> hehe segitseg </div>`,
            calc: function(elem) {
                const parser=math.parser();
                parser.evaluate(`a=${elem.querySelector('#value_a').innerText}`);
                parser.evaluate(`b=${elem.querySelector('#value_b').innerText}`);
                parser.evaluate('x=3');
                parser.evaluate('y=3');
                let solution=parser.evaluate('(a*x+b*y)^2');
                return solution;
            }
        },],
        ooodry: [],
    },



    NemAzonossagok: {
        konnyu: [],
        kozepes: [],
        nehez: [],
        ooodry: [],
    },



    // ...



}