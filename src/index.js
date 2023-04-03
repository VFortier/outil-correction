import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import assessmentData from './lab-excel-2';

class Criterion extends React.Component {
    render() {
        return (
            <div>
                <label>
                    <input
                        type="checkbox"
                        onChange={this.props.handleChange}
                        checked={this.props.isChecked}
                    />
                    {this.props.text} [{this.props.points} pts]
                </label>
            </div>
        );
    }
}

class Exercise extends React.Component {
    render() {
        const rows = [];
        let totalPoints = 0;

        this.props.criteria.forEach(
            (criterion, i) => {
                totalPoints += criterion.points
                rows.push(
                    <Criterion
                        key={i}
                        index={i}
                        text={criterion.text}
                        isChecked={criterion.isChecked}
                        points={criterion.points}
                        handleChange={() => this.props.handleChange(this.props.index, i)}
                    />
                );
            }
        )

        return (
            <div>
                <div className="exerciseName">{this.props.name} ({totalPoints} points)</div>
                {rows}
            </div>
        );
    }
}

class App extends React.Component {
    constructor() {
        super();
        let toBeState = assessmentData();
        this.totalPoints = 0

        toBeState.exercises.forEach(
            (exercise, i) => {
                exercise.criteria.forEach(
                    (criterion, j) => {
                        toBeState.exercises[i].criteria[j].isChecked = true
                        this.totalPoints += criterion.points
                    }
                )
            }
        )

        this.state = toBeState;
    }

    handleChange(exerciseIdx, criteriaIdx) {
        let exercises = this.state.exercises.slice();
        exercises[exerciseIdx].criteria[criteriaIdx].isChecked = !exercises[exerciseIdx].criteria[criteriaIdx].isChecked;
        this.setState({
            exercises: exercises
        })
    };

    renderExercises() {
        const rows = [];

        this.state.exercises.forEach(
            (exercise, i) => {
                rows.push(
                    <Exercise
                        key={i}
                        index={i}
                        name={exercise.name}
                        criteria={exercise.criteria}
                        handleChange={(exerciseIdx, criteriaIdx) => this.handleChange(exerciseIdx, criteriaIdx)}
                    />
                );
            }
        )

        return rows;
    }

    calculateGrade() {
        let grade = 0

        this.state.exercises.forEach(
            (exercise, i) => {
                exercise.criteria.forEach(
                    (criterion, j) => {
                        grade += (criterion.isChecked ? criterion.points : 0)
                    }
                )
            }
        )

        return grade
    }

    renderSummary(grade) {
        let gradePercent = (grade / this.totalPoints) * 100
        let summaryText = ""

        for (let remark of this.state.remarks) {
            if (gradePercent >= remark.threshold) {
                summaryText += remark.text;
                break;
            }
        }

        let missedCriteria = ""

        this.state.exercises.forEach(
            (exercise, i) => {
                let hasExerciseHeader = false

                exercise.criteria.forEach(
                    (criterion, j) => {
                        // Do not display criterion linked to a previous one if the previous one is unchecked
                        const doNotDisplay = criterion.isLinkedToPreviousCriterion && j-1 >= 0 && !exercise.criteria[j-1].isChecked

                        if (!criterion.isChecked && !doNotDisplay) {
                            if (!hasExerciseHeader) {
                                hasExerciseHeader = true
                                missedCriteria += "\n--- " + exercise.name + " ---\n"
                            }
                            missedCriteria += " - " + criterion.text + "\n"
                        }
                    }
                )
            }
        )

        if (missedCriteria) {
            summaryText += "Tu as perdu des points sur les éléments suivants: \n"
            summaryText += missedCriteria
        }

        return (
            <textarea rows="30" cols="100" value={summaryText}/>
        );
    }

    render() {
        let grade = this.calculateGrade()
        let gradePercent = (grade / this.totalPoints) * 100
        return (
            <div className="app">
                <div className="title">{this.state.name}</div>
                <div>Total: {this.totalPoints} points</div>
                <div>{this.renderExercises()}</div>
                <div className="title">Résumé pour l'étudiant</div>
                <div>Note finale: {grade} sur {this.totalPoints} points ({gradePercent}%)</div>
                <div>{this.renderSummary(grade)}</div>
            </div>
        );
    }
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
