from django.urls import path
from .views import DashboardView
from . import api_views

app_name = "task"
urlpatterns = [
    path('dashboard/', DashboardView.as_view(), name='task-dashboard'),
    path('api/tasks/', api_views.TaskListCreateAPIView.as_view(), name='task-create-api'),
    path('api/tasks/<int:pk>/', api_views.TaskDetailAPIView.as_view(), name='task-detail-api'),
    path('api/tasks/<int:pk>/update/', api_views.TaskUpdateAPIView.as_view(), name='task-update-api'),
    path('api/tasks/<int:pk>/delete/', api_views.TaskDeleteAPIView.as_view(), name='task-delete-api'),
]
