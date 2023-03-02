import React from "react";
import "./MainPage.scss";
import {BigButton} from "../components/BigButton/BigButton";
import {ScoreCounter} from "../components/ScoreCounter/ScoreCounter";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../redux/store";
import {addToScorePerClick, addToScorePerSecond} from "../redux/score/scoreSlice";

export const MainPage = () => {
	const scorePerSecond = useSelector((state: RootState) => state.score.scorePerSecond);
	const scorePerClick = useSelector((state: RootState) => state.score.scorePerClick);

	const dispatch = useDispatch();

	const increaseScoreBySecondByOne = () => {
		dispatch(addToScorePerSecond(1));
	};

	const increaseScoreByClickByOne = () => {
		dispatch(addToScorePerClick(1));
	};

	return (
		<div className={"MainPage"}>
			<div className={"main-page-content"}>
				<h5>Score per second: {scorePerSecond}</h5>
				<h5>Score per click: {scorePerClick}</h5>
				<ScoreCounter />
				<BigButton />

				<button onClick={increaseScoreBySecondByOne}>
					increase score per second by 1
				</button>
				<button onClick={increaseScoreByClickByOne}>
					increase score per click by 1
				</button>
			</div>
		</div>
	);
};