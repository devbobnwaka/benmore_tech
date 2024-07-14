$(document).ready(function() {
        // Make task items draggable
        $(".draggable").draggable({
            revert: "invalid",
            helper: "clone",
            zIndex: 100,
            opacity: 0.7
        });

        // // Make task lists droppable
        $(".task-list").droppable({
            accept: ".draggable",
            drop: function(event, ui) {
                var draggable = ui.helper.clone();
                var status = $(this).data('status');
                
                // Update the task status
                draggable.attr('data-status', status);
                
                // Remove the original element from its parent
                ui.helper.remove();
                
                // Append the draggable to the new task list
                $(this).append(draggable);
                
                // Reinitialize draggable on the new element
                draggable.draggable({
                    revert: "invalid",
                    helper: "clone",
                    zIndex: 100,
                    opacity: 0.7
                });
            }
        });
    });

