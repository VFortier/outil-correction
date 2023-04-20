export default function assessmentData() {
    return {
        name: "Lab Excel 3",
        remarks: [
            {
                text: "Félicitation pour le 100%! ⭐⭐⭐⭐⭐\n",
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
                text: "",
                threshold: 0,
            },
        ],
        exercises: [
            {
                name: "Q1 - Tri et filtre",
                criteria: [
                    {
                        text: "1.1 - Bonne réponse",
                        points: 1
                    },
                    {
                        text: "1.1 - Bonne démarche",
                        points: 2
                    },
                    {
                        text: "1.1 - Démarche incomplète",
                        points: 1,
                        isLinkedToPreviousCriterion: true,
                    },
                    {
                        text: "1.2 - Bonne réponse",
                        points: 1
                    },
                    {
                        text: "1.2 - Bonne démarche",
                        points: 2
                    },
                    {
                        text: "1.2 - Démarche incomplète",
                        points: 1,
                        isLinkedToPreviousCriterion: true,
                    },
                    {
                        text: "1.3 - Bonne réponse",
                        points: 1
                    },
                    {
                        text: "1.3 - Bonne démarche",
                        points: 2
                    },
                    { 
                        text: "1.3 - Démarche incomplète",
                        points: 1,
                        isLinkedToPreviousCriterion: true,
                    },
                    {
                        text: "1.4 - Bonne réponse",
                        points: 1
                    },
                    {
                        text: "1.4 - Bonne démarche",
                        points: 2
                    },
                    {
                        text: "1.4 - Démarche incomplète",
                        points: 1,
                        isLinkedToPreviousCriterion: true,
                    },
                    {
                        text: "1.5 - Bonne réponse",
                        points: 1
                    },
                    {
                        text: "1.5 - Bonne démarche",
                        points: 2
                    },
                    {
                        text: "1.5 - Démarche incomplète",
                        points: 1,
                        isLinkedToPreviousCriterion: true,
                    },
                    {
                        text: "1.6 - Bonne réponse",
                        points: 1
                    },
                    {
                        text: "1.6 - Bonne démarche",
                        points: 2
                    },
                    {
                        text: "1.6 - Démarche incomplète",
                        points: 1,
                        isLinkedToPreviousCriterion: true,
                    },
                ]
            },
            {
                name: "Q2 - Fonctions",
                criteria: [
                    {
                        text: "2.1 - RechercheX",
                        points: 5
                    },
                    {
                        text: "2.1 - RechercheX - partiellement réussi",
                        points: 5,
                        isLinkedToPreviousCriterion: true,
                    },
                    {
                        text: "2.2 - Moyenne.si (prix de vente si jours sur le marché > 100)",
                        points: 5
                    },
                    {
                        text: "2.2 - Moyenne.si (prix de vente si jours sur le marché > 100)",
                        points: 5,
                        isLinkedToPreviousCriterion: true,
                    },
                ]
            },
            {
                name: "Q3 - Mise en forme conditionnelle",
                criteria: [
                    {
                        text: "Prix demandé : Nuance de couleurs",
                        points: 7,
                    },
                    {
                        text: "Prix demandé : Nuance de couleurs - partiellement réussi (mauvaise échelle)",
                        points: 3,
                        isLinkedToPreviousCriterion: true,
                    },
                    {
                        text: "Prix de vente : trame de fond rouge si > 400 000",
                        points: 5,
                    },
                    {
                        text: "Prix de vente : trame de fond rouge si > 400 000 - partiellement réussi",
                        points: 5,
                        isLinkedToPreviousCriterion: true,
                    },
                ]
            },
            {
                name: "Q4 - Validation des données",
                criteria: [
                    {
                        text: "Validation des données : liste déroulante",
                        points: 8
                    },
                    {
                        text: "Validation des données : liste déroulante - partiellement réussi",
                        points: 8,
                        isLinkedToPreviousCriterion: true,
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