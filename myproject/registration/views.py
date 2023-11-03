from django.shortcuts import render, HttpResponse

def index(request):
    return render(request, 'registration/index.html')

def regist2(request):
    return render(request, 'registration/regist2.html')