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