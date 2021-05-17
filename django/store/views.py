from django.shortcuts import render
from rest_framework import generics

from .serializers import ProductSerializer
from .models import (
    Product, 
    Category,
    )


class ProductListView(generics.ListAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    

