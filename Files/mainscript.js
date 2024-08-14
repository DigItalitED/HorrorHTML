function toggleContent(index) {
  var content = document.getElementById("content-" + index);

  if (content.style.display === "none") {
    content.style.display = "block";
  } else {
    content.style.display = "none";
  }
}