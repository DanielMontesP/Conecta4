let userPlayed = false;
let iNeedDebugger = true;
let rowFirstFreePlace = [6,6,6,6,6,6,6];
let lastPossibleRound = "";
let lastPossibleCol = "";
let jueganRojas = true;

try{	
const jugar = () => {	
	setVisibilityUI("prompt-container","hidden");
	setVisibilityUI("tablero-container","visible");
	setVisibilityUI("btcerrar","visible");

	if(jueganRojas){		
		document.querySelector(".img-ficha-container").classList.add("round-Used", "round-Red");
		document.querySelector(".img-ficha-container").classList.remove("round-Yellow");		
	}else{
		document.querySelector(".img-ficha-container").classList.remove("round-Red");
		document.querySelector(".img-ficha-container").classList.add("round-Used","round-Yellow");		
	};	
		arrowBlinkMove= setInterval(arrowBlink, 1000);		
		const rounds = document.querySelectorAll('.bt');
		rounds.forEach(element => {							
			element.addEventListener('mouseover',function (e) {		
				//debugger;								
				if(document.querySelector(".col-selected")){					
					document.querySelector(".col-selected").classList.add("bt");
					document.querySelector(".col-selected").classList.remove("col-selected");
				}e			
				if(document.querySelector(".round-PossiblePos")){

					if(jueganRojas){
						document.querySelector(".round-PossiblePos").classList.remove("round-PossiblePos", "round-Red");					
					}else{
						document.querySelector(".round-PossiblePos").classList.remove("round-PossiblePos", "round-Yellow");						
					};									
				}
				showPossiblePos(this.id);
				//this.classList.remove("bt");					
				//debugger;			
			switch(this.id)
			{
				case "col1-bt":
					document.querySelector(".img-container").style.left = "-29px";
					document.querySelector(".img-ficha-container").style.left = "20px";						
					break;
				case "col2-bt":
					document.querySelector(".img-container").style.left = "49px";
					document.querySelector(".img-ficha-container").style.left = "98px";									
					break;
				case "col3-bt":
					document.querySelector(".img-container").style.left = "126px";
					document.querySelector(".img-ficha-container").style.left = "175px";				
					break;
				case "col4-bt":
					document.querySelector(".img-container").style.left = "202px";
					document.querySelector(".img-ficha-container").style.left = "250px";					
					break;
				case "col5-bt":
					document.querySelector(".img-container").style.left = "278px";
					document.querySelector(".img-ficha-container").style.left = "330px";
					break;
				case "col6-bt":
					document.querySelector(".img-container").style.left = "353px";
					document.querySelector(".img-ficha-container").style.left = "403px";
					break;
				case "col7-bt":
					document.querySelector(".img-container").style.left = "435px";
					document.querySelector(".img-ficha-container").style.left = "481px";
					break;
			}
		});		
	});

	const cols = document.querySelectorAll('.col');
		cols.forEach(col => {	
			let imgFichaClase = "";
			col.addEventListener('mouseup',function (e) {	
				document.getElementById(lastPossibleRound).classList.remove("round");
				//document.getElementById(lastPossibleRound).classList.add("round-Used");
				//debugger; 
				if(jueganRojas){
					imgFichaClase = "round-Red";
					document.getElementById(lastPossibleRound).classList.add("round-Used", );
					document.querySelector(".img-ficha-container").classList.add("round-Used", imgFichaClase);
					document.querySelector(".img-ficha-container").classList.remove("round-Yellow");
					jueganRojas = false;
				}else{
					imgFichaClase = "round-Yellow";
					document.querySelector(".img-ficha-container").classList.remove("round-Red");
					document.querySelector(".img-ficha-container").classList.add(imgFichaClase);
					document.getElementById(lastPossibleRound).classList.add("round-Used", imgFichaClase);
					jueganRojas = true;
				};

				// for (i=0;i<=6;i++){
				// 	document.getElementById(lastPossibleRound).classList.add("round-Used", imgFichaClase);
				// }
				// console.log("lastPossibleRound: " + lastPossibleRound + ": " +lastPossibleRound.substring(0,1));
				rowFirstFreePlace[lastPossibleRound.substring(0,1)-1] = rowFirstFreePlace[lastPossibleRound.substring(0,1)-1]  - 1; 
				
				document.getElementById(lastPossibleCol).classList.remove("col-selected");
				document.getElementById(lastPossibleCol).classList.add("bt");
				document.getElementById(lastPossibleRound).classList.remove("round-PossiblePos");
				console.log("id que lanza el evento: " + lastPossibleCol);
				//showPossiblePos(lastPossibleCol);
		});		
	});	

};

const showPossiblePos = (selectedCol) => {
	//debugger;
	let colSelected = selectedCol.substring(3,4);
	let idFirstRoundFree = colSelected + rowFirstFreePlace[colSelected-1];
	//document.getElementById(roundFree).className = "none";
	lastPossibleRound = idFirstRoundFree;
	lastPossibleCol = selectedCol;

	document.getElementById(selectedCol).classList.add("col-selected");
	document.getElementById(selectedCol).classList.remove("bt");
	//document.getElementById(idFirstRoundFree).classList.add("round-PossiblePos");
	if(jueganRojas){
		document.getElementById(idFirstRoundFree).classList.add("round-PossiblePos", "round-Red");
		document.querySelector(".img-ficha-container").classList.add("round-Red");
		document.querySelector(".img-ficha-container").classList.remove("round-Yellow");
	}else{
		document.querySelector(".img-ficha-container").classList.add("round-Yellow");
		document.getElementById(idFirstRoundFree).classList.add("round-PossiblePos", "round-Yellow");
		document.querySelector(".img-ficha-container").classList.remove("round-Red");
	};
	// console.log("Col: " + selectedCol + "-->Round Free: " + idFirstRoundFree);
	// console.log(rowFirstFreePlace);
	//document.querySelector(".round-PossiblePos").classList.add("round-PossiblePos");	
}
let fArrowBlink ="";

const arrowBlink= () => {
	if(userPlayed){
		clearInterval(arrowBlinkMove);
		}else{
			document.querySelector(".img-container").style.visibility = "hidden";
			fArrowBlink = setTimeout(function(){				
				//iNeedDebugger:debugger;
			document.querySelector(".img-container").style.visibility = "visible";
		}, 500);
		document.querySelector(".img-container").style.visibility = "hidden";
	}
	
}
	const setVisibilityUI = (className,newOption) => {
		document.querySelector("." + className).style.visibility = newOption;
	};

	function start(){
		jugar();
	};

	function volver(id){	
		setVisibilityUI("prompt-container","hidden");
		setVisibilityUI("btsalir","hidden");
		setVisibilityUI("btvolver","hidden");
		setVisibilityUI("btcerrar","visible");
		setVisibilityUI("tablero-container","visible");	
		setVisibilityUI("img-container","visible");	
	};

	function cerrar(){
		// iNeedDebugger:debugger;
		userPlayed = true;
		clearInterval(arrowBlinkMove);
		clearTimeout(fArrowBlink);
		showMessageToUser("close");		
	};

	function salir(id){
		clearInterval(arrowBlinkMove);
		clearTimeout(fArrowBlink);	
		window.location.reload();	
	};

	function showMessageToUser(type){
		//document.getElementById("prompt-title").style.fontSize = "20px";
		switch(type){
			case "welcome":
				title = "BIENVENIDO";
				obs = "Este juego consiste en hacer 4 en linea en cualquier dirección.";
				break;
			case "close":
				title = "FINALIZAR JUEGO";
				obs = "¿Está seguro?";
				setVisibilityUI("prompt-container","visible");
				setVisibilityUI("btStart","hidden");
				setVisibilityUI("btcerrar","hidden");
				setVisibilityUI("btsalir","visible");
				setVisibilityUI("btvolver","visible");
				setVisibilityUI("tablero-container","hidden");
				setVisibilityUI("img-container","hidden");
				break;
		}		
		// setVisibilityUI("img-container","hidden");
		document.querySelector("h3").innerHTML = title;	
		document.getElementById("prompt-obs").innerHTML = obs;	
	}
}
catch(err) {
	console.log("ERROR: " + err + err.message);
}
