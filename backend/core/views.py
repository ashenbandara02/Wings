import re
from rest_framework import viewsets, permissions, status, generics
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import AllowAny
from rest_framework.decorators import api_view

from django.contrib.auth import get_user_model
from django.http import JsonResponse

from .models import MembershipDocument, Project, GalleryImage, BlogArticle, Donation

base_url = "http://127.0.0.1:8000"

# ------------------AUTHENTICATIONS --------------------------
User = get_user_model()
class RegisterView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        data = request.data
        required_fields = ['email', 'password', 'name']
        if not all(field in data for field in required_fields):
            return Response({'error': 'Missing fields'}, status=status.HTTP_400_BAD_REQUEST)

        if User.objects.filter(email=data['email']).exists():
            return Response({'error': 'Email already in use'}, status=status.HTTP_400_BAD_REQUEST)

        user = User.objects.create_user(
            email=data['email'],
            password=data['password'],
            name=data['name']
        )
        return Response({'message': 'User registered successfully'}, status=status.HTTP_201_CREATED)


# Blog View 
@api_view(['GET'])
def blogs(request):
    blogs = BlogArticle.objects.all().order_by('-created_at')  # newest first
    data = []

    for blog in blogs:
        data.append({
            "id": blog.id,
            "title": blog.title,
            "preview_image": base_url + blog.preview_image.url if blog.preview_image else None,
            "language": blog.language,
        })

    try:
        data.sort(key=lambda x: x['created_at'], reverse=True)
    except:
        pass

    return JsonResponse(data, safe=False)

@api_view(['GET'])
def latest_blogs(request, language):
    # Get the latest 3 blogs
    blogs = BlogArticle.objects.all().filter(language=language).order_by('-created_at')[:3]
    data = []

    for blog in blogs:
        data.append({
            "id": blog.id,
            "title": blog.title,
            "preview_image": blog.preview_image.url if blog.preview_image else None,
        })

    return JsonResponse(data, safe=False)

@api_view(['GET'])
def blog_details(request, id):

    try:
        blog = BlogArticle.objects.get(id=id)
    except BlogArticle.DoesNotExist:
        return JsonResponse({"status": "No Blog Found"}, status=404)

    content = blog.content or ""
    content = re.sub(r'src="(/media/.*?)"', f'src="{base_url}\\1"', content)

    def add_center_style(match):
        tag = match.group(0)
        if "style=" in tag:
            # Append centering + responsive styles
            tag = re.sub(
                r'style="(.*?)"',
                r'style="\1; display:block; margin:0 auto; max-width:100%; height:auto;"',
                tag
            )
        else:
            # Add new style
            tag = tag[:-1] + ' style="display:block; margin:0 auto; max-width:100%; height:auto;">'
        return tag
    content = re.sub(r'<img[^>]*>', add_center_style, content)


    data = {
        "status": "Success",
        "id": blog.id,
        "title": blog.title,
        "preview_image": base_url + blog.preview_image.url if blog.preview_image else None,
        "main_image": base_url + blog.main_image.url if blog.main_image else None,
        "content": content,
        "language": blog.language,
    }

    return JsonResponse(data, status=200)


