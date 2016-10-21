from django.template.loader import get_template
from django.template import Template, Context
from django.http import HttpResponse
from django.shortcuts import render_to_response
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

def start(request):
    title = 'Web mini game centre'
    ext_js=['code.jquery.com/jquery-1.12.4.min']
    ext_css=[]
    static_js= ['start']
    static_css = ['start']
    return render_to_response('start.html',locals())
