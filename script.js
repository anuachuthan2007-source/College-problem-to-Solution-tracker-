const loginForm = document.getElementById("loginForm");
const message = document.getElementById("message");


// ===============================
// LOGIN
// ===============================

if (loginForm) {

    loginForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const email =
            document.getElementById("email").value.trim();

        const password =
            document.getElementById("password").value.trim();

        if (email === "" || password === "") {

            message.textContent =
                "Please enter email and password.";

            return;
        }

        window.location.href = "dashboard.html";

    });

}


// ===============================
// REGISTER LINK
// ===============================

const registerLink =
    document.getElementById("registerLink");

if (registerLink) {

    registerLink.addEventListener("click", function(event) {

        event.preventDefault();

        window.location.href = "register.html";

    });

}


// ===============================
// REPORT PROBLEM
// ===============================

const problemForm =
    document.getElementById("problemForm");

if (problemForm) {

    problemForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const title =
            document.getElementById("problemTitle").value.trim();

        const category =
            document.getElementById("category").value;

        const location =
            document.getElementById("location").value.trim();

        const description =
            document.getElementById("description").value.trim();

        const problemMessage =
            document.getElementById("problemMessage");


        if (
            title === "" ||
            category === "" ||
            location === "" ||
            description === ""
        ) {

            problemMessage.textContent =
                "Please fill in all required fields.";

            return;
        }


        problemMessage.textContent =
            "Problem reported successfully!";

        problemForm.reset();

    });

}
// ===============================
// SUGGEST SOLUTION
// ===============================

const solutionForm = document.getElementById("solutionForm");

if (solutionForm) {

    solutionForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const solution = document.getElementById("solution").value.trim();
        const solutionMessage = document.getElementById("solutionMessage");

        if (solution === "") {
            solutionMessage.textContent = "Please enter your solution.";
            return;
        }

        solutionMessage.textContent = "Solution submitted successfully!";

        solutionForm.reset();

    });

}


// ===============================
// LOGOUT
// ===============================

function logout() {

    window.location.href = "index.html";

}


// ===============================
// DASHBOARD BUTTONS
// ===============================

function reportProblem() {

    window.location.href = "report.html";

}


function browseProblems() {

    window.location.href = "problems.html";

}


function suggestSolution() {

    window.location.href = "suggest.html";

}


function myReports() {
    window.location.href ="myreports.html";
}
    
 //===============================
// ADMIN BUTTONS
// ===============================

function viewProblems() {

    window.location.href = "adminproblems.html";

}

function reviewSolutions() {

  window.location.href ="adminsolutions.html";
}
    
  function updateStatus() {

    alert("Status update page will be added next.");

}


function viewStatistics() {

    alert("Statistics page will be added next.");

}