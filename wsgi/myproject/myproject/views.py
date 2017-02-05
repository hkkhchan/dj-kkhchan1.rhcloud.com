from django.views.decorators.csrf import csrf_exempt
from django.template.loader import get_template
from django.template import Template, Context
from django.http import HttpResponse,JsonResponse
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
    ext_js = [
        'code.jquery.com/jquery-1.12.4.min',
        'cdnjs.cloudflare.com/ajax/libs/vue/2.1.10/vue',
    ]
    ext_css = []
    static_js = ['start','main']
    static_css = ['start']
    return render_to_response('base.html',locals())

@csrf_exempt
def login(request):
    return JsonResponse({'login_id':request.POST.get('login_id','new')})
