let game;

window.onload = function () {
    const config = {
        type: Phaser.AUTO,
        width: 768,        //The FoV of our camera will be the width x height we write here
        height: 1365,
        title: 'Flyguins',
        version: '1.0',
        pixelArt: false,
        scene: [
            Scene_00_0_Charge,
            Scene_01_0_Preload,
            Scene_01_1_MusicManager,
            Scene_02_0_MainMenu,
            Scene_02_1_HowToPlay,
            Scene_02_2_Tutorial,
            Scene_02_3_Credits,
            Scene_02_4_Shop,
            Scene_02_5_ChooseMode,
            Scene_02_6_Settings,
            Scene_03_0_Lobby,
            Scene_04_1_Level_01,
            Scene_04_2_Level_02,
            Scene_04_3_Level_03,
            Scene_04_0_InGameHUD,
            Scene_05_0_Ranking
        ],
        physics: {
            default: 'arcade',
            arcade: {
                gravity: {y: 300},
                isPaused: false,
                debug: false
            },
        },
        scale: {
            autoCenter: Phaser.Scale.CENTER_BOTH,
            mode: Phaser.Scale.FIT,
            parent: 'mainCanvas'
        },
    };

    game = new Phaser.Game(config);
    game.global = {
        lastTime: new Date().getTime(),
        deltaTime: 0
    };

    window.focus();
}

function SetDeltaTime() {
    let time = new Date().getTime();
    let deltaTime = (time - game.global.lastTime) / 1000;
    game.global.lastTime = time;
    game.global.deltaTime = deltaTime;
}

function GetDeltaTime(){
    return game.global.deltaTime;
}
