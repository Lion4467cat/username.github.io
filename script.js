// Enhanced editable functionality with save indicator
document.addEventListener('DOMContentLoaded', function() {
    const editableElements = document.querySelectorAll('h1, h2, h3, p, li, a');
    
    editableElements.forEach(el => {
        el.addEventListener('dblclick', function() {
            const originalText = el.textContent;
            const input = document.createElement('input');
            input.value = originalText;
            input.style.width = '100%';
            input.style.padding = '5px';
            input.style.border = '1px solid #ddd';
            input.style.borderRadius = '4px';
            el.replaceWith(input);
            input.focus();
            
            input.addEventListener('blur', function() {
                el.textContent = input.value;
                input.replaceWith(el);
                showSaveMessage();
            });
            
            input.addEventListener('keydown', function(e) {
                if (e.key === 'Enter') {
                    el.textContent = input.value;
                    input.replaceWith(el);
                    showSaveMessage();
                }
            });
        });
    });
    
    function showSaveMessage() {
        const msg = document.createElement('div');
        msg.textContent = 'Changes made! Commit to GitHub to save permanently.';
        msg.style.position = 'fixed';
        msg.style.top = '10px';
        msg.style.right = '10px';
        msg.style.background = '#27ae60';
        msg.style.color = 'white';
        msg.style.padding = '10px';
        msg.style.borderRadius = '5px';
        document.body.appendChild(msg);
        setTimeout(() => msg.remove(), 3000);
    }
});
