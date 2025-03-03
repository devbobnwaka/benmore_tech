from django.contrib import admin
from .models import Task

@admin.register(Task)
class TaskAdmin(admin.ModelAdmin):
    list_display = ('title', 'status', 'priority', 'due_date', 'assigned_to')
    list_filter = ('status', 'priority', 'due_date', 'assigned_to')
    search_fields = ('title', 'description')
