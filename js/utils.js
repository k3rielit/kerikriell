const MUtils = {
    getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min) + min);
    },
    getRandomFloat(min, max) {
      return Math.random()*(max-min)+min;
    },
    getRandomChar(pool = 'abcdefghijklmnopqrstuvwxyz') {
      return pool[this.getRandomInt(0,pool.length)];
    },
    getRandomString(length, pool = 'abcdefghijklmnopqrstuvwxyz') {
      return [...Array(length).keys()].map(m => pool[this.getRandomInt(0,pool.length)]).join('');
    },
    normalizeMath(s) {
      let varChars = 'abcdefghijklmnopqrstuvwxyz';
      let lastVarChar = false;
      let result = '';
      for(let charI = 0; charI < s.length; charI++) {
        if(lastVarChar && varChars.includes(s[charI])) result += '*';
        else if(varChars.includes(s[charI])) lastVarChar = true;
        else lastVarChar = false;
        result += s[charI];
      }
      return result;
    },
    MSplit(s) {

    },
    testMSplit() {
      ['1+1'];
      let testCases = [
        this.MSplit('1+1'), this.MSplit('1-1'), this.MSplit('1--1'),
        this.MSplit('1-(-1)'), this.MSplit('1 + 1'), this.MSplit('1 +1'),
        this.MSplit('1+ 1'), this.MSplit('1 - 1'), this.MSplit('1- 1'),
        this.MSplit('1 -1'), this.MSplit('1 --1'), this.MSplit('1-- 1'),
        this.MSplit('1 -1'), this.MSplit('1 -(-1)'), this.MSplit('1-(- 1)'),
        this.MSplit('1 -1'), this.MSplit('1   -(- 1)'), this.MSplit('1- ( - 1) + 1 - (1+ (1-1))'),
      ];
      let results = [];
      //testCases.forEach(f => results.push;
    }
}

/*

() =>

function() {}
*/