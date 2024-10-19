import styles from "./app.module.css";
import React, { useState } from "react";

export const App = () => {
	const [operand1, setOperand1] = useState("");
	const [operator, setOperator] = useState("");
	const [operand2, setOperand2] = useState("");
	const [inputOperand2, setinputOperand2] = useState(false);
	const [itsResult, setItsResult] = useState(false);

	const NUMS = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

	const getNumButtons = () => {
		return NUMS.map((num) => (
			<button
				className={styles["button"]}
				onClick={(props) => {
					if (inputOperand2) {
						setOperand2(operand2 + props.target.innerText);
					} else {
						setOperand1(operand1 + props.target.innerText);
					}
				}}
			>
				{num}
			</button>
		));
	};

	const clickOperatorButton = (props) => {
		setOperator(props.target.innerText);
		setinputOperand2(true);
		setItsResult(false);
	};

	const resetCalculator = () => {
		setOperand1("");
		setOperator("");
		setOperand2("");
		setinputOperand2(false);
		setItsResult(false);
	};

	const calcExpression = () => {
		setOperand1(eval(operand1 + operator + operand2));
		setOperator("");
		setOperand2("");
		setItsResult(true);
	};

	return (
		<div className={styles.calculator}>
			<h1>Калькулятор</h1>
			<div
				className={
					styles["calc-content"] +
					" " +
					(itsResult ? styles.calculating : "")
				}
			>
				{operand1 + operator + operand2}
			</div>
			<div className={styles["calc-panel"]}>
				{getNumButtons()}
				<button
					className={styles["button"]}
					onClick={(props) => {
						clickOperatorButton(props);
					}}
				>
					{"+"}
				</button>
				<button
					className={styles["button"]}
					onClick={(props) => {
						clickOperatorButton(props);
					}}
				>
					{"-"}
				</button>
				<button
					className={styles["button"]}
					onClick={(props) => {
						calcExpression();
					}}
				>
					{"="}
				</button>
				<button
					className={styles["button"]}
					onClick={(props) => {
						resetCalculator();
					}}
				>
					{"С"}
				</button>
			</div>
		</div>
	);
};
