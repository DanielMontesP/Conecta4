let userPlayed = false;
let iNeedDebugger = true;
let rowFirstFreePlace = [6,6,6,6,6,6,6];
let lastPossibleRound = "";
let lastPossibleCol = "";
let jueganRojas = true;
let fArrowBlink ="";
let seHaMovido = false;
let isNewGame = true;
let jugadorActual = "";
let isGameOver = false;
let playerClass = "";

try{

	function askForUserName(id){
		//iNeedDebugger:debugger;			
		// document.getElementById("input").style.visibility = "visible";
		document.querySelector(".inputs-container").style.visibility = "visible";
		//document.querySelector(".rdGameType").style.visibility = "visible";
		document.querySelector(".prompt-title").innerHTML = "SETUP";	
		document.querySelector(".prompt-obs").innerHTML = "Indique su nombre y el tipo de juego";
		document.getElementById("btStart").style.visibility = "hidden";
		document.getElementById("btjugar").style.visibility = "visible";
		document.getElementById("nextPlayer").innerHTML = "Le toca al jugador " + 	nextPlayer();
		// document.getElementById("input").focus();
		// document.querySelector('#input').addEventListener('keypress', function (e) {
		// 	if (e.key === 'Enter') {			
		// 		sendInput();
		// 		document.getElementById("input").focus();
		// 	  }
		// });
		// document.querySelector('#input').addEventListener('mouseup',function (e) {		
		// 	if(document.getElementById("input").value ==="Responde aqui..."){
		// 			document.getElementById("input").value = "";
		// 	}		  
		// });
	};
 const nextPlayer = () => {
	//iNeedDebugger:debugger;
	let player = "";
	if (isNewGame){
		player = document.getElementById("input-User1").value;
		jugadorActual = player;
		isNewGame = false;
		playerClass = "round-Red";
	}else{
		if (jugadorActual === document.getElementById("input-User1").value){
			player = document.getElementById("input-User2").value;
			jugadorActual = player;
			playerClass = "round-Yellow";			
		}else{
			player = document.getElementById("input-User1").value;
			jugadorActual = player;
			playerClass = "round-Red";
		}
		return jugadorActual;
	}
	return jugadorActual;
 }

const jugar = () => {	
	setVisibilityUI("prompt-container","hidden");
	setVisibilityUI("tablero-container","visible");
	setVisibilityUI("btcerrar","visible");
	//if (isGameStarted){	
	if(jueganRojas){		
		document.querySelector(".img-ficha-container").classList.add("round-Used", "round-Red");
		document.querySelector(".img-ficha-container").classList.remove("round-Yellow");		
	}else{
		document.querySelector(".img-ficha-container").classList.remove("round-Red");
		document.querySelector(".img-ficha-container").classList.add("round-Used","round-Yellow");		
	};	
	arrowBlinkMove= setInterval(arrowBlink, 1000);		
		const cols = document.querySelectorAll('.col');
		cols.forEach(element => {							
			element.addEventListener('mouseover',function (e) {	
				if(!isGameOver){
					//iNeedDebugger:debugger;				
					// seHaMovido = true;									
					if(document.querySelector(".col-selected")){					
						document.querySelector(".col-selected").classList.add("col");
						document.querySelector(".col-selected").classList.remove("col-selected");
					};		
					if(document.querySelector(".round-PossiblePos")){
						if(jueganRojas){
							document.querySelector(".round-PossiblePos").classList.remove("round-PossiblePos", "round-Red");					
						}else{
							document.querySelector(".round-PossiblePos").classList.remove("round-PossiblePos", "round-Yellow");						
						};									
					}
					showPossiblePos(this.id);					
					switch(this.id)
					{
						case "col1":
							document.querySelector(".img-container").style.left = "-29px";
							document.querySelector(".img-ficha-container").style.left = "20px";						
							break;
						case "col2":
							document.querySelector(".img-container").style.left = "49px";
							document.querySelector(".img-ficha-container").style.left = "98px";									
							break;
						case "col3":
							document.querySelector(".img-container").style.left = "126px";
							document.querySelector(".img-ficha-container").style.left = "175px";				
							break;
						case "col4":
							document.querySelector(".img-container").style.left = "202px";
							document.querySelector(".img-ficha-container").style.left = "250px";					
							break;
						case "col5":
							document.querySelector(".img-container").style.left = "278px";
							document.querySelector(".img-ficha-container").style.left = "330px";
							break;
						case "col6":
							document.querySelector(".img-container").style.left = "353px";
							document.querySelector(".img-ficha-container").style.left = "403px";
							break;
						case "col7":
							document.querySelector(".img-container").style.left = "435px";
							document.querySelector(".img-ficha-container").style.left = "481px";
							break;
					}
			}});		
			});
			cols.forEach(col => {	
				let imgFichaClase = "";
				col.addEventListener('mouseup',function (e) {
					if(!isGameOver){
					//if (seHaMovido){
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
						document.getElementById(lastPossibleRound).classList.remove("round-PossiblePos");
				// for (i=0;i<=6;i++){
				// 	document.getElementById(lastPossibleRound).classList.add("round-Used", imgFichaClase);
				// }
				// console.log("lastPossibleRound: " + lastPossibleRound + ": " +lastPossibleRound.substring(0,1));
				rowFirstFreePlace[lastPossibleRound.substring(0,1)-1] = rowFirstFreePlace[lastPossibleRound.substring(0,1)-1]  - 1; 
				
				// document.getElementById(lastPossibleCol).classList.remove("col-selected");
				// document.getElementById(lastPossibleCol).classList.add("bt");
				// document.getElementById(lastPossibleRound).classList.remove("round-PossiblePos");
				// //console.(log("id que lanza el evento: " + lastPossibleCol);
				// debugger;
				if (!isWinner()){
					document.getElementById("nextPlayer").innerHTML = "Le toca al jugador: " + nextPlayer();
					showPossiblePos(lastPossibleCol);
				}else{
					document.getElementById("nextPlayer").innerHTML = "¡El jugador " + jugadorActual + " ha ganado!";
					isGameOver = true;
				}
					//seHaMovido = false;
			//}
				}});		
		});
	}		

const isWinner = () =>{
	//debugger;
	let rowPos = lastPossibleRound.substring(1,2);
	let colPos = lastPossibleRound.substring(0,1);
	if ((isLineaV(colPos,rowPos)) || (isLineaH(colPos,rowPos)) || (isLineaD(colPos,rowPos))){
		return true;
	}
	return false;
}
const isLineaV = (colPos,rowPos) =>{	
	let countFichas = 0;
	if (rowPos <= 3){		
		for (i=rowPos;rowPos <=6;rowPos++){
			if (document.getElementById(colPos+rowPos).classList.contains(playerClass)){
				countFichas += 1;
			}else{
				break;
			}			
		}
		if (countFichas === 4){
			return true;
		}
	}
	return false;
}
const isLineaH = (colPos,rowPos) =>{	
	//iNeedDebugger:debugger;	
	let countFichas = 0;	
		for (i = colPos;i >= 1;i--){
			if (document.getElementById(i+rowPos).classList.contains(playerClass)){
				countFichas += 1;
			}else{
				break;
			}							
		}	
		if (countFichas >= 4){
			return true;
		}else{
			// iNeedDebugger:debugger;				
			for (i = parseInt(colPos)+1;i <= 7; i++){
				if (document.getElementById(i+rowPos).classList.contains(playerClass)){
					countFichas += 1;			
				}else{
					break;
				}		
			}
		}
		if (countFichas >= 4){
			return true;
		}			
	return false;
}

const isLineaD = (colPos,rowPos) =>{
	//iNeedDebugger:debugger;	
	let countFichas = 0;
	let rowPosTochech = rowPos;
		for (i = colPos;i >= 1;i--){
			if (document.getElementById(i.toString()+rowPosTochech.toString()).classList.contains(playerClass)){
				countFichas += 1;
				rowPosTochech = rowPosTochech -1;
			}else{
				break;
				rowPosTochech = rowPos;
			}							
		}	
		
		if (countFichas >= 4){
			return true;
		}else{
			// iNeedDebugger:debugger;
			rowPosTochech = rowPos;				
			for (i = colPos;i <= 7; i++){
				let circleToCheck = i.toString() + rowPosTochech.toString();
				if (document.getElementById(circleToCheck).classList.contains(playerClass)){
					countFichas += 1;
					rowPosTochech = rowPosTochech -1;
				}else{
					break;
				}		
			}
		}
		if (countFichas >= 4){
			return true;
		}			
	return false;
}

const showPossiblePos = (selectedCol) => {
	//debugger;
	let colSelected = selectedCol.substring(3,4);
	let idFirstRoundFree = colSelected + rowFirstFreePlace[colSelected-1];
	//document.getElementById(roundFree).className = "none";
	lastPossibleRound = idFirstRoundFree;
	lastPossibleCol = selectedCol;

	document.getElementById(selectedCol).classList.add("col-selected");
	document.getElementById(selectedCol).classList.remove("col");
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
};


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