import React from "react";
import "./BigButton.scss";
import {useDispatch} from "react-redux";
import { increment } from "../../redux/score/scoreSlice";

export const BigButton = () => {

	const dispatch = useDispatch();

	const click = (): void => {
		dispatch(increment());
	};

	return (
		<button
			className={"BigButton"}
			onClick={click}
		/>
	)
};
