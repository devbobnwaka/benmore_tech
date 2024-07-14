from django.test import TestCase, Client
from django.urls import reverse
from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm
from authentication.views import register_view, login_view, logout_view
from django.contrib.auth import login, logout

class AuthenticationViewsTestCase(TestCase):

    def setUp(self):
        self.client = Client()

    def test_register_view_get(self):
        url = reverse('auth:register')
        response = self.client.get(url)
        self.assertEqual(response.status_code, 200)
        self.assertTemplateUsed(response, 'authentication/register.html')
        self.assertFalse(response.context['form'].is_bound)

    # Write more test cases for login, logout, etc.

    def test_logout_view(self):
        # Create a logged-in user
        user = User.objects.create_user(username='testuser', password='testpass123')
        self.client.force_login(user)

        url = reverse('auth:logout')
        response = self.client.post(url)
        self.assertEqual(response.status_code, 302)  # Expecting redirect status
        self.assertNotIn('_auth_user_id', self.client.session)
