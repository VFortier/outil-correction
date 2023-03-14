export default function assessmentData() {
    return {
        name: "Examen 1 - Word",
        remarks: [
            {
                text: "",
                threshold: 0,
            },
        ],
        exercises: [
            {
                name: "Extraction des fichiers du zip et modification des fichiers extraits",
                criteria: [
                    {
                        text: "Extraction des fichiers",
                        points: 5,
                    },
                    {
                        text: "Modification des fichiers extraits",
                        points: 5,
                    },
                ]
            },
            {
                name: "Exercice 1 - Mise en forme des paragraphes",
                criteria: [
                    {
                        text: "Q1 - Pourquoi utiliser un saut de page",
                        points: 2,
                    },
                    {
                        text: "Q1 - Pourquoi utiliser un saut de page (réponse partiellement bonne)",
                        points: 2,
                        isLinkedToPreviousCriterion: true,
                    },
                    {
                        text: "Q2 - Style normal - Le style a été modifié",
                        points: 1.5,
                    },
                    {
                        text: "Q2 - Style normal - Police arial",
                        points: 0.5,
                    },
                    {
                        text: "Q2 - Style normal - Taille police",
                        points: 0.5,
                    },
                    {
                        text: "Q2 - Style normal - Interligne",
                        points: 0.5,
                    },
                    {
                        text: "Q3 - Liste - Flèche",
                        points: 1,
                    },
                    {
                        text: "Q3 - Liste - Nombre (1,2)",
                        points: 1,
                    },
                    {
                        text: "Q3 - Liste - Lettres (a,b,c)",
                        points: 1,
                    },
                    {
                        text: "Q4 - Retraits & bordures - Retrait de première ligne",
                        points: 1.5,
                    },
                    {
                        text: "Q4 - Retraits & bordures - Bordure présente",
                        points: 1,
                    },
                    {
                        text: "Q4 - Retraits & bordures - Bordure épaisse",
                        points: 0.5,
                        isLinkedToPreviousCriterion: true,
                    },
                    {
                        text: "Q5 - Tabulation - Taquets de gauche pour Magasin",
                        points: 1,
                    },
                    {
                        text: "Q5 - Tabulation - Taquets pour Quantité",
                        points: 1,
                    },
                    {
                        text: "Q5 - Tabulation - Taquets pour Quantité (taquet de droite)",
                        points: 1,
                        isLinkedToPreviousCriterion: true,
                    },
                    {
                        text: "Q5 - Tabulation - Taquets pour Prix",
                        points: 1,
                    },
                    {
                        text: "Q5 - Tabulation - Taquets pour Prix (taquet décimal)",
                        points: 1,
                    },
                    {
                        text: "Q5 - Tabulation - Utilisation de tabulations (tabs)",
                        points: 2,
                    },
                ]
            },
            {
                name: "Exercice 2 - Mise en page",
                criteria: [
                    {
                        text: "Q6 - Expliquer les avantages des techniques apprises",
                        points: 2.5,
                    },
                    {
                        text: "Q6 - Expliquer les avantages des techniques apprises (1 élément manquant)",
                        points: 2.5,
                        isLinkedToPreviousCriterion: true,
                    },
                    {
                        text: "Q7 - Orientation - Saut de section après la partie 1",
                        points: 1,
                    },
                    {
                        text: "Q7 - Orientation - Saut de section après la partie 2",
                        points: 1,
                    },
                    {
                        text: "Q7 - Orientation - Partie 2 paysage",
                        points: 1,
                    },
                    {
                        text: "Q7 - Orientation - Partie 3 portrait",
                        points: 1,
                    },
                    {
                        text: "Q8 - Pied de page - Prénom à gauche",
                        points: 2,
                    },
                    {
                        text: "Q8 - Pied de page - Numéro de page présent",
                        points: 2,
                    },
                    {
                        text: "Q8 - Pied de page - Numéro de page aligné à droite",
                        points: 1,
                        isLinkedToPreviousCriterion: true,
                    },
                    {
                        text: "Q8 - Pied de page - Numéro de page en chiffres romains",
                        points: 1,
                        isLinkedToPreviousCriterion: true,
                    },
                    {
                        text: "Q9 - Page titre - Bon texte inscrit",
                        points: 1,
                    },
                    {
                        text: "Q9 - Page titre - Utilisation du saut de section",
                        points: 1,
                    },
                    {
                        text: "Q9 - Page titre - Pas de pied de page",
                        points: 1,
                    },
                    {
                        text: "Q9 - Page titre - Alignement vertical justifié",
                        points: 2,
                    },
                ]
            },
            {
                name: "Exercice 3 - Table des matières",
                criteria: [
                    {
                        text: "Q10 - Styles Titre - Titre principal",
                        points: 1,
                    },
                    {
                        text: "Q10 - Styles Titre - Titre 1",
                        points: 0.5,
                    },
                    {
                        text: "Q10 - Styles Titre - Titre 1 (partiellement réussi)",
                        points: 0.5,
                        isLinkedToPreviousCriterion: true,
                    },
                    {
                        text: "Q10 - Styles Titre - Titre 2",
                        points: 0.5,
                    },
                    {
                        text: "Q10 - Styles Titre - Titre 2 (partiellement réussi)",
                        points: 0.5,
                        isLinkedToPreviousCriterion: true,
                    },
                    {
                        text: "Q10 - Styles Titre - Titre 3",
                        points: 1,
                    },
                    {
                        text: "Q10 - Styles Titre - Titre 4",
                        points: 1,
                    },
                    {
                        text: "Q11 - Styles Titre - Titre mise en forme (police/taille)",
                        points: 1,
                    },
                    {
                        text: "Q11 - Styles Titre - Titre 1 mise en forme (police/taille)",
                        points: 1,
                    },
                    {
                        text: "Q11 - Styles Titre - Titre 1 mise en forme (alignement centré)",
                        points: 1,
                    },
                    {
                        text: "Q11 - Styles Titre - Titre 2 mise en forme (police/taille)",
                        points: 1,
                    },
                    {
                        text: "Q11 - Styles Titre - Titre 2 mise en forme (bordure)",
                        points: 1,
                    },
                    {
                        text: "Q11 - Styles Titre - Titre 3 mise en forme (police/taille/en gras)",
                        points: 1,
                    },
                    {
                        text: "Q11 - Styles Titre - Titre 4 mise en forme (police/taille)",
                        points: 1,
                    },
                    {
                        text: "Q12 - Table des matière générée",
                        points: 1.5,
                    },
                    {
                        text: "Q12 - Table des matière - Format officiel",
                        points: 1,
                    },
                    {
                        text: "Q12 - Table des matière - 4 niveaux présents",
                        points: 0.5,
                    },
                ]
            },
            {
                name: "Exercice 4 - Création d'un tableau",
                criteria: [
                    {
                        text: "Q13 - tableau - fusion des cellules (texte au centre en bas)",
                        points: 1,
                    },
                    {
                        text: "Q13 - tableau - fusion des cellules (texte au centre à droite)",
                        points: 1,
                    },
                    {
                        text: "Q13 - tableau - dimension du tableau 3x5",
                        points: 2.5,
                    },
                    {
                        text: "Q13 - tableau - texte au centre en bas (alignement)",
                        points: 0.5,
                    },
                    {
                        text: "Q13 - tableau - texte au centre en bas (orientation)",
                        points: 2,
                    },
                    {
                        text: "Q13 - tableau - texte au centre à droite (alignement)",
                        points: 0.5,
                    },
                    {
                        text: "Q13 - tableau - texte au centre en haut (alignement)",
                        points: 0.5,
                    },
                    {
                        text: "Q13 - tableau - texte au centre en haut (trame de fond bleu)",
                        points: 1,
                    },
                    {
                        text: "Q13 - tableau - texte au centre (alignement)",
                        points: 0.5,
                    },
                    {
                        text: "Q13 - tableau - trame de fond bleu",
                        points: 1,
                    },
                    {
                        text: "Q13 - tableau - bordure pointillée",
                        points: 1,
                    },
                    {
                        text: "Q13 - tableau - bordure pointillée (partiellement réussi)",
                        points: 0.5,
                        isLinkedToPreviousCriterion: true,
                    },
                    {
                        text: "Q13 - tableau - bordure double",
                        points: 1,
                    },
                    {
                        text: "Q13 - tableau - bordure double (partiellement réussi)",
                        points: 0.5,
                        isLinkedToPreviousCriterion: true,
                    },
                    {
                        text: "Q13 - tableau - bordure simple épaisse",
                        points: 1,
                    },
                    {
                        text: "Q13 - tableau - bordure simple épaisse (partiellement réussi)",
                        points: 0.5,
                        isLinkedToPreviousCriterion: true,
                    },
                ]
            },
            {
                name: "Exercice 5 - Insertion d'images",
                criteria: [
                    {
                        text: "Q14 - Image 1 - Réduite",
                        points: 1.5,
                    },
                    {
                        text: "Q14 - Image 1 - Habillage du texte",
                        points: 2.5,
                    },
                    {
                        text: "Q14 - Image 1 - Bien placée",
                        points: 1,
                    },
                    {
                        text: "Q14 - Image 2 - Réduite",
                        points: 1.5,
                    },
                    {
                        text: "Q14 - Image 2 - Habillage du texte",
                        points: 2.5,
                    },
                    {
                        text: "Q14 - Image 2 - Bien placée",
                        points: 1,
                    },
                ]
            },
            {
                name: "Remise sur Teams",
                criteria: [
                    {
                        text: "Examen remis",
                        points: 4,
                    },
                    {
                        text: "Remise en format zip",
                        points: 4,
                    },
                    {
                        text: "Remise sur Teams conforme (appuyer sur <<remettre>> et fichiers joints)",
                        points: 2,
                    },
                ]
            },
        ]
    }
}