export default function assessmentData() {
    return {
        name: "Lab Word 3",
        remarks: [
            {
                text: "Félicitation! Peu d'étudiants ont eu 100% pour ce lab. ⭐⭐⭐⭐⭐\n",
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
                name: "Exercice 1",
                criteria: [
                    {
                        text: "Modifiez le style Normal en respectant les options de mise en forme suivantes",
                        points: 2
                    },
                    {
                        text: "Appliquez le style Titre",
                        points: 2
                    },
                    {
                        text: "Appliquez le style Titre 1 aux paragraphes",
                        points: 2
                    },
                    {
                        text: "Appliquez le style Titre 1 aux paragraphes (il manque des paragraphes)",
                        points: 3,
                        isLinkedToPreviousCriterion: true,
                    },
                    {
                        text: "Modifiez le style Titre en respectant les options de mise en forme (police)",
                        points: 1
                    },
                    {
                        text: "Modifiez le style Titre en respectant les options de mise en forme (paragraphe)",
                        points: 1
                    },
                    {
                        text: "Modifiez le style Titre 1 en respectant les options de mise en forme (police)",
                        points: 1
                    },
                    {
                        text: "Modifiez le style Titre 1 en respectant les options de mise en forme (paragraphe)",
                        points: 1
                    },
                    {
                        text: "Modifiez le style Titre 1 en respectant les options de mise en forme (bordure)",
                        points: 1
                    },
                    {
                        text: "Appliquez une liste à puce selon le modèle ci-dessous (gras, orange, puce)",
                        points: 2
                    },
                    {
                        text: "Créez un nouveau style à partir de cette sélection en nommant le nouveau style Astuces",
                        points: 2
                    },
                    {
                        text: "Appliquez le style Astuces aux paragraphes",
                        points: 2
                    },
                    {
                        text: "Générez la table des matières à cet endroit",
                        points: 2
                    },
                    {
                        text: "Table des matières: format Recherché",
                        points: 1,
                        isLinkedToPreviousCriterion: true,
                    },
                    {
                        text: "Dans le document, changez le titre « Les styles standards » par « Les styles les plus utilisés »",
                        points: 1,
                    },
                    {
                        text: "Mettez à jour la table des matières et assurez-vous que le titre est changé dans la table des matières.",
                        points: 1,
                        isLinkedToPreviousCriterion: true,
                    },
                ]
            },
            {
                name: "Exercice 2",
                criteria: [
                    {
                        text: "Homer: Insérez l'image dans le document.",
                        points: 1
                    },
                    {
                        text: "Homer: Réduisez la taille.",
                        points: 1
                    },
                    {
                        text: "Homer: habillage du texte",
                        points: 1
                    },
                    {
                        text: "Marge: Insérez l'image dans le document.",
                        points: 1
                    },
                    {
                        text: "Marge: Réduisez la taille.",
                        points: 1
                    },
                    {
                        text: "Marge: habillage du texte",
                        points: 1
                    },
                    {
                        text: "Bart: Insérez l'image dans le document.",
                        points: 1
                    },
                    {
                        text: "Bart: Réduisez la taille.",
                        points: 1
                    },
                    {
                        text: "Bart: habillage du texte",
                        points: 1
                    },
                    {
                        text: "Lisa: Insérez l'image dans le document.",
                        points: 1
                    },
                    {
                        text: "Lisa: Réduisez la taille.",
                        points: 1
                    },
                    {
                        text: "Lisa: habillage du texte",
                        points: 1
                    },
                    {
                        text: "Maggie: Insérez l'image dans le document.",
                        points: 1
                    },
                    {
                        text: "Maggie: Réduisez la taille.",
                        points: 1
                    },
                    {
                        text: "Maggie: habillage du texte",
                        points: 1
                    },
                ]
            },
            {
                name: "Exercice 3",
                criteria: [
                    {
                        text: "Utilisez le type Hiérarchie horizontale à plusieurs niveaux",
                        points: 2
                    },
                    {
                        text: "Modifiez le texte",
                        points: 1
                    },
                    {
                        text: "Modifiez les couleurs",
                        points: 1
                    },
                    {
                        text: "Modifiez la position des formes",
                        points: 1
                    },
                ]
            },
            {
                name: "Exercice 4",
                criteria: [
                    {
                        text: "La largeur des colonnes et la hauteur des lignes ",
                        points: 3
                    },
                    {
                        text: "Le style du texte",
                        points: 2
                    },
                    {
                        text: "Alignement du texte dans les cellules",
                        points: 2
                    },
                    {
                        text: "Orientation du texte.",
                        points: 1
                    },
                    {
                        text: "Couleur des cellules",
                        points: 1
                    },
                    {
                        text: "Fusion des cellules",
                        points: 2
                    },
                    {
                        text: "Le style des bordures (extérieures)",
                        points: 2
                    },
                    {
                        text: "Le style des bordures (intérieures)",
                        points: 2
                    },
                ]
            },
            {
                name: "Remise",
                criteria: [
                    {
                        text: "Créez un seul fichier archive (.zip, .rar ou .7z) contenant les 4 fichiers Word",
                        points: 5
                    },
                    {
                        text: "Nommez le fichier archive LabWord3_VotreMatricule ",
                        points: 3
                    },
                    {
                        text: "Déposez-le fichier archive sur Teams (devoir LabWord3)",
                        points: 2
                    },
                ]
            }
        ]
    }
}