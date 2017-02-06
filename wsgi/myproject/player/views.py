from django.shortcuts import render
from django.http import HttpResponse,JsonResponse

# Create your views here.
@csrf_exempt
def login(request):
    return JsonResponse({'login_id':request.POST.get('login_id','new')})