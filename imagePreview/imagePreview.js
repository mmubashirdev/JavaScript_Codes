const imageInput = document.getElementById("imageInput");
const imagePreview = document.getElementById("imagePreview");

imageInput.addEventListener("change",(e)=>{
  const file = e.target.files[0];
  if (file) {
    const objectURL = URL.createObjectURL(file);
    imagePreview.src = objectURL;
    imagePreview.style.display = "block";

    imagePreview.onload = ()=>{
      URL.revokeObjectURL(objectURL);
    }
  }

})

