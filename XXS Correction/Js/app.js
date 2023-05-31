const photoUploadInput=document.getElementById("photo-upload"),photoUrlInput=document.getElementById("photo-url"),titleInput=document.getElementById("title"),submitButton=document.getElementById("submit-btn"),previewImage=document.getElementById("preview-image"),previewTitle=document.getElementById("preview-title");function sanitizeInput(t){const e=document.createElement("div");return e.textContent=t,e.innerHTML.replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/['"]/g,"-")}photoUploadInput.addEventListener("change",function(){const t=photoUploadInput.files[0],e=new FileReader;e.onload=function(t){previewImage.src=t.target.result},e.readAsDataURL(t)}),photoUrlInput.addEventListener("change",function(){let t=sanitizeInput(photoUrlInput.value);const e=t.indexOf("?");-1!==e&&(t=t.substring(0,e)),previewImage.src=t}),submitButton.addEventListener("click",function(){const t=sanitizeInput(titleInput.value);previewTitle.textContent=t});