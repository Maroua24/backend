from client import views
from django.contrib import admin
from django.urls import path, re_path 
from client.views import confirmation, formulaire_client, liste_clients, modifier_client

urlpatterns = [
    path('admin/', admin.site.urls),
    #path('', inscription_client, name='inscription'),
    path('formulaire_client/', formulaire_client, name='formulaire_client'),
    path('confirmation/', confirmation, name='confirmation'),
    path('', liste_clients, name='liste_clients'),
    path('modifier-client/<int:client_id>/', modifier_client, name='modifier_client'),
    re_path(r'^Client$',views.ClientApi),
    re_path(r'^Client$',views.ClientApi),
    re_path(r'^Client/([0-9]+)$',views.ClientApi),

]
