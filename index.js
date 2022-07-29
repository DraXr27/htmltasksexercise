// aqui va todo el código


const deleteTask = (id) => {
    
    const taskListElement = document.getElementById("task-list")

    const elementToDelete = document.getElementById( id )

    taskListElement.removeChild( elementToDelete )

    console.log("tarea eliminada")

    if (taskListElement.children.length == 0) {

        const btnDeleteAll = document.getElementById("delAll-task-btn")

        btnDeleteAll.style.visibility = "hidden";

    }

    taskListCount()

}


window.onload = function() {
    taskListCount()
}



const taskListCount = () => {

    const taskListElement = document.getElementById("task-list")

    const taskNumber = document.getElementById("taskNumber")

    taskNumber.innerHTML = taskListElement.children.length
}


const formatDate = (date) => {
    var f = new Date(date);
    if (f.getMonth() < 9) {
        return `${(f.getDate() + 1) + "/0" + (f.getMonth() + 1)+ "/" + f.getFullYear()}`;
    }
    else {
        return `${(f.getDate() + 1) + "/" + (f.getMonth() + 1)+ "/" + f.getFullYear()}`;
    }
}



const btnDeleteAll = document.getElementById("delAll-task-btn")

if (btnDeleteAll) {
    btnDeleteAll.addEventListener("click", function() {

        result = confirm("Está Seguro Que Desea Eliminar Todas Las Tareas?");

        const oof = new Audio('assets/sounds/oof.wav');
        oof.play();

        if (result)
        {
            const taskListElement = document.getElementById("task-list")

            if (taskListElement.children.length > 0) {
                for (let i = 0; i < taskListElement.children.length; i=0) {
                    deleteTask(taskListElement.children[i].id);
                }

            }

            btnDeleteAll.style.visibility = "hidden";
        }
        else {
            console.log("Borrar Todo, Cancelado")
        }

    })
}



// codigo de ejemplo
const btnElement = document.getElementById("add-task-btn")

if (btnElement) {
    btnElement.addEventListener("click", function() {
        console.log("tarea agregada")
    })
}

// agarrar el elemento form
const formElement = document.getElementById("task-form")

