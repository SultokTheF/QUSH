from rest_framework import status
from .serializers import FieldSerializer
from .models import Field
from django.shortcuts import get_object_or_404
from drf_yasg import openapi
from drf_yasg.utils import swagger_auto_schema
from rest_framework.response import Response
from rest_framework.views import APIView
import requests

class FieldViews(APIView):
    @swagger_auto_schema(
        request_body=openapi.Schema(
            type=openapi.TYPE_OBJECT,
            properties={
                'field_name': openapi.Schema(type=openapi.TYPE_STRING),
                'other_field': openapi.Schema(type=openapi.TYPE_INTEGER),
            }
        ),
        responses={
            200: openapi.Response(description='Success', schema=FieldSerializer()),
            400: 'Bad Request',
        }
    )

    def post(self, request):
        serializer = FieldSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"status": "success", "data": serializer.data}, status=status.HTTP_200_OK)
        else:
            return Response({"status": "error", "data": serializer.errors}, status=status.HTTP_400_BAD_REQUEST)

    def get(self, request, id=None):
        if id:
            rent = Field.objects.get(id=id)
            serializer = FieldSerializer(rent)
            return Response({"status": "success", "data": serializer.data}, status=status.HTTP_200_OK)
        rents = Field.objects.all()
        serializer = FieldSerializer(rents, many=True)
        return Response({"status": "success", "data": serializer.data}, status.HTTP_200_OK)

    def patch(self, request, id=None):
            rent = Field.objects.get(id=id)
            serializer = FieldSerializer(rent, data=request.data, partial=True)
            if serializer.is_valid():
                serializer.save()
                return Response({"status": "success", "data": serializer.data})
            else:
                return Response({"status": "error", "data": serializer.data})

    def delete(self, request, id=None):
        rent = get_object_or_404(Field, id=id)
        rent.delete()
        return Response({"status": "success", "data": "Rent Deleted"})


class CreateTicketView(APIView):
    def get(self, request,  time_from, time_to, id):
        # Your custom method
        self.my_custom_method( time_from, time_to, id)

        # Return a response
        return Response({'message': 'GET request processed'})

    def my_custom_method(self, time_from, time_to, id):
        for i in range(int(time_from), int(time_to)):
            data = {
                'is_rented': False,
                'field_id': id,
                # 'rent_id': 1,
                'time_from': i,
                'time_to': i + 1,
            }
            response = requests.post('http://127.0.0.1:8000/ticket/', data=data)
            if response.status_code == 201:
                print('Ticket created successfully')
        print('Executing my_custom_method')