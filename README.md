Bienvenue dans le projet Client Mobile Area ! Cette application mobile React Native est construite avec Expo en utilisant TypeScript.

## Table des Matières

- [Table des Matières](#table-des-matières)
- [Installation](#installation)
- [Exécution de l'Application](#exécution-de-lapplication)
- [Structure du Projet](#structure-du-projet)

## Installation

1. **Clonez le dépôt :**

    ```bash
    git clone https://github.com/your-username/Template-ReactNative.git
    ```

    Installez les dépendances :

    ```bash
    cd client-mobile-area
    yarn install
    ```

2. **Configuration**

    Copiez le fichier `.env.example` en un nouveau fichier `.env` et ajustez les variables d'environnement selon vos besoins :

    ```bash
    cp .env.example .env
    ```

    Configurez d'autres détails dans le fichier `app.json`, `eas.json`, ou tout autre fichier pertinent.

## Exécution de l'Application

Assurez-vous d'avoir Expo CLI installé. Vous pouvez démarrer l'application en exécutant :

```bash
yarn start
```

## Structure du Projet

La structure du projet est organisée comme suit:

- `app.json`: Configuration Expo de l'application.
- `App.tsx`: Point d'entrée de l'application.
- `babel.config.js`: Configuration Babel.
- `eas.json`: Configuration Expo Application Services (EAS).
- `env.d.ts`: Définitions de types pour les variables d'environnement.
- `package.json`: Informations sur le projet et dépendances.
- `tsconfig.json`: Configuration TypeScript.
- `yarn.lock`: Verrouillage des versions pour Yarn.

**Dossiers:**

- `src/assets`: Fichiers multimédias tels que des images.

**Components:**

- `AppNavigator`: Gestion de la navigation de l'application.
- `BackButton`: Composant de bouton de retour.
- `BubbleBackground`: Arrière-plan avec des bulles animées.
- `ButtonGradient`: Bouton avec dégradé.
- `CronComponent`: Composant pour la gestion des tâches planifiées.
- `RememberMe`: Composant pour la fonction "Se souvenir de moi".

**Screens:**

- `ActionDeezerScreen`: Écran pour les actions liées à Deezer.
- `ActionSpotifyScreen`: Écran pour les actions liées à Spotify.
- `ActionYoutubeScreen`: Écran pour les actions liées à YouTube.
- `CronSettingsScreen`: Écran de paramètres pour la gestion des tâches planifiées.
- `ForgotPasswordScreen`: Écran pour la récupération de mot de passe.
- `LoginScreen`: Écran de connexion.
- `ResetPasswordScreen`: Écran pour la réinitialisation du mot de passe.
- `ServiceScreen`: Écran de gestion des services.
- `SignUpScreen`: Écran d'inscription.

Pour un guide d'installation Expo, consultez la [documentation Expo](https://docs.expo.dev/get-started/installation/).
