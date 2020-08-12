	var sujet = ["Le roi du monde", "Elle", "Le chien", "Une casserole", "Bobby", "Le chat", "Le voisin", "Le président"];
	var verbe = ["aime", "rencontre", "voit", "sauve", "pense à", "apprend","s'amuse avec","mange", "range", "glisse sur"];
	var complement = ["une maison", "une omelette", "une rayure", "une porte", "une cuisine", "une fille","une poule","une banane"];
	var adjectif =["ridicule" , "baveuse", "orgueilleuse", "neuve", "blonde", "rouge", "moche", "jolie"];
	var action = [ "et s'enfuit", "et ramasse un papier", "et lit le journal", "et accepte sa destinée", "et sauve le monde", "et s'endort", "et se lave les pieds"];
  
	let lire = document.getElementById("lire");
	let absurde = document.getElementById("pAbsurd");
	
    
	lire.addEventListener("click",run);

	function run(){
		function aleatoire(arr){
		return arr[Math.floor(Math.random() * arr.length)];
	}
	absurde.innerHTML = aleatoire(sujet) + " " + aleatoire(verbe) + " " + aleatoire(complement) + " " + aleatoire(adjectif) + " " + aleatoire(action) + " " + "!";
	}
    
	

