const settings = document.querySelector(".settings ");
const closeSettings = document.querySelector(".close_btn");
const settingsPopUp = document.querySelector(".pop_up");
const wrapper = document.querySelector(".wrapper");
settings.addEventListener("click", (event)=>{
    event.preventDefault();
    settingsPopUp.classList.add("active");
    wrapper.classList.add("active");
});
closeSettings.addEventListener("click", ()=>{
    settingsPopUp.classList.remove("active");
    wrapper.classList.remove("active");
});

//# sourceMappingURL=index.9345d665.js.map
