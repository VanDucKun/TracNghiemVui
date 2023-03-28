const questions = [
    {
        content: "Câu hỏi 1: Đông Lào là nước nào?",
        answers: [
            "A.Việt Nam",
            "B.Lào",
            "C.Philipine",
            "D.Indonesia"
        ],
        correctAnswer: 0
    },
    {
        content: "Câu hỏi 2: Tây Lào là nước nào?",
        answers: [
            "A.Mianma",
            "B.Ấn Độ",
            "C.Nepal",
            "D.Thái Lan"
        ],
        correctAnswer: 3
    },
    {
        content: "Câu hỏi 3: Châu lục nào có diện tích nhỏ nhất?",
        answers: [
            "A.Châu Âu",
            "B.Châu Đại Dương",
            "C.Châu Nam Cực",
            "D.Châu Phi"
        ],
        correctAnswer: 1
    },
    {
        content: "Câu hỏi 4: Tỉnh/thành phố nào có dân số lớn nhất Việt Nam?",
        answers: [
            "A.Hà Nội",
            "B.TP.HCM",
            "C.Thanh Hóa",
            "D.Cần Thơ"
        ],
        correctAnswer: 1
    },
    {
        content: "Câu hỏi 5: Rét nàng Bân ở miền bắc nước ta thường xảy ra vào tháng mấy âm lịch?",
        answers: [
            "A.Tháng 1",
            "B.Tháng 2",
            "C.Tháng 3",
            "D.Tháng 4"
        ],
        correctAnswer: 2
    },
    {
        content: "Câu hỏi 6: Chất nào khi bị oxi hóa chậm trong cơ thể cung cấp nhiều năng lượng nhất?",
        answers: [
            "A.Protein",
            "B.Canxi",
            "C.Tinh bột",
            "D.Lipit"
        ],
        correctAnswer: 3
    },
   
    {
        content: "Câu hỏi 7: Waiting for you là bài hát của ca sĩ nào?",
        answers: [
            "A.MONO",
            "B.Sơn Tùng MTP",
            "C.Hoài Lâm",
            "D.Đức Phúc"
        ],
        correctAnswer: 0
    },
    {
        content: "Câu hỏi 8: Đâu là quê hương của hãng điện thoại Nokia?",
        answers: [
            "A.Mỹ",
            "B.Nhật",
            "C.Phần Lan",
            "D.Thụy Điển"
        ],
        correctAnswer: 2
    },
    {
        content: "Câu hỏi 9: Vitamin nào bị tiêu hủy nhiều nhất khi hút thuốc lá?",
        answers: [
            "A.Vitamin A",
            "B.Vitamin B",
            "C.Vitamin C",
            "D.Vitamin D"
        ],
        correctAnswer: 2
    },

    {
        content: "Câu hỏi 10: Hai Bà Trưng tuyển quân dựa vào?",
        answers: [
            "A.Đấu kiếm",
            "B.Đấu vật",
            "C.Bắn cung",
            "D.Tỉ võ"
        ],
        correctAnswer: 1
    },
    
    
]


const containerNode = document.querySelector(".container");
var totalScore = 0;
var currentQuestion = 0;
var correctAnswerNumber = 0;
const totalQuestions = questions.length;


function showQuestion() {

    const score = `
        <p class="score text-orange-600 text-3xl text-center mt-8">Score: ${totalScore}</p>
    `
    const question = `
        <div class="question mt-8">
        <p class="text-2xl first-letter:uppercase text-sky-500">${questions[currentQuestion].content}</p>
        </div>
    `

    const questionContent = `
    <div class="question-content grid grid-cols-2 mt-8 gap-8">

    <div class="col-span-1">
        <div class="text-center bg-gray-300 p-5 rounded-lg w-2/3 mx-auto question-A cursor-pointer hover:bg-orange-200 active:bg-orange-400" onclick = "choose(event)">
            ${questions[currentQuestion].answers[0]}
        </div>

        <div class="text-center bg-gray-300 mt-8 p-5 rounded-lg w-2/3 mx-auto question-C cursor-pointer hover:bg-orange-200 active:bg-orange-400" onclick = "choose(event)">
            ${questions[currentQuestion].answers[2]}
            
        </div>

    </div>

    <div class="col-span-1">
        <div class="text-center bg-gray-300 p-5 rounded-lg w-2/3 mx-auto question-B cursor-pointer hover:bg-orange-200 active:bg-orange-400" onclick = "choose(event)">
            ${questions[currentQuestion].answers[1]}
        </div>

        <div class="text-center bg-gray-300 mt-8 p-5 rounded-lg w-2/3 mx-auto question-D cursor-pointer hover:bg-orange-200 active:bg-orange-400" onclick = "choose(event)">
            ${questions[currentQuestion].answers[3]}
        </div>
    </div>

    </div>
        
    `
    containerNode.innerHTML = score;
    containerNode.innerHTML += question;
    containerNode.innerHTML += questionContent;
}

// Hiển thị câu hỏi
showQuestion();

// Chọn đáp án
function choose(evt) {
    const chooseAnswerNode = evt.target;
    const chooseAnswerContent = chooseAnswerNode.innerText;
    checkAnswer(chooseAnswerContent);
}

// Check đáp án
function checkAnswer(chooseAnswerContent) {
    if (chooseAnswerContent === questions[currentQuestion].answers[questions[currentQuestion].correctAnswer]) {
        totalScore += 10;
        correctAnswerNumber++;
        alert("Đáp án đúng!")
    } else {
        alert(`Đáp án sai!\nĐáp án đúng là : ${questions[currentQuestion].answers[questions[currentQuestion].correctAnswer]}`);
    }

    // tăng giá trị của currentQuestion để hiển thị câu hỏi tiếp theo
    currentQuestion++;

    // nếu đã hiển thị hết tất cả các câu hỏi thì hiển thị điểm số
    if (currentQuestion === totalQuestions) {
        const result = `
        <div class="result mx-auto">
        <h2 class="text-orange-600 text-5xl text-center mt-8">Result</h2>
        <p class="mt-4 text-center text-2xl text-sky-500">Correct answer numbers : ${correctAnswerNumber}/${totalQuestions}</p>
        <p class="mt-4 text-center text-2xl text-sky-500">Total Score : ${totalScore}</p>
        </div>
        `

        containerNode.innerHTML = '';
        containerNode.innerHTML += result;
        
    } else {
        showQuestion();
    }
}

