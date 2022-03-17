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
    }
}