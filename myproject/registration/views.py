try: 
    from django.shortcuts import render, HttpResponse
    from .forms import ProfileForm
    
    from django.template import RequestContext
    from .models import UserRegist

    def index(request):
        return render(request, 'registration/index.html')

    def regist2(request):
        return render(request, 'registration/regist2.html')

    def profile_view(request):
        form = ProfileForm()
        return render(request, 'index.html', {'form': form})

   
    def submitF(request):
        if request.method == 'POST':
            name = request.POST.get('name')
            gender = request.POST.get('gender')
            age = request.POST.get('Age')
            telegram = request.POST.get('tg')
            phone = request.POST.get('phone')
            description = request.POST.get('descr')

            new_user = UserRegist(name=name, gender=gender, age=age, telegram=telegram, phone=phone, description=description)
            new_user.save()
            
            return render(request, 'index.html', {'new_user': new_user})
except Exception as e:
    print(str(e))