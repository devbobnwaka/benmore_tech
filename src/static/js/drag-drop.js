// THIS FILE NEEDS TO BE OPTIMIZED --- JUST NEED TO SUBMIT IN TIME.


function priorityClass(priority){
    if(priority == "high"){
        return "bg-red-300 text-green-900"
    }
    else if(priority == "medium"){
        return "bg-yellow-400 text-gray-600"
    }
    if(priority == "low"){
        return "bg-gray-200 text-green-900"
    }
}

function converTimeStamp(utcTimestamp){
    let date = new Date(utcTimestamp);
    let hours = date.getUTCHours();
    let minutes = date.getUTCMinutes();
    // Determine AM/PM
    let period = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; 
    let time12hr = hours + ':' + (minutes < 10 ? '0' + minutes : minutes) + ' ' + period;
    return time12hr
}

function fetchAllTasks(status) {
    $('#spinner-overlay').show();
    return $.ajax({
        url: `/api/tasks/`,
        type: 'GET',
        dataType: 'json',
    }) .always(function() {
        $('#spinner-overlay').hide();
    });
}

let displayString = (task) => {
    // return`<div id="${task.id}" class="task-item draggable bg-gray-100 p-2 rounded " draggable="true" ondragstart="drag(event)" data-status="${task.status}">${task.status}</div>`
   return `
            <div id="${task.id}" class="task-item draggable" data-id="${task.id}" data-status="${task.status}" draggable="true" ondragstart="drag(event)" >
            <input id="ID" value= ${task.id} hidden />
            <div class="flex flex-row justify-between">
                <button class="border rounded ${priorityClass(task.priority)} mb-1 p-1">
                    ${task.priority}
                </button>
                <button class="border rounded bg-green-400 text-gray-600 mb-1 p-1">
                    ${converTimeStamp(task.due_date)}
                </button>
                <button class="border rounded bg-red-200 mb-1 p-1">
                    ...
                </button>
            </div>
            <div class="w-full bg-gray-200 rounded p-2 shadow">
                <div>
                    <div class="flex flex-row justify-between mb-1">
                        <h3 class="font-bold">${task.title}</h3>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                            <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/>
                        </svg>
                    </div>
                    <p class="mb-1">
                        ${task.description}
                    </p>
                    <button class=" flex flex-row items-center border p-1 mb-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-card-list" viewBox="0 0 16 16">
                            <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2z"/>
                            <path d="M5 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 8m0-2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m-1-5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0M4 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m0 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0"/>
                        </svg>
                        <div class="">0/3</div>
                    </button>

                    <div class="flex items-center justify-between space-x-4">
                        <!-- Avatars -->
                        <div class="flex -space-x-2 ">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16 ">
                                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
                                <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16 ">
                                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
                                <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
                            </svg><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16 ">
                                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
                                <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
                            </svg><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16 ">
                                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
                                <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
                            </svg>
                        <div class="w-5 h-5 rounded-full border-2 border-white bg-blue-500 text-white flex items-center justify-center">
                            +3
                        </div>
                        </div>
                        <!-- Action Icons -->
                        <div class="flex space-x-0">
                        <button class="flex items-center justify-center w-10 h-10 hover:bg-gray-500 rounded-full view-details-btn">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
                                <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z"/>
                                <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0"/>
                            </svg>
                            
                            </svg>
                        </button>
                        <button class="flex items-center justify-center w-10 h-10 hover:bg-gray-500 rounded-full task-delete-btn">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
                                <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
                            </svg>
                        </button>
                        <button class="flex items-center justify-center w-10 h-10 hover:bg-gray-500 rounded-full task-edit-btn">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
                                <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325"/>
                            </svg>
                        </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `
}

function displayTasks(tasks) {
    // console.log(tasks);
    let inProgresstaskList = $('#in-progress-tasks');
    let completedtaskList = $('#completed-tasks');
    let overduetaskList = $('#overdue-tasks');

    inProgresstaskList.empty(); 
    completedtaskList.empty(); 
    overduetaskList.empty(); 

    tasks.forEach(function(task) {
        // taskList.append(`<li>${task.title} - ${task.description}</li>`);
        // console.log(task.status)
        if(task.status == "in_progress"){
            inProgresstaskList.append(
                displayString(task)
            )
        }
        if(task.status == "completed"){
            completedtaskList.append(
                displayString(task)
            )
        }
        if(task.status == "overdue"){
            overduetaskList.append(
                displayString(task)
            )
        }
        
    });
}
function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            if (cookie.startsWith(name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}

function allowDrop(allowdropevent) {
    allowdropevent.target.style.color = "blue";
    allowdropevent.preventDefault();
  }
  
  function drag(dragevent) {
    dragevent.dataTransfer.setData("text", dragevent.target.id);
    dragevent.target.style.color = "green";
  }
  
  function drop(dropevent) {
    dropevent.preventDefault();
    const data = dropevent.dataTransfer.getData("text");
    dropevent.target.appendChild(document.getElementById(data));
    let status = dropevent.target.closest('.task-list').id;
    document.getElementById(data).style.color = "black";
    let newStatus = normalizeStatus(status);
    let taskId = data;
    newStatus ? updateTaskStatus(taskId, newStatus) : fetchAllTasks().then(displayTasks).catch(error => console.error('Error fetching tasks:', error));
  }

  function updateTaskStatus(taskId, newStatus) {
    $('#spinner-overlay').show();
    const csrfToken = getCookie('csrftoken');
    const headers = {
        'X-CSRFToken': csrfToken
    };
    $.ajax({
        url: `/api/tasks/${taskId}/update/`,
        type: 'PATCH',
        headers: headers,
        contentType: 'application/json',
        data: JSON.stringify({ status: newStatus }),
        success: function(data) {
            console.log('Task status updated:', data);
            fetchAllTasks()
                .then(displayTasks)
                .catch(error => console.error('Error fetching tasks:', error));
        },
        error: function(xhr, status, error) {
            console.error('Error updating task status:', error);
        }
        }).always(function() {
            $('#spinner-overlay').hide();
        });
    }

    function normalizeStatus(status) {
        if (status === "overdue-tasks") {
            return 'overdue';
        } else if (status === "completed-tasks") {
            return 'completed';
        } else if (status === "in-progress-tasks") { 
            return 'in_progress';
        } else {
            return 0;
        }
    }