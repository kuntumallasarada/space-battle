//Earth Ship
class myShip{

    constructor(hull,firepower,accuracy)
    {
        this.hull = hull;
        this.firepower = firepower;
        this.accuracy = accuracy; 
    }

}
let  myShip1 = new myShip(20,5,0.7);

// Alien Ship

let  alienArray = [];
class alienShip{

   
    constructor(hull,firepower,accuracy)
    {
        this.hull = hull;
        this.firepower = firepower;
        this.accuracy = accuracy;  
    }    
      
}

let randomNumber = (min, max) =>{ 
    return Math.random() * (max - min) + min;
} 

for(let i=0;i<6;i++)
{
    let alienShips = new alienShip(Math.floor(randomNumber(3,6)),Math.floor(randomNumber(2,4)),randomNumber(0.6,0.8));
    alienArray.push(alienShips);
    
};


//Earth ship attacking aliens first
let attack =()=>{
    earthAttack(myShip1,alienArray);
}

let earthAttack = (earthShip,alienShipArray) => {
    
 
    for(let i=0;i<=alienShipArray.length;i++)
   {
      i=0;
     if(Math.random() < alienShipArray[i].accuracy)
     {
            
       let alienHullLeft = alienShipArray[i].hull-earthShip.firepower;
            alert(`Alien Ship  has been hit and has a hull of ${alienHullLeft} now.`);

       if(alienHullLeft<=0)
        {
          alert(`Alien Ship is destroyed`);
          alienShipArray.splice(i,1);
          if(alienShipArray.length==0){
            alert("All Alien Ships are destroyed and You won the game!!!!!");
        }
        else{
          alert(`Available Alien Ships ${alienShipArray.length}`);
          
          let input = prompt("Do you want to continue or retreat? Select A to Attack and R for Retreat");
            if(input=="A" || input == "a"){
                
              }
          else if(input == "R" || input == "r"){
              alert("Game is Over. Earth's Ship retreated.");
              alienShipArray=[];
                  }  
        //    else if(!input)
        //    {
        //     alert("Please select one option");
        //       let input1 = prompt("Do you want to continue or retreat? Select A to Attack and R for Retreat");
        //           if(input1=="A" || input1 == "a"){
            
        //              }
        //            else if(input1 == "R" || input1 == "r"){
        //            alert("Game is Over. Earth's Ship retreated.");
        //             alienShipArray=[];
        //            }  
        //     }       
            }     
        }
     
        else{
            //Alien Ship attacking Earth's Ship
            let earthHullLeft = earthShip.hull-alienShipArray[i].firepower;
           alert(`Alien Ship is attacking Earth's ship and Earth's Ship has hull of ${earthHullLeft} now.`);
          
              if(earthHullLeft<=0){
                   alert(`Earth's Ship is destroyed and you lost the game.`);
                   alienShipArray = [];
               }
               else{
                earthShip.hull= earthHullLeft;
                alert("Earth Ship is attacking Alien Ship now!");
               
               }

           }
     } 
    }
};

const button = document.querySelector("#start");
//add an event listener to the button
button.addEventListener('click',attack);


