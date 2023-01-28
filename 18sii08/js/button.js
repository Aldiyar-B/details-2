export function closeButton() {
  const wrapper = document.querySelector(".wrapper");
  document.querySelector(".close_btn").addEventListener("click", () => {
    document.querySelector(".popup").remove();
    wrapper.classList.remove("active");
  });
}
