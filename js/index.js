const MManage = {
    placeRandom(object,difficulty) {
        if(object.hasOwnProperty(difficulty)) {
            console.log('has difficulty');
            let elem = object[difficulty][MUtils.getRandomInt(0,object[difficulty].length)];
            if(elem) {
                document.getElementById('title').innerHTML = elem.title();
                document.getElementById('tooltip').innerHTML = elem.tooltip();
                document.getElementById('ui').innerHTML = elem.UI();
                document.getElementById('check').replaceWith(document.getElementById('check').cloneNode(true)); // clear event listeners
                document.getElementById('check').addEventListener('click',() => {
                    console.log(elem.calc(document.body)); // replace with the container
                    console.log(document.querySelector('#ui > * > #input').value);
                },true);
            }
        }
        else {
            console.log('kekw no difficulty');
        }
    }
}

MManage.placeRandom(MData.Azonossagok,'konnyu');