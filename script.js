// Simple script to make sections editable on double-click (for easy editing in browser)
document.addEventListener('DOMContentLoaded', function() {
    const editableElements = document.querySelectorAll('h1, h2, h3, p, li');
    
    editableElements.forEach(el => {
        el.addEventListener('dblclick', function() {
            const originalText = el.textContent;
            const input = document.createElement('input');
            input.value = originalText;
            input.style.width = '100%';
            el.replaceWith(input);
            input.focus();
            
            input.addEventListener('blur', function() {
                el.textContent = input.value;
                input.replaceWith(el);
            });
            
            input.addEventListener('keydown', function(e) {
                if (e.key === 'Enter') {
                    el.textContent = input.value;
                    input.replaceWith(el);
                }
            });
        });
    });
});
