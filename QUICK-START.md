# 🚀 Démarrage rapide

## 1️⃣ Importer tout le contenu en 1 commande

Tu n'auras PAS à remplir les champs un par un. J'ai créé un fichier `sanity-import.ndjson` avec tout le contenu de ton site.

**Dans un terminal, va dans le dossier `studio` et lance :**

```bash
cd studio
npx sanity dataset import ../sanity-import.ndjson production --replace
```

Sanity te demandera de te connecter (suis le lien dans le terminal), puis tout sera importé en quelques secondes : textes, tarifs, avis, FAQ, horaires. ✅

Recharge ensuite **localhost:3333** et **localhost:4321** — tout sera rempli.

---

## 2️⃣ Visual Studio Code

VS Code est un éditeur de code séparé. Voici comment l'utiliser avec ton projet :

### Installation
1. Télécharge VS Code : **https://code.visualstudio.com/**
2. Installe-le

### Ouvrir ton projet
1. Lance VS Code
2. Menu **Fichier → Ouvrir un dossier**
3. Sélectionne ton dossier `lynebeauty-astro`
4. Tu verras toute la structure du projet à gauche

### Terminal intégré (très utile)
Dans VS Code : **Affichage → Terminal** (ou `Ctrl+`` / `Cmd+`` sur Mac)

Tu peux lancer toutes tes commandes (npm run dev, npm run sanity) directement depuis VS Code, dans 2 onglets de terminal différents.

### Extensions recommandées
Dans VS Code, va dans l'onglet Extensions (icône carrés à gauche) et installe :
- **c** (par Astro Build) — pour la coloration syntaxique
- **Tailwind CSS IntelliSense** (optionnel)

---

## 3️⃣ Voir le site + modifier en même temps

Place ton écran en **deux fenêtres côte à côte** :
- À gauche : **localhost:3333** (Sanity Studio)
- À droite : **localhost:4321** (le site)

⚠️ **Important** : Astro est un site statique. Après avoir cliqué "Publish" dans Sanity, tu dois **rafraîchir manuellement** localhost:4321 (Cmd+R / Ctrl+R) pour voir les changements.

Pour un vrai mode "live preview" temps réel, il faudrait passer en SSR (Server Side Rendering) — c'est plus complexe et pas adapté à GitHub Pages gratuit. Le rafraîchissement manuel est suffisant et performant.
