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
                UI: ()=> `<div> (<span id="value_a">${MUtils.getRandomInt(1,110)}</span>+<span id="value_b">${MUtils.getRandomInt(1,110)}</span>)<sup>2</sup> = <input type="number" id="input"> </div>`,
                tooltip: ()=> `<div> hehe segitseg </div>`,
                calc: function(elem) {
                    let a = parseInt(elem.querySelector('#value_a').innerText);
                    let b = parseInt(elem.querySelector('#value_b').innerText);
                    return Math.pow(a+b,2);
                },
            },
            {
                title: ()=> 'Azonosság <span class="difficulty_medium">kozepes 2</span>',
                UI: ()=> `<div> (<span id="value_a">${MUtils.getRandomInt(1,110)}</span>+<span id="value_b">${MUtils.getRandomInt(1,110)}</span>)<sup>2</sup> = <input type="number" id="input"> </div>`,
                tooltip: ()=> `<div> hehe segitseg </div>`,
                calc: function(elem) {
                    let a = parseInt(elem.querySelector('#value_a').innerText);
                    let b = parseInt(elem.querySelector('#value_b').innerText);
                    return Math.pow(a+b,2);
                },
            },
            // more ...
        ],
        nehez: [],
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