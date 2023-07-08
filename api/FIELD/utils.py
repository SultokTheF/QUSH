from .models import Field
from .serializers import FieldSerializer
from rest_framework.response import Response
from rest_framework import status
from django.shortcuts import get_object_or_404

def getAll(request, *args, **kwargs):
    fields = Field.objects.all()
    serializer = FieldSerializer(fields, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)

def get(pk, *args, **kwargs):
    field = Field.objects.get(id=pk)
    serializer = FieldSerializer(field, many=False)
    return Response(serializer.data)

def post(request, *args, **kwargs):
    serializer = FieldSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

def update(request, pk, *args, **kwargs):
    field = get_object_or_404(Field, pk=pk)
    serializer = FieldSerializer(instance=field, data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_200_OK)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

def delete(request, pk, *args, **kwargs):
    field = Field.objects.filter(id=pk)
    field.delete()
    return Response('FIELD was deleted!')
