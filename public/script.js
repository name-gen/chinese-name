async function generateName() {
  try {
    const res = await fetch('/api/random-name');
    const data = await res.json();
    document.getElementById('chineseName').textContent = data["Chinese Name"];
    document.getElementById('pinyin').textContent = data["Pin Yin"];
    document.getElementById('meaning').textContent = data["Meaning"];
  } catch (err) {
    console.error('Failed to fetch name:', err);
    document.getElementById('chineseName').textContent = 'Error loading name';
  }
}

window.onload = generateName;