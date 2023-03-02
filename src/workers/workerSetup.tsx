export default class WebWorker {
	constructor(worker: { (): void; toString?: any; }) {
		const code = worker.toString();
		const blob = new Blob(['('+code+')()']);
		return new Worker(URL.createObjectURL(blob));
	}
}