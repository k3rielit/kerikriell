const MManage = {
    tasks: [],
    reset: () => MManage.tasks = [],
    addTasks(object,difficulty,count) {
        while(count--) {
            this.tasks.push(this.getRandomTask(object,difficulty));
        }
        document.querySelector('#tasksCheck').addEventListener('click',()=>{
            console.log(this.tasks.concat([]).map(m => parseInt(m.elem.querySelector('#input').value) == m.type.calc(m.elem)).filter(f => f).length + "/" + this.tasks.length);
        },true);
    },
    print(selector) {
        if(this.tasks.length>0) {
                console.log('xd');
            this.tasks.forEach(task => {
                // task: { HTML Element, MData reference }
                document.querySelector(selector).appendChild(task.elem);
            });
        }
    },
    getRandomTask(object,difficulty) {
        if(object.hasOwnProperty(difficulty)) {
            let newTask = {
                elem: document.getElementById('taskTemplate').querySelector('.task').cloneNode(true),
                type: object[difficulty][MUtils.getRandomInt(0,object[difficulty].length)],
                check: undefined,
            }
            if(newTask.elem && newTask.type) {
                newTask.elem.querySelector('#title').innerHTML = newTask.type.title();
                newTask.elem.querySelector('#tooltip').innerHTML = newTask.type.tooltip();
                newTask.elem.querySelector('#ui').innerHTML = newTask.type.UI();
                console.log(newTask.elem.querySelector('#input'));
                newTask.elem.querySelector('#input').replaceWith(newTask.elem.querySelector('#input').cloneNode(true)); // clear event listeners
                newTask.elem.querySelector('#input').addEventListener('keydown',() => {
                    //console.log(newTask.type.calc(newTask.elem)); // replace with the container
                    console.log('xd');
                },true);
                return newTask;
            }
            else return null;
        }
    },
    printTaskSelect() {
        this.show('#taskSelect');
        this.hide('#taskSolve');
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
                newBtn.addEventListener('click',()=>console.log(`${difficulty}`),true);
                if(MData[elem][difficulty].length==0) newBtn.classList.add('disabled');
                newRow.querySelector('#rowBtnGroup').appendChild(newBtn);
            }
            container.appendChild(newRow);
        }
    },
    selectTask(object,difficulty) {
        this.hide('#taskSelect');
        this.show('#taskSolve');
        console.log({object,difficulty});
        let container = document.getElementById('taskContainer');
        container.innerText = '';
        this.addTasks(MData[object],difficulty,1);
        this.print('#taskContainer');
    },

    logMegold() {
        console.log(this.tasks.concat([]).map(m => m.type.calc(m.elem)));
    },
    show(selector) {
        [...document.querySelectorAll(selector)].map(m => m.style.display = 'block');
    },
    hide(selector) {
        [...document.querySelectorAll(selector)].map(m => m.style.display = 'none');
    },
}

//MManage.placeRandom(MData.Azonossagok,'konnyu');
//MManage.addTasks(MData.Azonossagok,'konnyu',10);
//MManage.print('#taskContainer');
//MManage.logMegold();
MManage.printTaskSelect();