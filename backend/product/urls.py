from django.urls import path
from .views import ProductView, CategoriesView

urlpatterns = [
    path("products/", ProductView.as_view()),
    path("categories/", CategoriesView.as_view())
]
