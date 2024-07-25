const quizData = [
    {
        question: '¿Cómo se le llama al texto que narra la vida de una persona?',
        a: 'Biografía',
        b: 'Relato',
        c: 'Historia',
        d: 'Cuento',
        correct: 'a'
    },{
        question: '¿Cuántos días tiene un año bisiesto?',
        a: '364 días',
        b: '365 días',
        c: '366 días',
        d: '367 días',
        correct: 'c'
    },{
        question: '¿Qué nombre tiene la línea imaginaria que corta la tierra por la mitad?',
        a: 'Trópico',
        b: 'Ecuador',
        c: 'Polos',
        d: 'Continentes',
        correct: 'b'
    },{
        question: '¿Cuántos años tiene un siglo?',
        a: '1000 años',
        b: '100 años',
        c: '10 años',
        d: '1 año',
        correct: 'b'
    },{
        question: '¿Qué nombre reciben los animales que no tienen esquelto?',
        a: 'Invertebrados',
        b: 'Vertebrados',
        c: 'Mamíferos',
        d: 'Ovíparos',
        correct: 'a'
    },{
        question: '¿Cómo se le llama a la fuerza por la cual la tierra atrea objetos hacia sí misma?',
        a: 'Atracción',
        b: 'Magnetismo',
        c: 'Gravedad',
        d: 'Fuerza G',
        correct: 'c'
    },{
        question: '¿Cuántos días tarda la tierra en dar la vuelta alrededor del sol?',
        a: '180 días',
        b: '7 días',
        c: '365 días',
        d: '1 día',
        correct: 'c'
    },{
        question: '¿Cuál es el río más largo de América del Sur?',
        a: 'Río Amazonas',
        b: 'Río Misisipi',
        c: 'Río Paraná',
        d: 'Río Orinoco',
        correct: 'a'
    },{
        question: '¿Cuál es el nombre del personaje principal de una historia?',
        a: 'Autor',
        b: 'Protagonista',
        c: 'Antagonista',
        d: 'Héroe',
        correct: 'b'
    },{
        question: '¿Qué nombre recibe una sucesión de montañas enlazadas entre sí?',
        a: 'Cordillera',
        b: 'Llanura',
        c: 'Meseta',
        d: 'Muralla',
        correct: 'a'
    }
]

const answersEl = document.querySelectorAll('.answer');
const quiz = document.getElementById('quiz');
const questionEl = document.getElementById('question');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const a_text = document.getElementById('a_text');
const submitBtn = document.getElementById('submitBtn');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {

    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];
    const { question, a, b, c, d, correct } = currentQuizData;
    questionEl.innerText = question;
    a_text.innerText = a;
    b_text.innerText = b;
    c_text.innerText = c;
    d_text.innerText = d;

    
}

function getSelected(){

    let answer = undefined;
    answersEl.forEach( (answersEl) => {
        if(answersEl.checked){
            answer = answersEl.id;
        }
    });

    return answer;
}

function deselectAnswers(){

    answersEl.forEach( (answersEl) => {
        answersEl.checked = false;
    });

}

submitBtn.addEventListener('click', () =>{
    const answer = getSelected();

    console.log(answer);

    if(answer){

        if(answer === quizData[currentQuiz].correct){
            score++;
        }

        currentQuiz++;
        if(currentQuiz < quizData.length){
            loadQuiz(); 
        }else{
            quiz.innerHTML = 
            `<h2>Tu puntaje fue de: ${score}/${quizData.length} respuestas correctas.</h2>
            <button onclick="location.reload()">Jugar de nuevo</button>`;
        }
    }
})
