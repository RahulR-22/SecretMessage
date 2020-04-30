const form = document.querySelector('form');
const messageInput = document.querySelector('#messageInput');
const encryptedInput = document.querySelector('#encryptedInput');
const msgform = document.querySelector('#msg-form');
const msgshow = document.querySelector('#msg-show');
const linkForm = document.querySelector('#link-form');
const { hash } = window.location;
const msg = atob(hash.replace('#', ''));

if (msg) {
	msgform.classList.add('hide');
	msgshow.classList.remove('hide');
	msgshow.querySelector('h3').innerText = msg;
}

form.addEventListener('submit', (event) => {
	event.preventDefault();
	const encrypted = btoa(messageInput.value);
	msgform.classList.add('hide');
	linkForm.classList.remove('hide');
	encryptedInput.value = `${window.location}#${encrypted}`;
	encryptedInput.select();
});
