const inputEl = document.querySelector('input')
const buttonEl = document.querySelector('button')
const timerEl = document.querySelector('span')

// Добавление нуля слева от числа
const getPadTime = time => time.toString().padStart(2, '0')
// Переменная для отслеживания был ли запущен таймер
let isStarted = false

// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl
const createTimerAnimator = () => {
	return seconds => {
		let timerId = setInterval(() => {
			let secondsVar = getPadTime(seconds % 60)
			let minutes = getPadTime(Math.floor((seconds / 60) % 60))
			let hours = getPadTime(Math.floor((seconds / 60 / 60) % 60))

			if (seconds >= 0) {
				// Выводим строку для показа таймера
				timerEl.innerHTML = `${hours}:${minutes}:${secondsVar}`
			} else {
				clearInterval(timerId)
			}
			--seconds
		}, 1000)
	}
}

const animateTimer = createTimerAnimator()

inputEl.addEventListener('input', e => {
	// Регулярное выражение
	e.target.value = e.target.value.replace(/[^\d.]+/g, '')
	// Очистите input так, чтобы в значении
	// оставались только числа
})

buttonEl.addEventListener('click', () => {
	const seconds = Number(inputEl.value)

	// хак для очистки таймера, лучше так не делать :)
	if (!isStarted) {
		let maxId = setTimeout(function () {}, 0)

		for (let i = 0; i < maxId; i += 1) {
			clearTimeout(i)
		}
	}

	animateTimer(seconds)

	inputEl.value = ''
})
