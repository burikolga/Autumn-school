
document.addEventListener('DOMContentLoaded', function(){
    let formData = {};
    const form =document.querySelector('form');
    const LS = localStorage;
    var nameFull = document.getElementById("resultFormName");
    

    // востанавливаю данные после обновления страницы
    form.addEventListener('input', function(event){
        formData[event.target.name] = event.target.value;
        LS.setItem('formData', JSON.stringify(formData));
    })

    if (LS.getItem('formData')) {
        formData = JSON.parse(LS.getItem('formData'));
        for (let key in formData) {
            if (form.elements[key]) {
                if (form.elements[key]?.type === 'checkbox' && formData[key] ==='on') {
                    form.elements[key].checked = true;
                }
                else {
                    form.elements[key].value = formData[key];
                    resultFormName.value = fillFormName.value;
                    nameFull.value = fillFormName.value;
                    if(nameFull.value != ''){
                        document.querySelector("#resultFormName").style.background = "none";
                    }
                }
            }
        }
        
    }

    // обновляю данные в окне предпросмотра с каждым нажатием клавиши
    $("#fillFormName").keyup(function() {
        nameFull.value = this.value;
        // console.log(nameFull.value);
        if(nameFull.value != ''){
            document.querySelector("#resultFormName").style.background = "none";
        }
        if(nameFull.value == ''){
            document.querySelector("#resultFormName").style.background = "var(--eeeef-1-filter-hover, #EEEEF1)";
        }
    });
    
})



















































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