import { converTimeStamp, priorityClass } from "./utils.js";
// Function to fetch tasks based on status #127.0.0.1:8000/api
export function fetchTasksByStatus(status) {
    $('#spinner-overlay').show();
    return $.ajax({
        url: `/api/tasks/status/${status}`,
        type: 'GET',
        dataType: 'json',
    }) .always(function() {
        $('#spinner-overlay').hide();
    });
}


export function fetchAllTasks(status) {
    $('#spinner-overlay').show();
    return $.ajax({
        url: `/api/tasks/`,
        type: 'GET',
        dataType: 'json',
    }) .always(function() {
        $('#spinner-overlay').hide();
    });
}

export function displayTasksByStatus(tasks) {
    console.log(tasks);
    // let taskList = $('#task-list');
    // taskList.empty(); // Clear previous list

    // tasks.forEach(function(task) {
    //     taskList.append(`<li>${task.title} - ${task.description}</li>`);
    // });
}


let displayString = (task) => {
    return`<div class="task-item draggable bg-gray-100 p-2 rounded" data-status="${task.status}">Task 5</div>
    <div class="task-item draggable bg-gray-100 p-2 rounded" data-status="overdue">Task 6</div>`
   return `
            <div class="task-item draggable" data-id="${task.id}" data-status="${task.status}">
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

export function displayTasks(tasks) {
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

export function addTask(){
    $('#task-form').on('submit', function(e) {
        e.preventDefault();

        // Clear previous errors
        clearErrors();

        // Validate form fields
        if (!validateTitle()) return;
        if (!validateDescription()) return;
        if (!validatePriority()) return;
        if (!validateDueDate()) return;
        if (!validateCategory()) return;

        // If all validations pass, proceed with AJAX submission
        submitForm();
    });
}

// Function to clear error messages
export function clearErrors() {
    $('#error-title').text('');
    $('#error-description').text('');
    $('#error-priority').text('');
    $('#error-due-date').text('');
    $('#error-category').text('');
}

// Validation functions
export function validateTitle() {
    const title = $('#task-title').val();
    if (!title) {
        $('#error-title').text('Title is required.');
        return false;
    }
    return true;
}

export function validateDescription() {
    const description = $('#task-description').val();
    if (!description) {
        $('#error-description').text('Description is required.');
        return false;
    }
    return true;
}

export function validatePriority() {
    const priority = $('#task-priority').val();
    if (!priority) {
        $('#error-priority').text('Priority is required.');
        return false;
    }
    return true;
}

export function validateDueDate() {
    const dueDate = $('#task-due-date').val();
    if (!dueDate) {
        $('#error-due-date').text('Due Date is required.');
        return false;
    }
    return true;
}

export function validateCategory() {
    const category = $('#task-category').val();
    if (!category) {
        $('#error-category').text('Category is required.');
        return false;
    }
    return true;
}

// Function to get CSRF token from cookies
export function getCookie(name) {
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

export function clearFormData() {
    $('#task-form')[0].reset();
    $('#task-id').val('');
}

export function submitTaskForm(task_id=null){
    $('#spinner-overlay').show();
    const taskId = task_id
    // const taskId = $('#task-id').val();
    const url = taskId ? `/api/tasks/${taskId}/update/` : '/api/tasks/';
    const method = taskId ? 'PUT' : 'POST';
    console.log(url);
 
    const formData = {
        title: $('#task-title').val(),
        description: $('#task-description').val(),
        priority: $('#task-priority').val(),
        due_date: $('#task-due-date').val(),
        category: $('#task-category').val(),
    };
    const csrfToken = getCookie('csrftoken');
    const headers = {
        'X-CSRFToken': csrfToken
    };
    $.ajax({
        url: url,
        method: method,
        headers: headers,
        data: formData,
        dataType: "json",
        success: function(response) {
            console.log('Task saved successfully:', response);
            clearFormData();
            fetchAllTasks()
                .then(displayTasks)
                .catch(error => console.error('Error fetching tasks:', error));
            $('#task-modal').addClass('hidden');
        },
        error: function(xhr, status, error) {
            console.error('Error:', xhr.responseJSON);
            // Display error message to user or handle accordingly
        }
    }).always(function() {
        $('#spinner-overlay').hide();
    });
}

export function loadTask(taskId) {
    $('#spinner-overlay').show();
    $.ajax({
        url: `/api/tasks/${taskId}/`,
        method: 'GET',
        success: function(task) {
            // Pre-populate form fields
            $('#task-id').val(task.id);
            $('#task-title').val(task.title);
            $('#task-description').val(task.description);
            $('#task-priority').val(task.priority);
            $('#task-due-date').val(task.due_date);
            $('#task-category').val(task.category);
            $('#task-modal').removeClass('hidden');
        },
        error: function(xhr, status, error) {
            console.error('Error loading task:', xhr.responseJSON);
        }
    }).always(function() {
        $('#spinner-overlay').hide();
    });
}

export function loadTaskDetails(taskId) {
    $('#spinner-overlay').show();
    $.ajax({
        url: `/api/tasks/${taskId}/`,
        method: 'GET',
        success: function(task) {
            // Populate modal with task details
            $('#detail-content').html(`
                <p><strong>Title:</strong> ${task.title}</p>
                <p><strong>Description:</strong> ${task.description}</p>
                <p><strong>Priority:</strong> ${task.priority}</p>
                <p><strong>Due Date:</strong> ${task.due_date}</p>
                <p><strong>Category:</strong> ${task.category}</p>
            `);
            // Show the modal
            $('#detail-modal').removeClass('hidden');
        },
        error: function(xhr, status, error) {
            console.error('Error loading task details:', xhr.responseJSON);
        }
    }).always(function() {
        $('#spinner-overlay').hide();
    });
}

export function deleteTask(taskId) {
    $('#spinner-overlay').show();
    $.ajax({
        url: `/api/tasks/${taskId}/delete/`,
        method: 'DELETE',
        headers: {
            'X-CSRFToken': getCookie('csrftoken')
        },
        success: function(response) {
            console.log('Task deleted successfully');
            // Remove task from the DOM
            $(`.task-item[data-id=${taskId}]`).remove();
        },
        error: function(xhr, status, error) {
            console.error('Error deleting task:', xhr.responseJSON);
        }
    }).always(function() {
        $('#spinner-overlay').hide();
    });
}

export  function logoutBtn() {
    $('#spinner-overlay').show();
    $.ajax({
        url: '/logout/',  
        method: 'POST',
        headers: {
            'X-CSRFToken': getCookie('csrftoken')
        },
        success: function(response) {
            console.log('Logged out successfully');
            window.location.href = '/';  // Redirect to login page after logout
        },
        error: function(xhr, status, error) {
            console.error('Error logging out:', xhr.responseJSON);
        }
    }).always(function() {
        $('#spinner-overlay').hide();
    });
};