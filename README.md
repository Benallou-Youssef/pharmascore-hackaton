# 💊 CIH Care : Système Intelligent de Scoring et Plafond Crédit Santé

**Scoring Bancaire & Crédit Instantané en Pharmacie (Machine Learning)**

## 1. 💡 Présentation du Projet

CIH Care est une solution d'évaluation financière **automatisée** conçue pour déterminer l'éligibilité d'un client à un **crédit instantané** pour ses achats en pharmacie.

Le cœur du système repose sur l'analyse de l'historique du compte bancaire du client, le calcul d'un **score d'éligibilité** basé sur le Machine Learning, et la proposition d'un **plafond de crédit personnalisé**.

Ce projet réplique un cas réel de scoring bancaire en intégrant :
* Un **modèle de Machine Learning** (Régression Logistique).
* Des **règles métiers** dérivées du comportement financier.

---

## 2. 🎯 Objectifs

L'implémentation de CIH Care vise à :

* Calculer un **score d'éligibilité** précis, compris entre $0\%$ et $100\%$.
* **Prédire** l'éligibilité (*Oui/Non*) du client au crédit instantané.
* Déterminer **automatiquement** un plafond de crédit adapté au profil financier.
* Faciliter l'intégration avec les services bancaires via des **APIs** robustes.

---

## 3. 🛠️ Contenu du Notebook

Le projet est documenté et implémenté dans un notebook complet qui couvre les étapes suivantes :

1.  Importation des librairies nécessaires.
2.  Chargement et exploration des données (*EDA*).
3.  **Prétraitement** des variables (Nettoyage, encodage, etc.).
4.  **Entraînement** du modèle de Machine Learning.
5.  Calcul du **score final**.
6.  Détermination de l'**éligibilité** (application de la règle métier).
7.  Calcul du **plafond de crédit** basé sur l'IA.
8.  **Évaluation des performances** du modèle (Matrice de confusion, métriques).

---

## 4. 📊 Données Utilisées

Les données simulent le comportement financier d'un client à travers des indicateurs clés, servant à l'entraînement et au scoring :

* **Variables Clés :** Salaire moyen, Montant total des dépenses mensuelles, Stabilité et variation du solde.
* **Comportement Spécifique :** Fréquence d'achats santé/pharmacie, Historique des transactions régulières.
* **Indicateurs Dérivés :** Régularité, Évolution financière, Détection d'anomalies.

---

## 5. 🧠 Modèle de Machine Learning

### Modèle Actuel : Régression Logistique

Le modèle choisi pour la version initiale est la **Régression Logistique**.

| Justification du Choix | Description |
| :--- | :--- |
| **Classification Binaire** | Le problème est une classification simple : Éligible (1) ou Non Éligible (0). |
| **Interprétabilité** | Un critère essentiel en secteur bancaire. Les coefficients sont facilement interprétables. |
| **Stabilité & Rapidité** | Modèle simple, rapide à entraîner et stable pour ce type de données tabulaires. |
| **Score de Probabilité** | Sa sortie naturelle est une probabilité $P \in [0, 1]$, parfaite pour construire le score final $Score = P \times 100\%$. |

### Améliorations Futures

Des modèles plus performants comme **Random Forest** et **XGBoost** sont déjà importés dans le notebook et seront intégrés dans les futures versions pour optimiser la prédiction.

---

## 6. 💯 Calcul du Score et Règle d'Éligibilité

### Calcul du Score

Le modèle prédit la probabilité d'éligibilité. Cette probabilité est directement convertie en score en pourcentage :

$$
\text{Score} = P(\text{Éligibilité}) \times 100\%
$$

* **Score $\approx 100\%$ :** Très bonne capacité de remboursement, risque faible.
* **Score $\approx 0\%$ :** Risque élevé, client non éligible.

### Règle d'Éligibilité (Règle Métier)

Une règle simple est appliquée pour la décision finale :

* **Si Score $\geq 80\%$ :** Client **Éligible** au crédit instantané.
* **Sinon :** Client **Refusé**.

> 📌 **Note :** Ce seuil peut être ajusté dynamiquement selon la politique de risque de CIH Care.

---

## 7. 💳 Calcul du Plafond de Crédit (IA-Driven)

Le plafond de crédit attribué est **personnalisé** et calculé par une formule intelligente, cohérente avec la capacité financière réelle du client. Cette formule prend en compte plusieurs facteurs pondérés :

* **Revenu :** Salaire déclaré ou observé (virements).
* **Stabilité :** Stabilité du solde sur les $3-6$ derniers mois.
* **Dépenses :** Niveau des dépenses mensuelles.
* **Évolution :** Tendance du comportement financier.
* **Score Final :** Le score d'éligibilité issu du modèle ML.

---

## 8. 🌐 Intégration via API

Le système CIH Care est conçu pour être intégré dans n'importe quelle application (mobile, interne) via un découpage en trois types d'APIs pour une **décision instantanée** :

1.  **API Bancaire :** Récupère les données brutes (transactions, virements, solde) du compte client.
2.  **API ML CIH Care :** Reçoit les données financières, exécute le modèle de scoring et retourne en une seule requête le **Score, l'Éligibilité et le Plafond**.
3.  **API Pharmacie :** Utilisée au point de vente pour vérifier le plafond disponible et valider les paiements par crédit.

---

## 9. 📈 Évaluation du Modèle

La fiabilité du système est vérifiée à travers les métriques suivantes fournies dans le notebook :

* **Matrice de Confusion**
* **Mesures :** *Accuracy*, *Précision*, *Rappel* (*Recall*), *F1-Score*.
* **Analyse des erreurs** du modèle (Faux positifs et Faux négatifs).

---

## 10. ✨ Améliorations Futures

Une roadmap d'amélioration est déjà définie :

* **Modèles Avancés :** Comparaison de performances avec **Random Forest** et **XGBoost**.
* **Optimisation :** Recherche et optimisation des hyperparamètres.
* **Explicabilité (XAI) :** Ajout de méthodes d'explicabilité (e.g., **SHAP**) pour justifier chaque décision de crédit.
* **Déploiement :** Déploiement du modèle en API de production via **FastAPI**.
* **Industrialisation :** Conteneurisation avec **Docker** et mise en place d'un **Monitoring** en production.

---

## 👥 Auteurs

Ce projet a été réalisé par :

* **Nada Belahcen**
* **Fatim ezzahra Aittaleb**
* **Lina Badaoui**

Dans le cadre du développement d’un système intelligent pour le scoring financier et l’attribution dynamique d’un plafond crédit santé.