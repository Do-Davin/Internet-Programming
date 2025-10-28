console.log("JS loaded");

var school = "GIC";
let year = 2025;
const maxScore = 100;

school = "ITC";
year = 2026;
// maxScore = 100; // Since maxScore is const can't change its value

console.log(a); // undefined
var a = 10;

try {
    console.log(b); // undefined
    let b = 20;
} catch (e) {
    console.log("b error:", e.message);
}

/*
    var behaves differently from let because var is global scope
    while let is function scope.
*/

// 2. Conditionals
function letterGrade(score) {
    if (score >= 0 && score < 100) {
        if (score >= 90) {
            return "A";
        } else if (score >= 80 || score >= 89) {
            return "B";
        } else if (score >= 70 || score >= 79) {
            return "C";
        } else if (score >= 60 || score >= 69) {
            return "D";
        } else if (score >= 59 || score >= 50) {
            return "E";
        } else {
            return "F";
        }
    }
}

console.log("Grade(92) =", letterGrade(92)); // expect "A"

function mood(emoji) {
    switch (emoji) {
        case ":)": {
            return "happy";
            break;
        }
        case ":(": {
            return "sad";
            break;
        }
        case ":|": {
            return "neutral";
        }
        default: {
            return "unknown";
        }
    }
}
console.log(mood(":)"));

// 3. Loops

// for
let sumFor = 0;
for (let i = 1; i <= 5; i++) {
    sumFor += i;
}
console.log(`sumFor = ${sumFor}`)

// while

let sumWhile = 0;
let i = 1;
while (i <= 5) {
    sumWhile += i;
    i++;
}
console.log(`SumWhile = ${sumWhile}`);

// for..of

const nums = [1, 2, 3, 4, 5];
let sumOf = 0;

for (let num of nums) {
    sumOf += num;
}
console.log(`SumOf = ${sumOf}`);

// Arrays

const scores = [88, 95, 62];
scores.push(74);
scores.shift();
for (let score of scores) {
    console.log(score);
}
const max = Math.max(...scores);
console.log(`Max: ${max}`);

const result = scores.filter(checkScore);
function checkScore(score) {
    return score >= 60;
}
console.log(result);

// Functions
// a) function declaration
function square1(n) {
    return n * n;
}
// console.log(`Function declaration: ${square1(2)}`);

// b) function expression
const square2 = function (n) {
    return n * n;
}
// console.log(`Function expression: ${square2(2)}`);

// c) arrow function
const square3 = (n) => n * n;
// console.log(`arrow function: ${square3(2)}`);
console.log(square1(4), square2(4), square3(4));

// 6) Objects

const student = { name: "Dana", score: 84 };
student.passed = student.score >= 60;

function describeStudent(s) {
    return s.passed ? "passed" : "fail";
}
console.log(describeStudent(student));

// 7) DOM: selecting & updating

const output = document.getElementById("output");
const NAME_INPUT = document.getElementById("nameInput");
const SCORE_INPUT = document.getElementById("scoreInput");
const ADD_BTN = document.getElementById("addBtn");
const CLEAR_BTN = document.getElementById("clearBtn");
const LIST = document.getElementById("list");
const STATS = document.getElementById("stats");
const TOGGLE_BTN = document.createElement("button");
TOGGLE_BTN.textContent = "Show Only Pass";
TOGGLE_BTN.className = "toggleBtn";
STATS.after(TOGGLE_BTN);

output.textContent = "Ready to practice DOM!";

const state = { 
    students: [],
    showOnlyPass: false,
};

function computeAverage(arr) {
    if (arr.length === 0) return 0;
    const total = arr.reduce((sum, s) => sum + s.score, 0);
    return (total / arr.length).toFixed(2);
}

function letterGrade(avg) {
    avg = Number(avg);
    if (avg >= 90) return "A";
    if (avg >= 80) return "B";
    if (avg >= 70) return "C";
    if (avg >= 60) return "D";
    return "F";
}

function renderList() {
    LIST.innerHTML = "";

    const displayStudents = [...state.students]
        .sort((a, b) => b.score - a.score)
        .filter(s => !state.showOnlyPass || s.score >= 60);

    displayStudents.forEach((student, index) => {
        const li = document.createElement("li");
        li.textContent = `${student.name.toUpperCase()} — ${student.score}`;
        li.className = student.score >= 60 ? "pass" : "fail";

        const removeBtn = document.createElement("button");
        removeBtn.textContent = "REMOVE";
        removeBtn.className = "removeBtn";
        removeBtn.addEventListener("click", () => {
            const realIndex = state.students.findIndex(
                s => s.name === student.name && s.score === student.score
            );
            if (realIndex !== -1) state.students.splice(realIndex, 1);
            renderList();
        });

        li.appendChild(removeBtn);
        LIST.appendChild(li);
    });

    const count = state.students.length;
    const avg = computeAverage(state.students);
    const grade = letterGrade(avg);
    const pass = state.students.filter(s => s.score >= 60).length;
    const fail = count - pass;

    STATS.textContent = `Count: ${count} | Avg: ${avg} (${grade}) | Pass: ${pass} | Fail: ${fail}`;
}

ADD_BTN.addEventListener("click", () => {
    const name = NAME_INPUT.value.trim();
    const score = Number(SCORE_INPUT.value);

    if (!name) {
        alert("Please enter a name!");
        return;
    }
    if (isNaN(score) || score < 0 || score > 100) {
        alert("Score must be a number between 0 and 100!");
        return;
    }

    state.students.push({ name, score });
    NAME_INPUT.value = "";
    SCORE_INPUT.value = "";
    renderList();
});

CLEAR_BTN.addEventListener("click", () => {
    state.students = [];
    renderList();
});

TOGGLE_BTN.addEventListener("click", () => {
    state.showOnlyPass = !state.showOnlyPass;
    TOGGLE_BTN.textContent = state.showOnlyPass
        ? "Show All Students"
        : "Show Only Pass";
    renderList();
});

renderList();


