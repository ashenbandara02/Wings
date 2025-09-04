from django.db import models
from django.contrib.auth.models import AbstractUser, BaseUserManager
from ckeditor_uploader.fields import RichTextUploadingField
from django.utils import timezone
from datetime import timedelta

class CustomUserManager(BaseUserManager):
    def create_user(self, email, password=None, **extra_fields):
        if not email:
            raise ValueError("The Email field must be set")
        email = self.normalize_email(email)
        extra_fields.setdefault("is_active", True)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, password=None, **extra_fields):
        extra_fields.setdefault("is_staff", True)
        extra_fields.setdefault("is_superuser", True)

        if extra_fields.get("is_staff") is not True:
            raise ValueError("Superuser must have is_staff=True.")
        if extra_fields.get("is_superuser") is not True:
            raise ValueError("Superuser must have is_superuser=True.")

        return self.create_user(email, password, **extra_fields)


class User(AbstractUser):
    username = None   # remove username field
    email = models.EmailField(unique=True)
    name = models.CharField(max_length=250)
    phone = models.CharField(max_length=20, blank=True, null=True)
    address = models.TextField(blank=True, null=True)
    tax_code = models.CharField(max_length=32, blank=True, null=True)

    MEMBERSHIP_CHOICES = [
        ("free", "Free"),
        ("pending", "Pending"),
        ("active", "Active"),
        ("expired", "Expired"),
    ]

    membership_status = models.CharField(
        max_length=20, choices=MEMBERSHIP_CHOICES, default="free"
    )
    membership_expiration = models.DateField(blank=True, null=True)

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = []  # no username required

    objects = CustomUserManager()  # 👈 use our custom manager

    def activate_membership(self):
        self.membership_status = "active"
        self.membership_expiration = timezone.now().date() + timedelta(days=365)
        self.save()


class MembershipDocument(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="documents")
    file = models.FileField(upload_to="membership_docs/")
    uploaded_at = models.DateTimeField(auto_now_add=True)


class Project(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    status = models.CharField(max_length=20, choices=[("planned", "Planned"), ("in_progress", "In Progress")])
    donation_link = models.URLField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)


class GalleryImage(models.Model):
    CATEGORY_CHOICES = [
        ("events", "Events & Gatherings"),
        ("fleet", "Fleet & Aircraft"),
        ("training", "Training"),
        ("members", "Member Submissions"),
    ]
    image = models.ImageField(upload_to="gallery/")
    title = models.CharField(max_length=255)
    description = models.TextField(blank=True, null=True)
    category = models.CharField(max_length=20, choices=CATEGORY_CHOICES, blank=True, null=True)
    approved = models.BooleanField(default=False)
    uploaded_by = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, blank=True)
    uploaded_at = models.DateTimeField(auto_now_add=True)


class BlogArticle(models.Model):
    LANG_CHOICES = [
        ('en', 'English'),
        ('it', 'Italian'),
    ]

    title = models.CharField(max_length=255)
    preview_image = models.ImageField(upload_to="blog/previews/", blank=True, null=True)
    main_image = models.ImageField(upload_to="blog/mains/", blank=True, null=True)
    content = RichTextUploadingField()
    language = models.CharField(max_length=2, choices=LANG_CHOICES, default='en')
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title


class Donation(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, blank=True)
    project = models.ForeignKey(Project, on_delete=models.SET_NULL, null=True, blank=True)
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    method = models.CharField(max_length=20, choices=[("paypal", "PayPal"), ("stripe", "Stripe"), ("bank", "Bank Transfer")])
    status = models.CharField(max_length=20, choices=[("pending", "Pending"), ("completed", "Completed"), ("failed", "Failed")], default="pending")
    created_at = models.DateTimeField(auto_now_add=True)


class Resource(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    image = models.ImageField(upload_to="resources/")
    link = models.URLField()
