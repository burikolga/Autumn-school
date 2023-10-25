// let formData = {};
// const form =document.querySelector('form');
// const LS = localStorage;
// console.log(form);
// // заношу данные из формы в localstorage
// form.addEventListener('input', function(event){
//     formData[event.target.name] = event.target.value;
//     LS.setItem('formData', JSON.stringify(formData));
// })
// // востанавливаю данные после обновления страницы
// if (LS.getItem('formData')) {
//     formData = JSON.parse(LS.getItem('formData'));
//     for (let key in formData) {
//         if (form.elements[key]) {
//             if (form.elements[key]?.type === 'checkbox' && formData[key] ==='on') {
//                 form.elements[key].checked = true;
//             }
//             else {
//                 form.elements[key].value = formData[key];
//                 resultFormName.value = fillFormName.value;
//                 resultFormDescr.value = fillFormDescr.value;
//                 if(resultFormName.value != ''){
//                     document.querySelector("#resultFormName").style.background = "none";
//                 }
//                 if(resultFormDescr.value != ''){
//                     document.querySelector("#resultFormDescr").style.background = "none";
//                 }
//                 console.log(resultFormName.value);
//                 console.log(fillFormName.value);
//             }
//         }
//     }
    
// }


// // обновляю данные в окне предпросмотра с каждым нажатием клавиши
// $("#fillFormName").keyup(function() {
//     resultFormName.value = this.value;
//     // console.log(nameFull.value);
//     if(resultFormName.value != ''){
//         document.querySelector("#resultFormName").style.background = "none";
//     }
//     if(resultFormName.value == ''){
//         document.querySelector("#resultFormName").style.background = "var(--eeeef-1-filter-hover, #EEEEF1)";
//     }
// });
// $("#fillFormDescr").keyup(function() {
//     resultFormDescr.value = this.value;
//     // console.log(nameFull.value);
//     if(resultFormDescr.value != ''){
//         document.querySelector("#resultFormDescr").style.background = "none";
//     }
//     if(resultFormDescr.value == ''){
//         document.querySelector("#resultFormDescr").style.background = "var(--eeeef-1-filter-hover, #EEEEF1)";
//     }
// });

// if (form){
//     for (let key in formData) {
//         if (form.elements[key]) {
//             form.elements[key].value = formData[key];
//             if(form.querySelector("#fillFormWork")) {
//                 document.querySelector("#resultFormWork").value = form.querySelector("#resultFormWork").value;
//                 console.log(form.querySelector("#fillFormWork").value);
//                 console.log(document.querySelector("#resultFormWork").value);
//             }
            
//             console.log(formData);
//             console.log( form.elements.value);
//             console.log(formData);
            
//         } 
        
//     }
// }
let formData = {};
const form =document.querySelectorAll('form');
const LS = localStorage;
console.log(form);
// заношу данные из формы в localstorage
form[0].addEventListener('input', function(event){
    formData[event.target.name] = event.target.value;
    LS.setItem('formData', JSON.stringify(formData));
})
// востанавливаю данные после обновления страницы
if (LS.getItem('formData')) {
    formData = JSON.parse(LS.getItem('formData'));
    for (let key in formData) {
        if (form[0].elements[key]) {
            if (form[0].elements[key]?.type === 'checkbox' && formData[key] ==='on') {
                form[0].elements[key].checked = true;
            }
            else {
                form[0].elements[key].value = formData[key];
                resultFormName.value = fillFormName.value;
                resultFormDescr.value = fillFormDescr.value;
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
widthWork.value = document.querySelector("#resultFormWork").value;
widthWork.style.width = widthWork.scrollWidth + "px";







































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

















































const image_input = document.querySelector("#image_input");
var uploaded_image = "";


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