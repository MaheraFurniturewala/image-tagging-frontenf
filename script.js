// Array containing image source links
var imageLinks = [
    "img1.jpeg",
    "img2.jpeg",
    "img3.jpeg",
    "img4.jpeg",
    "img5.jpeg",
    "img6.jpeg",
    "img7.jpeg",
    "img8.jpeg",
    "img9.jpeg",
    "img10.jpeg"
];

// Function to create the image gallery
function createImageGallery() {
    var container = document.getElementById("imageContainer");

    for (var i = 0; i < imageLinks.length; i++) {
        var imageDiv = document.createElement("div");
        imageDiv.classList.add("image");
        imageDiv.innerHTML = '<img src="' + imageLinks[i] + '">';

        // Add click event listener to select/unselect images
        imageDiv.addEventListener("click", function () {
            this.classList.toggle("selected");
        });

        container.appendChild(imageDiv);
    }
}

// Event listener for form submission
document.getElementById("imageForm").addEventListener("submit", function (event) {
    event.preventDefault();

    var selectedImages = document.getElementsByClassName("selected");
    var selectedImageLinks = [];

    for (var i = 0; i < selectedImages.length; i++) {
        var img = selectedImages[i].getElementsByTagName("img")[0];
        selectedImageLinks.push(img.src);
    }

    console.log(selectedImageLinks); // You can modify this to send the selected image links to the server
});

// Create the image gallery when the page loads
window.addEventListener("load", createImageGallery);
