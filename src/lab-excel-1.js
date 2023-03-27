export default function assessmentData() {
    return {
        name: "Lab Excel 1",
        remarks: [
            {
                text: "💯💯💯\n",
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
                name: "Q1 - Mise en forme",
                criteria: [
                    {
                        text: "Fusionnez les 4 cellules du haut pour le titre « Facture Clinique d'Esthétique »",
                        points: 5
                    },
                    {
                        text: "Changez la couleur de la trame de fond pour la cellule de titre",
                        points: 5
                    },
                    {
                        text: "Augmentez la taille du texte pour le titre à 16",
                        points: 2
                    },
                    {
                        text: "Centrez le titre dans la cellule",
                        points: 3,
                    },
                    {
                        text: "Agrandissez la première ligne (plus haute que les autres)",
                        points: 5,
                    },
                    {
                        text: "Ajoutez une bordure épaisse sous l’en-tête (item, quantité, etc.)",
                        points: 5,
                    },
                    {
                        text: "Mettez le texte de l’en-tête en gras",
                        points: 2,
                    },
                    {
                        text: "Changer l’orientation du texte de l’en-tête",
                        points: 3,
                    },
                ]
            },
            {
                name: "Q2 - Formules",
                criteria: [
                    {
                        text: "Total par Item – premier item",
                        points: 10
                    },
                    {
                        text: "Total par Item – recopie",
                        points: 5
                    },
                    {
                        text: "Sous Total",
                        points: 5
                    },
                    {
                        text: "Sous Total - Utilisation de la fonction SOMME",
                        points: 5
                    },
                    {
                        text: "Taxes",
                        points: 5
                    },
                    {
                        text: "Grand Total",
                        points: 5
                    },
                    {
                        text: "Valider que les forumles fonctionnent bien",
                        points: 5
                    },
                ]
            },
            {
                name: "Q3 - Format des données",
                criteria: [
                    {
                        text: "Format monétaire",
                        points: 5
                    },
                    {
                        text: "Quantité: deux chiffres après la virgule et SANS signe de $",
                        points: 5
                    },
                ]
            },
            {
                name: "Remise",
                criteria: [
                    {
                        text: "Remise conforme dans Teams",
                        points: 10
                    },
                    {
                        text: "Remise non conforme dans Teams",
                        points: 10,
                        isLinkedToPreviousCriterion: true,
                    },
                ]
            }
        ]
    }
}