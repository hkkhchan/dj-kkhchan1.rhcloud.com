from django.http import HttpResponse
import pdb

def hello(request):
    pdb.set_trace()
    return HttpResponse("Hello world ! It is my/my/views.py")
