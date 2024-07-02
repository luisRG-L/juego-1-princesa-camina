controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    pplayer,
    assets.animation`derecha`,
    200,
    true
    )
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    pplayer,
    assets.animation`izquierda`,
    200,
    true
    )
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    comida = sprites.create(assets.image`comida`, SpriteKind.Food)
    comida.setPosition(pplayer.x, 10)
    comida.setVelocity(0, 50)
})
sprites.onOverlap(SpriteKind.Food, SpriteKind.Projectile, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    sprites.destroy(sprite)
})
scene.onHitWall(SpriteKind.Food, function (sprite, location) {
    sprites.destroy(sprite)
    game.gameOver(false)
})
let comida: Sprite = null
let pplayer: Sprite = null
pplayer = sprites.create(assets.image`Player`, SpriteKind.Player)
pplayer.setPosition(80, 10)
controller.moveSprite(pplayer, 100, 0)
let bol = sprites.create(assets.image`bol`, SpriteKind.Projectile)
bol.setPosition(80, 80)
bol.vx = 100
bol.setBounceOnWall(true)
bol.scale += -0.25
tiles.setCurrentTilemap(tilemap`fondo`)
