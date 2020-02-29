let lightOn = false;
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
		content.style.visibility = 'visible';
		lampCircle.style.fill = '#dfdfdf';
	} else {
		lightOn = false;
		lampClick.play();
		light.classList.remove('on');
		content.style.visibility = 'hidden';
		lampCircle.style.fill = '#434343';
	}
};
const lampSwitch = document.getElementById('switch');
const light = document.getElementById('light');
const content = document.getElementById('content');
const lampClick = document.getElementById('click');
const lampCircle = document.getElementById('lampCircle');
lampSwitch.addEventListener('mousedown', pointerDown);
document.addEventListener('mouseup', pointerEnd);
