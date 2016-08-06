from django.http import HttpResponse

def hello(request):
    #import pdb;pdb.set_trace()
    return HttpResponse("Hello world ! It is my/my/views.py")
