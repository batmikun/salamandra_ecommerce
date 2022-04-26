from rest_framework import serializers
from .models import Product, Categories


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ['id', 'title', 'price',
                  'description', 'category_id', 'image']


class CategorieSerializer(serializers.ModelSerializer):
    class Meta:
        model = Categories
        fields = ['id', 'name']
