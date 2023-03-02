import React from "react";
import {useSelector} from "react-redux";
import {RootState} from "../../redux/store";

const reverseString = (str: string): string => {
	let result = "";
	for (let i = str.length - 1; i >= 0; i--) {
		result += str[i];
	}
	return result;
};

const formatNumber = (num: number): string => {
	const numString = num.toString();
	if (numString.length <= 3) {
		return numString;
	}

	let result = "";
	for (let i = numString.length - 1; i >= 0; i--) {
		const c = numString[i];
		const originalIndex = numString.length-1-i;
		if (originalIndex === 0 || originalIndex % 3 !== 0) {
			result += c;
		} else {
			result += "," + c;
		}
	}
	return reverseString(result);
}

export const ScoreCounter = () => {
	const score = useSelector((state: RootState) => state.score.score);
	return (
		<h1 className={"ScoreCounter"}>
			{formatNumber(parseInt(score.toFixed(0)))}
		</h1>
	)
}