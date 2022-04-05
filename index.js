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
let isFirstRun = true;
let posWinner = [];
let userHasWin = false;
let playVSCPU = false;
let isGamePaused = false;

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
		//document.getElementById("nextPlayer").innerHTML = "Le toca al jugador " + 	nextPlayer();
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

function reiniciar(){
	rowFirstFreePlace = [6,6,6,6,6,6,6];
	isNewGame = true;
	jueganRojas = true;
	lastPossibleCol = "";
	fArrowBlink ="";
	seHaMovido = false;	
	jugadorActual = "";
	isGameOver = false;
	playerClass = "";
	clearInterval(arrowBlinkMove);
	clearTimeout(fArrowBlink);
	if (userHasWin){
		clearInterval(lineWinnerBlink);
	}
	document.getElementById("nextPlayer").style.top = "20px";
	const circlesR = document.querySelectorAll('.round-Red');
	circlesR.forEach(element => {
		element.classList.remove("round-Red","round-Used","line-winner");
		element.classList.add("round");
		element.style.visibility = "visible";
	});
	const circlesY = document.querySelectorAll(".round-Yellow");
	circlesY.forEach(element => {
		element.classList.remove("round-Yellow","round-Used","line-winner");
		element.classList.add("round");
		element.style.visibility = "visible";
	});
	// const circlesW = document.querySelectorAll(".line-winner");
	// circlesW.forEach(element => {
	// 	element.classList.remove("line-winner");
	// 	//element.classList.add("round");
	// });
	document.getElementById("nextPlayer").style.fontSize = "1em";
	
	jugar();
	//document.getElementById("nextPlayer").innerHTML = "Le toca al jugador: " + nextPlayer();
}

const jugar = () => {	
	setVisibilityUI("prompt-container","hidden");
	setVisibilityUI("tablero-container","visible");
	setVisibilityUI("btcerrar","visible");
	setVisibilityUI("btrestart","visible");
	setVisibilityUI("btJugar","hidden");
	setVisibilityUI('img-ficha-container',"visible");
	setVisibilityUI('inputs-container',"hidden");

	document.getElementById("nextPlayer").innerHTML = "Le toca al jugador: " + nextPlayer();
	document.getElementById("H1Title").classList.add("H1Vertical","vertical");
	//if (isGameStarted){	
	if(jueganRojas){		
		document.querySelector(".img-ficha-container").classList.add("round-Used", "round-Red");
		document.querySelector(".img-ficha-container").classList.remove("round-Yellow");		
	}else{
		document.querySelector(".img-ficha-container").classList.remove("round-Red");
		document.querySelector(".img-ficha-container").classList.add("round-Used","round-Yellow");		
	};	
	arrowBlinkMove = setInterval(arrowBlink, 1000);		
	const cols = document.querySelectorAll('.col');
	//debugger;
	if (isFirstRun){
		isFirstRun = false;
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
					//console.log(rowFirstFreePlace[parseInt(lastPossibleRound.substring(1,2))-1]);
					if(!isGameOver && (lastPossibleRound.substring(1,2)) >= 1){
						//debugger;
					//if (seHaMovido){
						//debugger;
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
				//debugger;
		
				if (!isWinner(lastPossibleRound.substring(0,1),lastPossibleRound.substring(1,2))){
					document.getElementById("nextPlayer").innerHTML = "Le toca al jugador: " + nextPlayer();
					if(!playVSCPU){
						showPossiblePos(lastPossibleCol);
					}else{
						moveCPU();
					}

					//isNewGame =false;
				}else{
					document.getElementById("nextPlayer").style.textAlign = "center";
					document.getElementById("nextPlayer").style.fontSize = "34px";
					document.getElementById("nextPlayer").innerHTML = "¡El jugador " + jugadorActual + " ha ganado!";
					isGameOver = true;
					clearInterval(arrowBlinkMove);					
					clearTimeout(fArrowBlink);
					setVisibilityUI("tablero-Up","hidden");					
					setVisibilityUI('img-ficha-container',"hidden");
					setVisibilityUI('img-container',"hidden");
					showLineWinner();
					document.getElementById("nextPlayer").style.top = "-586px";
					lineWinnerBlink = setInterval(lineBlink, 1000);					
				}
					//seHaMovido = false;
			//}
				}});
					
		});
	}
	}

	const moveCPU = () =>{
		let imgFichaClase = "round-Yellow";
		let bestPosition = findBestPos();
		document.querySelector(".img-ficha-container").classList.remove("round-Red");
		document.querySelector(".img-ficha-container").classList.add(imgFichaClase);
		document.getElementById(bestPosition).classList.add("round-Used", imgFichaClase);
		jueganRojas = true;
	}
	const findBestPos = () =>{	
		for (let i = 0; i <= rowFirstFreePlace.length-1;i++){			
			let rowPos = rowFirstFreePlace[i];
			let colPos = i + 1;
			if (isWinner(colPos,rowPos)){
				return(colPos + rowPos);
			}
		}
	}
	const showLineWinner = () =>{				
		console.log(posWinner);
		for (i = 0; i <= posWinner.length-1;i++){
			document.getElementById(posWinner[i]).classList.add("line-winner","round");
			document.getElementById(posWinner[i]).classList.remove("round-Used");
		};
		document.querySelector(".col-selected").classList.add("col");
		document.querySelector(".col-selected").classList.remove("col-selected");
	
		
	}	

