let Tueur ={
    Prenom : 'Jason',
    PointsVie : 100
}

let personnage ={
    roles : ['sportif/ve','intello','populaire','gameur/euse', 'stagiaire'],
    noms : ['Marcel','Matt','Louise','Margot','Theo','Adrien','Michel','Georges','Flore','Clara','Dora','Nicky','Peter','Thierry','Val','Castor','Laure','Pascalou','Mathilde','Garance','Alex']
}

class survivant{
    constructor(){
        this.nom = personnage.noms[Math.floor(Math.random() * personnage.noms.length)];
        this.role = personnage.roles[Math.floor(Math.random() * personnage.roles.length)];
        this.mort = Math.floor(Math.random() * 10);
        this.esquive = Math.floor(Math.random() * (10 - this.mort));
        this.mortdegat = 10-this.mort-this.esquive;
        this.probabilite = [];
        this.mortpendantlejeu = false;
        
        for (let k=0 ; k<this.esquive ; k++){
            this.probabilite.push('Esquive');
        }
        for (let k=0 ; k<this.mort ; k++){
            this.probabilite.push('Mort');
        }
    
        for (let k=0 ; k<this.mortdegat ; k++){
            this.probabilite.push('Mort et degat');
        }

    }
}
let gens1 = new survivant();
let gens2 = new survivant();
let gens3 = new survivant();
let gens4 = new survivant();
let gens5 = new survivant();
console.log (gens1);
console.log (gens2);
console.log (gens3);
console.log (gens4);
console.log (gens5);

let vivants = [gens1,gens2,gens3,gens4,gens5];
let morts = [];


NbreIterations = 5

while(Tueur.PointsVie > 0 && vivants.length > 0 && NbreIterations >0){
    let gensrandom = vivants[Math.floor(Math.random() * vivants.length)];
    let action = gensrandom.probabilite[Math.floor(Math.random() * gensrandom.probabilite.length)];
    
    console.log('dans la boucle');
    console.log (gensrandom);
    console.log (action);


    if (action=='Mort et degat'){
        morts.push(gensrandom.nom);
        gensrandom.mortpendantlejeu = true; // Marquer la personne comme morte pendant le jeu;
        Tueur.PointsVie-=15;
        console.log(`Jason a attrape et tue ${gensrandom.nom} mais ce dernier ou cette derniere avant de mourir a inflige 15 points de degats à Jason.`);
        console.log(`il reste donc ${Tueur.PointsVie} points de vie à Jason.`);}
    
    if(action=='Esquive'){
        console.log ('cas Esquive, 10 points en moins pour Jason');
        Tueur.PointsVie-=10}

    if(action=='Mort'){
        morts.push(gensrandom.nom);
        gensrandom.mortpendantlejeu = true; // Marquer la personne comme morte pendant le jeu;
        console.log ('cas Mort');}

// Retirer les survivants marqués comme morts du tableau vivants
vivants = vivants.filter(survivant => !survivant.mortpendantlejeu);


if(Tueur.PointsVie<=0){
    console.log("Jason est mort,");
    console.log('les survivants ont gagne, mais ${mort} ont peri durant la juste la lutte.');
} else {
    console.log("le jeu se poursuit");
}

console.log (Tueur.PointsVie);
console.log (NbreIterations);
console.log('Restent vivants : ');
for (const survivant of vivants) {
    console.log(survivant.nom);
}
console.log('La liste des morts ci-dessous :'); 
console.log(morts);
NbreIterations -=1;
}

