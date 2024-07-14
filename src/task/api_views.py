from django.contrib.auth.mixins import LoginRequiredMixin
from django.db.models import Q
from rest_framework import generics,status
from rest_framework.response import Response
from .models import Task
from .serializers import TaskSerializer

class TaskListCreateAPIView(LoginRequiredMixin, generics.ListCreateAPIView):
    login_url = "/login/"
    queryset = Task.objects.all()
    serializer_class = TaskSerializer

    def get_queryset(self):
        queryset = Task.objects.filter(assigned_to=self.request.user)
        search_query = self.request.query_params.get('search', None)
        if search_query:
            queryset = queryset.filter(
                Q(title__icontains=search_query) |
                Q(description__icontains=search_query) |
                Q(category__icontains=search_query)
            )
        return queryset

    def perform_create(self, serializer):
        try:
            print('success')
            serializer.save(assigned_to=self.request.user)
        except Exception as e:
            print('error', e)
            return Response({'error': str(e)}, status=status.HTTP_400_BAD_REQUEST)

        
class TaskDetailAPIView(LoginRequiredMixin, generics.RetrieveUpdateDestroyAPIView):
    login_url = "/login/"
    queryset = Task.objects.all()
    serializer_class = TaskSerializer

class TaskUpdateAPIView(LoginRequiredMixin, generics.UpdateAPIView):
    login_url = "/login/"
    queryset = Task.objects.all()
    serializer_class = TaskSerializer

class TaskDeleteAPIView(LoginRequiredMixin, generics.DestroyAPIView):
    login_url = "/login/"
    queryset = Task.objects.all()
    serializer_class = TaskSerializer

