document.addEventListener('DOMContentLoaded', function() {
    const uploadForm = document.getElementById('uploadForm');
    const imageInput = document.getElementById('imageInput');
    const previewContainer = document.getElementById('previewContainer');
    const imagePreview = document.getElementById('imagePreview');
    const loadingSpinner = document.getElementById('loadingSpinner');
    const messageArea = document.getElementById('messageArea');
    const uploadArea = document.querySelector('.upload-area');

    // Drag and drop functionality
    uploadArea.addEventListener('dragover', (e) => {
        e.preventDefault();
        uploadArea.style.borderColor = 'var(--bs-primary)';
    });

    uploadArea.addEventListener('dragleave', (e) => {
        e.preventDefault();
        uploadArea.style.borderColor = 'var(--bs-border-color)';
    });

    uploadArea.addEventListener('drop', (e) => {
        e.preventDefault();
        uploadArea.style.borderColor = 'var(--bs-border-color)';
        const files = e.dataTransfer.files;
        if (files.length > 0) {
            imageInput.files = files;
            handleImageUpload(files[0]);
        }
    });

    // File input change handler
    imageInput.addEventListener('change', (e) => {
        if (e.target.files.length > 0) {
            handleImageUpload(e.target.files[0]);
        }
    });

    function handleImageUpload(file) {
        // Validate file type
        if (!file.type.startsWith('image/')) {
            showError('Please upload an image file');
            return;
        }

        // Show preview
        const reader = new FileReader();
        reader.onload = function(e) {
            imagePreview.src = e.target.result;
            previewContainer.classList.remove('d-none');
            
            // Add user message
            addMessage('Uploaded image for analysis', 'user');
            
            // Send to server
            uploadImage(file);
        };
        reader.readAsDataURL(file);
    }

    function uploadImage(file) {
        const formData = new FormData();
        formData.append('image', file);
        formData.append('model', document.getElementById('modelSelect').value);

        loadingSpinner.classList.remove('d-none');

        fetch('/analyze', {
            method: 'POST',
            body: formData
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            addMessage(data.response, 'assistant');
        })
        .catch(error => {
            showError('Error analyzing image: ' + error.message);
        })
        .finally(() => {
            loadingSpinner.classList.add('d-none');
        });
    }

    function addMessage(content, role) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${role}`;
        messageDiv.textContent = content;
        messageArea.appendChild(messageDiv);
        messageArea.scrollTop = messageArea.scrollHeight;
    }

    function showError(message) {
        addMessage(`Error: ${message}`, 'assistant');
    }
});
