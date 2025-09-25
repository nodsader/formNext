# 🚀 Test Technique — Formulaire multi-étapes (Next.js 15 / App Router)

## Présentation

Ce projet est une implémentation d’un **formulaire multi-étapes** développé avec Next.js 15 (App Router), Tailwind CSS et GSAP pour quelques animations.  
Il permet de collecter des données utilisateur de manière progressive, tout en offrant une **expérience front solide**, sécurisée et facilement extensible.

---

## Fonctionnalités

### ✅ Formulaire multi-slides
- Navigation fluide entre les étapes
- Gestion de l’état global via `useState`
- Support des champs textes, textarea, tags, fichiers

### 📁 Upload sécurisé de fichiers
- Support des fichiers `.png`, `.jpg`, `.webp` et `.pdf`
- Affichage d’un aperçu des images
- Vérifications strictes côté front :
    - Taille max 5MB
    - Type MIME validé
    - Nettoyage des caractères dangereux
    - Prévention des fichiers contenant des scripts malicieux
- Fichier verifyFile, qui effectue une vérification d'un fichier déposé avant envoie du back-end via verification bytes.  

### ✨ UI & Animations
- Utilisation de **GSAP** pour les animations d’entrée (modale de process)
- Composants réutilisables (`FormInput`, `FormFileInput`, etc.)
- Design clean et responsive basé sur Tailwind CSS

### 🔒 Sécurité front renforcée
- Sanitation manuelle des champs texte
- Blocage des formats non autorisés (SVG, exécutables, etc.)
- Validation HTML5 (email, URL…)
