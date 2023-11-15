
let formData = {};
let url;
const form =document.querySelectorAll('form');
const LS = localStorage;
const image_input = document.querySelector('input[type="file"]');
const photoContainer = document.querySelector('.example > .photo');
const photoContainer2 = document.querySelector('.form_fill > .photo');



// загружаю фото в окно предпросмотра
image_input.addEventListener('change', function (e) {
    const reader = new FileReader();
    reader.onload = function () {
        const img = new Image();
        img.src = reader.result;
        url = reader.result;
        photoContainer.appendChild(img);
        localStorage.setItem('savedImage', url);
        location.reload();
    } 
    reader.readAsDataURL(image_input.files[0]);
}, false)
// загружаю фото на место кнопки загрузить 
// добавляю крестик для сброса фото
const savedImage = localStorage.getItem('savedImage');
if (savedImage!="") {
    const deletePhoto = document.querySelector('.delete_photo');

    deletePhoto.addEventListener('click', function() {
        localStorage.setItem('savedImage', ""); // Удаление сохраненной фотографии
        const photoContainer = document.querySelector('.example > .photo');
        while (photoContainer.firstChild) {
            photoContainer.removeChild(photoContainer.firstChild);
        }
        location.reload();
    });
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
        if (form[0].elements[key] && key!="Age") {
            if (form[0].elements[key]?.type === 'checkbox' && formData[key] ==='on') {
                form[0].elements[key].checked = true;
            }
            else {
                console.log(key);
                console.log(formData[key]);
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

// календарь
var year;
var month;
var date;
if (document.querySelector("#resultFormAge").value == "") {
    document.querySelector("#resultFormAge").value = `NaN лет`;
    let widthAge = document.querySelector(".age_result");
    widthAge.style.width = 0;
    widthAge.style.width = widthAge.scrollWidth + "px";
}


document.addEventListener('DOMContentLoaded', function() {
    const datePicker = flatpickr("input[type=datetime-local]", {
        dateFormat: "d.m.Y",
        static: false,
        onChange: function(selectedDates, dateStr, instance) {
            selectedDates.forEach(function (date){
                console.log(date.getFullYear(), date.getMonth()+1, date.getDate());
                year = date.getFullYear();
                month = date.getMonth();
                date = date.getDate();
                var now = new Date(); //Текущя дата
                var today = new Date(now.getFullYear(), now.getMonth(), now.getDate()); //Текущя дата без времени
                var dob = new Date(year, month, date); //Дата рождения
                var dobnow = new Date(today.getFullYear(), dob.getMonth(), dob.getDate()); //ДР в текущем году
                var age; //Возраст

                //Возраст = текущий год - год рождения
                age = today.getFullYear() - dob.getFullYear();
                //Если ДР в этом году ещё предстоит, то вычитаем из age один год
                console.log(today);
                console.log(dobnow);
                if (today < dobnow) {
                    age = age-1;
                }
                localStorage.setItem('savedAge', age);
                localStorage.setItem('savedDate', `${date}.${month+1}.${year}`);
                console.log(`Возраст: ${age}`);
                const savedAge = localStorage.getItem('savedAge');
                console.log(savedAge);
                document.querySelector("#resultFormAge").value = `${savedAge} лет`;
                let widthAge = document.querySelector(".age_result");
                widthAge.style.width = 0;
                widthAge.style.width = widthAge.scrollWidth + "px";
            });

            // Извлекаем сохраненные данные из localStorage
            const savedAge = localStorage.getItem('savedAge');
            const savedDate = localStorage.getItem('savedDate');

            // Устанавливаем сохраненные значения в поля формы
            if (savedAge) {
                document.querySelector("#resultFormAge").value = `${savedAge} лет`;
            }
            if (savedDate) {
                const dateInputElement = document.querySelector("input[type=datetime-local]");
                if (dateInputElement) {
                    dateInputElement.value = savedDate;
                }
            }
        }
    });
});




















































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