if(formElement) {

    formElement.addEventListener("submit", function(event) {
        event.preventDefault()
        
        // extraer los datos

        const inputName = document.getElementById("taskName")

        const inputPrior = document.getElementById("taskPriority")

        const inputDate = document.getElementById("taskDate")

        if (inputName.value !== "" && inputDate.value !== "") {

            console.log(inputDate.value)

            const taskListElement = document.getElementById("task-list")

            let mayorid = 1;

            if (taskListElement.children.length > 0) {

                const ultimoHijo = taskListElement.children[ taskListElement.children.length - 1]

                mayorid += parseInt( ultimoHijo.id )

            }


            
            if (inputPrior.value == 1 || inputPrior.value == 2) {

                taskListElement.innerHTML = taskListElement.innerHTML + `<li id="${mayorid}" class="list-group-item d-flex justify-content-between align-items-center" style="word-break: keep-all;  background-color: dodgerblue; color: white;">
                    <div class="mx-2 text-start" style="flex: 1;">
                        <div class="fw-bold">${inputName.value}</div>
                        <div class="fw-light">${formatDate(inputDate.value)}</div>
                    </div>

                    <span class="badge bg-primary rounded-pill mx-1">${inputPrior.value}</span>

                    <button onclick = "deleteTask(${mayorid})" type="button" class="btn btn-outline-danger btn-sm" style="border-color: red;">
                    <svg fill="#000000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20px" height="20px">
                        <path
                            d="M 10 2 L 9 3 L 4 3 L 4 5 L 5 5 L 5 20 C 5 20.522222 5.1913289 21.05461 5.5683594 21.431641 C 5.9453899 21.808671 6.4777778 22 7 22 L 17 22 C 17.522222 22 18.05461 21.808671 18.431641 21.431641 C 18.808671 21.05461 19 20.522222 19 20 L 19 5 L 20 5 L 20 3 L 15 3 L 14 2 L 10 2 z M 7 5 L 17 5 L 17 20 L 7 20 L 7 5 z M 9 7 L 9 18 L 11 18 L 11 7 L 9 7 z M 13 7 L 13 18 L 15 18 L 15 7 L 13 7 z" 
                        />
                    </svg>
        
                    </button>
                </li>`

            }
            else if (inputPrior.value == 3 || inputPrior.value == 4) {

                taskListElement.innerHTML = taskListElement.innerHTML + `<li id="${mayorid}" class="list-group-item d-flex justify-content-between align-items-center" style="word-break: keep-all; background-color: gold; color: black;">
                    <div class="mx-2 text-start" style="flex: 1;">
                        <div class="fw-bold">${inputName.value}</div>
                        <div class="fw-light">${formatDate(inputDate.value)}</div>
                    </div>

                    <span class="badge bg-primary rounded-pill mx-1">${inputPrior.value}</span>

                    <button onclick = "deleteTask(${mayorid})" type="button" class="btn btn-outline-danger btn-sm" style="border-color: red;">
                    <svg fill="#000000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20px" height="20px">
                        <path
                            d="M 10 2 L 9 3 L 4 3 L 4 5 L 5 5 L 5 20 C 5 20.522222 5.1913289 21.05461 5.5683594 21.431641 C 5.9453899 21.808671 6.4777778 22 7 22 L 17 22 C 17.522222 22 18.05461 21.808671 18.431641 21.431641 C 18.808671 21.05461 19 20.522222 19 20 L 19 5 L 20 5 L 20 3 L 15 3 L 14 2 L 10 2 z M 7 5 L 17 5 L 17 20 L 7 20 L 7 5 z M 9 7 L 9 18 L 11 18 L 11 7 L 9 7 z M 13 7 L 13 18 L 15 18 L 15 7 L 13 7 z" 
                        />
                    </svg>
        
                    </button>
                </li>`

            }
            else {

                taskListElement.innerHTML = taskListElement.innerHTML + `<li id="${mayorid}" class="list-group-item d-flex justify-content-between align-items-center" style="word-break: keep-all;  background-color: crimson; color: white;">
                    <div class="mx-2 text-start" style="flex: 1;">
                        <div class="fw-bold">${inputName.value}</div>
                        <div class="fw-light">${formatDate(inputDate.value)}</div>
                    </div>

                    <span class="badge bg-primary rounded-pill mx-1">${inputPrior.value}</span>

                    <button onclick = "deleteTask(${mayorid})" type="button" class="btn btn-outline-danger btn-sm" style="border-color: red;">
                    <svg fill="#000000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20px" height="20px">
                        <path
                            d="M 10 2 L 9 3 L 4 3 L 4 5 L 5 5 L 5 20 C 5 20.522222 5.1913289 21.05461 5.5683594 21.431641 C 5.9453899 21.808671 6.4777778 22 7 22 L 17 22 C 17.522222 22 18.05461 21.808671 18.431641 21.431641 C 18.808671 21.05461 19 20.522222 19 20 L 19 5 L 20 5 L 20 3 L 15 3 L 14 2 L 10 2 z M 7 5 L 17 5 L 17 20 L 7 20 L 7 5 z M 9 7 L 9 18 L 11 18 L 11 7 L 9 7 z M 13 7 L 13 18 L 15 18 L 15 7 L 13 7 z" 
                        />
                    </svg>
        
                    </button>
                </li>`

            }


            const btnDeleteAll = document.getElementById("delAll-task-btn")

            btnDeleteAll.style.visibility = "visible";

            taskListCount()


            inputName.value = '';
            inputPrior.value = '5';
            inputDate.value = '';

        }
        else {
            alert("Por Favor Rellene Todo El Formulario")
        }
    })
}