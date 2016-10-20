from django.template.loader import get_template
from django.template import Template, Context
from django.http import HttpResponse
import pdb
import datetime

def hello(request):
    return HttpResponse("Hello world ! It is my/my/views.py")

def intro(request):
    return HttpResponse("Under developement")

def welcome(request):
    now = datetime.datetime.now()
    t = get_template('welcome.html')
    html = t.render(Context({'current_date':now}))
    return HttpResponse(html)
