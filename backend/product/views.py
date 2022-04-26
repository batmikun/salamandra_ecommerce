from django.shortcuts import render
from rest_framework import generics
from .models import Product, Categories
from .serializers import ProductSerializer, CategorieSerializer


class ProductView(generics.ListCreateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer


class CategoriesView(generics.ListCreateAPIView):
    queryset = Categories.objects.all()
    serializer_class = CategorieSerializer
