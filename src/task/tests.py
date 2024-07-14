from django.test import TestCase
from django.urls import reverse
from django.contrib.auth import get_user_model
from django.utils import timezone
from django.db.utils import IntegrityError
from .models import Task
from rest_framework import status
from rest_framework.test import APIClient

User = get_user_model()

class TaskModelTests(TestCase):

    def setUp(self):
        # Create a test user
        self.user = User.objects.create_user(
            username='testuser', 
            password='testpass'
        )

        # Create a test task
        self.task = Task.objects.create(
            title='Test Task',
            description='This is a test task.',
            status='in_progress',
            priority='medium',
            due_date=timezone.now() + timezone.timedelta(days=1),
            category='Test Category',
            assigned_to=self.user
        )

    def test_task_creation(self):
        task = Task.objects.get(id=self.task.id)
        self.assertEqual(task.title, 'Test Task')
        self.assertEqual(task.description, 'This is a test task.')
        self.assertEqual(task.status, 'in_progress')
        self.assertEqual(task.priority, 'medium')
        self.assertEqual(task.category, 'Test Category')
        self.assertEqual(task.assigned_to, self.user)

    def test_task_str(self):
        task = Task.objects.get(id=self.task.id)
        self.assertEqual(str(task), task.title)

    def test_task_status_choices(self):
        task = Task.objects.get(id=self.task.id)
        status_choices = [choice[0] for choice in Task.STATUS_CHOICES]
        self.assertIn(task.status, status_choices)

    def test_task_priority_choices(self):
        task = Task.objects.get(id=self.task.id)
        priority_choices = [choice[0] for choice in Task.PRIORITY_CHOICES]
        self.assertIn(task.priority, priority_choices)

    def test_task_due_date(self):
        task = Task.objects.get(id=self.task.id)
        self.assertTrue(task.due_date > timezone.now())

    def test_task_assigned_to_not_blank(self):
        with self.assertRaises(IntegrityError):
            Task.objects.create(
                title='Task with no assigned user',
                description='This task should fail.',
                status='in_progress',
                priority='medium',
                due_date=timezone.now() + timezone.timedelta(days=1),
                category='Test Category',
                assigned_to=None
            )



class TaskAPITestCase(TestCase):

    def setUp(self):
        self.client = APIClient()
        self.user = User.objects.create_user(username='testuser', password='testpass')
        self.client.login(username='testuser', password='testpass')
        self.task = Task.objects.create(
            title='Test Task',
            description='This is a test task.',
            status='in_progress',
            priority='medium',
            due_date=timezone.now() + timezone.timedelta(days=1),
            category='Test Category',
            assigned_to=self.user
        )

    def test_dashboard_view(self):
        url = reverse('task:task-dashboard')
        response = self.client.get(url)
        self.assertEqual(response.status_code, 200)
        self.assertTemplateUsed(response, 'tasks/dashboard.html')

    def test_task_list_create_api_view(self):
        url = reverse('task:task-create-api')
        response = self.client.get(url)
        self.assertEqual(response.status_code, 200)
        self.assertEqual(len(response.data), 1)  # Should return one task

        data = {
            'title': 'New Task',
            'description': 'This is a new task.',
            'status': 'in_progress',
            'priority': 'low',
            'due_date': (timezone.now() + timezone.timedelta(days=2)).isoformat(),
            'category': 'New Category',
        }
        response = self.client.post(url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(Task.objects.count(), 2)

    def test_task_detail_api_view(self):
        url = reverse('task:task-detail-api', kwargs={'pk': self.task.pk})
        response = self.client.get(url)
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.data['title'], 'Test Task')

    def test_task_update_api_view(self):
        url = reverse('task:task-update-api', kwargs={'pk': self.task.pk})
        data = {
            'title': 'Updated Task',
            'description': 'This is an updated task.',
            'status': 'completed',
            'priority': 'high',
            'due_date': (timezone.now() + timezone.timedelta(days=3)).isoformat(),
            'category': 'Updated Category',
        }
        response = self.client.put(url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.task.refresh_from_db()
        self.assertEqual(self.task.title, 'Updated Task')
        self.assertEqual(self.task.status, 'completed')

    def test_task_delete_api_view(self):
        url = reverse('task:task-delete-api', kwargs={'pk': self.task.pk})
        response = self.client.delete(url)
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)
        self.assertEqual(Task.objects.count(), 0)


