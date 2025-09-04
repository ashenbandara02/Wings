from django.urls import path, include
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from .views import *

urlpatterns = [
    path("auth/register/", RegisterView.as_view(), name="register"),
    path("auth/login/", TokenObtainPairView.as_view(), name="login"),
    path("auth/token/refresh/", TokenRefreshView.as_view(), name="token_refresh"),

    # Blog
    path('blogs/', blogs, name='blog_list'),
    path('blogs/latest/<str:language>/', latest_blogs, name='latest_blogs'),
    path('blog/<int:id>/', blog_details, name='blog_details'),
]