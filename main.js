const select = document.querySelector("select[data-type='custom-select']")
select.value = ""
const select_name = select.name
const options = [...select.querySelectorAll("option")]
const options_values = options.map(option => option.value)
const options_text = options.map(option => option.innerText)
select.style.display = "none"


const select_options_container = document.createElement("ul")
select_options_container.classList.add("select")
select_options_container.innerHTML += '<li class="option-search"><input type="search" placeholder="Search..." oninput="searchChange()"></li>'
options_values.map((value, index) => select_options_container.innerHTML += options[index].disabled ? `<li class="option disabled" data-value="${value}">${options_text[index]}</li>` : `<li class="option" data-value="${value}">${options_text[index]}</li>`)
const select_options = [...select_options_container.querySelectorAll("li.option")]

const select_container = document.createElement("div");

select_container.innerHTML = `<div class="select-box" onclick="dropSelect()"><p>${options_text[0]}<p></div>`
const select_box = select_container.querySelector(".select-box")
select_container.appendChild(select_options_container)
select_container.classList.add("select-container")
select.parentNode.insertBefore(select_container, select.nextSibling)


const dropSelect = () => {
 select_options_container.classList.toggle("active")
 select_options_container.classList.contains("active") ? select_options_container.style.height = `${40 * (options.length + 1)}px` : select_options_container.style.height = 0
 select_box.classList.toggle("active")
}

const search = select_options_container.querySelector(".option-search input")
document.addEventListener("click", () => {
 if (event.target !== select_box && event.target !== search) {
  select_options_container.classList.remove("active")
  select_box.classList.remove("active")
  select_options_container.style.height = 0
 }
})

select_options.map(option => {
 option.addEventListener("click", () => {
  search.value = ""
  select_options.map(option => {
   option.style.display = "block"
  })
  const val = option.dataset.value
  select.value = val
  select_box.querySelector("p").innerHTML = option.innerHTML
  select_options.map(option => option.classList.remove("active"))
  option.classList.add("active")
 })

})

const searchChange = () => {
 const search_value = search.value.toLowerCase()
 select_options.map(option => {
  const text = option.innerText.toLowerCase()
  text.startsWith(search_value) ? option.style.display = "block" : option.style.display = "none"
  select_options_container.style.height = "fit-content"
 })
}