from django.contrib.auth.mixins import LoginRequiredMixin
from django.utils import timezone
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

       # Filter by priority
        priority = self.request.query_params.get('priority', None)
        if priority:
            queryset = queryset.filter(priority=priority)
        
        # Filter by due date
        due_date = self.request.query_params.get('due_date', None)
        if due_date:
            today = timezone.now().date()
            if due_date == 'overdue':
                queryset = queryset.filter(due_date__lt=today)
            elif due_date == 'today':
                queryset = queryset.filter(due_date=today)
            elif due_date == 'future':
                queryset = queryset.filter(due_date__gt=today)
        
        # Filter by category
        category = self.request.query_params.get('category', None)
        if category:
            queryset = queryset.filter(category=category)
        
        # Sort by priority, due date, or category
        sort_by = self.request.query_params.get('sort_by', None)
        if sort_by:
            if sort_by == 'priority':
                queryset = queryset.order_by('priority')
            elif sort_by == 'due_date':
                queryset = queryset.order_by('due_date')
            elif sort_by == 'category':
                queryset = queryset.order_by('category')
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

