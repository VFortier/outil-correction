export default function labWord2() {
    return {
        name: "Lab Word 2",
        remarks: [
            {
                text: "Félicitation! Peu d'élèves ont eu 100% pour ce lab",
                threshold: 100,
            },
            {
                text: "Excellent travail! ",
                threshold: 90,
            },
            {
                text: "très bon travail! ",
                threshold: 80,
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
                        text: "Appliquez la police Comic Sans MS et la taille 13 points au texte",
                        points: 2
                    },
                    {
                        text: "Insérez les symboles",
                        points: 6
                    },
                    {
                        text: "Insérez les symboles avec au moins un bon symbole de trouvé",
                        points: 2,
                        isLinkedToPreviousCriterion: true,
                    },
                    {
                        text: "Ajoutez des retraits à gauche et à droite (présents)",
                        points: 3
                    },
                    {
                        text: "Ajoutez des retraits à gauche et à droite (exactement 2.5 cm)",
                        points: 2,
                        isLinkedToPreviousCriterion: true,
                    },
                    {
                        text: "Bordure présente",
                        points: 1
                    },
                    {
                        text: "Bordure ombre",
                        points: 1
                    },
                    {
                        text: "Bordure trait",
                        points: 1
                    },
                    {
                        text: "Bordure couleur orange",
                        points: 1
                    },
                    {
                        text: "Bordure largeur 3pt",
                        points: 1
                    },
                ]
            },
            {
                name: "Exercice 2",
                criteria: [
                    {
                        text: "Modifiez la casse du paragraphe « inventaire » (groupe Police).",
                        points: 2
                    },
                    {
                        text: "Appliquez le style gras au paragraphe « inventaire » (groupe Police).",
                        points: 2
                    },
                    {
                        text: "Centrez horizontalement le paragraphe « inventaire » (groupe Paragraphe). ",
                        points: 2
                    },
                    {
                        text: "Ajoutez une bordure au paragraphe «  inventaire » (groupe Paragraphe). ",
                        points: 2
                    },
                    {
                        text: "Ajoutez une couleur d'arrière-plan au paragraphe « inventaire »",
                        points: 2
                    },
                    {
                        text: "Ajoutez une bordure aux mots « Articles », « Matière », « Quantité », « Couleur », « Prix » (groupe Paragraphe). ",
                        points: 5
                    },
                    {
                        text: "Affichez les marques cachées afin de voir les tabulations et les fins de paragraphe et les sauts de ligne. ",
                        points: 2
                    },
                    {
                        text: "Ajoutez des taquets gauche pour les mots « Article »",
                        points: 2
                    },
                    {
                        text: "Ajoutez des taquets gauche pour les mots « Matière »",
                        points: 1
                    },
                    {
                        text: "Ajoutez des taquets gauche pour les mots  « Quantité »",
                        points: 1
                    },
                    {
                        text: "Ajoutez des taquets gauche pour les mots  « Couleur »",
                        points: 1
                    },
                    {
                        text: "Ajoutez le taquet décimale pour le mot « Prix » à environ 12,25 cm.",
                        points: 3
                    },
                ]
            },
            {
                name: "Exercice 3",
                criteria: [
                    {
                        text: "Section 1 et 2 Liste à puces ",
                        points: 2
                    },
                    {
                        text: "Question 1,2 et 3 Liste numérotée ",
                        points: 2
                    },
                    {
                        text: "Question 1,2 et 3 Liste numérotée AVEC format A, B, C ",
                        points: 1,
                        isLinkedToPreviousCriterion: true,
                    },
                    {
                        text: "Action 1 et 2 Liste numérotée, format i, ii, iii ",
                        points: 2
                    },
                    {
                        text: "Changez la couleur des A, B, C, etc. ",
                        points: 2
                    },
                    {
                        text: "Section 1 et 2 Liste à puces (flèche) ",
                        points: 3
                    },
                    {
                        text: "Question 1,2 et 3 une image ",
                        points: 4
                    },
                    {
                        text: "Action 1 et 2 un symbole (sourire) ",
                        points: 4
                    },
                ]
            },
            {
                name: "Exercice 4",
                criteria: [
                    {
                        text: "Utilisation du style Normal",
                        points: 5
                    },
                    {
                        text: "Police: Times New Roman 12 points ",
                        points: 2
                    },
                    {
                        text: "Alignement: justifié ",
                        points: 3
                    },
                    {
                        text: "Espacement avant: 12 points",
                        points: 2.5
                    },
                    {
                        text: "Espacement après: 6 points",
                        points: 2.5
                    },
                    {
                        text: "Interligne: 1,5 ",
                        points: 5
                    },
                    {
                        text: "Retrait de première ligne présent",
                        points: 3
                    },
                    {
                        text: "Retrait de première ligne exactement 1 cm",
                        points: 2,
                        isLinkedToPreviousCriterion: true,
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
                        text: "Nommez le fichier archive miseEnforme_VotreMatricule (Ex : miseEnForme_1234567.zip)",
                        points: 3
                    },
                    {
                        text: "Remettre le fichier archive via Teams (Lab Word 2 dans « devoirs ») ",
                        points: 2
                    },
                ]
            },
        ]
    }
}