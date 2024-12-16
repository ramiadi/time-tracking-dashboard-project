const data = {
  daily: {
    work: { current: "5hrs", previous: "Last Day - 7hrs" },
    play: { current: "1hr", previous: "Last Day - 2hrs" },
    study: { current: "0hrs", previous: "Last Day - 1hr" },
    exercise: { current: "1hr", previous: "Last Day - 1hr" },
    social: { current: "1hr", previous: "Last Day - 3hrs" },
    selfCare: { current: "0hrs", previous: "Last Day - 1hr" },
  },
  weekly: {
    work: { current: "32hrs", previous: "Last Week - 36hrs" },
    play: { current: "10hrs", previous: "Last Week - 8hrs" },
    study: { current: "4hrs", previous: "Last Week - 7hrs" },
    exercise: { current: "4hrs", previous: "Last Week - 5hrs" },
    social: { current: "5hrs", previous: "Last Week - 10hrs" },
    selfCare: { current: "2hrs", previous: "Last Week - 2hrs" },
  },
  monthly: {
    work: { current: "103hrs", previous: "Last Month - 128hrs" },
    play: { current: "23hrs", previous: "Last Month - 29hrs" },
    study: { current: "13hrs", previous: "Last Month - 19hrs" },
    exercise: { current: "11hrs", previous: "Last Month - 18hrs" },
    social: { current: "21hrs", previous: "Last Month - 23hrs" },
    selfCare: { current: "7hrs", previous: "Last Month - 11hrs" },
  },
};

const buttons = document.querySelectorAll(".button-group button");
const workHours = document.querySelector(".work-content p");
const playHours = document.querySelector(".play-content p");
const studyHours = document.querySelector(".study-content p");
const exerciseHours = document.querySelector(".exercise-content p");
const socialHours = document.querySelector(".social-content p");
const selfCareHours = document.querySelector(".self-care-content p");
const workTitle = document.querySelector(".work-content h2");
const playTitle = document.querySelector(".play-content h2");
const studyTitle = document.querySelector(".study-content h2");
const exerciseTitle = document.querySelector(".exercise-content h2");
const socialTitle = document.querySelector(".social-content h2");
const selfCareTitle = document.querySelector(".self-care-content h2");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const period = button.textContent.toLowerCase();
    updateHours(period);
  });
});

function updateHours(period) {
  const allPeriods = ["daily", "weekly", "monthly"];
  allPeriods.forEach((p) => {
    if (p !== period) {
      document
        .querySelectorAll(`.${p}-content p`)
        .forEach((el) => el.classList.add("hidden"));
    } else {
      document
        .querySelectorAll(`.${p}-content p`)
        .forEach((el) => el.classList.remove("hidden"));
    }
  });

  workTitle.textContent = "Work";
  playTitle.textContent = "Play";
  studyTitle.textContent = "Study";
  exerciseTitle.textContent = "Exercise";
  socialTitle.textContent = "Social";
  selfCareTitle.textContent = "Self Care";

  workHours.innerHTML = `<span class="number">${data[period].work.current}</span> <br> ${data[period].work.previous}`;
  playHours.innerHTML = `<span class="number">${data[period].play.current}</span> <br> ${data[period].play.previous}`;
  studyHours.innerHTML = `<span class="number">${data[period].study.current}</span> <br> ${data[period].study.previous}`;
  exerciseHours.innerHTML = `<span class="number">${data[period].exercise.current}</span> <br> ${data[period].exercise.previous}`;
  socialHours.innerHTML = `<span class="number">${data[period].social.current}</span> <br> ${data[period].social.previous}`;
  selfCareHours.innerHTML = `<span class="number">${data[period].selfCare.current}</span> <br> ${data[period].selfCare.previous}`;
}

updateHours("daily");
