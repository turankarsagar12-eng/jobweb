// ===============================
// MOBILE MENU
// ===============================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});


// Close menu after clicking navigation link

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });

});


// ===============================
// JOB SEARCH
// ===============================

const jobInput = document.getElementById("jobInput");
const locationInput = document.getElementById("locationInput");

const jobItems = document.querySelectorAll(".job-item");

function searchJobs() {

    const jobText =
        jobInput.value.toLowerCase().trim();

    const locationText =
        locationInput.value.toLowerCase().trim();

    let found = false;

    jobItems.forEach(job => {

        const title =
            job.dataset.title.toLowerCase();

        const location =
            job.dataset.location.toLowerCase();

        const titleMatch =
            title.includes(jobText);

        const locationMatch =
            location.includes(locationText);

        if (titleMatch && locationMatch) {

            job.style.display = "flex";

            found = true;

        } else {

            job.style.display = "none";

        }

    });

    document.getElementById("noJobs").style.display =
        found ? "none" : "block";
}


// Search using Enter key

jobInput.addEventListener("keypress", event => {

    if (event.key === "Enter") {
        searchJobs();
    }

});

locationInput.addEventListener("keypress", event => {

    if (event.key === "Enter") {
        searchJobs();
    }

});


// ===============================
// JOB FILTER
// ===============================

const filters =
    document.querySelectorAll(".filter");

filters.forEach(filter => {

    filter.addEventListener("click", () => {

        filters.forEach(item => {
            item.classList.remove("active");
        });

        filter.classList.add("active");

        const selectedType =
            filter.dataset.filter;

        let found = false;

        jobItems.forEach(job => {

            const jobType =
                job.dataset.type;

            if (
                selectedType === "all" ||
                jobType === selectedType
            ) {

                job.style.display = "flex";

                found = true;

            } else {

                job.style.display = "none";

            }

        });

        document.getElementById("noJobs").style.display =
            found ? "none" : "block";

    });

});


// ===============================
// APPLY JOB
// ===============================

function applyJob(jobName) {

    alert(
        "Job: " + jobName +
        "\n\nApplication form will be available soon."
    );

}


// ===============================
// LOGIN
// ===============================

function loginUser() {

    alert(
        "Login feature coming soon."
    );

}


// ===============================
// REGISTER
// ===============================

function registerUser() {

    alert(
        "Registration feature coming soon."
    );

}


// ===============================
// SMOOTH SCROLL
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(event) {

        event.preventDefault();

        const target =
            document.querySelector(
                this.getAttribute("href")
            );

        if (target) {

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});