import json

from django.http import HttpResponse
from django.shortcuts import render, get_object_or_404
from django.views.generic import View

# Create your views here.


class HomeView(View):

    def get(self, request):

        return render(request, 'index.html')



