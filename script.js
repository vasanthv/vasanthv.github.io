let lightOn = false;
const is_touch_device = () => {
	return 'ontouchstart' in window;
};
const pointerDown = e => {
	lampSwitch.style.transform = `translateY(-15px)`;
	toggleLight();
};
const pointerEnd = e => {
	lampSwitch.style.transform = `translateY(-30px)`;
};
const toggleLight = () => {
	if (!lightOn) {
		lightOn = true;
		lampClick.play();
		light.classList.add('on');
		content.style.display = 'block';
		lampCircle.style.fill = '#dfdfdf';
	} else {
		lightOn = false;
		lampClick.play();
		light.classList.remove('on');
		content.style.display = 'none';
		lampCircle.style.fill = '#434343';
	}
};
const lampSwitch = document.getElementById('switch');
const light = document.getElementById('light');
const content = document.getElementById('content');
const lampClick = document.getElementById('click');
const lampCircle = document.getElementById('lampCircle');
if (is_touch_device()) {
	lampSwitch.addEventListener('touchstart', pointerDown);
	document.addEventListener('touchend', pointerEnd);
} else {
	lampSwitch.addEventListener('mousedown', pointerDown);
	document.addEventListener('mouseup', pointerEnd);
}
