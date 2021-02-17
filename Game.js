class Game
{
    constructor()
    {

    }
    getState()
    {
        var gameStateref = database.ref("GameState");
        gameStateref.on("value",function(data){gameState = data.val();});
    }
    updateState(state)
    {
        database.ref("/").update({GameState : state});
    }
    start()
    {
        if (gameState === 0)
        {
            player = new Player();
            player.getCount();
            form = new Form();
            form.display();
        }
    }
    play()
    {
        form.hide();
        textSize(30);
        text("Game Start",120,100);

        Player.getPlayerInfo();
        if (AllPlayers!==undefined)
        {
            var DisplayPosition = 130;

            //for(var i = 0;i<AllPlayers.length;i++)
            for(var i in AllPlayers)
            {
                if (i == "Player"+player.index){
                    fill("red");
                }else{
                    fill("black");
                }
                DisplayPosition = DisplayPosition+20;
                textSize(15);
                text(AllPlayers[i].name+" : "+AllPlayers[i].distance,120,DisplayPosition);
            }

        }
        if (keyIsDown(UP_ARROW) && player.index!==null)
        {
            player.distance+=50;
            player.update();
        }
    }
}