let Passager ={
    Prenom : 'John',
    SanteMentale : 10
}

let musique ={
    chanson : ['Anissa','Celui qui part','Je n oublie pas','XS','the Muffin song'],
}

let Trajet ={
    NbreFeuxRouges : 30,
    NombreChangements : 0
}


while(Passager.SanteMentale > 0 && Trajet.NbreFeuxRouges >0){
    chanson_qui_passe = musique.chanson[Math.floor(Math.random() * musique.chanson.length)];
    
    console.log(`feux restants : ${Trajet.NbreFeuxRouges}`);
    console.log(`La chanson dans le taxi est : ${chanson_qui_passe}`);
    
  
    if(chanson_qui_passe=='Anissa'){
        Passager.SanteMentale -=1;
        Trajet.NombreChangements +=1;
        console.log (`Anissa passe dans le taxi, la santé mentale de ${Passager.Prenom} diminue, passe à ${Passager.SanteMentale}, le nombre de changements passe à ${Trajet.NombreChangements}`);
    } else {
    console.log(`Autre chanson, la sante mentale de ${Passager.Prenom} reste à ${Passager.SanteMentale}, le nombre de changements effectué reste à ${Trajet.NombreChangements}`);
    }

        console.log('---------------');
        Trajet.NbreFeuxRouges -=1;
}

if(Passager.SanteMentale == 0){
        console.log ('Explosion ! La santé mentale du passager est à 0 !');
        
} else {
console.log (`Bien arrivé sans explosion mentale, il a fallu à ${Passager.Prenom} ${Trajet.NombreChangements} changements pour effectuer son trajet sans explosion mentale`);
}