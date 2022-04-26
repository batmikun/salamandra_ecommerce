from django.db import models


class Categories(models.Model):
    name = models.CharField(max_length=100, null=False)

    def __str__(self):
        return self.name


class Product(models.Model):
    title = models.CharField(max_length=100, null=False)
    price = models.FloatField(null=False)
    description = models.CharField(max_length=255, null=False)
    category_id = models.ForeignKey(Categories, on_delete=models.DO_NOTHING)
    image = models.ImageField()

    def __str__(self):
        return self.title
