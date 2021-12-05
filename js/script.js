// Инициализируем Swiper
let myImageSlider = new Swiper('.image-slider', {
	// Включение/отключение
	// перетаскивания на ПК
	simulateTouch: true,
	// Чувствительность свайпа
	touchRatio: 1,
	// Угол срабатывания свайпа/перетаскивания
	touchAngle: 30,

	// Количество слайдов для показа
	slidesPerView: 1.5,

	// Отступ между слайдами
	spaceBetween: 150,

	// Количество пролистываемых слайдов
	slidesPerGroup: 1,

	// Активный слайд по центру
	centeredSlides: true,

	// Стартовый слайд.
	initialSlide: 3,

	// Бесконечный слайдер
	loop: true,


	// Кол-во дублирующих слайдов
	loopedSlides: 2,

	// Автопрокрутка
	
	//autoplay: {
		// Пауза между прокруткой
		//delay: 15000,
		// Отключить после ручного переключения
		//disableOnInteraction: false
	//},

	// Скорость
	speed: 1500,
	
	// Эффекты переключения слайдов.
	// Эффект потока
	effect: 'coverflow',

	// Дополнение к coverflow
	coverflowEffect: {
		// Угол
		rotate: 20,
		// Наложение
		stretch: 50,
		// Тень
		slideShadows: false,
	},
	observer: true,
	observeParents: true,
	observeSlideChildren: true,

});

let myBGSlider = new Swiper('.image-slider-bg', {
	effect: 'fade',
	loop: true,
	loopedSlides: 2,
	observer: true,
	observeParents: true,
	observeSlideChildren: true,
	allowTouchMove: false,
});

myImageSlider.controller.control = myBGSlider;
myBGSlider.controller.control = myImageSlider;