let newTask = '';
let remainingTasks = [];
let completedTasks = [];
let instruction = 'all';
let remaining = 'remaining';
let completed = 'completed';

const addTask = () => {
    newTask = document.getElementById("newtask").value;
    remainingTasks.push(newTask);
    document.getElementById('newtask').value = '';
    printTasksOnDom();
}

const markTaskCompleted = (indx, instr) => {
    if (instr == remaining) {
        completedTasks.push(remainingTasks[indx]);
        remainingTasks.splice(indx,1);
        printTasksOnDom();
    } 
    if (instr == 'completed') {
    }
}

const deleteTask = (indx, instr) => {
    if (instr == remaining) {
        remainingTasks = remainingTasks.filter((element, index) => {
            return index !== indx;
        })
    } 
    if (instr == completed) {
        completedTasks = completedTasks.filter((element, index) => {
            return index !== indx;
        })
    }
    printTasksOnDom();
}

const changeInstruction = (input) => {
    instruction = input;
    printTasksOnDom();
}

const printTasksOnDom = () => {
    document.getElementById("tasks").innerHTML = '';
    const instrC = 'completed';
    const instrR = 'remaining';
    if (instruction == 'all') {
        for (let index = 0; index < remainingTasks.length; index++) {
            document.getElementById("tasks").innerHTML += 
                "<li>" + remainingTasks[index] + "<button class='delete' onclick='deleteTask(" + index + ","+ instrR+")' >Delete</button>" + "<button onclick='markTaskCompleted("+ index + ","+ instrR + ")'>Completed</button>" + "</li>";
        }
        for (let index = 0; index < completedTasks.length; index++ ) {
            document.getElementById("tasks").innerHTML +=
                "<li>" + completedTasks[index] + "<button class='delete' onclick='deleteTask(" + index + ","+ instrC+ ")' >Delete</button>" + "</li>";
        }
    }
    if (instruction == 'completed') {
        for (let index = 0; index < completedTasks.length; index++ ) {
            document.getElementById("tasks").innerHTML +=
                "<li>" + completedTasks[index] + "<button class='delete' onclick='deleteTask(" + index + ","+ instrC+ ")' >Delete</button>" + "</li>";
        }
    }
    if (instruction == 'remaining') {
        for (let index = 0; index < remainingTasks.length; index++) {
            document.getElementById("tasks").innerHTML += 
                "<li>" + remainingTasks[index] + "<button class='delete' onclick='deleteTask(" + index + ","+ instrR+")' >Delete</button>" + "<button onclick='markTaskCompleted("+ index + ","+ instrR + ")'>Completed</button>" + "</li>";
        }
    }
}

