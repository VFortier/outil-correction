export default function assessmentData() {
    return {
        name: "Lab Excel 4",
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
                name: "Activité 1 - Histogramme des ventes",
                criteria: [
                    {
                        text: "Sélectionnez les données, et créez un graphique de type « Histogramme ».",
                        points: 8,
                    },
                    {
                        text: "Sélectionnez les données, et créez un graphique de type « Histogramme ». (partiellement réussi)",
                        points: 7,
                        isLinkedToPreviousCriterion: true,
                    },
                    {
                        text: "L'agrandir et le placer sous le tableau des données",
                        points: 5
                    },
                    {
                        text: "Ajouter les titres (graphique + 2 axes)",
                        points: 3,
                    },
                    {
                        text: "Ajouter les titres (graphique + 2 axes) (partiellement réussi)",
                        points: 2,
                    },
                    {
                        text: "Ajuster l’axe vertical",
                        points: 3,
                    },
                    {
                        text: "Ajuster l’axe vertical (partiellement réussi)",
                        points: 2,
                        isLinkedToPreviousCriterion: true,
                    },
                    {
                        text: "Ajuster les textes de l’axe horizontal",
                        points: 5,
                    },
                    {
                        text: "Afficher la légende des séries à droite",
                        points: 5,
                    },
                ]
            },
            {
                name: "Activité 2 - Graphique en secteur",
                criteria: [
                    {
                        text: "Sélectionnez les données, et créez un graphique de type « Secteurs »",
                        points: 13,
                    },
                    {
                        text: "Sélectionnez les données, et créez un graphique de type « Secteurs » (partiellement réussi)",
                        points: 7,
                        isLinkedToPreviousCriterion: true,
                    },
                    {
                        text: "Placer le graphique sur une feuille dédiée au graphique",
                        points: 3
                    },
                    {
                        text: "Placer le graphique sur une feuille dédiée au graphique (partiellement réussi)",
                        points: 2
                    },
                    {
                        text: "Enlever la légende",
                        points: 4,
                    },
                    {
                        text: "Affichage du nom de la catégorie en guise d’étiquette de la série de données",
                        points: 6,
                    },
                    {
                        text: "Mettez la catégorie « Cyclisme » en évidence",
                        points: 5,
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