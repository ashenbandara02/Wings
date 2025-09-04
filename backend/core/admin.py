from django.contrib import admin
from .models import User, MembershipDocument, Project, GalleryImage, BlogArticle, Donation

admin.site.register(User)
admin.site.register(MembershipDocument)
admin.site.register(Project)
admin.site.register(GalleryImage)
admin.site.register(BlogArticle)
admin.site.register(Donation)
# admin.site.register(Resource)