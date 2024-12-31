// script.js
function submitForm() {
    const radios = document.querySelectorAll('input[type="radio"]');
    let totalScore = 0;
    let group1Score = 0; // For questions 1,11
    let group2Score = 0; // For questions 2,13
    let group3Score = 0; // For questions 3, 9, 10
    let group4Score = 0; // For questions 4, 12, 14
    let group5Score = 0; // For questions 6, 8, 15
    let group6Score = 0; // For questions 7
    let group7Score = 0; // For questions 5

    const group1Questions = [1, 11];
    const group2Questions = [2, 13];
    const group3Questions = [3, 9, 13];
    const group4Questions = [4, 12, 14];
    const group5Questions = [6, 8, 15];
    const group6Questions = [7];
    const group7Questions = [5];

    const numQuestions = radios.length / 5;

    for (let i = 0; i < numQuestions; i++) {
        let questionScore = 0;
        const radioName = `question${i + 1}`;
        const selectedRadio = document.querySelector(`input[name="${radioName}"]:checked`);
        if (selectedRadio) {
            questionScore = parseInt(selectedRadio.value);
            totalScore += questionScore;
            if (group1Questions.includes(i + 1)) {
                group1Score += questionScore;
            } else if (group2Questions.includes(i + 1)) {
                group2Score += questionScore;
            } else if (group3Questions.includes(i + 1)) {
                group3Score += questionScore;
            } else if (group4Questions.includes(i + 1)) {
                group4Score += questionScore;
            } else if (group5Questions.includes(i + 1)) {
                group5Score += questionScore;
            } else if (group6Questions.includes(i + 1)) {
                group6Score += questionScore;
            } else if (group7Questions.includes(i + 1)) {
                group7Score += questionScore;
            }
        }
    }

    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = `Your total score is: ${totalScore} <br>`;

    let comment = "";
    if (totalScore <= 35) {
        comment = "This is an excellent opportunity for your growth. Begin your self-improvement journey.";
    } else if (totalScore <= 55) {
        comment = "While your score was moderate, you have a great opportunity to significantly improve.";
    } else if (totalScore <= 75) {
        comment = "Congratulations on your excellent score! Now, let's strive for even greater heights.";
    } else {
        comment = "Thank you! We are thrilled that you loved our product.";
    }

    resultsDiv.innerHTML += `<strong>${comment}</strong> <br><br>`;

    resultsDiv.innerHTML += "It is imperative to remember that your performance is inextricably linked to the effectiveness of your team.<br><br>";

    resultsDiv.innerHTML += `Team Development: ${group1Score} <br>`;
    resultsDiv.innerHTML += `Feedback: ${group2Score} <br>`;
    resultsDiv.innerHTML += `Participation and Articulating Vision: ${group3Score} <br>`;
    resultsDiv.innerHTML += `Managing Conflict: ${group4Score} <br>`;
    resultsDiv.innerHTML += `Group Roles and Structure: ${group5Score} <br>`;
    resultsDiv.innerHTML += `Team Member Development: ${group6Score} <br>`;
    resultsDiv.innerHTML += `Understanding and Collaboration: ${group7Score} <br>`;
    resultsDiv.innerHTML += `Total Group Score: ${group1Score + group2Score + group3Score + group4Score + group5Score + group6Score + group7Score} <br><br>`;

    const scores = [group1Score, group2Score, group3Score, group4Score, group5Score, group6Score, group7Score];
    const minScore = Math.min(...scores);
    const sortedScores = [...scores].sort((a, b) => a - b);
    const colors = scores.map(score => {
        if (score === minScore) return "red";
        if (score === sortedScores[1]) return "blue";
        return "grey";
    });

    let barChartHTML = "<div style='display: flex;'>";
    for (let i = 0; i < scores.length; i++) {
        barChartHTML += `<div class="bar ${colors[i]}" style="height: ${scores[i] * 10}px;">${scores[i]}</div>`;
    }
    barChartHTML += "</div>";

    resultsDiv.innerHTML += barChartHTML;

    resultsDiv.innerHTML += "<button onclick='window.print()'>Print</button>";
}

