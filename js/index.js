const MTasks = {
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
    addToHistory(item) {
        if(localStorage.getItem('history')) {
            let historyArray = JSON.parse(localStorage.getItem('history'));
            historyArray.push(item);
            localStorage.setItem('history',JSON.stringify(historyArray,null,2));
        }
        else localStorage.setItem('history',JSON.stringify([item],null,2));
    },
    getHistory() {
        return JSON.parse(localStorage.getItem('history'));
    },
    downloadHistory() {
        let date = new Date();
        MUtils.saveFile(`eredmenyek-${date.toISOString()}.json`,localStorage.getItem('history'));
    },
    clearHistory() {
        localStorage.removeItem('history');
    },
    printTaskSelect() {
        this.show('#taskSelect');
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
     loadFromJson(index){
        const [file] = document.getElementById("fileLoader").files;
        let jtasks;
        if (file) {
         jtasks=[];
            let cnt=0;
            fetch(URL.createObjectURL(file))
            .then(response => response.json())
            .then(data => data.forEach(x=>{
                cnt=x.count;
                 while(cnt--)
                    jtasks.push(x)
                }));
            }
            return jtasks;
    },
    printTestGenSelect() {
          this.show('#testCreator');
        this.show('#buttonsContainer');
        this.hide('#uiContainer');
        this.hide('#taskSolve');
        this.hide('#resultsContainer');
        let container = document.getElementById('taskSelect');
        let cont = document.querySelector('#testCreator > #taskCreator');
        let newRow = cont.cloneNode(true);;
      
        container.appendChild(newRow);
    },
    printAvailableDiffs(elem){
        for(difficulty in MData[elem]) {
            let opt=document.createElement('option');
            opt.value=difficulty;
            opt.innerText = difficulty;
            document.getElementById('difficulty').appendChild(opt);
        }
    },
    hideElements(){
        this.show('#testCreator');
        this.show('#buttonsContainer');
        this.hide('#uiContainer');
        this.hide('#taskSolve');
        this.hide('#resultsContainer');
        let opt;
        for(elem in MData) {
            opt=document.createElement('option');
            opt.text=elem;
            opt.value=elem;
            document.getElementById('object').appendChild(opt);
        }
        this.printAvailableDiffs(elem);


    },
    saveAsJson(){
        var data=[];
        for (let i = 0; i < document.getElementsByClassName("data").length; i++) {
            data.push({
                object:document.getElementsByClassName("data")[i].getElementsByTagName("select")[0].value,
                difficulty:document.getElementsByClassName("data")[i].getElementsByTagName("select")[1].value,
                count:document.getElementsByClassName("data")[i].getElementsByTagName("input")[0].value
            } );
        }
        console.log(data);
        var jdata=JSON.stringify(data);
        console.log(jdata);
        MUtils.saveFile("dolgozat.json",jdata);        //document.getElementsByClassName("data")[0].getElementsByTagName("select")[0].value;

    },
    selectTaskJson() {
        let tmp=MManage.loadFromJson();
        tmp.forEach(x=>{
            MManage.selectTask(x.object,x.difficulty,index?index:MUtils.getRandomInt(0,MData[object][difficulty].length))
        });
    },
    //By: Zoli vége
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
