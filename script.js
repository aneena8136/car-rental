

function toggleAccordion(accordion) {
    const content = accordion.querySelector('.accordion-content');
    const headerIcon = accordion.querySelector('#header-icon');
    const contentIcon = accordion.querySelector('#content-icon');

    // Close all other accordions
    document.querySelectorAll('.accordion').forEach(item => {
        if (item !== accordion) {
            item.querySelector('.accordion-content').style.maxHeight = '0px';
            item.querySelector('#header-icon').style.display = 'block';
            item.querySelector('#content-icon').style.display = 'none';
        }
    });

    if (content.style.maxHeight === '0px' || content.style.maxHeight === '') {
        // Accordion is closed, open it
        content.style.maxHeight = content.scrollHeight + 'px';
        headerIcon.style.display = 'none';
        contentIcon.style.display = 'block';
    } else {
        // Accordion is open, close it
        content.style.maxHeight = '0px';
        headerIcon.style.display = 'block';
        contentIcon.style.display = 'none';
    }
}

// Add event listeners to all accordions
document.addEventListener('DOMContentLoaded', function() {
    const accordions = document.querySelectorAll('.accordion');
    
    accordions.forEach(accordion => {
        const header = accordion.querySelector('.accordion-header');
        const contentIcon = accordion.querySelector('#content-icon');

        header.addEventListener('click', () => toggleAccordion(accordion));
        contentIcon.addEventListener('click', (event) => {
            event.stopPropagation();
            toggleAccordion(accordion);
        });

        // Set initial state
        const content = accordion.querySelector('.accordion-content');
        content.style.maxHeight = '0px';
        contentIcon.style.display = 'none';
    });
});


