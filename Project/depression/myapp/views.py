from django.shortcuts import render
from django.http import HttpResponse,JsonResponse

from sklearn.preprocessing import OneHotEncoder
from sklearn.preprocessing import OrdinalEncoder
from sklearn.compose import ColumnTransformer
from sklearn.pipeline import Pipeline
import joblib
import numpy as np
import pandas as pd

# Create your views here.
def index(request):
    return render(request,'index.html')

def home(request):
        return render(request,'home.html')

def prediction(request):
    
    if request.method == 'POST':
        Age = request.POST['Age']
        Gender = request.POST['Gender']
        family_history = request.POST['family_history']
        work_interfere = request.POST['work_interfere']
        benefits = request.POST['benefits']
        care_options = request.POST['care_options']
        wellness_program = request.POST['wellness_program']
        seek_help =request.POST['seek_help']
        anonymity = request.POST['anonymity']
        leave = request.POST['leave']
        mental_health_consequence = request.POST['mental_health_consequence']
        coworkers = request.POST['coworkers']
        mental_health_interview = request.POST['mental_health_interview']
        mental_vs_physical = request.POST['mental_vs_physical']
        obs_consequence = request.POST['obs_consequence']
        down = int(request.POST['down'])
        best = int(request.POST['best'])
        cry = int(request.POST['cry'])
        sleep = int(request.POST['sleep'])
        eat = int(request.POST['eat'])
        look = int(request.POST['look'])
        weight = int(request.POST['weight'])
        heart = int(request.POST['heart'])
        constipation = int(request.POST['constipation'])
        tired = int(request.POST['tired'])
        clear = int(request.POST['clear'])
        easy = int(request.POST['easy'])
        still = int(request.POST['still'])
        future = int(request.POST['future'])
        irritable = int(request.POST['irritable'])
        decision = int(request.POST['decision'])
        need = int(request.POST['need'])
        full = int(request.POST['full'])
        better = int(request.POST['better'])
        things = int(request.POST['things']) 

        data = [Age,Gender,family_history,work_interfere,benefits,care_options,
                wellness_program,seek_help,anonymity,leave,mental_health_consequence,coworkers,
                mental_health_interview,mental_vs_physical,obs_consequence]
        cols= ['Age', 'Gender', 'family_history', 'work_interfere', 'benefits',
       'care_options', 'wellness_program', 'seek_help', 'anonymity', 'leave',
       'mental_health_consequence', 'coworkers', 'mental_health_interview',
       'mental_vs_physical', 'obs_consequence']
        
        vars = [down,best,cry,sleep,eat,look,weight,heart,constipation,tired,clear,easy,still,
        future,irritable,decision,need,full,better,things]
        
        global index
        index = str((sum(vars) * 100)/80)

        df = pd.DataFrame([data],columns= cols)
        model = joblib.load('myapp/rfc.sav')        
        arr = np.array(data)
        classification = model.predict(df)

        global result
        result = str(classification[0])
        print(result)
        print(index)
        
        

        return JsonResponse({'result':result,'index':index})
        
        # r={'age':Age,'gender':Gender,
        # 'family_history':family_history,'work_interfere':work_interfere,'benefits':benefits,
        # 'care_options':care_options,'wellness_program':wellness_program,'seek_help':seek_help,
        # 'anonymity':anonymity,'leave':leave,'mental_health_consequence':mental_health_consequence,
        # 'coworkers':coworkers,'mental_health_interview':mental_health_interview,
        # 'mental_vs_physical':mental_vs_physical,'obs_consequence':obs_consequence},safe = False)


def results(request):  
       display = {'result':result,
        'index':index
        }
       return render(request,'results.html',display)



    


