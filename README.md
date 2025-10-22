# JWT Demo Application

Application de démonstration utilisant JWT (JSON Web Tokens) avec un backend et un frontend containerisés.
😁😘


## 📋 Prérequis

Avant de lancer l'application, assurez-vous d'avoir installé :

- [Docker](https://docs.docker.com/get-docker/) (version 20.10 ou supérieure)
- [Docker Compose](https://docs.docker.com/compose/install/) (version 1.29 ou supérieure)

Pour vérifier vos installations :
```bash
docker --version
docker-compose --version
```

## 🏗️ Structure du Projet

Le projet est composé de trois répertoires principaux :

```
jwt-demo/
├── docker-compose.yml          # Configuration Docker Compose
├── jwt-demo-backend/           # Code source du backend + Dockerfile
│   └── Dockerfile
├── jwt-demo-frontend/          # Code source du frontend + Dockerfile
│   └── Dockerfile
└── README.md                   # Ce fichier
```

### Répertoires GitHub

- **jwt-demo** : Répertoire principal contenant le docker-compose.yml
- **jwt-demo-backend** : Contient le code source du backend et son Dockerfile
- **jwt-demo-frontend** : Contient le code source du frontend et son Dockerfile

## 🚀 Lancement de l'Application

### Démarrage des Services

Pour démarrer l'application complète (backend + frontend) :

```bash
docker-compose up
```

Ou en mode détaché (en arrière-plan) :

```bash
docker-compose up -d
```

Cette commande va :
1. Construire les images Docker à partir des Dockerfiles présents dans `jwt-demo-backend` et `jwt-demo-frontend`
2. Créer les conteneurs
3. Démarrer les services

### Reconstruction des Images

Si vous avez modifié le code source et souhaitez reconstruire les images :

```bash
docker-compose up --build
```

Ou forcer la reconstruction :

```bash
docker-compose build --no-cache
docker-compose up
```

## 🌐 Accès aux Services

Une fois les conteneurs démarrés, vous pouvez accéder à :

- **Frontend** : [http://localhost:4200](http://localhost:4200)
- **Backend** : [http://localhost:8080](http://localhost:8080)

### Ports Utilisés

| Service  | Port Interne | Port Externe | Description           |
|----------|--------------|--------------|----------------------|
| Frontend | 80           | 4200         | Interface utilisateur |
| Backend  | 8080         | 8080         | API REST              |

## 🔧 Commandes Utiles

### Vérifier l'État des Conteneurs

```bash
docker-compose ps
```

### Afficher les Logs

Tous les services :
```bash
docker-compose logs -f
```

Service spécifique :
```bash
docker-compose logs -f backend
docker-compose logs -f frontend
```

### Arrêter les Services

Arrêt simple (conserve les conteneurs) :
```bash
docker-compose stop
```

Arrêt complet (supprime les conteneurs) :
```bash
docker-compose down
```

Arrêt avec suppression des volumes :
```bash
docker-compose down -v
```

### Redémarrer un Service Spécifique

```bash
docker-compose restart backend
docker-compose restart frontend
```

## 🐛 Dépannage

### Les conteneurs ne démarrent pas

1. Vérifiez que Docker est en cours d'exécution
2. Assurez-vous que les ports 4200 et 8080 ne sont pas déjà utilisés
3. Consultez les logs : `docker-compose logs`

### Vérifier les ports utilisés

Sous Windows :
```bash
netstat -ano | findstr :4200
netstat -ano | findstr :8080
```

### Nettoyer l'Environnement Docker

Si vous rencontrez des problèmes persistants :

```bash
# Arrêter et supprimer tous les conteneurs
docker-compose down

# Supprimer les images créées
docker-compose down --rmi all

# Nettoyer le système Docker (prudence !)
docker system prune -a
```

## 📦 Architecture Réseau

Les services communiquent via un réseau Docker bridge nommé `jwt-demo-network`. Cela permet :
- Une isolation réseau des conteneurs
- Une communication inter-services par nom de service
- Une sécurité accrue

## 🔐 À propos de JWT

Cette application démontre l'utilisation de JSON Web Tokens (JWT) pour l'authentification et l'autorisation entre le frontend et le backend.

## 📝 Notes Importantes

- Le frontend dépend du backend (`depends_on: backend`), il démarrera après le backend
- Les Dockerfiles sont situés dans leurs répertoires respectifs (`jwt-demo-backend` et `jwt-demo-frontend`)
- Les images sont construites automatiquement au premier lancement

## 🤝 Contribution

Pour contribuer au projet, consultez les répertoires GitHub respectifs :
- Backend : `jwt-demo-backend`
- Frontend : `jwt-demo-frontend`

## 📄 Licence

[Indiquez votre licence ici]
