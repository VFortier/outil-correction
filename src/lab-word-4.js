export default function assessmentData() {
    return {
        name: "Lab Word 4",
        remarks: [
            {
                text: "Félicitation! ⭐⭐⭐⭐⭐\n",
                threshold: 100,
            },
            {
                text: "Excellent travail! ⭐\n",
                threshold: 90,
            },
            {
                text: "Très bon travail!\n",
                threshold: 80,
            },
            {
                text: "Bon travail!\n",
                threshold: 70,
            },
            {
                text: "",
                threshold: 0,
            },
        ],
        exercises: [
            {
                name: "Exercice 1 - Orientation du texte",
                criteria: [
                    {
                        text: "Créez un nouveau document et sauvegardez-le sous le nom de miseEnPage.docx",
                        points: 2
                    },
                    {
                        text: "Écrivez votre nom sur la première page.",
                        points: 2
                    },
                    {
                        text: "[Free] Ajoutez un saut de page (Ctrl + Entrée) pour passer à la page suivante",
                        points: 2
                    },
                    {
                        text: "Écrivez le titre du cours sur la deuxième page",
                        points: 2,
                    },
                    {
                        text: "Modifiez l'orientation des pages à Paysage",
                        points: 2,
                    },
                    {
                        text: "Insérez un saut de section page suivante.",
                        points: 2,
                    },
                    {
                        text: "Modifiez l'orientation en Portrait de la troisième page.",
                        points: 2,
                    },
                ]
            },
            {
                name: "Exercice 2 - Créer une page titre",
                criteria: [
                    {
                        text: "Insérez un saut de section page suivante.",
                        points: 2
                    },
                    {
                        text: "Dans la nouvelle 1re page (avant le saut de section), ajoutez les 3 lignes de texte",
                        points: 3
                    },
                    {
                        text: "Appliquez un alignement vertical justifié au texte sélectionné.",
                        points: 5
                    },
                    {
                        text: "Appliquez un alignement horizontal centré aux 3 paragraphes sélectionnés.",
                        points: 2
                    },
                    {
                        text: "Ajoutez un saut de ligne (Shift + Enter) après 420-110-AL",
                        points: 3
                    },
                    {
                        text: "Ajoutez une bordure à la première page",
                        points: 1
                    },
                    {
                        text: "Bordure: type ombre",
                        points: 1,
                        isLinkedToPreviousCriterion: true,
                    },
                    {
                        text: "Bordure: couleur bleu",
                        points: 1,
                        isLinkedToPreviousCriterion: true,
                    },
                    {
                        text: "Bordure: largeur 3pt",
                        points: 1,
                        isLinkedToPreviousCriterion: true,
                    },
                    {
                        text: "Bordure seulement appliquée à la 1ere page",
                        points: 1,
                        isLinkedToPreviousCriterion: true,
                    },
                    {
                        text: "Ajoutez un numéro de page dans le pied de page de la 2e page.",
                        points: 2
                    },
                    {
                        text: "Faites commencer le numéro de page à 1",
                        points: 2
                    },
                    {
                        text: "Désactivez la liaison entre le pied de page de la section 1 et celui de la section 2",
                        points: 2
                    },
                    {
                        text: "Supprimez le numéro de page de la première page.",
                        points: 2
                    },
                ]
            },
            {
                name: "Exercice 3 - Colonnes",
                criteria: [
                    {
                        text: "Modifiez le nombre de colonnes du texte sélectionné à 3 colonnes",
                        points: 4
                    },
                    {
                        text: "Faites en sorte que le texte de la page 2 soit sur 5 colonnes",
                        points: 4
                    },
                ]
            },
            {
                name: "Remise",
                criteria: [
                    {
                        text: "Créez un seul fichier archive (.zip, .rar ou .7z) contenant les 2 fichiers Word",
                        points: 5
                    },
                    {
                        text: "Nommez le fichier archive miseEnPage_VotreMatricule ",
                        points: 3
                    },
                    {
                        text: "Déposez-le fichier archive sur Teams (devoir LabWord4)",
                        points: 2
                    },
                ]
            }
        ]
    }
}