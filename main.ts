namespace SpriteKind {
    export const armor = SpriteKind.create()
    export const armora = SpriteKind.create()
    export const amorb = SpriteKind.create()
    export const armorc = SpriteKind.create()
}
function makemap () {
    tiles.setTilemap(tilemap`level_2`)
    mySprite4.say("Level 1", 1000)
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairLadder, function (sprite, location) {
    tiles.setTilemap(tilemap`level_2`)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.greenSwitchUp, function (sprite, location) {
    tiles.setTileAt(tiles.getTileLocation(8, 11), sprites.dungeon.floorDarkDiamond)
    mySprite32 = sprites.create(img`
        . . . . . f c c c c f . . . . . 
        . . c c f b b 3 3 b b f c c . . 
        . c b 3 3 b b c c b b 3 3 b c . 
        . f 3 c c c b c c b c c c 3 f . 
        f c b b c c b c c b c c b b c f 
        c 3 c c b c c c c c c b c c 3 c 
        c 3 c c c c c c c c c c c c 3 c 
        . f b b c c c c c c c c b b f . 
        . . f b b c 8 9 9 8 c b b f . . 
        . . c c c f 9 3 1 9 f c c c . . 
        . c 3 f f f 9 3 3 9 f f f 3 c . 
        c 3 f f f f 8 9 9 8 f f f f 3 c 
        f 3 c c f f f f f f f f c c 3 f 
        f b 3 c b b f b b f b b c 3 b f 
        . c b b 3 3 b 3 3 b 3 3 b b c . 
        . . f f f f f f f f f f f f . . 
        `, SpriteKind.Food)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava0, function (sprite, location) {
    info.changeLifeBy(-1)
    game.reset()
    info.setLife(randint(1, 5))
})
scene.onOverlapTile(SpriteKind.Player, sprites.vehicle.roadHorizontal, function (sprite, location) {
    
    tiles.setTilemap(tilemap`level_4`)
    tiles.placeOnRandomTile(mySprite4, sprites.dungeon.floorDark2)
    tiles.placeOnRandomTile(mySprite22, sprites.dungeon.stairWest)
    info.setLife(randint(1, 5))
    mySprite4.say("Level 2", 1000)
    tiles.placeOnRandomTile(mySprite32, sprites.dungeon.floorLight0)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    tiles.setTilemap(tilemap`level_4`)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava1, function (sprite, location) {
    info.changeLifeBy(-1)
    game.reset()
    info.setLife(randint(1, 5))
})
function jude_funtion (judesprite: Sprite) {
    mySprite42 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f . . . . . . . 
        . . . f f f 2 2 f f f . . . . . 
        . . f f f 2 2 2 2 f f f . . . . 
        . f f f e e e e e e f f f . . . 
        . f f e 2 2 2 2 2 2 e e f . . . 
        . f e 2 f f f f f f 2 e f . . . 
        . f f f f e e e e f f f f . . . 
        f f e f b f 4 4 f b f e f f . . 
        f e e 4 1 f d d f 1 4 e e f . . 
        . f f f f d d d d d e e f . . . 
        f d d d d f 4 4 4 e e f . . . . 
        f b b b b f 2 2 2 2 f 4 e . . . 
        f b b b b f 2 2 2 2 f d 4 . . . 
        . f c c f 4 5 5 4 4 f 4 4 . . . 
        . . f f f f f f f f . . . . . . 
        `, SpriteKind.Player)
}
info.onLifeZero(function () {
    game.over(false, effects.blizzard)
    game.reset()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    mySprite4.destroy(effects.rings, 500)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-5)
})
let mySprite42: Sprite = null
let mySprite32: Sprite = null
let mySprite5: Sprite = null
let mouse_left_click_overlaps_upgrade = 0
let middle_mouse_button_pressed = 0
let if_score_at_0 = 0
let myDart = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`)
let mySprite = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`)
let mySprite22: Sprite = null
let mySprite4: Sprite = null
mySprite4 = sprites.create(img`
    ........................
    .....ffff...............
    ...fff22fff.............
    ..fff2222fff............
    .fffeeeeeefff...........
    .ffe222222eef...........
    .fe2ffffff2ef...........
    .ffffeeeeffff...........
    ffefbf44fbfeff..........
    fee41fddf14eef..........
    .ffffdddddeef...........
    fddddf444eef............
    fbbbbf2222f4e...........
    fbbbbf2222fd4...........
    .fccf45544f44...........
    ..ffffffff..............
    ....ff..ff..............
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    `, SpriteKind.Player)
mySprite22 = sprites.create(img`
    . . . . c c c c c c . . . . . . 
    . . . c 6 7 7 7 7 6 c . . . . . 
    . . c 7 7 7 7 7 7 7 7 c . . . . 
    . c 6 7 7 7 7 7 7 7 7 6 c . . . 
    . c 7 c 6 6 6 6 c 7 7 7 c . . . 
    . f 7 6 f 6 6 f 6 7 7 7 f . . . 
    . f 7 7 7 7 7 7 7 7 7 7 f . . . 
    . . f 7 7 7 7 6 c 7 7 6 f c . . 
    . . . f c c c c 7 7 6 f 7 7 c . 
    . . c 7 2 7 7 7 6 c f 7 7 7 7 c 
    . c 7 7 2 7 7 c f c 6 7 7 6 c c 
    c 1 1 1 1 7 6 f c c 6 6 6 c . . 
    f 1 1 1 1 1 6 6 c 6 6 6 6 f . . 
    f 6 1 1 1 1 1 6 6 6 6 6 c f . . 
    . f 6 1 1 1 1 1 1 6 6 6 f . . . 
    . . c c c c c c c c c f . . . . 
    `, SpriteKind.Enemy)
mySprite4.setFlag(SpriteFlag.StayInScreen, true)
mySprite4.setFlag(SpriteFlag.StayInScreen, true)
makemap()
info.setLife(50)
info.setScore(10)
tiles.placeOnRandomTile(mySprite22, sprites.dungeon.floorDarkDiamond)
if (if_score_at_0) {
    game.over(false)
} else {
    
}

if (middle_mouse_button_pressed) {
}
if (mouse_left_click_overlaps_upgrade) {
    mySprite5 = sprites.create(img`
        ........................
        .....ffff...............
        ...fffccfff.............
        ..fffccccfff............
        .fffccccccfff...........
        .ffcccccccccf...........
        .fccffffffccf...........
        .ffffeeeeffff...........
        ffcfcf44fbfcff..........
        fccccfddf14ccf..........
        .ffffdddddccf...........
        fddddfcccccf............
        fbbbbfccccfcc...........
        fbbbbfccccfcc...........
        .fccfcccccfcc...........
        ..ffffffff..............
        ....ff..ff..............
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        `, SpriteKind.Player)
} else {
    mySprite4 = sprites.create(img`
        ........................
        .....ffff...............
        ...fff22fff.............
        ..fff2222fff............
        .fffeeeeeefff...........
        .ffe222222eef...........
        .fe2ffffff2ef...........
        .ffffeeeeffff...........
        ffefbf44fbfeff..........
        fee41fddf14eef..........
        .ffffdddddeef...........
        fddddf444eef............
        fbbbbf2222f4e...........
        fbbbbf2222fd4...........
        .fccf45544f44...........
        ..ffffffff..............
        ....ff..ff..............
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        `, SpriteKind.Player)
}
let set_hunger_to_10 = 1
tiles.placeOnRandomTile(mySprite4, sprites.dungeon.floorLight2)
mySprite22.follow(mySprite4, 50)
let myDart2 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`)
let mySprite2 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`)sprte.create(img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . d d d d d d . . . . d .
    . . . . d d d d d d d d d d d d
    . . d d d d d d d d d d d d d d
    . d d d d d d d d d d d d d d d
    d d d d d d d d d d d d d d d d
    . . d d d d d d d d d d d d d d
    . . . . d d d d d d d d d d . .
    . . . . . . d d d d d d . . . .
    . . . . . d d d d d d . . . . .
    . . . . . d . . d d . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
`, SpriteKind.Projectile)
scene.cameraFollowSprite(mySprite4)
controller.moveSprite(mySprite4)
game.onUpdateInterval(2000, function () {
    mySprite22 = sprites.create(img`
        . . . . c c c c c c . . . . . . 
        . . . c 6 7 7 7 7 6 c . . . . . 
        . . c 7 7 7 7 7 7 7 7 c . . . . 
        . c 6 7 7 7 7 7 7 7 7 6 c . . . 
        . c 7 c 6 6 6 6 c 7 7 7 c . . . 
        . f 7 6 f 6 6 f 6 7 7 7 f . . . 
        . f 7 7 7 7 7 7 7 7 7 7 f . . . 
        . . f 7 7 7 7 6 c 7 7 6 f c . . 
        . . . f c c c c 7 7 6 f 7 7 c . 
        . . c 7 2 7 7 7 6 c f 7 7 7 7 c 
        . c 7 7 2 7 7 c f c 6 7 7 6 c c 
        c 1 1 1 1 7 6 f c c 6 6 6 c . . 
        f 1 1 1 1 1 6 6 c 6 6 6 6 f . . 
        f 6 1 1 1 1 1 6 6 6 6 6 c f . . 
        . f 6 1 1 1 1 1 1 6 6 6 f . . . 
        . . c c c c c c c c c f . . . . 
        `, SpriteKind.Enemy)
})
game.onUpdateInterval(10000, function () {
    info.changeScoreBy(-1)
})



