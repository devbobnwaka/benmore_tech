from rest_framework import generics
from .models import Task
from .serializers import TaskSerializer

class TaskListAPIView(generics.ListCreateAPIView):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer

class TaskDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer

class TaskByStatusAPIView(generics.ListAPIView):
    serializer_class = TaskSerializer

    def get_queryset(self):
        status = self.kwargs['status']
        return Task.objects.filter(status=status)
