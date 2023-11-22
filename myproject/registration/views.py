from django.shortcuts import render, HttpResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.views import APIView
from . import models, serializers
from rest_framework import status
from rest_framework.viewsets import ModelViewSet

def index(request):
    return render(request, 'registration/index.html')

def regist2(request):
    return render(request, 'registration/regist2.html')



# @api_view(['GET', 'POST'])
# def index(request):
#     if request.method == 'POST':
#         return Response({'message': f'Hello, {request.data["text"]}'})
#     return Response({'message': 'Hello world'})


# class ItemAPIView(APIView):
#     serializer_class = serializers.ItemSerializer
#     def get(self, request):
#         items = models.Item.objects.all()
#         serializer = self.serializer_class(items, many=True)
#         return Response(serializer.data)

#     def post(self, request):
#         serializer = self.serializer_class(data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data, status=status.HTTP_201_CREATED)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    

class ItemViewSet(ModelViewSet):
    serializer_class = serializers.ItemSerializer
    queryset = models.Item.objects.all()