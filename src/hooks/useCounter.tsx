import {useDispatch, useSelector} from "react-redux";
import {useCallback, useEffect} from "react";
import {RootState} from "../redux/store";
import {incrementByAmount} from "../redux/score/scoreSlice";
import worker from "../workers/CounterWorker";
import WebWorker from "../workers/workerSetup";

export const useCounter = () => {
	const scorePerSecond = useSelector((state: RootState) => state.score.scorePerSecond);
	const dispatch = useDispatch();

	const counterFc = useCallback(() => {
		dispatch(incrementByAmount(scorePerSecond / 10))
	}, [scorePerSecond, dispatch]);

	useEffect(() => {
		const w = new WebWorker(worker) as Worker;
		w.onmessage = () => counterFc();
		w.postMessage("");

	    return () => {
			w.terminate();
		}
    }, [scorePerSecond, counterFc]);
}