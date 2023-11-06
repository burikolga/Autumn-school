from django import forms

from .models import *
# class ProfileForm(forms.Form):
    # name = forms.CharField( max_length=100)
    # gender = forms.ChoiceField(choices=[('Парень', 'Парень'), ('Девушка', 'Девушка')])
    # age = forms.DateField()
    # tg = forms.CharField(max_length=100)
    # phone = forms.IntegerField()
    # descr = forms.CharField(widget=forms.Textarea)
class ProfileForm(forms.ModelForm):
    class Meta:
        model = UserRegist
        fields = '__all__'
