from django.urls import path
#from django.urls import reverse
#from django.urls import redirect

from . import views

app_name = 'myapp'
urlpatterns = [
    path('', views.index,name='index'),
    path('home', views.home,name='home'),
    path('myapp/prediction', views.prediction,name='prediction'),
    path('myapp/results', views.results,name='results')
]  
#reverse('myapp.view.prediction')
#redirect('myapp.view.prediction')