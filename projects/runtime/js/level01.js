var level01 = function (window) {

    window.opspark = window.opspark || {};

    var draw = window.opspark.draw;
    var createjs = window.createjs;

    window.opspark.runLevelInGame = function(game) {
        // some useful constants 
        var groundY = game.groundY;

        // this data will allow us to define all of the
        // behavior of our game
        var levelData = {
            "name": "Robot Romp",
            "number": 1, 
            "speed": -3,
            "gameItems": [
                { "type": "sawblade", "x": 400, "y": groundY },
                { "type": "sawblade", "x": 600, "y": groundY },
                { "type": "sawblade", "x": 900, "y": groundY },
                { "type": "myObstacle", "x": 100, "y": 200}
            ]
        };
        window.levelData = levelData;
        // set this to true or false depending on if you want to see hitzones
        game.setDebugMode(true);

        // BEGIN EDITING YOUR CODE HERE
       
        
        function createSawBlade(x, y) {
             var hitZoneSize = 25;
        var damageFromObstacle = 10;
        var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);
        sawBladeHitZone.x = x;
        sawBladeHitZone.y = y;
        game.addGameItem(sawBladeHitZone);
        var obstacleImage = draw.bitmap('img/sawblade.png');
        sawBladeHitZone.addChild(obstacleImage);
        obstacleImage.x = -25;
        obstacleImage.y = -25;
        }
        
        for (var i = 0; i < levelData.gameItems.length; i++) {
            var eachElement = levelData.gameItems[i];
        createSawBlade(eachElement.x, eachElement.y);
        }
        
        function createMyObstacle(x,y) {
            var hitZoneSize = 25;
        var damageFromObstacle = 10;
        var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);
        sawBladeHitZone.x = x;
        sawBladeHitZone.y = y;
        game.addGameItem(sawBladeHitZone);
        var obstacleImage = draw.bitmap('img/tumbleweed.png');
        sawBladeHitZone.addChild(obstacleImage);
        obstacleImage.x = -35;
        obstacleImage.y = -35;
        }
        createMyObstacle(500,groundY -50);
        createMyObstacle(900,groundY-50);
        createMyObstacle(1500, groundY-50);
        
        function createEnemy(x, y) {
         var enemy = game.createGameItem('enemy', 25);
        var redSquare = draw.bitmap('img/snake.png');
        redSquare.x = -25;
        redSquare.y = -25;
        enemy.addChild(redSquare);
        enemy.x = x;
        enemy.y = y;
        game.addGameItem(enemy);
        enemy.velocityX = -1;
        //enemy.rotationalVelocity = 10;
        enemy.onPlayerCollision = function() {
            console.log('The enemy has hit Halle');
            game.changeIntegrity(-10);
        }
        enemy.onProjectileCollision = function() {
            game.increaseScore(100);
            enemy.fadeOut();
        }   
        }
        createEnemy(400, groundY-10);
        createEnemy(800, groundY-100);
        createEnemy(1200, groundY-50);
        
        function createReward(x, y) {
         var reward = game.createGameItem('reward', 25);
        var redSquare = draw.bitmap('img/water.png');
        redSquare.x = -25;
        redSquare.y = -25;
        reward.addChild(redSquare);
        reward.x = x;
        reward.y = y;
        game.addGameItem(reward);
        reward.velocityX = -1;
        //enemy.rotationalVelocity = 10;
        reward.onPlayerCollision = function() {
            console.log('The reward has hit Halle');
            game.changeIntegrity(20);
            reward.fadeOut();
        }
        
        }
        createReward(500, groundY-100);
        createReward(1000, groundY-100);
        createReward(1600, groundY-100);
        // DO NOT EDIT CODE BELOW HERE
    }
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = level01;
}