const isWinner = (colPos,rowPos) =>{
		
	if (colPos >=1 && rowPos >= 1){
		if ((isLineaV(colPos,rowPos)) || (isLineaH(colPos,rowPos)) || (isLineaD(colPos,rowPos))){
			userHasWin = true;
			return true;
		}
	}
		return false;
}
const isLineaV = (colPos,rowPos) =>{	
	let countFichas = 0;
	
	if (rowPos <= 3){		
		for (i=rowPos;rowPos <=6;rowPos++){
			if (document.getElementById(colPos + rowPos).classList.contains(playerClass)){
				posWinner[countFichas] = colPos.toString() + rowPos.toString();
				countFichas += 1;
			}else{
				break;
			}			
		}
		if (countFichas === 4){
			//console.log(posWinner);
			return true;
		}
	}
	return false;
}
const isLineaH = (colPos,rowPos) =>{	
	posWinner = [];
	let countFichas = 0;	
		for (i = colPos;i >= 1;i--){
			if (document.getElementById(i + rowPos).classList.contains(playerClass)){
				posWinner[countFichas] = i.toString() + rowPos.toString();
				countFichas += 1;
			}else{
				break;
			}							
		}	
		if (countFichas >= 4){
			//console.log(posWinner);
			return true;
		}else{
			// iNeedDebugger:debugger;				
			for (i = parseInt(colPos)+1;i <= 7; i++){
				if (document.getElementById(i+rowPos).classList.contains(playerClass)){
					posWinner[countFichas] = i.toString() + rowPos.toString();
					countFichas += 1;			
				}else{
					break;
				}		
			}
		}
		if (countFichas >= 4){
			//console.log(posWinner);
			return true;		}			
	return false;
}

const isLineaD = (colPos,rowPos) =>{		
	let countFichas = 0;
	posWinner = [];
	//debugger;
	let rowPosTochech = rowPos;
		for (i = colPos;i >= 1;i--){
			if (document.getElementById(i.toString()+rowPosTochech.toString()).classList.contains(playerClass)){
				posWinner[countFichas] = i.toString()+rowPosTochech.toString();
				countFichas += 1;
				rowPosTochech = parseInt(rowPosTochech) -1;
				if(rowPosTochech === 0){
					break;
				}
			}else{
				break;
				rowPosTochech = rowPos;
			}							
		}			
		if (countFichas >= 4){
			//console.log(posWinner);
			return true;
		}else{			
			rowPosTochech = parseInt(rowPos)+1;				
			for (i = parseInt(colPos)+1;i <= 7; i++){
				if(rowPosTochech <= 6){
				let circleToCheck = i.toString() + rowPosTochech.toString();				
					if (document.getElementById(circleToCheck).classList.contains(playerClass)){
						posWinner[countFichas] = i.toString()+rowPosTochech.toString();
						countFichas += 1;
						rowPosTochech = parseInt(rowPosTochech) + 1;
					}else{
						break;
					}
				}		
			}
		}
		if (countFichas >= 4){
			//console.log(posWinner);
			return true;
		}else{
			//iNeedDebugger:debugger;
			posWinner = [];
			countFichas = 0;
			rowPosTochech = rowPos;
			for (i = colPos;i >= 1;i--){
				if(rowPosTochech <= 6){
					if (document.getElementById(i.toString()+rowPosTochech.toString()).classList.contains(playerClass)){
						posWinner[countFichas] = i.toString()+rowPosTochech.toString();
						countFichas += 1;
						rowPosTochech = parseInt(rowPosTochech)+1;
					}else{
						break;
						rowPosTochech = rowPos;
					}
				}							
			}			
			if (countFichas >= 4){
				//console.log(posWinner);
				return true;
			}else{				
				rowPosTochech = rowPos;				
				for (i = parseInt(colPos)+1;i <= 7; i++){
					if(rowPosTochech <= 6){
					let circleToCheck = i.toString() + rowPosTochech.toString();
					if (document.getElementById(circleToCheck).classList.contains(playerClass)){
						posWinner[countFichas] = i.toString()+rowPosTochech.toString();
						countFichas += 1;
						rowPosTochech = parseInt(rowPosTochech) -1;
						if(rowPosTochech === 0){
							break;
						}
					}else{
						break;
					}	
				}	
			}			
		}
			if (countFichas >= 4){
				//console.log(posWinner);
				return true;
			}
		}			
	return false;
}

