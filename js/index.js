const MTasks = {
    jtasks: [],
    list: [],
    index: 0,
    add(object,difficulty,index) {
        if(MData.hasOwnProperty(object) && MData[object].hasOwnProperty(difficulty)) {
            let newTask = {
                elem: document.querySelector('#taskTemplate > .task').cloneNode(true),
                type: MData[object][difficulty][index],
            }
            if(newTask.elem && newTask.type) {
                newTask.elem.setAttribute('task-id',this.list.length || 0);
                newTask.elem.querySelector('#title').innerHTML = newTask.type.title();
                newTask.elem.querySelector('#tooltip').innerHTML = newTask.type.tooltip();
                newTask.elem.querySelector('#ui').innerHTML = newTask.type.UI();
                if(newTask.elem.querySelector('#input')) {
                    newTask.elem.querySelector('#input').replaceWith(newTask.elem.querySelector('#input').cloneNode(true)); // clear event listeners
                    newTask.elem.querySelector('#input').addEventListener('keydown',() => {
                        console.log('#input keydown');
                    },true);
                }
                this.list.push(newTask);
            }
        }
    },
    next() {
        this.index += this.index<this.list.length-1 ? 1 : 0;
        return this.list[this.index];
    },
    prev() {
        this.index -= this.index>0 ? 1 : 0;
        return this.list[this.index];
    },
    html() {
        if(this.list.length>0 && this.list[this.index]) {
            return this.list[this.index].elem;
        }
        console.log({event: 'MTasks.html()', error: 'There are no tasks.'});
        return document.createElement('div');
    },
    clear() {
        this.list = [];
        this.index = 0;
    },
    isLast() { return this.index == this.list.length-1; },
    isFirst() { return this.index == 0; },
    evaluate() {
        const eParser=math.parser();
        MUtils.replaceMathVars(eParser);
        return {
            date: new Date().toISOString(),
            name: document.getElementById('personName').value || 'Névtelen',
            score: this.list.concat([]).map(m => eParser.evaluate(m.elem.querySelector('#input').value) == m.type.calc(m.elem)).filter(f => f).length,
            total: this.list.length,
            tasks: this.list.map(m => ({
                type: m.elem.querySelector('#title').innerText.trim(),
                task: m.elem.querySelector('#ui').innerText.trim(),
            })),
        }
    },
}

