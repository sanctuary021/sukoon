// ┌─┐┬─┐┌─┐┌─┐┌┬┐┬┌┐┌┌─┐┌─┐
// │  ├┬┘├┤ ├┤  │ │││││ ┬└─┐
// └─┘┴└─└─┘└─┘ ┴ ┴┘└┘└─┘└─┘
// Function to set Greetings with a typewriter effect followed by a paused period

const today = new Date();
const hour = today.getHours();
const name = CONFIG.name;

let baseGreeting = '';
if (hour >= 23 || hour < 6) {
	baseGreeting = CONFIG.greetingNight;
} else if (hour >= 6 && hour < 12) {
	baseGreeting = CONFIG.greetingMorning;
} else if (hour >= 12 && hour < 17) {
	baseGreeting = CONFIG.greetingAfternoon;
} else {
	baseGreeting = CONFIG.greetingEvening;
}

// Format base greeting and suffix intelligently for natural English flow
let baseText = baseGreeting;
let suffixText = '.';

if (baseGreeting.endsWith('!')) {
	baseText = baseGreeting.slice(0, -1) + ',';
	suffixText = '!';
} else if (baseGreeting.endsWith('.')) {
	baseText = baseGreeting.slice(0, -1) + ',';
	suffixText = '.';
} else if (!baseGreeting.endsWith(',')) {
	baseText = baseGreeting + ',';
	suffixText = '.';
}

const typeWriter = (element, base, nameVal, suffix, speed = 40) => {
	element.innerHTML = `
		<span class="greeting-base"></span>
		<span class="greeting-name"></span>
		<span class="greeting-suffix"></span>
		<span class="typewriter-cursor"></span>
	`;
	
	const baseSpan = element.querySelector('.greeting-base');
	const nameSpan = element.querySelector('.greeting-name');
	const suffixSpan = element.querySelector('.greeting-suffix');
	const cursor = element.querySelector('.typewriter-cursor');
	
	let charIndex = 0;
	let currentPart = 'base'; // 'base', 'name', 'suffix'
	
	const type = () => {
		let textToType = '';
		let targetSpan = null;
		
		if (currentPart === 'base') {
			textToType = base;
			targetSpan = baseSpan;
		} else if (currentPart === 'name') {
			textToType = nameVal;
			targetSpan = nameSpan;
		} else if (currentPart === 'suffix') {
			textToType = suffix;
			targetSpan = suffixSpan;
		}
		
		if (charIndex < textToType.length) {
			const char = textToType.charAt(charIndex);
			targetSpan.textContent += char;
			charIndex++;
			
			// Keep cursor solid and visible while typing
			cursor.classList.add('typing');
			
			// Speed control: standard speed with slight random variation
			let delay = speed + (Math.random() * 20 - 10);
			
			// Pauses at punctuation
			if (char === ',' || char === '!' || char === '.') {
				delay = 350;
				cursor.classList.remove('typing'); // Let cursor blink during pauses
			} else if (char === ' ') {
				delay = speed + 30; // Slightly longer pause between words
			}
			
			setTimeout(type, delay);
		} else {
			// Part complete, transition to next part
			if (currentPart === 'base') {
				currentPart = 'name';
				charIndex = 0;
				// Add a non-breaking space before the name
				nameSpan.textContent = '\xa0';
				cursor.classList.remove('typing');
				setTimeout(type, 300); // Small delay before typing the name
			} else if (currentPart === 'name') {
				currentPart = 'suffix';
				charIndex = 0;
				cursor.classList.remove('typing');
				setTimeout(type, 400); // Small delay before typing the punctuation
			} else {
				// Typing finished
				cursor.classList.remove('typing');
				// Let the cursor blink for 2 seconds, then fade out
				setTimeout(() => {
					cursor.classList.add('fade-out');
				}, 2000);
			}
		}
	};
	
	// Start typing after staggered card entries are fully done
	setTimeout(type, 1000);
};

typeWriter(document.getElementById('greetings'), baseText, name, suffixText, 45);
