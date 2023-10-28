document.addEventListener('DOMContentLoaded', function () {
let formData = {};
let url;
const form =document.querySelectorAll('form');
const LS = localStorage;
const image_input = document.querySelector('input[type="file"]');
const photoContainer = document.querySelector('.example > .photo');
const photoContainer2 = document.querySelector('.form_fill > .photo');



// загружаю фото в окно предпросмотра
image_input.addEventListener('change', function (e) {
    console.log(image_input.files);
    const reader = new FileReader();
    reader.onload = function () {
        const img = new Image();
        img.src = reader.result;
        url = reader.result;
        photoContainer.appendChild(img);
        localStorage.setItem('savedImage', url);
        console.log(url);
        location.reload();
    } 
    reader.readAsDataURL(image_input.files[0]);
}, false)
console.log(url);
// загружаю фото на место кнопки загрузить 
// добавляю крестик для сброса фото
const savedImage = localStorage.getItem('savedImage');
console.log(savedImage);
if (savedImage!="") {
    console.log(savedImage);
    const deletePhoto = document.querySelector('.delete_photo');

    deletePhoto.addEventListener('click', function() {
        localStorage.setItem('savedImage', ""); // Удаление сохраненной фотографии
        const photoContainer = document.querySelector('.example > .photo');
        while (photoContainer.firstChild) {
            photoContainer.removeChild(photoContainer.firstChild);
        }
        location.reload();
    });
    console.log(savedImage);
    const img = new Image();
    img.src = savedImage;
    photoContainer.appendChild(img);
    // photoContainer2.appendChild(img);
    if (document.querySelector('.photo > .load')) {
        document.querySelector('.photo > .load').style.display = 'none';
    }
    if (document.querySelector('.photo > .subtitle')) {
        document.querySelector('.photo > .subtitle').style.display = 'none';
    }
    if (photoContainer2) {
        photoContainer2.style.cssText = `
        height: 196px;
        width: 196px;
        padding: 0 0;
      `;
    }
    if (document.querySelector('.form_fill > .photo > img')) {
        document.querySelector('.form_fill > .photo > img').style.display = 'block';
        document.querySelector('.form_fill > .photo > img').src = savedImage;
    }
    document.querySelector('.photo > .delete_photo').style.display = 'block';
    
}



// заношу данные из формы в localstorage
form[0].addEventListener('input', function(event){
    formData[event.target.name] = event.target.value;
    LS.setItem('formData', JSON.stringify(formData));
    
})
// востанавливаю данные после обновления страницы
if (LS.getItem('formData')) {
    formData = JSON.parse(LS.getItem('formData'));
    for (let key in formData) {
        console.log(formData);
        if (form[0].elements[key]) {
            console.log(form[1].elements[key]);
            if (form[0].elements[key]?.type === 'checkbox' && formData[key] ==='on') {
                form[0].elements[key].checked = true;
            }
            else {
                form[0].elements[key].value = formData[key];
                resultFormName.value = fillFormName.value;
                resultFormDescr.value = fillFormDescr.value;
                document.querySelector("#resultFormGender").value = document.querySelector('input[name="gender"]:checked').value;
                var valueGender = document.querySelector("#resultFormGender").value;
                localStorage.setItem('savedGender', valueGender);
                man.addEventListener('change', function (e) {
                    resultFormGender.value = document.querySelector('input[name="gender"]:checked').value;
                    widthGender.style.width = 0;
                    widthGender.style.width = widthGender.scrollWidth + "px";
                    location.reload();
                    // localStorage.setItem('savedGender', valueGender);
                });
                woman.addEventListener('change', function (e) {
                    resultFormGender.value = document.querySelector('input[name="gender"]:checked').value;
                    widthGender.style.width = 0;
                    widthGender.style.width = widthGender.scrollWidth + "px";  
                    location.reload();
                    // localStorage.setItem('savedGender', valueGender);
                });
                
                if(resultFormName.value != ''){
                    document.querySelector("#resultFormName").style.background = "none";
                }
                if(resultFormDescr.value != ''){
                    document.querySelector("#resultFormDescr").style.background = "none";
                }
                console.log(resultFormName.value);
                console.log(fillFormName.value);
            }
        }
    }
    
}


// обновляю данные в окне предпросмотра с каждым нажатием клавиши
$("#fillFormName").keyup(function() {
    resultFormName.value = this.value;
    if(resultFormName.value != ''){
        document.querySelector("#resultFormName").style.background = "none";
    }
    if(resultFormName.value == ''){
        document.querySelector("#resultFormName").style.background = "var(--eeeef-1-filter-hover, #EEEEF1)";
    }
});
$("#fillFormDescr").keyup(function() {
    resultFormDescr.value = this.value;
    if(resultFormDescr.value != ''){
        document.querySelector("#resultFormDescr").style.background = "none";
    }
    if(resultFormDescr.value == ''){
        document.querySelector("#resultFormDescr").style.background = "var(--eeeef-1-filter-hover, #EEEEF1)";
    }
});
// обновляю данные в окне предпросмотра которые будут введены на следующих страницах
if (form[1]){
    for (let key in formData) {
        if (form[1].elements[key]) {
            form[1].elements[key].value = formData[key];
            if(form[1].querySelector("#fillFormWork")) {
                document.querySelector("#resultFormWork").value = form[1].querySelector("#resultFormWork").value;
                console.log(formData);
                console.log(formData);
            }
        } 
        
    }
}
const widthWork = document.querySelector("#resultFormWork");
widthWork.style.width = 0;
widthWork.style.width = widthWork.scrollWidth + "px";

const widthGender = document.querySelector("#resultFormGender");
widthGender.style.width = 0;
widthGender.style.width = widthGender.scrollWidth + "px";

});









// const image_input = document.querySelector("#image_input");
// var uploaded_image = "";


// image_input.addEventListener("change", function(){

//     // console.log(image_input.value);

//     const reader = new FileReader();
//     reader.addEventListener("load", () => {
//         uploaded_image = reader.result;
//         document.querySelector("#display_image").style.backgroundImage = `url(${uploaded_image})`; 
        
//     });
//     reader.readAsDataURL(this.files[0]);
// })



// window.addEventListener('load', function() {
//     document.querySelector('input[type="file"]').addEventListener('change', function() {
//         if (this.files && this.files[0]) {
//             var img = document.querySelector('img');
//             img.onload = () => {
//                 URL.revokeObjectURL(img.src);  // no longer needed, free memory
//             }
  
//             img.src = URL.createObjectURL(this.files[0]); // set src to blob url
//         }
//     });
//   });

















































// развернуть о себе
// document.querySelector("#more").addEventListener('click', function(){
//     document.querySelector(".bio_text").classList.toggle('active');
    
// });
document.querySelector("#more").addEventListener('click', function(){
    const bioText = document.querySelector(".bio_text");
    bioText.classList.toggle('active');
    const moreAfter = document.querySelector("#more::after");
    if (bioText.classList.contains('active')) {
        moreAfter.style.content = "url('../../icons/rectanBack.svg')";
    } else {
        moreAfter.style.content = "url('../../icons/rectan.svg')";
    }
    alert('ok');
});
