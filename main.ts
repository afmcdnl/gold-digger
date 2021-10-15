let player = game.createSprite(2, 3)
let gold = game.createSprite(randint(0, 4), 0)
let score = 0
basic.forever(function () {
    gold.change(LedSpriteProperty.Y, 1)
    basic.pause(500)
    if (gold.isTouching(player)) {
        game.addScore(1)
        gold.delete()
    }
    if (gold.get(LedSpriteProperty.Y) == 4) {
        gold.delete()
        gold = game.createSprite(randint(0, 4), 0)
    }
})
basic.forever(function () {
    if (0 < input.acceleration(Dimension.X)) {
        player.change(LedSpriteProperty.X, 1)
        basic.pause(200)
    }
    if (0 > input.acceleration(Dimension.X)) {
        player.change(LedSpriteProperty.X, -1)
        basic.pause(200)
    }
})
