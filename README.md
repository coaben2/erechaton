Tu saurais faire un tableau dynamique qui se base une table d'une base postgres en entrée  en pouvant se deplacer en gauche/droite haut/bas (il faut pas tout caler sur une page trop de donnée) et un peu plus moderne que ce truc hyper basique :p? (voir index.html, en entrée c'est un fichier les colonnes sont en autoresize)

2 contraintes:
- Full open source (pas de css/javascript/module ... payant)
- doit pouvoir se lancer avec python/flask rien à installer en dehors du microframework et d'un service nginx


how to test:
flask run

127.0.0.1:5000        -> accès à la page index.html example
127.0.0.1:5000/suivi  -> accès à la page suivi.html example (tableau dynamique avec fichier)
