const faqItemQs = document.querySelectorAll('.faq-question');
const faqItemAs = document.querySelectorAll('.faq-answer');

const faqIcons = document.querySelectorAll('.faq-question span');

faqItemQs.forEach( q => {
    q.addEventListener('click', selectItem);
});

function selectItem(e) {
    // Grab faq answer from DOM
    const faqItemA = document.querySelector(`#${this.id}-answer`);
    const faqIcon = document.querySelector(`#${this.id}-icon`)
    // If selected answer contain .show then
    if (faqItemA.classList.contains('show')){
        // Remote .show from selected answer
        faqItemA.classList.remove('show');
        // Rotate plus icon back to intitial
        faqIcon.classList.remove('fa-plus-rotate');
    }
    else {
        // Remove .show from all answers
        removeShow();
        // Add .show to selected answer
        faqItemA.classList.add('show');
        // Rotate plus icon 45 degree = close icon
        faqIcon.classList.add('fa-plus-rotate')
    }
}

// Remove .show from all faq answers
// Make all plus icon back to its initial: remove rotate(45deg)
function removeShow() {
	faqItemAs.forEach( i => {
		i.classList.remove('show');
    });
    faqIcons.forEach( i => {
		i.classList.remove('fa-plus-rotate');
	});
}