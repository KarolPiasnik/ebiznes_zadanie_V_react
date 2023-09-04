# ebiznes_zadanie_X_cloud
Link do aplikacji w chmurze:
http://ebizn-loadb-ybfcr4qcy1lb-281c25127b1ae975.elb.us-east-1.amazonaws.com:3000/

Uprawnienia użytkownika dla docker compose(lokalnie trzeba utworzyć kontekst ecs).
Uprawnienia są dosyć szerokie, zapewniają uruchomienie, ale pewnie powinny być węższe.
![Uprawnienia](permissions.png?raw=true "Uprawnienia")


Klaster
![Klaster](cluster1.png?raw=true "Klaster")
![Klaster](cluster2.png?raw=true "Klaster szczegóły")


Kontenery
![Klaster](client.png?raw=true "Klient")
![Klaster](server.png?raw=true "Serwer")
![Klaster](db.png?raw=true "Baza danych")


EFS dla bazy danych
![EFS](filesystemdb.png?raw=true "Elastic file system")

Load Balancer
![Loadbalancer](loadbalancer.png?raw=true "Loadbalancer")

