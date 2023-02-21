import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import labWord2 from './lab-word-2';

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
                    [{this.props.points} pts] {this.props.text}
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
                <div className="exerciseName">{this.props.name} ({totalPoints})</div>
                {rows}
            </div>
        );
    }
}

class App extends React.Component {
    constructor() {
        super();
        let toBeState = labWord2();
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
        let summaryText = "dfgdfgdfg"
        // let missedCriteria = ""

        this.state.exercises.forEach(
            (exercise, i) => {
                exercise.criteria.forEach(
                    (criterion, j) => {
                        summaryText += ""
                    }
                )
            }
        )

        return (
            <textarea rows="30" cols="100" defaultValue={summaryText}/>
        );
    }

    render() {
        let grade = this.calculateGrade()
        return (
            <div className="app">
                <div className="title">{this.state.name}</div>
                <div>Total: {this.totalPoints} points</div>
                <div>{this.renderExercises()}</div>
                <div className="title">Résumé pour l'étudiant</div>
                <div>Note finale: {grade} sur {this.totalPoints}</div>
                <div>{this.renderSummary(grade)}</div>
            </div>
        );
    }
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
