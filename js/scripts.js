const people = ['André', 'Lucas', 'Mariana', 'Carolina', 'Rafael', 'Pedro', 'Beatriz', 'Gustavo', 'Isabel', 'Fernando', 'Juliana', 'Diego', 'Camila', 'João', 'Amanda', 'Rodrigo', 'Ana', 'Marcela', 'Luiz', 'Bianca'];
const result = document.getElementById('result');
const speed = document.getElementById('speed');
const time = document.getElementById('time');
const btn = document.getElementById('draw');

const timer = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const draw = async () => {
    try {
        const speeder = setInterval(() => result.value = people[Math.floor(Math.random() * people.length)], speed.value);
        await timer(time.value);

        clearInterval(speeder);
    } catch (error) {
        console.error('Erro:', error.message);
        result.value = 'Erro ao fazer o sorteio.'
    }
};

btn.addEventListener('click', () => {
    draw();
});





