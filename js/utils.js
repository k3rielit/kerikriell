const MUtils = {
    getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
    },
    getRandomFloat(min, max) {
        return Math.random() * (max - min) + min;
    },
    getRandomChar(pool = 'abcdefghijklmnopqrstuvwxyz') {
        return pool[this.getRandomInt(0, pool.length)];
    },
    getRandomString(length, pool = 'abcdefghijklmnopqrstuvwxyz') {
        return [...Array(length).keys()].map(m => pool[this.getRandomInt(0, pool.length)]).join('');
    },
    normalizeMath(s) {
        let varChars = 'abcdefghijklmnopqrstuvwxyz';
        let lastVarChar = false;
        let result = '';
        for (let charI = 0; charI < s.length; charI++) {
            if (lastVarChar && varChars.includes(s[charI])) result += '*';
            else if (varChars.includes(s[charI])) lastVarChar = true;
            else lastVarChar = false;
            result += s[charI];
        }
        return result;
    },
    replaceMathVars(_parser) {
        let varChars = 'abcdefghijklmnopqrstuvwxyz';
        for (let ri = 1; ri <= varChars.length; ri++) {
            _parser.evaluate(`${varChars[ri - 1]}=${ri * 2}`);
        }
    },
    saveFile(filename, content) {
        const blob = new Blob([content], {type: 'text'});
        if(window.navigator.msSaveOrOpenBlob) {
            window.navigator.msSaveBlob(blob, filename);
        }
        else{
            const elem = window.document.createElement('a');
            elem.style.display = "none";
            elem.href = window.URL.createObjectURL(blob, { oneTimeOnly: true });
            elem.download = filename;
            document.body.appendChild(elem);
            elem.click();
            document.body.removeChild(elem);
        }
    },
    nextSibling(elem,times) {
        let elem2 = elem.nextElementSibling;
        for(let elemCount=0; elemCount<times-1; elemCount++) {
            elem2 = elem2 ? elem2.nextElementSibling : elem2;
        }
        return elem2;
    },
    parentNode(elem,times) {
        let elem2 = elem.parentNode;
        for(let elemCount=0; elemCount<times-1; elemCount++) {
            elem2 = elem2.parentNode;
        }
        return elem2;
    },
    scrollToBottom() {
        window.scrollTo(0,document.body.scrollHeight);
    },
}

const MDebug = {
    solve() {
        //console.log({event:'MDebug.solve()',result:MTasks.list.concat([]).map(m => m.type.calc(m.elem))});
        console.log(MTasks.list.concat([]).map(m => m.type.calc(m.elem)));
    },
    loadExact(object = Object.keys(MData)[0], difficulty = Object.keys(MData[object])[0], index = 0) {
        console.log({ event: 'MDebug.loadExact()', object, difficulty, index, elem: MData[object][difficulty][index] });
        MManage.selectTask(object, difficulty, index, 99);
    },
    loadLast(object = Object.keys(MData)[Object.keys(MData).length - 1], difficulty = Object.keys(MData[object])[Object.keys(MData[object]).length - 1]) {
        let collection = MData[object][difficulty];
        console.log({ event: 'MDebug.loadLast()', object, difficulty, elem: collection[collection.length - 1] });
        MManage.selectTask(object, difficulty, collection.length - 1 >= 0 ? collection.length - 1 : 0, 99);
    },
    loadFirst(object = Object.keys(MData)[0], difficulty = Object.keys(MData[object])[0]) {
        let collection = MData[object][difficulty];
        console.log({ event: 'MDebug.loadFirst()', object, difficulty, index: 0, elem: collection[0] });
        MManage.selectTask(object, difficulty, 0, 99);
    },
    /*loadWholeDifficulty(object, difficulty) { },
    loadWholeObject(object) { },
    loadWholeMData() { },*/
}