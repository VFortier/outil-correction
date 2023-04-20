export default function assessmentData() {
    return {
        name: "Lab Excel 2",
        remarks: [
            {
                text: "Ce lab n'était vraiment pas facile, félicitation pour le 100%! ⭐⭐⭐⭐⭐\n",
                threshold: 100,
            },
            {
                text: "Ce lab n'était vraiment pas facile, 90% et plus = excellent travail! ⭐⭐⭐⭐⭐\n",
                threshold: 90,
            },
            {
                text: "Ce lab n'était vraiment pas facile, très bon travail!\n",
                threshold: 80,
            },
            {
                text: "Ce lab n'était vraiment pas facile, bon travail!\n",
                threshold: 70,
            },
            {
                text: "",
                threshold: 0,
            },
        ],
        exercises: [
            {
                name: "Q1 - Rendement 1",
                criteria: [
                    {
                        text: "Bonne formule pour le rendement en C5",
                        points: 5
                    },
                    {
                        text: "Formule inscrite une seule fois en C5 puis recopiée en utilisant les $ (référencement absolu/mixte)",
                        points: 5,
                        note: "je donne tous les points pour =B5*1,05 puisque l'énoncé ne spécifiait pas d'utiliser la cellule B2 pour le taux"
                    },
                ]
            },
            {
                name: "Q2 - Rendement 2",
                criteria: [
                    {
                        text: "Bonne formule pour le rendement en C5",
                        points: 5
                    },
                    {
                        text: "Formule inscrite une seule fois en C5 puis recopiée en utilisant les $ (référencement mixte)",
                        points: 5
                    },
                ]
            },
            {
                name: "Q3 - Fonctions",
                criteria: [
                    {
                        text: "F5 : Moyenne",
                        points: 2.5,
                    },
                    {
                        text: "F5 : Moyenne (partiellement réussi)",
                        points: 2.5,
                        isLinkedToPreviousCriterion: true,
                    },
                    {
                        text: "I5 : Note globale",
                        points: 5,
                    },
                    {
                        text: "I5 : Note globale (partiellement réussi)",
                        points: 5,
                        isLinkedToPreviousCriterion: true,
                    },
                    {
                        text: "J5 : Fonction SI",
                        points: 5,
                    },
                    {
                        text: "J5 : Fonction SI (partiellement réussi)",
                        points: 5,
                        isLinkedToPreviousCriterion: true,
                    },
                    {
                        text: "Note moyenne (fonction moyenne)",
                        points: 2.5,
                    },
                    {
                        text: "Note moyenne (fonction moyenne) (partiellement réussi)",
                        points: 2.5,
                        isLinkedToPreviousCriterion: true,
                    },
                    {
                        text: "Note moyenne des résultats en haut de 60% (fonction moyenne.si)",
                        points: 5,
                    },
                    {
                        text: "Note moyenne des résultats en haut de 60% (fonction moyenne.si) (partiellement réussi)",
                        points: 5,
                        isLinkedToPreviousCriterion: true,
                    },
                    {
                        text: "Note la plus forte (fonction max)",
                        points: 2.5,
                    },
                    {
                        text: "Note la plus forte (fonction max) (partiellement réussi)",
                        points: 2.5,
                        isLinkedToPreviousCriterion: true,
                    },
                    {
                        text: "Note médiane (fonction mediane)",
                        points: 2.5,
                    },
                    {
                        text: "Note médiane (fonction mediane) (partiellement réussi)",
                        points: 2.5,
                        isLinkedToPreviousCriterion: true,
                    },
                    {
                        text: "Nb étudiants présents (fonction NB)",
                        points: 2.5,
                    },
                    {
                        text: "Nb étudiants présents (fonction NB) (partiellement réussi)",
                        points: 2.5,
                        isLinkedToPreviousCriterion: true,
                    },
                    {
                        text: "Nb échecs (fonction NB.SI)",
                        points: 2.5,
                    },
                    {
                        text: "Nb échecs (fonction NB.SI) (partiellement réussi)",
                        points: 2.5,
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