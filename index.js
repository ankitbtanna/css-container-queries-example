// Select the element to observe
const movieBanner = document.getElementsByClassName("movie-banner");
const widthLabel = document.getElementById("width");

// Create a new ResizeObserver instance
const resizeObserver = new ResizeObserver((entries) => {
  // Loop over the entries
  for (let entry of entries) {
    widthLabel.innerHTML = entry.contentRect.width;
  }
});

// Start observing the selected element
resizeObserver.observe(movieBanner[0]);
