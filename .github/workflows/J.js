const searchInput = document.getElementById('teacher-search');
const teachers = document.querySelectorAll('.teacher');

searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    teachers.forEach((teacher) => {
        const name = teacher.querySelector('h2').textContent.toLowerCase();
        const role = teacher.querySelector('p').textContent.toLowerCase();
        if (name.includes(searchTerm) || role.includes(searchTerm)) {
            teacher.style.display = 'block';
        } else {
            teacher.style.display = 'none';
        }
    });
});
