Inainte de a incepe:
1. Sa se instaleze node.js
2. npm init -> creaza un proiect
    -> adauga package.json, unde sunt detalii despre proiect
3. npm install --save express body-parser 
4. npm install -> adauga package-lock.json (cu detalii despre librariile instalate) + node_modules
                (unde sunt toate librariile instalate)
    OBS: node_modules nu este incarcat cu fisierul
    Pentru a rula proiectul: din terminal in folder-ul unde se afla fisierul index.js -> node index.js
    (sau orice denumire dati fisierului de javascript)



ALTE DETALII PREZENTATE LA LABORATOR:
1. Node.js nu este un framework sau un limbaj de programare; este un runtime build, capabil sa 
    execute cod de javascript
2. Express este framework-ul care permite crearea de servere
4. body-parser -> folosit pentru a putea parsa body-ul request-urilor 
5. require este echivalent cu include-ul din C/C++ (puteti adauga fisiere existente sau,
        cum e in cazul exemplului de mai jos, adauga librarii existente din node_modules)
6. use specifica ce librarii ar trebui sa foloseasca aplicatia noastra si este interpretat la rulare
7. Pentru a intelege mai bine notiunea de Frontend (FE) si Backend (BE), ganditi-va la pagina de 
    sign up de la facebook:
    -> FE - pagina pe care o vedeti cu elemente de html, css si javascript
    -> BE - dupa apasarea butonului de Sign up se face un REQUEST din FE catre server unde
            user-ul este salvat in baza de date a facebook-ului
8. Tipuri de request-uri:
    -> GET - aducerea de informatii din baza de date in FE (ex. Login, cand intrati pe newsfeed
            si toate postarile va sunt aduse in functie de ce prieteni aveti sau ce pagini 
            ati apreciat, etc)
    -> POST - insereaza informatii in baza de date (ex. register/sign up, cand faceti o postare
                noua, cand adaugati un nou prieten, etc)
    -> PUT - updateaza ceva deja existent in baza de date (ex. va schimbati poza de profil, numele, etc)
    -> DELETE - sterge ceva din baza de date (ex. va stergeti contul de facebook)
9. node_modules - nu se incarca pe git, fiind in general un fisier foarte mare
                 - daca este sters/nu exista -> comanda npm install se uita in package.json
                    si instaleaza inapoi tot ce gaseste acolo
10. req -> request = ce primesc pe request; req.params -> ce e pe url; req.body -> ce trimit pe data cu client
    res -> response = ce trimit inapoi; send()
11. app.listen specifica express-ului pe ce port sa asculte
    IMPORTANT -> port-ul trebuie sa fie liber
    GRESEALA FRECVENTA: sa pornesti aceasi aplicatie de mai multe ori -> o sa dea eroare pentru ca 
                        portul este deja ocupat.



