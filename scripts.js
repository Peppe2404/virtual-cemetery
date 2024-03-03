const cemetery = document.querySelector('.cemetery');
const rows = 100;
const cols = 100;

for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.setAttribute('data-coord', `R${i + 1}C${j + 1}`);
        cell.title = `Row ${i + 1}, Column ${j + 1}`;
        cemetery.appendChild(cell);
    }
}

const magnifierBtn = document.getElementById('magnifierBtn');
const coordinateForm = document.getElementById('coordinateForm');
const rowInput = document.getElementById('rowInput');
const colInput = document.getElementById('colInput');
const highlightBtn = document.getElementById('highlightBtn');
const resetBtn = document.getElementById('resetBtn');
const closeBtn = document.getElementById('closeBtn');
const lapideForm = document.getElementById('lapideForm');
const closeLapideFormBtn = document.getElementById('closeLapideFormBtn');
const resetLapideFormBtn = document.getElementById('resetLapideFormBtn');
const nameInput = document.getElementById('nameInput');
const birthDate = document.getElementById('birthDate');
const deathDate = document.getElementById('deathDate');
const commemorativePhrase = document.getElementById('commemorativePhrase');
const confirmBtn = document.getElementById('confirmBtn');
const lapideInfo = document.getElementById('lapideInfo');
const lapideName = document.getElementById('lapideName');
const lapideBirthDate = document.getElementById('lapideBirthDate');
const lapideDeathDate = document.getElementById('lapideDeathDate');
const lapidePhrase = document.getElementById('lapidePhrase');
const closeInfoBtn = document.getElementById('closeInfoBtn');

function removeHighlight() {
    const highlightedCells = document.querySelectorAll('.cell.highlighted');
    highlightedCells.forEach(cell => cell.classList.remove('highlighted'));
}

magnifierBtn.addEventListener('click', () => {
    coordinateForm.style.display = 'block';
});

highlightBtn.addEventListener('click', () => {
    removeHighlight();
    const row = rowInput.value;
    const col = colInput.value;
    const targetCell = document.querySelector(`[data-coord="R${row}C${col}"]`);
    if (targetCell) {
        targetCell.classList.add('highlighted');
        targetCell.scrollIntoView({ behavior: 'smooth', block: 'center' });
        lapideForm.style.display = 'block';
        coordinateForm.style.display = 'none';
    }
});

resetBtn.addEventListener('click', () => {
    removeHighlight();
    rowInput.value = '';
    colInput.value = '';
});

closeBtn.addEventListener('click', () => {
    coordinateForm.style.display = 'none';
});

closeLapideFormBtn.addEventListener('click', () => {
    lapideForm.style.display = 'none';
});

resetLapideFormBtn.addEventListener('click', () => {
    nameInput.value = '';
    birthDate.value = '';
    deathDate.value = '';
    commemorativePhrase.value = '';
});

cemetery.addEventListener('click', (e) => {
    if (e.target.classList.contains('cell') && !e.target.classList.contains('lapide')) {
        const coords = e.target.getAttribute('data-coord').match(/R(\d+)C(\d+)/);
        rowInput.value = coords[1]; 
        colInput.value = coords[2];
        lapideForm.style.display = 'block';
    } else if (e.target.classList.contains('lapide')) {
        lapideName.textContent = `Name: ${e.target.dataset.name}`;
        lapideBirthDate.textContent = `Birth Date: ${e.target.dataset.birthDate}`;
        lapideDeathDate.textContent = `Death Date: ${e.target.dataset.deathDate}`;
        lapidePhrase.textContent = `Phrase: ${e.target.dataset.phrase}`;
        lapideInfo.style.display = 'block';
    }
});


closeInfoBtn.addEventListener('click', () => {
    lapideInfo.style.display = 'none';
});

function getRandomLapideType() {
    const types = ['cross', 'tombstone', 'wooden-sign'];
    return types[Math.floor(Math.random() * types.length)];
}


confirmBtn.addEventListener('click', () => {
    const row = rowInput.value;
    const col = colInput.value;
    const targetCell = document.querySelector(`[data-coord="R${row}C${col}"]`);
    if (targetCell) {
        targetCell.classList.add('lapide');
        targetCell.classList.add(getRandomLapideType());
        targetCell.dataset.name = nameInput.value;
        targetCell.dataset.birthDate = birthDate.value;
        targetCell.dataset.deathDate = deathDate.value;
        targetCell.dataset.phrase = commemorativePhrase.value;
        lapideForm.style.display = 'none';
    }
});

function getRandomLapideType() {
    const types = ['cross', 'tombstone', 'wooden-sign'];
    return types[Math.floor(Math.random() * types.length)];
}

closeLapideFormBtn.addEventListener('click', () => {
    lapideForm.style.display = 'none';
    nameInput.value = '';
    birthDate.value = '';
    deathDate.value = '';
    commemorativePhrase.value = '';
});


closeBtn.addEventListener('click', () => {
    document.querySelector('.selected')?.classList.remove('selected');
    coordinateForm.style.display = 'none';
    rowInput.value = '';
    colInput.value = '';
});


closeInfoBtn.addEventListener('click', () => {
    lapideInfo.style.display = 'none';
    lapideName.textContent = '';
    lapideBirthDate.textContent = '';
    lapideDeathDate.textContent = '';
    lapidePhrase.textContent = '';
});

closeBtn.addEventListener('click', () => {
    const selectedCell = document.querySelector('.selected');
    if (selectedCell) {
        selectedCell.classList.remove('selected');
    }
});

highlightBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const row = rowInput.value;
    const col = colInput.value;
    const targetCell = document.querySelector(`[data-coord="R${row}C${col}"]`);
    if (targetCell) {
        document.querySelector('.selected')?.classList.remove('selected');
        targetCell.classList.add('selected');
    }
});

grid.addEventListener('click', (e) => {
    if (e.target.classList.contains('cell')) {
        const selectedCell = document.querySelector('.selected');
        if (selectedCell) {
            selectedCell.classList.remove('selected');
        }
        e.target.classList.add('selected');
        lapideForm.style.display = 'block';
        const coordinates = e.target.dataset.coord;
        lapideForm.querySelector('.coordinates-display').textContent = `Coordinates: ${coordinates}`;
    }
});

highlightBtn.addEventListener('click', (e) => {
    lapideForm.style.display = 'none';
});