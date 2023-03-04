var input = document.getElementById('input');
var result = document.getElementById('result');
var inputType = document.getElementById('inputType');
var resultType = document.getElementById('resultType');
var option_from,option_to;

input.addEventListener("keyup",myResult);
inputType.addEventListener("change",myResult);
resultType.addEventListener("change",myResult);

option_from = inputType.value;
option_to   = resultType.value;


function myResult(){



	option_from = inputType.value;
	option_to = resultType.value;




	if(option_from === "meter" && option_to==="kilometer"){
	
		result.value = Number(input.value) * 0.001;

	}else if(option_from === "meter" && option_to==="Centimeter"){

		result.value = Number(input.value) * 100;

	}else if(option_from === "meter" && option_to==="meter"){
		
		result.value = input.value
	}else if(option_from === "meter" && option_to==="Decimeter"){
		
		result.value = Number(input.value) * 10;
	}else if(option_from === "meter" && option_to==="Foot"){
		
		result.value = Number(input.value) * 3.280;
	}else if(option_from === "meter" && option_to==="Inches"){
		
		result.value = Number(input.value) * 39.37;
	}



	if(option_from === "kilometer" && option_to==="meter"){
		 
		result.value = Number(input.value) * 1000;
	}else if(option_from === "kilometer" && option_to==="Centimeter"){
		 
		result.value = Number(input.value) * 100000;
	}else if(option_from === "kilometer" && option_to==="kilometer"){
		 
		result.value = input.value
	}else if(option_from === "kilometer" && option_to==="Decimeter"){
		 
		result.value = Number(input.value)  * 100;
	}else if(option_from === "kilometer" && option_to==="Foot"){
		 
		result.value = Number(input.value)  * 3280;
	}else if(option_from === "kilometer" && option_to==="Inches"){
		 
		result.value = Number(input.value)  * 39370;
	}

	
	
	if(option_from === "Centimeter" && option_to==="kilometer"){
		 
		result.value = Number(input.value) * 0.00001;
	}else if(option_from === "Centimeter" && option_to==="meter"){
		 
		result.value = Number(input.value) * 0.01;
	}else if(option_from === "Centimeter" && option_to==="Centimeter"){
		 
		result.value = input.value
	}else if(option_from === "Centimeter" && option_to==="Decimeter"){
		 
		result.value = Number(input.value)  * 0.1;
	}else if(option_from === "Centimeter" && option_to==="Foot"){
		 
		result.value = Number(input.value)  * 0.032;
	}else if(option_from === "Centimeter" && option_to==="Inches"){
		 
		result.value = Number(input.value)  * 0.393;
	}


    
	
	if(option_from === "Decimeter" && option_to==="kilometer"){
		 
		result.value = Number(input.value) * 0.0001;
	}else if(option_from === "Decimeter" && option_to==="meter"){
		 
		result.value = Number(input.value) * 0.1;
	}else if(option_from === "Decimeter" && option_to==="Centimeter"){
		 
		result.value = Number( input.value) * 10;
	}else if(option_from === "Decimeter" && option_to==="Decimeter"){
		 
		result.value = input.value
	}else if(option_from === "Decimeter" && option_to==="Foot"){
		 
		result.value = Number( input.value) * 0.328;
	}else if(option_from === "Decimeter" && option_to==="Inches"){
		 
		result.value = Number( input.value) * 3.937;
	}

	
	
	if(option_from === "Foot" && option_to==="kilometer"){
		 
		result.value = Number(input.value) * 0.0003;
	}else if(option_from === "Foot" && option_to==="meter"){
		 
		result.value = Number(input.value) * 0.304;
	}else if(option_from === "Foot" && option_to==="Centimeter"){
		 
		result.value = Number( input.value) * 30.48;
	}else if(option_from === "Foot" && option_to==="Decimeter"){
		 
		result.value = Number( input.value) * 3.048;
	}else if(option_from === "Foot" && option_to==="Foot"){
		 
		result.value = input.value
	}else if(option_from === "Foot" && option_to==="Inches"){
		 
		result.value = Number( input.value) * 12;
	}
	



	if(option_from === "Inches" && option_to==="kilometer"){
		 
		result.value = Number(input.value) * 0.00000254;
	}else if(option_from === "Inches" && option_to==="meter"){
		 
		result.value = Number(input.value) * 0.0254;
	}else if(option_from === "Inches" && option_to==="Centimeter"){
		 
		result.value = Number( input.value) * 2.54;
	}else if(option_from === "Inches" && option_to==="Decimeter"){
		 
		result.value = Number( input.value) * 0.254;
	}else if(option_from === "Inches" && option_to==="Foot"){
		 
		result.value = Number( input.value) * 0.0833;
	}else if(option_from === "Inches" && option_to==="Inches"){
		 
		result.value = input.value
	}
	
	


}