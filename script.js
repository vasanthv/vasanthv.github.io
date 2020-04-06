let lightOn = true;
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
	lampClick.play();
	if (!lightOn) {
		lightOn = true;
		light.classList.add('on');
		document.body.style.backgroundColor = '#fff';
		content.style.opacity = '1';
		lampCircle.style.fill = '#dfdfdf';
		setTimeout(() => light.classList.remove('on'), 560);
	} else {
		lightOn = false;
		light.classList.remove('on');
		document.body.style.backgroundColor = '#222';
		content.style.opacity = '0';
		lampCircle.style.fill = '#434343';
	}
	lampSwitch.classList.remove('animate');
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
