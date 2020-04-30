var array = [
    {p: "Для внесения вашего сайта в каталог, заполните форму:", name:"form"},
    {label:"Разработчики:",type:"text",name:"author"},
    {label:"Название сайта:",type:"text",name:"title"},
    {label:"URL сайта:",type:"text",name:"site"},
    {label:"Дата запуска сайта:",type:"text",name:"startdate"},
    {label:"Посетителей в сутки:",type:"text",name:"persons"},
    {label:"E-mail для связи:",type:"email",name:"title"},
    {label:"Рубрика каталога:",type:"select",name:"name",options:[{value:"1",text:"здоровье"},{value:"2",text:"уют"}, {value:"3",text:"бытовая техника"}]},
    {label:"Размещение:",type:"radio",name:"public",options:[{value:"1",text:"бесплатное "},{value:"2",text:"платное"},{value:"3",text:"VIP"}]},
    {label:"Разрешить отзывы",type:"checkbox",name:"comments",checked:"true"},
    {label:"Описание сайта:",type:"textarea",name:"article"},
    {value:"Опубликовать",type:"submit"}
];

function formAdd(arr,form) {
    if (arr) {
        arr.forEach(formAddInput)
    }

    function formAddInput(element, index, arr) {
        if (element.name === "form") {
            var NewTagElement = document.createElement("p");
            var NewTextElement = document.createTextNode(element.p);
            NewTagElement.appendChild(NewTextElement);
            form.appendChild(NewTagElement);
        }

        if (element.type === "tel" || element.type ==="email" ||  element.type === "text") {
            var NewTagElement = document.createElement("p");
            var NewLabelElement = document.createElement("label");
            var NewInputElement = document.createElement("input");
            var NewTextElement = document.createTextNode(element.label);

            NewInputElement.type = element.type;
            NewInputElement.name = element.name;
            NewLabelElement.appendChild(NewTextElement);
            NewLabelElement.appendChild(NewInputElement);
            NewTagElement.appendChild(NewLabelElement);
            form.appendChild(NewTagElement);
        }

        if(element.type ==="select") {

            var NewTagElement = document.createElement("p");
            var NewLabelElement = document.createElement("label");
            var NewTextElement = document.createTextNode(element.label);
            var NewSelectElement = document.createElement("select");
            NewSelectElement.name = element.name;
            NewSelectElement.classList.add(element.class);

            NewLabelElement.appendChild(NewTextElement);

            for (var i = 0; i < element.options.length; i++) {
                var NewOptionElement = document.createElement("option");
                NewOptionElement.value = element.options[i].value;
                var NewTextElement = document.createTextNode(element.options[i].text);
                NewOptionElement.appendChild(NewTextElement);

                NewSelectElement.appendChild(NewOptionElement);
            }

            NewLabelElement.appendChild(NewSelectElement);
            NewTagElement.appendChild(NewLabelElement);
            form.appendChild(NewTagElement);
        }

        if(element.type === "radio"){
            var NewTagElement = document.createElement("p");
            var NewLabelElement = document.createElement("label");
            var NewTextElement=document.createTextNode(element.label);
            NewLabelElement.appendChild(NewTextElement);
            NewTagElement.appendChild(NewLabelElement);

            for( var i = 0; i < element.options.length; i++){

                var NewRadioElement = document.createElement("input");
                NewRadioElement.value = element.options[i].value;
                NewRadioElement.type = "radio";
                NewRadioElement.name = element.name;
                var NewLabelRElement = document.createElement("label");
                var NewTextElement = document.createTextNode(element.options[i].text);
                NewLabelRElement.appendChild(NewRadioElement);
                NewLabelRElement.appendChild(NewTextElement);
                NewTagElement.appendChild(NewLabelRElement);
            }

            form.appendChild(NewTagElement);
        }

        if(element.type === "checkbox"){
            var NewTagElement = document.createElement("p");
            var NewLabelElement = document.createElement("label");
            var NewTextElement = document.createTextNode(element.label);
            NewLabelElement.appendChild(NewTextElement);

            var NewCheckElement = document.createElement("input");
            NewCheckElement.type = "checkbox";
            NewCheckElement.name = element.name;
            (element.checked) ? NewCheckElement.checked = "true" : NewCheckElement.checked = "false";
            NewLabelElement.appendChild(NewCheckElement);
            NewTagElement.appendChild(NewLabelElement);
            form.appendChild(NewTagElement);
        }
        if(element.type === "textarea"){
            var NewTagElement = document.createElement("p");
            var NewLabelElement = document.createElement("label");
            var NewTextElement = document.createTextNode(element.label);
            NewLabelElement.appendChild(NewTextElement);

            var NewTextareaElement = document.createElement("textarea");
            NewTextareaElement.name = element.name;
            NewLabelElement.appendChild(NewTextareaElement);
            NewTagElement.appendChild(NewLabelElement);
            form.appendChild(NewTagElement);
        }
    }
}

formAdd (array,formSite);
