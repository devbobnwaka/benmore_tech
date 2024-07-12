from django.urls import path
from .views import TaskListView, TaskDetailView, TaskCreateView, TaskUpdateView, TaskDeleteView
from . import api_views

urlpatterns = [
    path('', TaskListView.as_view(), name='task_list'),
    # path('task/<int:pk>/', TaskDetailView.as_view(), name='task_detail'),
    # path('task/new/', TaskCreateView.as_view(), name='task_create'),
    # path('task/<int:pk>/edit/', TaskUpdateView.as_view(), name='task_update'),
    # path('task/<int:pk>/delete/', TaskDeleteView.as_view(), name='task_delete'),
    path('api/tasks/', api_views.TaskListAPIView.as_view(), name='task_list_api'),
    # path('api/tasks/<int:pk>/', api_views.TaskDetailAPIView.as_view(), name='task_detail_api'),
    path('api/tasks/status/<str:status>/', api_views.TaskByStatusAPIView.as_view(), name='task_by_status_api'),
]
