var score=[0,0];
var roundScore=0;
var activePlayer=0;
var global_score=0;
document.querySelector('.dice').style.display='none';

//console.log(dice);
//document.querySelector('#current-'+activePlayer).textContent=dice;

//var sc=document.querySelector('#current-0').textContent;
//console.log(sc);
//document.querySelector('.dice').style.display='dice-'+dice+'.png';

function btn(){
    
    var dice=Math.floor(Math.random()*6)+1;
    var nonactive=0;
    document.querySelector('.dice').style.display='none';
    document.querySelector('#current-'+activePlayer).textContent=dice;
    document.querySelector('.dice').style.display='block';
    document.querySelector('.dice').src='dice-'+dice+'.png';
    if(dice==1){
        activePlayer==0?activePlayer=1:activePlayer=0;
        activePlayer==0?nonactive=1:nonactive=0;
        roundScore=0;
        document.querySelector('#current-'+activePlayer).textContent=0;
        document.querySelector('.player-'+nonactive+'-panel').classList.remove('active');
        document.querySelector('.player-'+activePlayer+'-panel').classList.add('active');
        document.querySelector('.dice').style.display='none';
    }
    else{
        //var curr=document.querySelector('#current-'+activePlayer).textContent;
        roundScore+=dice;
        document.querySelector('#current-'+activePlayer).textContent=roundScore;
    }
}
function btnHold(){
    var curr=document.querySelector('#current-'+activePlayer).textContent;
    var glo=document.querySelector('#score-'+activePlayer).textContent;
    global_score=parseInt(curr)+parseInt(glo);
    document.querySelector('#score-'+activePlayer).textContent=global_score;
    if(global_score>=100){
        document.querySelector('#name-'+activePlayer).textContent='Winner!';
        document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
        document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
        return;
    }
    activePlayer==0?activePlayer=1:activePlayer=0;
    activePlayer==0?nonactive=1:nonactive=0;
    document.querySelector('#current-'+activePlayer).textContent=0;
    document.querySelector('#current-'+nonactive).textContent=0;
    roundScore=0;
    document.querySelector('.player-'+nonactive+'-panel').classList.remove('active');
    document.querySelector('.player-'+activePlayer+'-panel').classList.add('active');
    document.querySelector('.dice').style.display='none';
}
document.querySelector('.btn-roll').addEventListener('click',btn);
document.querySelector('.btn-hold').addEventListener('click',btnHold);
document.querySelector('.btn-new').addEventListener('click',function(){
    window.location.reload();
});