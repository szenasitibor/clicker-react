/* eslint-disable */
export default () => {
	onmessage = function() {
		setInterval(() => {
			postMessage("");
		}, 100);
	};
}