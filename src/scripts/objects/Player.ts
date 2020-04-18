export default class Player extends Phaser.Physics.Arcade.Sprite {
    body: Phaser.Physics.Arcade.Body;
    velY: number;
    moving: boolean;

    constructor(scene, x: number, y: number) {
        super(scene, x, y, 'player');
        scene.physics.add.existing(this);
        scene.add.existing(this);
        this.body.setSize(25,28);
        this.play("player_anim");
        this.velY = 0;
        this.body.setCollideWorldBounds(true);
        this.setDepth(1);
        
    }
}
