from django.contrib import admin
from django.urls import path, re_path
from client.views import formulaire_client, confirmation,liste_clients, modifier_client
from facture.views import formulaire_facture, confirmation
from client import views as client_views
from facture import views as facture_views
urlpatterns = [
    path('admin/', admin.site.urls),
    path('formulaire_client/', client_views.formulaire_client, name='formulaire_client'),
    path('formulaire_facture/', facture_views.formulaire_facture, name='formulaire_facture'),
    path('confirmation/', client_views.confirmation, name='confirmation'),
    path('confirmation/', confirmation, name='confirmation'),
    path('', liste_clients, name='liste_clients'),
    #path('details_facture/', details_facture, name='details_facture'),
    path('modifier-client/<int:client_id>/', modifier_client, name='modifier_client'),
    re_path(r'^Client$', client_views.ClientApi),
    re_path(r'^Client/([0-9]+)$', client_views.ClientApi),
]