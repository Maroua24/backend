from django.shortcuts import get_object_or_404, render, redirect
from .models import Client
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse
from .serializers import ClientSerializer
def formulaire_client(request):
    if request.method == 'POST':
        categorie_compte = request.POST.get('categorie_compte')
        raison_sociale = request.POST.get('raison_sociale')
        sigle = request.POST.get('sigle')
        code_tva = request.POST.get('code_tva')
        nature_compte = request.POST.get('nature_compte')
        nif = request.POST.get('nif')
        nis = request.POST.get('nis')
        registre_commerce = request.POST.get('registre_commerce')
        article_imposition = request.POST.get('article_imposition')
        devise = request.POST.get('devise')
        rue = request.POST.get('rue')
        ville = request.POST.get('ville')
        region = request.POST.get('region')
        type_de_region = request.POST.get('type_de_region')
        code_postale = request.POST.get('code_postale')
        pays = request.POST.get('pays')
        telephone = request.POST.get('telephone')
        email = request.POST.get('email')
        secteur_activite = request.POST.get('secteur_activite')
        condition_paiement = request.POST.get('condition_paiement')
        cree_le = request.POST.get('cree_le')
        cree_par = request.POST.get('cree_par')
        nom = request.POST.get('nom')
        prenom = request.POST.get('prenom')
        fonction = request.POST.get('fonction')
        type_client = request.POST.get('type_client')
        fax = request.POST.get('fax')
        dossier_valide = request.POST.get('dossier_valide')
        statut = request.POST.get('statut')

        # Créer une instance du modèle Client avec les données du formulaire
        nouveau_client = Client(
            categorie_compte=categorie_compte,
            raison_sociale=raison_sociale,
            sigle=sigle,
            code_tva=code_tva,
            nature_compte=nature_compte,
            nif=nif,
            nis=nis,
            registre_commerce=registre_commerce,
            article_imposition=article_imposition,
            devise=devise,
            rue=rue,
            ville=ville,
            region=region,
            type_de_region=type_de_region,
            code_postale=code_postale,
            pays=pays,
            telephone=telephone,
            email=email,
            secteur_activite=secteur_activite,
            condition_paiement=condition_paiement,
            cree_le=cree_le,
            cree_par=cree_par,
            nom=nom,
            prenom=prenom,
            fonction=fonction,
            type_client=type_client,
            fax=fax,
            dossier_valide=dossier_valide,
            statut=statut
        )

        # Enregistrer le nouveau client dans la base de données
        nouveau_client.save()

        return redirect('liste_clients')


    return render(request, 'formulaire_client.html')
    pass

   

def confirmation(request):
    return render(request, 'confirmation.html')

def liste_clients(request):
    clients = Client.objects.all()
    return render(request, 'liste_clients.html', {'clients': clients})

def modifier_client(request, client_id):
    client = get_object_or_404(Client, pk=client_id)

    if request.method == 'POST':
        # Mettre à jour les informations du client avec les données du formulaire
        client.categorie_compte = request.POST.get('categorie_compte')
        client.raison_sociale = request.POST.get('raison_sociale')
        client.sigle = request.POST.get('sigle')
        client.code_tva = request.POST.get('code_tva')
        client.nature_compte = request.POST.get('nature_compte')
        client.nif = request.POST.get('nif')
        client.nis = request.POST.get('nis')
        client.registre_commerce = request.POST.get('registre_commerce')
        client.article_imposition = request.POST.get('article_imposition')
        client.devise = request.POST.get('devise')
        client.rue = request.POST.get('rue')
        client.ville = request.POST.get('ville')
        client.region = request.POST.get('region')
        client.type_de_region = request.POST.get('type_de_region')
        client.code_postale = request.POST.get('code_postale')
        client.pays = request.POST.get('pays')
        client.telephone = request.POST.get('telephone')
        client.email = request.POST.get('email')
        client.secteur_activite = request.POST.get('secteur_activite')
        client.condition_paiement = request.POST.get('condition_paiement')
        client.cree_le = request.POST.get('cree_le')
        client.cree_par = request.POST.get('cree_par')
        client.nom = request.POST.get('nom')
        client.prenom = request.POST.get('prenom')
        client.fonction = request.POST.get('fonction')
        client.type_client = request.POST.get('type_client')
        client.fax = request.POST.get('fax')
        client.dossier_valide = request.POST.get('dossier_valide')
        client.statut = request.POST.get('statut')

        # Enregistrer les modifications
        client.save()

        # Rediriger vers la liste des clients après la modification
        return redirect('liste_clients')

    return render(request, 'modifier_client.html', {'client': client})

@csrf_exempt
def ClientApi(request,id=0):
    if request.method=='GET':
        client = Client.objects.all()
        client_serializer=ClientSerializer(Client,many=True)
        return JsonResponse(client_serializer.data,safe=False)
    elif request.method=='POST':
        client_data=JSONParser().parse(request)
        client_serializer=ClientSerializer(data=client_data)
        if client_serializer.is_valid():
            client_serializer.save()
            return JsonResponse("Added Successfully",safe=False)
        return JsonResponse("Failed to Add",safe=False)
    elif request.method=='PUT':
        client_data=JSONParser().parse(request)
        client=Client.objects.get(id=id)
        client_serializer=ClientSerializer(Client,data=client_data)
        if client_serializer.is_valid():
            client_serializer.save()
            return JsonResponse("Updated Successfully",safe=False)
        return JsonResponse("Failed to Update")
    elif request.method=='DELETE':
        client=Client.objects.get(id=id)
        client.delete()
        return JsonResponse("Deleted Successfully",safe=False)