from django.shortcuts import get_object_or_404, render, redirect
from .models import Client
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse
from .serializers import ClientSerializer


@csrf_exempt
def ClientApi(request,id=0):
    if request.method=='GET':
        client = Client.objects.all()
        client_serializer=ClientSerializer(Client,many=True)
        return JsonResponse(client_serializer.data,safe=False)
    elif request.method=='POST':
        client_data=JSONParser().parse(request)
        client_serializer=ClientSerializer(data=client_data)
        if client_serializer.is_valid():
            client_serializer.save()
            return JsonResponse("Added Successfully",safe=False)
        return JsonResponse("Failed to Add",safe=False)
    elif request.method=='PUT':
        client_data=JSONParser().parse(request)
        client=Client.objects.get(id=id)
        client_serializer=ClientSerializer(Client,data=client_data)
        if client_serializer.is_valid():
            client_serializer.save()
            return JsonResponse("Updated Successfully",safe=False)
        return JsonResponse("Failed to Update")
    elif request.method=='DELETE':
        client=Client.objects.get(id=id)
        client.delete()
        return JsonResponse("Deleted Successfully",safe=False)
 