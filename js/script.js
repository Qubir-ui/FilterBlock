$(document).ready(function(){

    const colorWrapper = document.querySelector(".color-wrapper");
    const colorWrapperText = document.querySelector(".color-wrapper-text");
    const colorOptionsList = document.querySelector(".color-options-list");
    const colorOptions = document.querySelectorAll("#color option");

    const sizeWrapper = document.querySelector(".size-wrapper");
    const sizeWrapperText = document.querySelector(".size-wrapper-text");
    const sizeOptionsList = document.querySelector(".size-options-list");
    const sizeOptions = document.querySelectorAll("#size option");

    const reset = document.querySelector(".clear");

    const colorVals = [...colorOptions]
        .map(el => [el.value, el.text]);
    const sizeVals = [...sizeOptions]
        .map(el => [el.value, el.text]);

    colorWrapperText.innerHTML = colorVals[0][1]
    sizeWrapperText.innerHTML = sizeVals[0][1]


    colorWrapper.addEventListener("click", function(){
        colorOptionsList.innerHTML = ""
        colorOptions.forEach(element => {
            colorOptionsList.innerHTML += `<li data-value="${element.value}">${element.text}</li>`
        });
    })

    colorOptionsList.addEventListener("click", function(e){
        if(e.target.innerText != colorVals[0][1]){
            reset.classList.remove("visual-hidden")
        }
        else{
            reset.classList.add("visual-hidden")
        }
        colorWrapperText.innerHTML = e.target.innerText
        document.querySelector("#color").value = e.target.getAttribute("data-value");
    })

    sizeWrapper.addEventListener("click", function(){
        sizeOptionsList.innerHTML = ""
        sizeOptions.forEach(element => {
            sizeOptionsList.innerHTML += `<li data-value="${element.value}">${element.text}</li>`
        });
    })

    sizeOptionsList.addEventListener("click", function(e){
        if(e.target.innerText != sizeVals[0][1]){
            reset.classList.remove("visual-hidden")
        }
        else{
            reset.classList.add("visual-hidden")
        }
        sizeWrapperText.innerHTML = e.target.innerText
        document.querySelector("#size").value = e.target.getAttribute("data-value");
    })

    $(document).click(function(){
        $("#color-options").addClass("visual-hidden");
        $("#size-options").addClass("visual-hidden");
        $(".color-wrapper").blur();
        $(".size-wrapper").blur();
    })
    
    $(".color-wrapper").click(function(event){
        $(this).focus();
        $("#color-options").toggleClass("visual-hidden");
        $("#size-options").addClass("visual-hidden");
        event.stopPropagation();
    })

    $(".color-options-list > li").click(function(event){
        $(".color-wrapper-text").text(this.textContent);
    })

    $(".size-wrapper").click(function(event){
        $(this).focus();
        $("#size-options").toggleClass("visual-hidden");
        $("#color-options").addClass("visual-hidden");
        event.stopPropagation();
    })

    $(".size-options-list > li").click(function(e){
        $(".size-wrapper-text").text(this.textContent);
    })

    $(".filter").on("input", function(){
        if (($("#new").is(':checked')) || ($("#availability").is(':checked')) || ($("#search").val() != "")){
            $('.clear').removeClass("visual-hidden");
        }
        else{
            $('.clear').addClass("visual-hidden");
        }
    })

    $(".clear").click(function(event){
        colorWrapperText.innerHTML = colorVals[0][1];
        sizeWrapperText.innerHTML = sizeVals[0][1];
        $(this).addClass("visual-hidden");
    })
})