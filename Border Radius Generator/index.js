let topLeftSlider = document.querySelector("#topLeftSlider");
let topRightSlider = document.querySelector("#topRightSlider");
let bottomRightSlider = document.querySelector("#bottomRightSlider");
let bottomLeftSlider = document.querySelector("#bottomLeftSlider");
let output = document.querySelector("#output");
let sliders = document.querySelectorAll(".slider");
let resetBtn = document.querySelector("#reset");
const textBox = document.querySelector("#textBox");

sliders.forEach(slider => {
    // TO EACH CLICKED SLIDER, ADD "INPUT" EVENETLISTENER
    slider.addEventListener("input", () => {
        // TARGET EACH OF THE RADIUS PROPERTY OF THE BOX AND PUSH THE VALUE OF THE SLIDER INTO THAT
        output.style.borderTopLeftRadius = topLeftSlider.value + "%";
		output.style.borderTopRightRadius = topRightSlider.value + "%";
		output.style.borderBottomRightRadius = bottomRightSlider.value + "%";
		output.style.borderBottomLeftRadius = bottomLeftSlider.value + "%";
        // PUSH THE VALUES ALSO INTO THE COPIABLE TEXT OF THE TEXTAREA
        textBox.textContent = `border-radius: ${topLeftSlider.value}% ${topRightSlider.value}% ${bottomRightSlider.value}% ${bottomLeftSlider.value}%;
        `
    })
});

resetBtn.addEventListener("click",()=>{
	topLeftSlider.value = 0;
	topRightSlider.value = 0;
	bottomRightSlider.value = 0;
	bottomLeftSlider.value = 0;
	//RESETTING THE OUPUT BOX'S BORDER RADIUS
	output.style.borderRadius="0 0 0 0"
	textBox.textContent = `border-radius: ${topLeftSlider.value}% ${topRightSlider.value}% ${bottomRightSlider.value}% ${bottomLeftSlider.value}%;
        `

})

  