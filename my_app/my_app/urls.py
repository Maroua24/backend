from client import views
from django.contrib import admin
from django.urls import path, re_path 
from client.views import confirmation, formulaire_client, liste_clients, modifier_client

urlpatterns = [
    path('admin/', admin.site.urls),
    re_path(r'^Client$',views.ClientApi),
    re_path(r'^Client$',views.ClientApi),
    re_path(r'^Client/([0-9]+)$',views.ClientApi),

]