const showPossiblePos = (selectedCol) => {
	//debugger;
	let colSelected = selectedCol.substring(3,4);
	//if(!rowFirstFreePlace[colSelected-1]===1){
		let idFirstRoundFree = colSelected + rowFirstFreePlace[colSelected-1];
	lastPossibleRound = idFirstRoundFree;
	lastPossibleCol = selectedCol;
	
	//document.getElementById(roundFree).className = "none";
	if (lastPossibleRound.substring(1,2)>=1){
	

	document.getElementById(selectedCol).classList.add("col-selected");
	document.getElementById(selectedCol).classList.remove("col");
	//document.getElementById(idFirstRoundFree).classList.add("round-PossiblePos");
	if(jueganRojas){
		console.log(idFirstRoundFree);
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
//+}
	}
};

const lineBlink= () => {
	if(userPlayed && !isGameOver){
		clearInterval(lineWinnerBlink);
		}else{
			const circlesWinner = document.querySelectorAll(".line-winner");
			fArrowBlink = setTimeout(function(){
				if(!isGamePaused){
					circlesWinner.forEach(element=>{
					//iNeedDebugger:debugger;
						element.style.visibility = "visible";
					})	
				}		
			}, 500);
		circlesWinner.forEach(element=>{
			//iNeedDebugger:debugger;
			element.style.visibility = "hidden";
			})

		
	}
	
}

const arrowBlink= () => {
	if(userPlayed && !isGameOver){
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
		//debugger;
		if(document.querySelector("#rd_GameType2:checked")){
			playVSCPU = true;
		}
		jugar();
	};

	function volver(id){	
		isGamePaused = false;
		setVisibilityUI("prompt-container","hidden");
		setVisibilityUI("btsalir","hidden");
		setVisibilityUI("btvolver","hidden");
		setVisibilityUI("btcerrar","visible");
		setVisibilityUI("btrestart","visible");
		setVisibilityUI("tablero-container","visible");
		setVisibilityUI("bt","visible");
		document.querySelector(".H1Vertical").classList.add("vertical");	
		if(!userHasWin){
			setVisibilityUI("img-ficha-container","visible");
			arrowBlinkMove = setInterval(arrowBlink, 1000);
		}else{
			lineWinnerBlink = setInterval(lineBlink, 1000);	
			const circlesWinner = document.querySelectorAll(".line-winner");			
			circlesWinner.forEach(element=>{		
				element.style.visibility = "visible";
			})
		}
		// setVisibilityUI("img-container","hidden");
		// setVisibilityUI("inputs-container","hidden");
		//setVisibilityUI("btJugar","hidden");

		document.getElementById("H1Title").style.visibility = "visible";		
		userPlayed = false;	
	};

	function cerrar(){
		// iNeedDebugger:debugger;
		userPlayed = true;
		clearInterval(arrowBlinkMove);
		clearTimeout(fArrowBlink);
		if (userHasWin){
			clearInterval(lineWinnerBlink);
			const circles = document.querySelectorAll(".round");
			circles.forEach(element=>{
				//iNeedDebugger:debugger;
				element.style.visibility = "hidden";
				})
			
		}
		isGamePaused = true;
		showMessageToUser("close");	
			
	};

	function salir(id){
		clearInterval(arrowBlinkMove);
		clearTimeout(fArrowBlink);
		if (userHasWin){
			clearInterval(lineWinnerBlink);
		}
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
				title = "<h1>CONECTA 4</h1><br><br>FINALIZAR JUEGO";
				obs = "¿Está seguro?";
				setVisibilityUI("prompt-container","visible");
				setVisibilityUI("btStart","hidden");
				setVisibilityUI("btcerrar","hidden");
				setVisibilityUI("btsalir","visible");
				setVisibilityUI("btvolver","visible");
				setVisibilityUI("btrestart","hidden");
				setVisibilityUI("tablero-container","hidden");
				setVisibilityUI("img-container","hidden");
				setVisibilityUI("inputs-container","hidden");
				setVisibilityUI("btJugar","hidden");
				setVisibilityUI("img-ficha-container","hidden");
				setVisibilityUI("bt","hidden");
				setVisibilityUI("round","hidden");
				document.querySelector(".vertical").classList.remove("vertical");
				document.getElementById("H1Title").style.visibility = "hidden";				
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