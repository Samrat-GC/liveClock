
const time = document.querySelector('.time');

const tick = () => {
	const now = new Date();
	const h = now.getHours();
	const m = now.getMinutes();
	const s = now.getSeconds();

	html = `
	<span>${h}</span> :
	<span>${m}</span> :
	<span>${s}</span>`
	time.innerHTML = html;
}

setInterval(tick, 1000);