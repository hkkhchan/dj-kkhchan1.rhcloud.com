from django.template import Template, Context
from django.http import HttpResponse
import pdb

def hello(request):
    return HttpResponse("Hello world ! It is my/my/views.py")

def intro(request):
    
