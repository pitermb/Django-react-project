from django.shortcuts import render
from rest_framework import viewsets
from rest_framework import permissions, authentication
from .serializers import ListSerializer, ItemSerializer
from .models import Item, List


class ListViewSet(viewsets.ModelViewSet):
    serializer_class = ListSerializer
    permission_classes = [permissions.IsAuthenticated]
    authentication_classes = [authentication.TokenAuthentication, authentication.SessionAuthentication]
    
    def get_queryset(self):
        user = self.request.user
        return List.objects.filter(owner=user)


class ItemViewSet(viewsets.ModelViewSet):
    queryset = Item.objects.all()
    serializer_class = ItemSerializer
    permission_classes = [permissions.IsAuthenticated]
    authentication_classes = [authentication.TokenAuthentication, authentication.SessionAuthentication]
