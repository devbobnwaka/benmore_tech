from django.utils.deprecation import MiddlewareMixin


class CorrectMimeTypeMiddleware(MiddlewareMixin):
    def process_response(self, request, response):
        if response['Content-Type'] == 'text/plain' and request.path.endswith('.js'):
            response['Content-Type'] = 'application/javascript'
        return response