function toggleText() {

  document.querySelector(".toggle-text-button").onclick = function () {
    let tag = document.querySelector('#text').hidden;
    console.log(tag)
    if (tag) {
      document.querySelector('#text').hidden = false
    } else {
      document.querySelector('#text').hidden = true
    }
  }
}
