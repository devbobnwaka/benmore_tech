 import { 
    fetchAllTasks, 
    displayTasks, 
    clearErrors, 
    validateCategory, 
    validateDescription, 
    validateDueDate, 
    validatePriority,
    validateTitle,
    submitTaskForm,
    loadTask,
    clearFormData,
    loadTaskDetails,
    deleteTask,
    logoutBtn
} from "./task.js";
 
 $(document).ready(function() {
        fetchAllTasks()
            .then(displayTasks)
            .catch(error => console.error('Error fetching tasks:', error));

        $('#add-task-btn').on('click', function() {
            $('#task-modal').removeClass('hidden');
        });

        $('#cancel-btn').on('click', function() {
            $('#task-modal').addClass('hidden');
            clearFormData();
        });

        $('#menu-button').click(function() {
            $('#sidebar').toggleClass('sidebar-hidden');
          });

        $('#klose').click(function() {
            $('#sidebar').toggleClass('sidebar-hidden');
          });
        
        
        $(document).on('click', '.task-edit-btn', function() {
            const taskId = $(this).closest('.task-item').data('id');
            console.log('Edit button clicked for task ID:', taskId);
            loadTask(taskId);
        });

        $('#close-detail-modal').on('click', function() {
            $('#detail-modal').addClass('hidden');
        });

        $(document).on('click', '.view-details-btn', function() {
            const taskId = $(this).closest('.task-item').data('id');
            console.log('View Details button clicked for task ID:', taskId);
            loadTaskDetails(taskId);
        });

        $(document).on('click', '.task-delete-btn', function() {
            const taskId = $(this).closest('.task-item').data('id');
            if (confirm('Are you sure you want to delete this task?')) {
                deleteTask(taskId);
                fetchAllTasks()
                    .then(displayTasks)
                    .catch(error => console.error('Error fetching tasks:', error))
            }
        });

        $('#filter-form').on('submit', function(e) {
            $('#spinner-overlay').show();
            e.preventDefault();
            var formData = $(this).serialize();
            $.ajax({
                url: '/api/tasks/',
                method: 'GET',
                data: formData,
                dataType: 'json',
                success: function(response) {
                    // Process and display filtered/sorted tasks
                    // console.log('Filtered & Sorted Tasks:', response);
                    displayTasks(response)
                },
                error: function(error) {
                    console.error('Error:', error);
                }
            }).always(function() {
                $('#spinner-overlay').hide();
            });
        });

        
        $('#search-form').on('submit', function(e) {
            e.preventDefault();
            var searchQuery = $('#search-input').val();
            $.ajax({
                url: '/api/tasks/',
                method: 'GET',
                data: { search: searchQuery },
                dataType: 'json',
                success: function(response) {
                    // Process and display search results
                    // console.log('Search results:', response);
                    displayTasks(response)
                },
                error: function(error) {
                    console.error('Error:', error);
                }
            });
        });
        

        $("#logout-btn").click(function() {
            if (confirm('Are you sure you want to logout?')) {
                logoutBtn();
            }
        });

        $('#task-form').on('submit', function(e) {
            e.preventDefault();
            clearErrors();
            if (!validateTitle()) return;
            if (!validateDescription()) return;
            if (!validatePriority()) return;
            if (!validateDueDate()) return;
            if (!validateCategory()) return;
            const taskId = $('#task-id').val();
            submitTaskForm(taskId);
        });
    });