const MManage = {
    moveUp(node) {
        let card = MUtils.parentNode(node,3);
        card.parentNode.insertBefore(card,card.previousElementSibling);
        window.scrollBy(0,-70);
    },
    moveDown(node) {
        let card = MUtils.parentNode(node,3);
        if(MUtils.nextSibling(card,1)) {
            card.parentNode.insertBefore(card,MUtils.nextSibling(card,2));
        }
        else {
            card.parentNode.prepend(card);
        }
        window.scrollBy(0,70);
    },
    removeItem(node) {
        MUtils.parentNode(node,3).remove();
    },
    addToHistory(item) {
        if(localStorage.getItem('history')) {
            let historyArray = JSON.parse(localStorage.getItem('history'));
            historyArray.push(item);
            localStorage.setItem('history',JSON.stringify(historyArray,null,2));
        }
        else localStorage.setItem('history',JSON.stringify([item],null,2));
    },
    downloadHistory() {
        let date = new Date();
        MUtils.saveFile(`eredmenyek-${date.toISOString()}.json`,localStorage.getItem('history'));
    },
    clearHistory() {
        localStorage.removeItem('history');
    },
    printHistory() {
        let history = JSON.parse(localStorage.getItem('history'));
        history.forEach(item => {
            
        });
    },
    printTaskSelect() {
        this.show('#taskSelect');
        this.show('#taskSelectJson');
        this.show('#genTaskCountContainer');
        this.hide('#taskSolve');
        this.hide('#resultsContainer');
        let container = document.getElementById('taskSelect');
        container.innerText = '';
        let btn = document.querySelector('#startBtnTemplate > .btn');
        let rowTemplate = document.querySelector('#startTemplate > .row');
        for(elem in MData) {
            let newRow = rowTemplate.cloneNode(true);
            newRow.querySelector('#rowHeader').innerText = elem;
            for(difficulty in MData[elem]) {
                let newBtn = btn.cloneNode(true);
                newBtn.innerText = difficulty;
                console.log(difficulty+'');
                newBtn.setAttribute(`onclick`,`MManage.selectTask('${elem}','${difficulty}')`);
                if(MData[elem][difficulty].length==0) newBtn.classList.add('disabled');
                newRow.querySelector('#rowBtnGroup').appendChild(newBtn);
            }
            container.appendChild(newRow);
        }
    },
    selectTask(object,difficulty,index) {
        this.hide('#taskSelect');
        this.hide('#taskSelectJson');
        this.hide('#genTaskCountContainer');
        this.hide('#resultsContainer');
        this.show('#taskSolve');
        let count = document.getElementById('genTaskCount').value?document.getElementById('genTaskCount').value:MTasks.list.length;
        count = count>=3 && count<=100 ? count : 3;
        let container = document.getElementById('taskContainer');
        container.innerText = '';
        console.log({event:'MManage.selectTask()',object,difficulty,index,count});
        MTasks.clear();
        while(count--) {
            MTasks.add(object, difficulty, index?index:MUtils.getRandomInt(0,MData[object][difficulty].length));
        }
        MTasks.list.concat([]).map(m => {
            container.appendChild(m.elem);
            m.elem.style.display = 'none';
        });
        MTasks.html().style.display = 'block';
        this.setCounter();
    },
    //By: Zoli
    loadFromJson(buttonId, autolaunch) {
        const [file] = document.getElementById(buttonId).files; // https://www.deadcoderising.com/2017-03-28-es6-destructuring-an-elegant-way-of-extracting-data-from-arrays-and-objects-in-javascript/
        if (file) {
            MTasks.jtasks = [];
            fetch(URL.createObjectURL(file))
            .then(response => response.json())
            .then(data => data.forEach(x => {
                let elem = document.querySelector('#teacherModalObjectTemplate > .card').cloneNode(true);
                elem.querySelector('#objectTitle').innerText = x.object;
                elem.setAttribute('objtype',x.object);
                for(difficulty in MData[x.object]) {
                    let _elem = document.createElement('option');
                    _elem.value = difficulty;
                    _elem.innerText = difficulty;
                    if(difficulty == x.difficulty) {
                        _elem.selected = 'selected';
                    }
                    elem.querySelector('#objectDifficultySelect').appendChild(_elem);
                }
                elem.querySelector('#objectCountSelect').value = x.count;
                document.querySelector('#genrow').appendChild(elem);
            })).then(th => {
                if(autolaunch) this.selectTaskJson();
            });
        }
    },
    saveAsJson() {
        var jdata = JSON.stringify(this.getTeacherModalJson(),null,2);
        console.log(jdata);
        MUtils.saveFile("dolgozat.json",jdata);
    },
    selectTaskJson() {
        this.hide('#taskSelect');
        this.hide('#taskSelectJson');
        this.hide('#genTaskCountContainer');
        this.hide('#resultsContainer');
        this.show('#taskSolve');
        let container = document.getElementById('taskContainer');
        container.innerText = '';
        MTasks.clear();
        console.log(this.getTeacherModalJson());
        this.getTeacherModalJson().forEach(x => {
            //console.log(x);
            //console.log([...new Array(parseInt(x.count)).keys()]);
            [...new Array(parseInt(x.count)).keys()].map(i => {
                MTasks.add(x.object, x.difficulty, MUtils.getRandomInt(0,MData[x.object][x.difficulty].length));
                console.log(`[NEW TASK] obj:${x.object} diff:${x.difficulty} count:${x.count} i:${i} tasklength:${MTasks.list.length}`);
            });
        });
        MTasks.list.concat([]).map(m => {
            container.appendChild(m.elem);
            m.elem.style.display = 'none';
        });
        MTasks.html().style.display = 'block';
        this.setCounter();
    },
    //By: Zoli vége
    teacherModalAdd() {
        let obj = document.querySelector("#teacherModalObjectSelect").value;
        let elem = document.querySelector('#teacherModalObjectTemplate > .card').cloneNode(true);
        elem.querySelector('#objectTitle').innerText = obj;
        elem.setAttribute('objtype',obj);
        Object.keys(MData[obj]).filter(f => MData[obj][f].length>0).forEach(difficulty => {
            let _elem = document.createElement('option');
            _elem.value = difficulty;
            _elem.innerText = difficulty;
            elem.querySelector('#objectDifficultySelect').appendChild(_elem);
        });
        document.querySelector('#genrow').appendChild(elem);
    },
    getTeacherModalJson() {
        let result = [];
        [...document.querySelectorAll("#genrow > .card")].forEach(task => {
            result.push({
                object: task.getAttribute('objtype'),
                difficulty: task.querySelector('#objectDifficultySelect').value,
                count: task.querySelector('#objectCountSelect').value,
            });
        });
        return result;
    },
    next() {
        if(MTasks.isLast()) {
            let results = MTasks.evaluate();
            this.addToHistory(results);
            MTasks.clear();
            this.removeChildren(document.getElementById('taskContainer'));
            let resultsContainer = document.getElementById('resultsContainer');
            resultsContainer.querySelector('#score').innerText = results.score;
            resultsContainer.querySelector('#total').innerText = results.total;
            resultsContainer.querySelector('#percentage').innerText = Math.round(results.score / results.total * 100);
            this.show('#resultsContainer');
            this.hide('#taskSelect');
            this.hide('#taskSelectJson');
            this.hide('#taskSolve');
        }
        else {
            MTasks.list.concat([]).map(m => m.elem.style.display = 'none');
            MTasks.next().elem.style.display = 'block';
        }
        this.setCounter();
    },
    prev() {
        if(MTasks.isFirst()) {
            this.show('#taskSelect');
            this.show('#taskSelectJson');
            this.show('#genTaskCountContainer');
            this.hide('#taskSolve');
            this.hide('#resultsContainer');
            MTasks.clear();
            this.removeChildren(document.getElementById('taskContainer'));
        }
        else {
            MTasks.list.concat([]).map(m => m.elem.style.display = 'none');
            MTasks.prev().elem.style.display = 'block';
        }
        this.setCounter();
    },
    done() {
        this.show('#taskSelect');
        this.show('#taskSelectJson');
        this.show('#genTaskCountContainer');
        this.hide('#taskSolve');
        this.hide('#resultsContainer');
    },
    setCounter: () => document.getElementById('taskCount').setAttribute('placeholder',`Feladat: ${MTasks.index+1} / ${MTasks.list.length}`),

    show(selector) {
        if(selector) [...document.querySelectorAll(selector)].map(m => m.style.display = 'block');
    },
    hide(selector) {
        if(selector) [...document.querySelectorAll(selector)].map(m => m.style.display = 'none');
    },
    removeChildren(node) {
        [...node.querySelectorAll('*')].map(m => m.remove());
    },

   
}

MManage.printTaskSelect();
Object.keys(MData).filter(f => Object.keys(MData[f]).length>0).forEach(key => {
    let _elem = document.createElement('option');
    _elem.value = key;
    _elem.innerText = key;
    document.querySelector('#teacherModalObjectSelect').appendChild(_elem);
});