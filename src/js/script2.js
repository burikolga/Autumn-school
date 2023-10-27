const LS = localStorage;
const form =document.querySelectorAll('form');
formData = JSON.parse(LS.getItem('formData'));
const savedImage = localStorage.getItem('savedImage');
const photoContainer = document.querySelector('.example > .photo');
// добавляю фото в предпросмотр
const img = new Image();
img.src = savedImage;
photoContainer.appendChild(img);
// заношу данные в сетлокейл
form[0].addEventListener('input', function(event){
    formData[event.target.name] = event.target.value;
    LS.setItem('formData', JSON.stringify(formData));
})

// вставляю в предпросмотр значения, которые были введены в предыдущей вкладке
if (form[1]){
    for (let key in formData) {
        if (form[1].elements[key]) {
            form[1].elements[key].value = formData[key];
            if(form[1].querySelector("#fillFormName")) {
                document.querySelector("#resultFormName").value = form[1].querySelector("#fillFormName").value;
            }
            if(form[1].querySelector("#fillFormDescr")) {
                document.querySelector("#resultFormDescr").value = form[1].querySelector("#fillFormDescr").value;
            }
        }
        
    }
}
// вставляю в предпросмотр значения, которые были введены на этой вкладке
if (form[0]){
    for (let key in formData) {
        if (form[0].elements[key]) {
            if (form[0].elements[key]?.type === 'checkbox' && formData[key] ==='on') {
                form[0].elements[key].checked = true;
            }
            else {
                form[0].elements[key].value = formData[key];
                resultFormWork.value = fillFormWork.value;
            }
        }
    }
}
// обнобляю с каждым нажатие клавиши поле работа
$("#fillFormWork").keyup(function() {
    resultFormWork.value = this.value;
    if(resultFormWork.value == ''){
        document.querySelector("#resultFormWork").style.background = "var(--eeeef-1-filter-hover, #EEEEF1)";
    }
    const widthWork = document.querySelector("#resultFormWork");
    widthWork.style.width = 0;
    widthWork.value = document.querySelector("#resultFormWork").value;
    widthWork.style.width = widthWork.scrollWidth + "px";
});
const widthWork = document.querySelector("#resultFormWork");
widthWork.style.width = 0;
widthWork.value = document.querySelector("#resultFormWork").value;
widthWork.style.width = widthWork.scrollWidth + "px";

