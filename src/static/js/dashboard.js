$(document).ready(function() {
    // Function to load tasks
    function loadTasks() {
        $.ajax({
            url: '/api/tasks/status/in_progress/',
            method: 'GET',
            success: function(data) {
                $('#in-progress-tasks').html('');
                data.forEach(task => {
                    $('#in-progress-tasks').append(renderTask(task));
                });
            }
        });

        $.ajax({
            url: '/api/tasks/status/completed/',
            method: 'GET',
            success: function(data) {
                $('#completed-tasks').html('');
                data.forEach(task => {
                    $('#completed-tasks').append(renderTask(task));
                });
            }
        });

        $.ajax({
            url: '/api/tasks/status/overdue/',
            method: 'GET',
            success: function(data) {
                $('#overdue-tasks').html('');
                data.forEach(task => {
                    $('#overdue-tasks').append(renderTask(task));
                });
            }
        });
    }

    // Function to render a task card
    function renderTask(task) {
        return `
            <div class="bg-gray-100 p-4 rounded shadow">
                <h3 class="font-bold text-lg">${task.title}</h3>
                <p>${task.description}</p>
                <div class="flex justify-between mt-4">
                    <span class="text-sm text-gray-600">${task.priority}</span>
                    <div>
                        <button class="edit-task-btn" data-id="${task.id}">✏️</button>
                        <button class="delete-task-btn" data-id="${task.id}">🗑️</button>
                    </div>
                </div>
            </div>
        `;
    }

    // Load tasks on page load
    loadTasks();

    // Search functionality
    $('input[type="text"]').on('input', function() {
        const query = $(this).val().toLowerCase();
        $('.task').each(function() {
            const title = $(this).find('.task-title').text().toLowerCase();
            $(this).toggle(title.includes(query));
        });
    });

    // Add task functionality
    $('#add-task-btn').on('click', function() {
        // Show a modal for adding task (implement the modal as per your requirement)
    });

    // Edit task functionality
    $(document).on('click', '.edit-task-btn', function() {
        const taskId = $(this).data('id');
        // Show a modal for editing task (fetch and fill task data into the modal)
    });

    // Delete task functionality
    $(document).on('click', '.delete-task-btn', function() {
        const taskId = $(this).data('id');
        $.ajax({
            url: `/api/tasks/${taskId}/`,
            method: 'DELETE',
            success: function() {
                loadTasks();
            }
        });
    });

    // Show modal
    $('#add-task-btn').on('click', function() {
        $('#task-modal').removeClass('hidden');
    });

    // Hide modal
    $('#cancel-btn').on('click', function() {
        $('#task-modal').addClass('hidden');
    });

    // Handle form submit
    $('#task-form').on('submit', function(event) {
        event.preventDefault();

        const taskId = $('#task-id').val();
        const url = taskId ? `/api/tasks/${taskId}/` : '/api/tasks/';
        const method = taskId ? 'PUT' : 'POST';

        $.ajax({
            url: url,
            method: method,
            data: {
                title: $('#task-title').val(),
                description: $('#task-description').val(),
                priority: $('#task-priority').val()
            },
            success: function() {
                $('#task-modal').addClass('hidden');
                loadTasks();
            }
        });
    });
});
