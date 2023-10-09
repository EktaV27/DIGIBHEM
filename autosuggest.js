// Sample list of autocomplete suggestions
const suggestions =['Armchairs',
'Beds',
'Tables',
'Chairs',
'Wardrobes',
'Sofas',
'Lighting',
'Plants',
'Decoration Items',
'Paintings',
'Couches'];

const searchInput = document.getElementById('input-box');
const autocompleteResults = document.getElementById('autocompleteResults');

// Function to update the autocomplete results
function updateAutocompleteResults() {
    const searchText = searchInput.value.toLowerCase();
    autocompleteResults.innerHTML = '';

    const filteredSuggestions = suggestions.filter(suggestion =>
        suggestion.toLowerCase().includes(searchText)
    );

    filteredSuggestions.forEach(suggestion => {
        const div = document.createElement('div');
        div.textContent = suggestion;
        div.addEventListener('click', () => {
            searchInput.value = suggestion;
            autocompleteResults.innerHTML = '';
        });
        autocompleteResults.appendChild(div);
    });

    // Show or hide autocomplete results based on input length
    if (searchInput.value.length === 0) {
        autocompleteResults.style.display = 'none';
    } else {
        autocompleteResults.style.display = 'block';
    }
}

searchInput.addEventListener('input', updateAutocompleteResults);

// Add an event listener for the backspace key
searchInput.addEventListener('keydown', event => {
    if (event.key === 'Backspace') {
        autocompleteResults.style.display = 'none';
    }
});

