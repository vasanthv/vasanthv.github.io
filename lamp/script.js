let pulled = 0;
let distancePulled = 0;
let switchedOn = false;
let switchingOn = false;
const pointerDown = e => {
	pulled = e.clientY;
	switchingOn = !switchedOn;
	lampSwitch.style.transition = 'none';
};
const pointerMove = e => {
	if (pulled) {
		distancePulled = e.clientY - pulled;
		if (distancePulled > 0) {
			if (distancePulled < 20) {
				lampSwitch.style.transform = `translateY(${distancePulled - 30}px)`;
			} else {
				lampSwitch.style.transform = `translateY(-10px)`;
				toggleLight();
			}
		}
	}
};
const pointerEnd = e => {
	switchingOn = !switchedOn;
	pulled = 0;
	distancePulled = 0;
	lampSwitch.style.transition = 'transform 500ms';
	lampSwitch.style.transform = `translateY(-30px)`;
};
const toggleLight = () => {
	if (!switchedOn && switchingOn) {
		switchedOn = true;
		lampClick.play();
		light.classList.add('on');
		content.style.visibility = 'visible';
		lampCircle.style.fill = '#dfdfdf';
	}
	if (switchedOn && !switchingOn) {
		switchedOn = false;
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
lampSwitch.addEventListener('mousemove', pointerMove);
document.addEventListener('mouseup', pointerEnd);
// lampSwitch.addEventListener('mouseout', pointerEnd);
