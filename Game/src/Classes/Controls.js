class Controls extends Phaser.Input.InputPlugin{
    //Constructor
    constructor(scene, player){
        super(scene);
        this.player = player;
        this.scene = scene;
        this.impulsePercentage = 0;
        this.keyboardInput =  scene.input.keyboard.addKeys({
            'up': Phaser.Input.Keyboard.KeyCodes.W,
            'left': Phaser.Input.Keyboard.KeyCodes.Q,
            'right': Phaser.Input.Keyboard.KeyCodes.E
        });

        if (scene.sys.game.device.os.android){
            console.log("OS: Android");
            this.setControlsMobile();
        }else if(scene.sys.game.device.os.chromeOS){
            console.log("OS: Chrome");
            this.setControlsPc();
        }else if(scene.sys.game.device.os.webApp){
            console.log("OS: WebApp");
            this.setControlsPc();
        }else if(scene.sys.game.device.os.desktop){
            console.log("OS: Desktop");
            this.setControlsPc();
        }
    };

    setControlsPc(){
        this.controlType = "Pc";
        let p = this.player;
        let k = this.keyboardInput;
        this.scene.input.keyboard.on('keydown_W', function(){
            if(k.up.isDown) {
                this.impulsePercentage = p.movementBar.getImpulse();
                p.body.velocity.y = (-400 * this.impulsePercentage); //It's like an instant acceleration
            }
        });
        this.scene.input.keyboard.on('keydown_Q', function(){
            if(k.left.isDown) {
                this.impulsePercentage = p.movementBar.getImpulse();
                p.body.velocity.y = (-400 * this.impulsePercentage);
                p.body.velocity.x = (-200 * this.impulsePercentage);
            }
        });
        this.scene.input.keyboard.on('keydown_E', function(){
            if(k.right.isDown) {
                this.impulsePercentage = p.movementBar.getImpulse();
                p.body.velocity.y = (-400 * this.impulsePercentage);
                p.body.velocity.x = (200 * this.impulsePercentage);
            }
        });
    };

    setControlsMobile(){
        this.controlType = "Mobile";
        let p = this.player;
        this.scene.input.on('pointerdown', function(pointer){
            let xVelocity;
            this.impulsePercentage = p.movementBar.getImpulse();
            if(pointer.y >= 75){
                if (pointer.x <= game.config.width / 3) { //Left third of the screen
                    xVelocity = -200;
                } else if (pointer.x >= (game.config.width / 3) * 2) { //Right third of the screen
                    xVelocity = 200;
                } else { //Middle third of the screen
                    xVelocity = 0;
                }
                this.impulsePercentage = p.movementBar.getImpulse();
                p.body.velocity.y = (-400 * this.impulsePercentage);
                p.body.velocity.x = (xVelocity * this.impulsePercentage);
            }
        });
    }

    // Jump(){
    //     let impulsePercentage = this.player.movementBar.getImpulse();
    //
    //     //[HERE]
    //     this.player.body.velocity.y = (-400 * impulsePercentage); //It's like an instant acceleration
    //
    //     if (this.keyboardInputs.left.isDown)
    //         this.player.body.velocity.x = (-200 * impulsePercentage);
    //
    //     else if (this.keyboardInputs.right.isDown)
    //         this.player.body.velocity.x = (200 * impulsePercentage);
    //  }
}