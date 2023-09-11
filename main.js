const select = document.querySelector(".select-container .select")
const select_box = document.querySelector(".select-container .select-box")

const dropSelect = () => {
 select.classList.toggle("active")
 select_box.classList.toggle("active")
}

document.addEventListener("click", () => {
 if (event.target !== select_box) {
  select.classList.remove("active")
  select_box.classList.remove("active")
 }
})

const options = [...document.querySelectorAll(".option")]

options.map(e => {
 e.addEventListener("click", () => {
  const text = e.innerHTML
  const val = e.dataset.value
  const select_label = document.querySelector(".select-container .select-box label")
  const select_input = document.querySelector(".select-container .select-box input")
  select_label.innerHTML = text
  select_input.value = val
  options.map(a => {
   a.classList.remove("active")
  })
  e.classList.add("active")
 })
})
