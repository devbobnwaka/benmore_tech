 import { fetchTasksByStatus, fetchAllTasks, displayTasks, displayTasksByStatus} from "./task.js";
 
 $(document).ready(function() {
        // fetchTasksByStatus('in_progress')
        //     .then(displayTasksByStatus)
        //     .catch(error => console.error('Error fetching tasks:', error));

        fetchAllTasks()
            .then(displayTasks)
            .catch(error => console.error('Error fetching tasks:', error));

        $('#add-task-btn').on('click', function() {
            $('#task-modal').removeClass('hidden');
        });

        $('#cancel-btn').on('click', function() {
            $('#task-modal').addClass('hidden');
        });

        $('#menu-button').click(function() {
            $('#sidebar').toggleClass('sidebar-hidden');
          });

        $('#klose').click(function() {
            $('#sidebar').toggleClass('sidebar-hidden');
          });

        $('#task-form').on('submit', function(e) {
            e.preventDefault();
            // AJAX call to create/update task
            const taskId = $('#task-id').val();
            const url = taskId ? `/api/tasks/${taskId}/update/` : '/api/tasks/create/';
            const method = taskId ? 'PUT' : 'POST';
            const data = {
                title: $('#task-title').val(),
                description: $('#task-description').val(),
                priority: $('#task-priority').val(),
                // add other fields as necessary
            };
            $.ajax({
                url: url,
                method: method,
                data: data,
                success: function(response) {
                    $('#task-modal').addClass('hidden');
                    // Refresh task list
                },
                error: function(error) {
                    console.error('Error:', error);
                }
            });
        });
    });