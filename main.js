// document.getElementById("count").innerText = 5

// intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count

let count = 0
let saveEl = document.getElementById("save-el")

document.getElementById("increment-btn").addEventListener("click", () => {
  count += 1
  document.querySelector("#count-el").innerHTML = count
})

function save() {
  // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
  // 3. Render the variable in the saveEl using innerText
  // NB: Make sure to not delete the existing content of the paragraph
  let countString = count + " - "
  saveEl.textContent += countString

  document.getElementById("count-el").textContent = 0
  count = 0
}

save()



