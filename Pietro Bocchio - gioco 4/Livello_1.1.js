/**
 * Generated from the Phaser Sandbox
 *
 * //phaser.io/sandbox/tEeqXZjt
 *
 * This source requires Phaser 2.6.2
 */

//PRELOAD

var game = new Phaser.Game(1024, 768, Phaser.AUTO, '', { preload: preload, create: create, update: update, render: render });

function preload() {
//BACKGROUND
    game.stage.backgroundColor = '#1fb2cc';
    this.load.image('palazzo', 'assets/sfondo_liv1.png');
    this.load.image('mare', 'assets/sfondo_liv2.png');
    this.load.image('tempio', 'assets/sfondo_liv3.png');


//ISTRUZIONI
    this.load.image('movimenti', 'assets/scrittemovimenti.png');
    this.load.image('scrittapiume', 'assets/scrittapiume.png');
    this.load.image('scrittanemici', 'assets/scrittanemici.png');
    this.load.image('scrittavolo', 'assets/scrittavolo.png');

//GAMEOVER
    this.load.image('gameover1', 'render/gameover1.png');
    this.load.image('gameover2', 'render/gameover2.png');
    this.load.image('gameover3', 'render/gameover3.png');
    this.load.image('win1', 'render/vittoria.png');

    //contenitori
    this.load.image('contenitoretempo', 'assets/contenitoretempo.png');
    this.load.image('contenitorevite', 'assets/contenitorelife.png');

    //barretempo
    this.load.image('barratempo10', 'assets/tempo10.png');
    this.load.image('barratempo9', 'assets/tempo9.png');
    this.load.image('barratempo8', 'assets/tempo8.png');
    this.load.image('barratempo7', 'assets/tempo7.png');
    this.load.image('barratempo6', 'assets/tempo6.png');
    this.load.image('barratempo5', 'assets/tempo5.png');
    this.load.image('barratempo4', 'assets/tempo4.png');
    this.load.image('barratempo3', 'assets/tempo3.png');
    this.load.image('barratempo2', 'assets/tempo2.png');
    this.load.image('barratempo1', 'assets/tempo1.png');

//VITE
  this.load.spritesheet('life', 'assets/life.png');

//ICARO
    this.load.spritesheet('player', 'assets/icaro.png', 90, 100);
    this.load.spritesheet('player2', 'assets/icarovola.png', 158.8176, 150);
//Dedalo
    this.load.spritesheet('Dedalo', 'assets/dedalo.png');
//proiettili
 game.load.image('proiettili', 'assets/clessidra.png');

//PIATTAFORME
    this.load.image('blocco1', 'assets/platform_blocco1.png');
    this.load.image('blocco_piccolo', 'assets/platform_blocco_piccolo1.png');
    this.load.image('platform', 'assets/platform_grande1.png');
    this.load.image('platform2', 'assets/platform_media1.png');
    this.load.image('platform3', 'assets/platform_piccolissima1.png');
    this.load.image('piattaformafinale', 'assets/piattaformafinale.png');
    this.load.image('scogliera', 'assets/scogliera.png')


//menu pausa
    game.load.image('menuPausa', 'assets/menupausa.png');
    game.load.image('tastoPausa', 'assets/Icona_menu.png');
    this.load.image('ritorna', 'assets/tornaalmenu.png');


//PIATTAFORME FAKE
    this.load.image('platform_F3', 'assets/platform_piccolissima_rovinata.png');
    this.load.image('platform_F2', 'assets/platform_media_rovinata.png');


//MARE
  this.load.image('mare1', 'assets/mare.png');
  this.load.image('mare2', 'assets/mare.png');
  this.load.spritesheet('onda1', 'assets/onda.png',  790, 445);
  this.load.spritesheet('onda2', 'assets/onda.png',  790, 445);
  this.load.image('cielo1', 'assets/mare.png');

  //pietre
  this.load.image('pietra1', 'assets/pietra.png');
  this.load.image('pietra2', 'assets/pietra.png');
  this.load.image('pietra3', 'assets/pietra.png');
  //lancia
  this.load.image('lancia1', 'assets/lancia.png');
  this.load.image('lancia2', 'assets/lancia.png');
  this.load.image('lancia3', 'assets/lancia.png');

//SERPENTI
    this.load.spritesheet('serpe', 'assets/movimento_serpe.png', 85, 20);

//UCCELLI
  this.load.spritesheet('bird', 'assets/uccello.png', 90, 84);

//PIUME
    this.load.spritesheet('piuma', 'assets/piume.png', 84.5, 160);

//OGGETTI

    game.load.image('porta1', 'assets/Porta.png');
    game.load.image('colonna', 'assets/Colonna.png');
    game.load.image('clessidra', 'assets/clessidra.png');
    game.load.image('vaso1','assets/Vaso1.png');
    game.load.image('vaso2','assets/Vaso2.png');
    game.load.image('vaso3','assets/Vaso3.png');

//TORCE
    game.load.spritesheet('torcia1', 'assets/torcia.png', 23, 80);
    game.load.image('torciaspenta1', 'assets/torciaspenta.png');
}
//CREATE
  //PIATTAFORME-SUOLO
  var blocco;
  var platforms;
  var platform2;
  var platform3;
  var piattaformafinale1;
  var scogliera;

  //PIATTAFORME FAKE
  var platform_Fake1;
  var platform_Fake2;
  var platform_Fake3;
  var platform_Fake4;
  var platform_Fake5;
  var platform_Fake6;

  //mare
  var mare11;
  var mare22;
  var onda11;
  var onda22;
  var cielo11;

  //pietre
  var pietra1;
  var pietra2;
  var pietra3;
  var lancia1;
  var lancia2;
  var lancia3;
  //ICARO
  var player;
  var player2;
  var whichplayer = 1;
  var dedalo1;

  //CURSORI
  var cursors;
  var jumpButton;
  var aButton;
  var switchButton;
  //PIUME
  var piuma1;
  var piuma2;
  var piuma3;
  var piuma4;
  var piuma5;
  var piumetotali=0;
  var piumacounter1;
  var piumacounter2;
  var piumacounter3;
  var piumacounter4;
  var piumacounter5;
  var resetvite;
  var resetvite2;
  //NEMICI
  var serpe;
  var serpe22;
  var serpe33;
  var serpe44;
  var serpe55;
  var serpe66;
  var bird1;
  var bird2;
  var bird3;
  var bird4;
  var bird5;
  var bird6;
  var bird7;
  var bird8;
  //var bird9;
  var bird10;

  //Respawn
  var xRespawn= { x : 50, y : 150} ;

  //OGGETTI
  var coin;
  var torcia11;
  var torcia22;
//  var torcia33;
  var torcia44;
  var torcia55;
  var torciaspenta11;
  var torciaspenta22;
  var torciaspenta44;
  var torciaspenta55;

  var porta11;
  var porta22;
  var porta33;
  var porta44;
  var porta55;
  var porta66;
  var porta77;
  var porta88;

  var colonna1;
  var colonna2;
  var colonna3;
  var colonna4;
  var colonna5;
  var colonna6;
  var colonna7;
  var colonna8;
  var colonna9;
  var colonna10;
  var colonna11;
  var colonna12;
  var colonna13;
  var colonna14;
  var colonna15;
  var colonna16;
  var colonna17;


  var clessidra1;
  var clessidra2;
  var clessidra3;
  var clessidra4;
  var clessidra5;

  var vasoA;
  var vasoB;
  var vasoC;

  var timer;
  var timerTime;
  var gameover1;
  var gameover2;
  var gameover3;
  var win1;
  var tastoPausa;
  var menuPausa;


  var life1, life2, life3;
  var contenitoretempo1;
  var contenitorelife1;
  var barratempo11;
  var barratempo22;
  var barratempo33;
  var barratempo44;
  var barratempo55;
  var barratempo66;
  var barratempo77;
  var barratempo88;
  var barratempo99;
  var barratempo100;
  //var pergamena11;




function create() {

    game.world.setBounds(0,0,33343,1050);

    this.add.image (0, 0, 'palazzo');
    this.add.image (8390, 0, 'palazzo');
    this.add.image (16780, 0, 'mare');

this.add.image (16050, 200, 'scrittavolo');




      //TORCE
      torcia11 = game.add.sprite(200, 2150, 'torcia1');
      torcia22 = game.add.sprite(2530, 2150, 'torcia1');
      torcia44 = game.add.sprite(7050, 2230, 'torcia1');
      torcia55 = game.add.sprite(12750, 2150, 'torcia1');

      torciaspenta11 = game.add.sprite(200, 150, 'torcia1');
      torciaspenta22 = game.add.sprite(2530, 150, 'torcia1');
      torciaspenta44 = game.add.sprite(7050, 230, 'torcia1');
      torciaspenta55 = game.add.sprite(12750, 150, 'torcia1');



      torcia11.scale.x = 1.35;
      torcia11.scale.y = 1.35;
      torcia22.scale.x = 1.35;
      torcia22.scale.y = 1.35;
      torcia44.scale.x = 1.35;
      torcia44.scale.y = 1.35;
      torcia55.scale.x = 1.35;
      torcia55.scale.y = 1.35;

      torciaspenta11.scale.x = 1.35;
      torciaspenta11.scale.y = 1.35;
      torciaspenta22.scale.x = 1.35;
      torciaspenta22.scale.y = 1.35;
      torciaspenta44.scale.y = 1.35;
      torciaspenta55.scale.x = 1.35;
      torciaspenta55.scale.y = 1.35;

      torcia11.animations.add("spin", [1, 2, 3, 4], 6, true);
      torcia11.animations.play("spin");
      torcia22.animations.add("spin", [1, 2, 3, 4], 6, true);
      torcia22.animations.play("spin");
      torcia44.animations.add("spin", [1, 2, 3, 4], 6, true);
      torcia44.animations.play("spin");
      torcia55.animations.add("spin", [1, 2, 3, 4], 6, true);
      torcia55.animations.play("spin");



      game.physics.arcade.enable(torcia11);
      game.physics.arcade.enable(torcia22);
  //    game.physics.arcade.enable(torcia33);
      game.physics.arcade.enable(torcia44);
      game.physics.arcade.enable(torcia55);

      game.physics.arcade.enable(torciaspenta11);
      game.physics.arcade.enable(torciaspenta22);
      //    game.physics.arcade.enable(torcia33);
      game.physics.arcade.enable(torciaspenta44);
      game.physics.arcade.enable(torciaspenta55);


      //PORTE
      porta11 = game.add.physicsGroup();
      porta22 = game.add.physicsGroup();
      porta33 = game.add.physicsGroup();
      porta44 = game.add.physicsGroup();
      porta55 = game.add.physicsGroup();
      porta66 = game.add.physicsGroup();
      porta77 = game.add.physicsGroup();
      porta88 = game.add.physicsGroup();

      porta11.create(6800, 202, 'porta1');
      porta22.create(11420, 122, 'porta1');
      porta33.create(11550, 122, 'porta1');
      porta44.create(11680, 122, 'porta1');
      porta55.create(12370, 122, 'porta1');
      porta66.create(13200, 672, 'porta1');
      porta77.create(15450, 172, 'porta1');
      porta88.create(15750, 172, 'porta1');

      porta11.setAll('body.immovable', true);


      //COLONNE
      colonna1 = game.add.physicsGroup();
      colonna2 = game.add.physicsGroup();
      colonna3 = game.add.physicsGroup();
      colonna4 = game.add.physicsGroup();
      colonna5 = game.add.physicsGroup();
      colonna6 = game.add.physicsGroup();
      colonna7 = game.add.physicsGroup();
      colonna8 = game.add.physicsGroup();
      colonna9 = game.add.physicsGroup();
      colonna10 = game.add.physicsGroup();
      colonna11 = game.add.physicsGroup();
      colonna12 = game.add.physicsGroup();
      colonna13 = game.add.physicsGroup();
      colonna14 = game.add.physicsGroup();
      colonna15 = game.add.physicsGroup();
      colonna16 = game.add.physicsGroup();
      colonna17 = game.add.physicsGroup();

      colonna1.create(-60, 40, 'colonna');
      colonna2.create(400, 40, 'colonna');
      colonna3.create(640, 40, 'colonna');
      colonna4.create(1060, 40, 'colonna');
      colonna5.create(2150, 40, 'colonna');
      colonna6.create(2550, 40, 'colonna');
      colonna7.create(3780, 530, 'colonna');
      colonna8.create(4120, 530, 'colonna');
      colonna9.create(7700, 40, 'colonna');
      colonna10.create(8100, 40, 'colonna');
      colonna11.create(8500, 40, 'colonna');
      colonna12.create(7790, 635, 'colonna');
      colonna13.create(8350, 635, 'colonna');
      colonna14.create(12480, 40, 'colonna');
      colonna15.create(13050, 40, 'colonna');
      colonna16.create(13250, 40, 'colonna');
      colonna17.create(13450, 40, 'colonna');
    //  game.physics.arcade.enable(uccelli);
      colonna1.setAll('body.immovable', true);

      //VASI
      vasoA = game.add.physicsGroup();
      vasoA.create(80, 235, 'vaso1');
      vasoA.create(4000, 135, 'vaso1');
      vasoA.create(3920, 730, 'vaso1');
      vasoA.create(4300, 730, 'vaso1');
      vasoA.create(6030, 835, 'vaso1');
      vasoA.create(6800, 315, 'vaso1');
      vasoA.create(13450, 785, 'vaso1');

      vasoA.setAll('body.immovable', true);

      vasoB = game.add.physicsGroup();
      vasoB.create(2350, 835, 'vaso2');
      vasoB.create(4900, 635, 'vaso2');
      vasoB.create(6830, 315, 'vaso2');
      vasoB.create(12550, 235, 'vaso2');

      vasoB.setAll('body.immovable', true);

      vasoC = game.add.physicsGroup();
      vasoC.create(770, 235, 'vaso3');
      vasoC.create(2650, 835, 'vaso3');
      vasoC.create(4350, 135, 'vaso3');
      vasoC.create(4930, 635, 'vaso3');
      vasoC.create(6000, 835, 'vaso3');
      vasoC.create(8270, 235, 'vaso3');
      vasoC.create(8300, 235, 'vaso3');
      vasoC.create(13430, 785, 'vaso3');

      vasoC.setAll('body.immovable', true);

      //CLESSIDRE
      clessidra1 = game.add.physicsGroup();
      clessidra2 = game.add.physicsGroup();
      clessidra3 = game.add.physicsGroup();
      clessidra4 = game.add.physicsGroup();
      clessidra5 = game.add.physicsGroup();

      clessidra1.create(2620, 240, 'clessidra');
      clessidra2.create(4170, 130, 'clessidra');
      clessidra3.create(6230, 830, 'clessidra');
      clessidra4.create(8700, 730, 'clessidra');
      clessidra5.create(13565, 790, 'clessidra');

      game.physics.arcade.enable(clessidra1);
      game.physics.arcade.enable(clessidra2);
      game.physics.arcade.enable(clessidra3);
      game.physics.arcade.enable(clessidra4);
      game.physics.arcade.enable(clessidra5);


      this.add.image (650, 130, 'scrittapiume');
      this.add.image (1100, 130, 'scrittanemici');

      //mareee
      mare11 = game.add.physicsGroup();
      mare11.create(15750, 680, 'mare1');


      onda11 = game.add.sprite(17700, 400, 'onda1');
      onda11.animations.add('left', [7, 6, 5, 4, 3, 2, 1, 0], 6, true);
      game.physics.arcade.enable(onda11);



      onda22 = game.add.sprite(21000, 450, 'onda2');
      onda22.animations.add('left', [7, 6, 5, 4, 3, 2, 1, 0], 6, true);
      game.physics.arcade.enable(onda22);



      mare22 = game.add.physicsGroup();
      mare22.create(15700, 720, 'mare2');
      cielo11 = game.add.physicsGroup();
      cielo11.create(16000, -99, 'mare2');
      cielo11.create(24000, -99, 'mare2');
      cielo11.create(30000, -99, 'mare2');



            //scogliera
            scogliera = game.add.physicsGroup();
            scogliera.create(15780, 350, 'scogliera');
            scogliera.setAll('body.immovable', true);

  this.add.image (23343 , 0, 'tempio');


//PLAYER
    player = game.add.sprite(50,  100, 'player');
  player.vite = 3;
//PLAYER2
    player2 = game.add.sprite('player2');
    player2.vite = 3;
  //dedalo
  dedalo1 = game.add.physicsGroup();
  dedalo1 = game.add.sprite(33200, 560, 'Dedalo');
  game.physics.arcade.enable(dedalo1);


  //timer
  timer = game.time.create(false)
  timerTime = game.time.totalElapsedSeconds() +200
  player.frame = 13

    game.camera.follow(player);
    game.camera.deadzone = new Phaser.Rectangle(250, 200, 0, 00);

    player.animations.add('left', [14, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 18, false);
    player.animations.add('right', [17, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30], 18, false);
    player.animations.add('center',  28, true);

    player.animations.add('saltodx', [45, 44, 43, 42, 41, 40, 39], 8, false);
    player.animations.add('saltosx', [48, 49, 50, 51, 52, 53, 54], 8, false);


    player.animations.add('SPACEBAR', [4, 3, 2, 1, 0], 20, false);

    player2.scale.x = 1.3;
    player2.scale.y = 1.3;
    dedalo1.scale.x = 0.15;
    dedalo1.scale.y = 0.15;

    game.physics.arcade.enable(player);
    game.physics.arcade.enable(player2);


    player.body.collideWorldBounds = true;
    player.body.gravity.y = 600;
  //  uccello11.body.gravity.y = 0;

    serpe1 = game.add.sprite(1700, 280, 'serpe');
    serpe2 = game.add.sprite(2500, 870, 'serpe');
    serpe3 = game.add.sprite(4150, 770, 'serpe');
    serpe4 = game.add.sprite(4150, 170, 'serpe');
    serpe5 = game.add.sprite(8010, 570, 'serpe');
    serpe6 = game.add.sprite(8010, 270, 'serpe');

    //serpe.frame = 10

    serpe1.animations.add('sleft', [5, 4, 3, 2, 1, 0], 10, true);
    serpe1.animations.add('sright', [6, 7, 8, 9, 10, 11], 10, true);
    serpe2.animations.add('sleft', [5, 4, 3, 2, 1, 0], 10, true);
    serpe2.animations.add('sright', [6, 7, 8, 9, 10, 11], 10, true);
    serpe3.animations.add('sleft', [5, 4, 3, 2, 1, 0], 10, true);
    serpe3.animations.add('sright', [6, 7, 8, 9, 10, 11], 10, true);
    serpe4.animations.add('sleft', [5, 4, 3, 2, 1, 0], 10, true);
    serpe4.animations.add('sright', [6, 7, 8, 9, 10, 11], 10, true);
    serpe5.animations.add('sleft', [5, 4, 3, 2, 1, 0], 10, true);
    serpe5.animations.add('sright', [6, 7, 8, 9, 10, 11], 10, true);
    serpe6.animations.add('sleft', [5, 4, 3, 2, 1, 0], 10, true);
    serpe6.animations.add('sright', [6, 7, 8, 9, 10, 11], 10, true);

    game.physics.arcade.enable(serpe1);
    game.physics.arcade.enable(serpe2);
    game.physics.arcade.enable(serpe3);
    game.physics.arcade.enable(serpe4);
    game.physics.arcade.enable(serpe5);
    game.physics.arcade.enable(serpe6);

//UCCELLI
    bird1 = game.add.sprite(17200, 250, 'bird');
    bird1.animations.add('left', [8, 7, 6, 5, 4, 3, 2, 1, 0], 10, true);


    bird2 = game.add.sprite(19300, 80, 'bird');
    bird2.animations.add('left', [8, 7, 6, 5, 4, 3, 2, 1, 0], 10, true);
    //bird2.animations.add('sright', [6, 7, 8, 9, 10, 11], 10, true);

    bird3 = game.add.sprite(19700, 380, 'bird');
    bird3.animations.add('left', [8, 7, 6, 5, 4, 3, 2, 1, 0], 10, true);
    //bird3.animations.add('sright', [6, 7, 8, 9, 10, 11], 10, true);

    bird4 = game.add.sprite(20300, 140, 'bird');
    bird4.animations.add('left', [8, 7, 6, 5, 4, 3, 2, 1, 0], 10, true);
    //bird4.animations.add('sright', [6, 7, 8, 9, 10, 11], 10, true);

    bird5 = game.add.sprite(22200, 280, 'bird');
    bird5.animations.add('left', [8, 7, 6, 5, 4, 3, 2, 1, 0], 10, true);
    //bird5.animations.add('sright', [6, 7, 8, 9, 10, 11], 10, true);

    bird6 = game.add.sprite(22900, 80, 'bird');
    bird6.animations.add('left', [8, 7, 6, 5, 4, 3, 2, 1, 0], 10, true);
    //bird6.animations.add('sright', [6, 7, 8, 9, 10, 11], 10, true);

    bird7 = game.add.sprite(24200, 250, 'bird');
    bird7.animations.add('left', [8, 7, 6, 5, 4, 3, 2, 1, 0], 10, true);
    //bird1.animations.add('right', [7], true);

    bird8 = game.add.sprite(26300, 80, 'bird');
    bird8.animations.add('left', [8, 7, 6, 5, 4, 3, 2, 1, 0], 10, true);
    //bird2.animations.add('sright', [6, 7, 8, 9, 10, 11], 10, true);

    //bird9 = game.add.sprite(28700, 80, 'bird');
    //bird9.animations.add('left', [8, 7, 6, 5, 4, 3, 2, 1, 0], 10, true);
    //bird3.animations.add('sright', [6, 7, 8, 9, 10, 11], 10, true);

    bird10 = game.add.sprite(29500, 140, 'bird');
    bird10.animations.add('left', [8, 7, 6, 5, 4, 3, 2, 1, 0], 10, true);
    //bird4.animations.add('sright', [6, 7, 8, 9, 10, 11], 10, true);

    game.physics.arcade.enable(bird1);
    game.physics.arcade.enable(bird2);
    game.physics.arcade.enable(bird3);
    game.physics.arcade.enable(bird4);
    game.physics.arcade.enable(bird5);
    game.physics.arcade.enable(bird6);
    game.physics.arcade.enable(bird7);
    game.physics.arcade.enable(bird8);
    //game.physics.arcade.enable(bird9);
    game.physics.arcade.enable(bird10);



    //serpe.x = Math.cos(game.time.totalElapsedSeconds()*2.5)*150 + 1250
    //if (game.time.totalElapsedSeconds()*2.5 % (Math.pi*2)< Math.pi)






//BLOCCHI
    blocco = game.add.physicsGroup();

    //Blocco1
    blocco.create(-200, 300, 'blocco1');
    //Blocco2
    blocco.create(2300, 300, 'blocco_piccolo');
    blocco.create(2300, 900, 'blocco_piccolo');
    //Blocco3
    blocco.create(3900, 200, 'blocco_piccolo');
    blocco.create(3900, 795, 'blocco_piccolo');
    //Blocco5
    blocco.create(6000, 900, 'blocco_piccolo');
    //Blocco6
    blocco.create(6750, 380, 'blocco_piccolo');
    blocco.create(6750, 900, 'blocco_piccolo');
    //Blocco7
    blocco.create(7800, 900, 'blocco_piccolo');
    //Blocco8
    blocco.create(8800, 900, 'blocco_piccolo');
    //Blocco9
    blocco.create(11400, 300, 'blocco1');
    //Blocco10-muro
    blocco.create(11900, -200, 'blocco1');
    //Blocco11
    blocco.create(12400, 300, 'blocco1');
    //Blocco12
    blocco.create(13200, 300, 'blocco_piccolo');
    blocco.create(13200, 850, 'blocco_piccolo');


    blocco.setAll('body.immovable', true);

    pietra1 = game.add.sprite(24000, 450, 'pietra1');
    pietra1.animations.add('left', [5, 4, 3, 2, 1, 0], 5, true);
    game.physics.arcade.enable(pietra1);

    pietra2 = game.add.sprite(25000, 450, 'pietra2');
    pietra2.animations.add('left', [5, 4, 3, 2, 1, 0], 5, true);
    game.physics.arcade.enable(pietra2);

    pietra3 = game.add.sprite(27000, 450, 'pietra3');
    pietra3.animations.add('left', [5, 4, 3, 2, 1, 0], 5, true);
    game.physics.arcade.enable(pietra3);

    lancia1 = game.add.sprite(29100, 450, 'lancia1');
    lancia1.animations.add('left', [5, 4, 3, 2, 1, 0], 5, true);
    game.physics.arcade.enable(lancia1);

    lancia2 = game.add.sprite(30400, 450, 'lancia2');
    lancia2.animations.add('left', [5, 4, 3, 2, 1, 0], 5, true);
    game.physics.arcade.enable(lancia2);

    lancia3 = game.add.sprite(31800, 450, 'lancia3');
    lancia2.animations.add('left', [5, 4, 3, 2, 1, 0], 5, true);
    game.physics.arcade.enable(lancia3);

    pietra1.scale.x = 0.15 ;
    pietra1.scale.y = 0.15;
    pietra2.scale.x = 0.15;
    pietra2.scale.y = 0.15;
    pietra3.scale.x = 0.15;
    pietra3.scale.y = 0.15;
    lancia1.scale.x = 0.3;
    lancia1.scale.y = 0.3 ;
    lancia2.scale.x = 0.3;
    lancia2.scale.y = 0.3 ;
    lancia3.scale.x = 0.3;
    lancia3.scale.y = 0.3 ;
//SABBIA
    //sabbia_inizio1 = game.add.physicsGroup();
    //sabbia11 = game.add.physicsGroup();
    //sabbia22 = game.add.physicsGroup();


    //sabbia_inizio1.create(23250, 650, 'sabbia_inizio');
  /*  sabbia11.create(25249, 650, 'sabbia1');
    sabbia11.create(27248, 650, 'sabbia2');


    sabbia_inizio1.setAll('body.immovable', true);
    sabbia11.setAll('body.immovable', true);
    sabbia22.setAll('body.immovable', true);*/

//PIATTAFORME GRANDI
    platforms = game.add.physicsGroup();

    //Move
    platforms.create(9550, 300, 'platform');
    platforms.create(10230, 300, 'platform');
    platforms.create(13900, 300, 'platform');
    platforms.create(14430, 400, 'platform');

    //Gruppo 1
    platforms.create(4600, 700, 'platform');
    platforms.create(5300, 580, 'platform');
    platforms.create(5250, 830, 'platform');
    //Gruppo 2
    platforms.create(6000, 480, 'platform');
    //Gruppo 3
    platforms.create(7800, 300, 'platform');
    platforms.create(7800, 605, 'platform');
    platforms.create(8300, 300, 'platform');

platforms.setAll('body.immovable', true);

//piattaformafinale
piattaformafinale1 = game.add.physicsGroup();
piattaformafinale1.create(15655, 0, 'piattaformafinale');
piattaformafinale1.create(15485, 350, 'piattaformafinale');
piattaformafinale1.setAll('body.immovable', true);




//PIATTAFORME MEDIE
    platform2 = game.add.physicsGroup();
    //Move
    platform2.create(1700, 300, 'platform2');

    //Gruppo1
    platform2.create(550, 300, 'platform2');
    platform2.create(1100, 300, 'platform2');
    this.load.image('platform3', 'assets/platform_piccolissima1.png');

    platform2.setAll('body.immovable', true);

    //PIATTAFORME PICCOLE
    platform3 = game.add.physicsGroup();

    //Move 1
    platform3.create(3000, 200, 'platform3');
    platform3.create(3000, 550, 'platform3');
    platform3.create(3000, 900, 'platform3');
    //Move 2
    platform3.create(3300, 375, 'platform3');
    platform3.create(3300, 725, 'platform3');
    //Move 3
    platform3.create(3600, 200, 'platform3');
    platform3.create(3600, 550, 'platform3');
    platform3.create(3600, 900, 'platform3');
    //Move 4
    platform3.create(7450, 400, 'platform3');

    //Gruppo 1

    platform3.create(8500, 900, 'platform3');

    platform3.setAll('body.immovable', true);

    //PIATTAFORME FAKE
    platform_Fake1 = game.add.physicsGroup();
    platform_Fake2 = game.add.physicsGroup();
    platform_Fake3 = game.add.physicsGroup();
    platform_Fake4 = game.add.physicsGroup();
    platform_Fake5 = game.add.physicsGroup();
    platform_Fake6 = game.add.physicsGroup();

    //MEDIE
    platform_Fake1 = game.add.sprite(850, 580, 'platform_F2');
    platform_Fake2 = game.add.sprite(10250, 700, 'platform_F2');

    //PICCOLE
    platform_Fake3 = game.add.sprite(8500, 605, 'platform_F3');
    platform_Fake4 = game.add.sprite(1300, 580, 'platform_F3');
    platform_Fake5 = game.add.sprite(10750, 700, 'platform_F3');
    platform_Fake6 = game.add.sprite(10950, 700, 'platform_F3');


    game.physics.arcade.enable(platform_Fake1);
    game.physics.arcade.collide(platform_Fake1, player);
    game.physics.arcade.enable(platform_Fake2);
    game.physics.arcade.collide(platform_Fake2, player);
    game.physics.arcade.enable(platform_Fake3);
    game.physics.arcade.collide(platform_Fake3, player);
    game.physics.arcade.enable(platform_Fake4);
    game.physics.arcade.collide(platform_Fake4, player);
    game.physics.arcade.enable(platform_Fake5);
    game.physics.arcade.collide(platform_Fake5, player);
    game.physics.arcade.enable(platform_Fake6);
    game.physics.arcade.collide(platform_Fake6, player);

    platform_Fake1.body.velocity.x = 0;
    platform_Fake2.body.velocity.x = 0;
    platform_Fake3.body.velocity.x = 0;
    platform_Fake4.body.velocity.x = 0;
    platform_Fake5.body.velocity.x = 0;
    platform_Fake6.body.velocity.x = 0;


//PIUME
    piuma = game.add.sprite(700, 250, 'piuma');
    piuma22 = game.add.sprite(2650, 830, 'piuma');
    piuma33 = game.add.sprite(6300, 430, 'piuma');
    piuma44 = game.add.sprite(8850, 450, 'piuma');
    piuma55 = game.add.sprite(13450, 250, 'piuma');
    resetvite = game.add.sprite(16100, 0, 'piuma');
    resetvite2 = game.add.sprite(23395, 0, 'piuma');

    piumacounter1 = game.add.sprite(580, 20, 'piuma');
    piumacounter2 = game.add.sprite(630, 20, 'piuma');
    piumacounter3 = game.add.sprite(680, 20, 'piuma');
    piumacounter4 = game.add.sprite(730, 20, 'piuma');
    piumacounter5 = game.add.sprite(780, 20, 'piuma');


    piuma.scale.x = 0.25;
    piuma.scale.y = 0.25;
    piuma22.scale.x = 0.25;
    piuma22.scale.y = 0.25;
    piuma33.scale.x = 0.25;
    piuma33.scale.y = 0.25;
    piuma44.scale.x = 0.25;
    piuma44.scale.y = 0.25;
    piuma55.scale.x = 0.25;
    piuma55.scale.y = 0.25;
    resetvite.scale.y = 4;
    resetvite.scale.x = 4;
    resetvite.alpha=0 ;
    resetvite2.scale.y = 9;
    resetvite2.scale.x = 4;
    resetvite2.alpha=0 ;
    cielo11.alpha=0 ;

    piumacounter1.scale.x = 0.4;
    piumacounter1.scale.y = 0.4;
    piumacounter2.scale.x = 0.4;
    piumacounter2.scale.y = 0.4;
    piumacounter3.scale.x = 0.4;
    piumacounter3.scale.y = 0.4;
    piumacounter4.scale.x = 0.4;
    piumacounter4.scale.y = 0.4;
    piumacounter5.scale.x = 0.4;
    piumacounter5.scale.y = 0.4;

    piumacounter1.fixedToCamera=true
    piumacounter2.fixedToCamera=true
    piumacounter3.fixedToCamera=true
    piumacounter4.fixedToCamera=true
    piumacounter5.fixedToCamera=true

    piumacounter1.alpha=0.3
    piumacounter2.alpha=0.3
    piumacounter3.alpha=0.3
    piumacounter4.alpha=0.3
    piumacounter5.alpha=0.3




    piuma.animations.add("spin", [0, 1, 2, 3], 5, true);
    piuma.animations.play("spin");
    piuma22.animations.add("spin", [0, 1, 2, 3], 5, true);
    piuma22.animations.play("spin");
    piuma33.animations.add("spin", [0, 1, 2, 3], 5, true);
    piuma33.animations.play("spin");
    piuma44.animations.add("spin", [0, 1, 2, 3], 5, true);
    piuma44.animations.play("spin");
    piuma55.animations.add("spin", [0, 1, 2, 3], 5, true);
    piuma55.animations.play("spin");


    game.physics.arcade.enable(piuma);
    game.physics.arcade.enable(piuma22);
    game.physics.arcade.enable(piuma33);
    game.physics.arcade.enable(piuma44);
    game.physics.arcade.enable(piuma55);
    game.physics.arcade.enable(resetvite);
    game.physics.arcade.enable(resetvite2);



this.add.image (20, 400, 'movimenti');


//vite
contenitorelife1 = game.add.sprite(785, -25, 'contenitorevite');
contenitorelife1.fixedToCamera=true

    life1 = game.add.sprite(848,42, "life");
    life1.scale.setTo(0.04);
    life2 = game.add.sprite(888,42, "life");
    life2.scale.setTo(0.04);
    life3 = game.add.sprite(928,42, "life");
    life3.scale.setTo(0.04);

    life1.fixedToCamera=true
    life2.fixedToCamera=true
    life3.fixedToCamera=true

    /*life11 = game.add.sprite(848,42, "life");
    life11.scale.setTo(0.04);
    life22 = game.add.sprite(888,42, "life");
    life22.scale.setTo(0.04);
    life33 = game.add.sprite(928,42, "life");
    life33.scale.setTo(0.04);

    life11.fixedToCamera=true
    life22.fixedToCamera=true
    life33.fixedToCamera=true*/
    contenitoretempo1 = game.add.sprite(10, 10, 'contenitoretempo');
    contenitoretempo1.fixedToCamera=true

    barratempo100 = game.add.sprite(10,10, "barratempo10");
    barratempo100.alpha=0;
    barratempo100.fixedToCamera=true
    barratempo99 = game.add.sprite(10,10, "barratempo9");
    barratempo99.alpha=0;
    barratempo99.fixedToCamera=true
    barratempo88 = game.add.sprite(10,10, "barratempo8");
    barratempo88.alpha=0;
    barratempo88.fixedToCamera=true
    barratempo77 = game.add.sprite(10,10, "barratempo7");
    barratempo77.alpha=0;
    barratempo77.fixedToCamera=true
    barratempo66 = game.add.sprite(10,10, "barratempo6");
    barratempo66.alpha=0;
    barratempo66.fixedToCamera=true
    barratempo55 = game.add.sprite(10,10, "barratempo5");
    barratempo55.alpha=0;
    barratempo55.fixedToCamera=true
    barratempo44 = game.add.sprite(10,10, "barratempo4");
    barratempo44.alpha=0;
    barratempo44.fixedToCamera=true
    barratempo33 = game.add.sprite(10,10, "barratempo3");
    barratempo33.alpha=0;
    barratempo33.fixedToCamera=true
    barratempo22 = game.add.sprite(10,10, "barratempo2");
    barratempo22.alpha=0;
    barratempo22.fixedToCamera=true
    barratempo11 = game.add.sprite(10,10, "barratempo1");
    barratempo11.alpha=0;
    barratempo11.fixedToCamera=true


        tastoPausa = game.add.sprite(850, 650, 'tastoPausa');
        tastoPausa.inputEnabled = true;
        tastoPausa.fixedToCamera = true

        menuPausa = game.add.sprite(1024/2, 768/2, 'menuPausa');
        menuPausa.anchor.setTo(0.5, 0.5);
        menuPausa.fixedToCamera = true;
        menuPausa.visible = false;
        menuPausa.scale.x = 0.31;
        menuPausa.scale.y = 0.31;


        tastoPausa.events.onInputUp.add(function () {

           game.paused = true;

           menuPausa.visible = true;

           text.setAll('alpha', 0)

           life.setAll('visible', false)




        });


        game.input.onDown.add(unpause, self);

        function unpause(event){
           if(game.paused){


        //RIPRENDI
               var x1 = 380, x2 = 558,
                   y1 = 124, y2 = 157;
               if(event.x > x1 && event.x < x2 && event.y > y1 && event.y < y2 ){
                   var x = event.x - x1,
                       y = event.y - y1;
                   menuPausa.visible=false;
                   game.paused = false;
                   text.setAll('alpha', 1)
                   life.setAll('visible', true)
               }

        //TORNA AL MENU
                var y3 = 195;
               if(event.x > x1 && event.x < x2 && event.y > y2 && event.y < y3 ){
                   var x = event.x - x1,
                       y = event.y - y2;
                       window.location.href = "index.html"

        //RICOMINCIA IL GIOCO
              }
              var  y4 = 234;
              if(event.x > x1 && event.x < x2 && event.y > y3 && event.y < y4 ){
                  var x = event.x - x1,
                      y = event.y - y3;
                      window.location.href = "gioco.html"

             }


           }
        }

//win
win1 = game.add.sprite(0, 0, 'win1');
win1.alpha=0;

win1.fixedToCamera=true

 game.physics.arcade.enable(win1);
//GAMEOVER 1
    gameover1 = game.add.sprite(0, 0, 'gameover1');
    gameover1.alpha=0;

  gameover1.fixedToCamera=true

     game.physics.arcade.enable(gameover1);

//GAMEOVER 2
     gameover2 = game.add.sprite(0, 0, 'gameover2');
     gameover2.alpha=0;

   gameover2.fixedToCamera=true

      game.physics.arcade.enable(gameover2);

//GAMEOVER 3
    gameover3 = game.add.sprite(0, 0, 'gameover3');
    gameover3.alpha=0;

  gameover3.fixedToCamera=true

      game.physics.arcade.enable(gameover3);

// comandi per far muovere eroe
    cursors = game.input.keyboard.createCursorKeys();
    jumpButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    aButton = game.input.keyboard.addKey(Phaser.Keyboard.A);
    switchButton = game.input.keyboard.addKey(Phaser.Keyboard.S);

}


//SERPENTI COLPITI

function hitSerpe1(player, serpe1) {
    if (serpe1.body.touching.up) { serpe1.kill()}
    else { player.vite = player.vite - 1; player.x = xRespawn.x; player.y = xRespawn.y}
    { if(player.vite < 3)
     life3.alpha=0.2
    if(player.vite < 2)
     life2.alpha=0.2
    if(player.vite < 1){
      life1.alpha=0.2;
      player.kill();
      gameover1.alpha=1;
      gameover1.inputEnabled = true;
      ritorna = game.add.sprite(600, 50, 'ritorna');
      ritorna.alpha = 1;
      ritorna.scale.x = 0.7;
      ritorna.scale.y = 0.7;
      ritorna.fixedToCamera = true;
      ritorna.inputEnabled = true;
      ritorna.events.onInputDown.add(end);
      function end () {
      window.location.href = "index.html";
      }


    }}
}


function hitSerpe2(player, serpe2) {
    if (serpe2.body.touching.up) { serpe2.kill()}
    else { player.vite = player.vite - 1; player.x = xRespawn.x; player.y = xRespawn.y}
    { if(player.vite < 3)
     life3.alpha=0.2
    if(player.vite < 2)
     life2.alpha=0.2
    if(player.vite < 1){
      life1.alpha=0.2;
      player.kill();
      gameover1.alpha=1;
      gameover1.inputEnabled = true;
      ritorna = game.add.sprite(600, 50, 'ritorna');
      ritorna.alpha = 1;
      ritorna.scale.x = 0.7;
      ritorna.scale.y = 0.7;
      ritorna.fixedToCamera = true;
      ritorna.inputEnabled = true;
      ritorna.events.onInputDown.add(end);
      function end () {
      window.location.href = "index.html";
      }
    }}
}

function hitSerpe3(player, serpe3) {
    if (serpe3.body.touching.up) { serpe3.kill()}
    else { player.vite = player.vite - 1; player.x = xRespawn.x; player.y = xRespawn.y}
    { if(player.vite < 3)
     life3.alpha=0.2
    if(player.vite < 2)
     life2.alpha=0.2
    if(player.vite < 1){
      life1.alpha=0.2;
      player.kill();
      gameover1.alpha=1;
      gameover1.inputEnabled = true;
      ritorna = game.add.sprite(600, 50, 'ritorna');
      ritorna.alpha = 1;
      ritorna.scale.x = 0.7;
      ritorna.scale.y = 0.7;
      ritorna.fixedToCamera = true;
      ritorna.inputEnabled = true;
      ritorna.events.onInputDown.add(end);
      function end () {
      window.location.href = "index.html";
      }
    }}
}

function hitSerpe4(player, serpe4) {
    if (serpe4.body.touching.up) { serpe4.kill()}
    else { player.vite = player.vite - 1; player.x = xRespawn.x; player.y = xRespawn.y}
    { if(player.vite < 3)
     life3.alpha=0.2
    if(player.vite < 2)
     life2.alpha=0.2
    if(player.vite < 1){
      life1.alpha=0.2;
      player.kill();
      gameover1.alpha=1;
      gameover1.inputEnabled = true;
      ritorna = game.add.sprite(600, 50, 'ritorna');
      ritorna.alpha = 1;
      ritorna.scale.x = 0.7;
      ritorna.scale.y = 0.7;
      ritorna.fixedToCamera = true;
      ritorna.inputEnabled = true;
      ritorna.events.onInputDown.add(end);
      function end () {
      window.location.href = "index.html";
      }
    }}
}

function hitSerpe5(player, serpe5) {
    if (serpe5.body.touching.up) { serpe5.kill()}
    else { player.vite = player.vite - 1; player.x = xRespawn.x; player.y = xRespawn.y}
    { if(player.vite < 3)
     life3.alpha=0.2
    if(player.vite < 2)
     life2.alpha=0.2
    if(player.vite < 1){
      life1.alpha=0.2;
      player.kill();
      gameover1.alpha=1;
      gameover1.inputEnabled = true;
      ritorna = game.add.sprite(600, 50, 'ritorna');
      ritorna.alpha = 1;
      ritorna.scale.x = 0.7;
      ritorna.scale.y = 0.7;
      ritorna.fixedToCamera = true;
      ritorna.inputEnabled = true;
      ritorna.events.onInputDown.add(end);
      function end () {
      window.location.href = "index.html";
      }
    }}
}

function hitSerpe6(player, serpe6) {
    if (serpe6.body.touching.up) { serpe6.kill()}
    else { player.vite = player.vite - 1; player.x = xRespawn.x; player.y = xRespawn.y}
    { if(player.vite < 3)
     life3.alpha=0.2
    if(player.vite < 2)
     life2.alpha=0.2
    if(player.vite < 1){
      life1.alpha=0.2;
      player.kill();
      gameover1.alpha=1;
      gameover1.inputEnabled = true;
      ritorna = game.add.sprite(600, 50, 'ritorna');
      ritorna.alpha = 1;
      ritorna.scale.x = 0.7;
      ritorna.scale.y = 0.7;
      ritorna.fixedToCamera = true;
      ritorna.inputEnabled = true;
      ritorna.events.onInputDown.add(end);
      function end () {
      window.location.href = "index.html";
      }
    }}
}

//UCCELLI COLPITI
function hitBird1(player2, bird1) {
    if (bird1.body.touching.up) { bird1.kill()}
    else {player2.vite = player2.vite - 1; player.x = xRespawn.x; player.y = xRespawn.y}
    { if(player2.vite < 3)
     life3.alpha=0.2
    if(player2.vite < 2)
     life2.alpha=0.2
    if(player2.vite < 1){
      life1.alpha=0.2;
      player2.kill();
      gameover2.alpha=1;
      gameover2.inputEnabled = true;
      ritorna = game.add.sprite(600, 50, 'ritorna');
      ritorna.alpha = 1;
      ritorna.scale.x = 0.7;
      ritorna.scale.y = 0.7;
      ritorna.fixedToCamera = true;
      ritorna.inputEnabled = true;
      ritorna.events.onInputDown.add(end);
      function end () {
      window.location.href = "index.html";
      }
    }}
}

function hitBird2(player2, bird2) {
    if (bird2.body.touching.up) { bird2.kill()}
    else { player2.vite = player2.vite - 1; player.x = xRespawn.x; player.y = xRespawn.y}
    { if(player2.vite < 3)
     life3.alpha=0.2
    if(player2.vite < 2)
     life2.alpha=0.2
    if(player2.vite < 1){
      life1.alpha=0.2;
      player2.kill();
      gameover2.alpha=1;
      gameover2.inputEnabled = true;
      ritorna = game.add.sprite(600, 50, 'ritorna');
      ritorna.alpha = 1;
      ritorna.scale.x = 0.7;
      ritorna.scale.y = 0.7;
      ritorna.fixedToCamera = true;
      ritorna.inputEnabled = true;
      ritorna.events.onInputDown.add(end);
      function end () {
      window.location.href = "index.html";
      }
    }}
}

function hitBird3(player2, bird3) {
    if (bird3.body.touching.up) { bird3.kill()}
    else { player2.vite = player2.vite - 1; player.x = xRespawn.x; player.y = xRespawn.y}
    { if(player2.vite < 3)
     life3.alpha=0.2
    if(player2.vite < 2)
     life2.alpha=0.2
    if(player2.vite < 1){
      life1.alpha=0.2;
      player2.kill();
      gameover2.alpha=1;
      gameover2.inputEnabled = true;
      ritorna = game.add.sprite(600, 50, 'ritorna');
      ritorna.alpha = 1;
      ritorna.scale.x = 0.7;
      ritorna.scale.y = 0.7;
      ritorna.fixedToCamera = true;
      ritorna.inputEnabled = true;
      ritorna.events.onInputDown.add(end);
      function end () {
      window.location.href = "index.html";
      }
    }}
}

function hitBird4(player2, bird4) {
    if (bird4.body.touching.up) { bird4.kill()}
    else { player2.vite = player2.vite - 1; player2.x = xRespawn.x; player2.y = xRespawn.y}
    { if(player2.vite < 3)
     life3.alpha=0.2
    if(player2.vite < 2)
     life2.alpha=0.2
    if(player2.vite < 1){
      life1.alpha=0.2;
      player2.kill();
      gameover2.alpha=1;
      gameover2.inputEnabled = true;
      ritorna = game.add.sprite(600, 50, 'ritorna');
      ritorna.alpha = 1;
      ritorna.scale.x = 0.7;
      ritorna.scale.y = 0.7;
      ritorna.fixedToCamera = true;
      ritorna.inputEnabled = true;
      ritorna.events.onInputDown.add(end);
      function end () {
      window.location.href = "index.html";

      }
    }}
}

function hitBird5(player2, bird5) {
    if (bird5.body.touching.up) { bird5.kill()}
    else { player2.vite = player2.vite - 1; player2.x = xRespawn.x; player2.y = xRespawn.y}
    { if(player2.vite < 3)
     life3.alpha=0.2
    if(player2.vite < 2)
     life2.alpha=0.2
    if(player2.vite < 1){
      life1.alpha=0.2;
      player2.kill();
      gameover2.alpha=1;
      gameover2.inputEnabled = true;
      ritorna = game.add.sprite(600, 50, 'ritorna');
      ritorna.alpha = 1;
      ritorna.scale.x = 0.7;
      ritorna.scale.y = 0.7;
      ritorna.fixedToCamera = true;
      ritorna.inputEnabled = true;
      ritorna.events.onInputDown.add(end);
      function end () {
      window.location.href = "index.html";
      }
    }}
}

function hitBird6(player2, bird6) {
    if (bird6.body.touching.up) { bird6.kill()}
    else { player2.vite = player2.vite - 1; player2.x = xRespawn.x; player2.y = xRespawn.y}
    { if(player2.vite < 3)
     life3.alpha=0.2
    if(player2.vite < 2)
     life2.alpha=0.2
    if(player2.vite < 1){
      life1.alpha=0.2;
      player2.kill();
      gameover2.alpha=1;
      gameover2.inputEnabled = true;
      ritorna = game.add.sprite(600, 50, 'ritorna');
      ritorna.alpha = 1;
      ritorna.scale.x = 0.7;
      ritorna.scale.y = 0.7;
      ritorna.fixedToCamera = true;
      ritorna.inputEnabled = true;
      ritorna.events.onInputDown.add(end);
      function end () {
      window.location.href = "index.html";
      }
    }}
}

function hitBird7(player2, bird7) {
    if (bird7.body.touching.up) { bird7.kill()}
    else {player2.vite = player2.vite - 1; player.x = xRespawn.x; player.y = xRespawn.y}
    { if(player2.vite < 3)
     life3.alpha=0.2
    if(player2.vite < 2)
     life2.alpha=0.2
    if(player2.vite < 1){
      life1.alpha=0.2;
      player2.kill();
      gameover3.alpha=1;
      gameover3.inputEnabled = true;
      ritorna = game.add.sprite(560, 160, 'ritorna');
      ritorna.alpha = 1;
      ritorna.scale.x = 0.7;
      ritorna.scale.y = 0.7;
      ritorna.fixedToCamera = true;
      ritorna.inputEnabled = true;
      ritorna.events.onInputDown.add(end);
      function end () {
      window.location.href = "index.html";
      }
    }}
}
function hitBird8(player2, bird8) {
    if (bird8.body.touching.up) { bird8.kill()}
    else {player2.vite = player2.vite - 1; player.x = xRespawn.x; player.y = xRespawn.y}
    { if(player2.vite < 3)
     life3.alpha=0.2
    if(player2.vite < 2)
     life2.alpha=0.2
    if(player2.vite < 1){
      life1.alpha=0.2;
      player2.kill();
      gameover3.alpha=1;
      gameover3.inputEnabled = true;
      ritorna = game.add.sprite(560, 160, 'ritorna');
      ritorna.alpha = 1;
      ritorna.scale.x = 0.7;
      ritorna.scale.y = 0.7;
      ritorna.fixedToCamera = true;
      ritorna.inputEnabled = true;
      ritorna.events.onInputDown.add(end);
      function end () {
      window.location.href = "index.html";
      }
    }}
}

/*function hitBird9(player2, bird9) {
    if (bird9.body.touching.up) { bird9.kill()}
    else {player2.vite = player2.vite - 1; player.x = xRespawn.x; player.y = xRespawn.y}
    { if(player2.vite < 3)
     life3.alpha=0.2
    if(player2.vite < 2)
     life2.alpha=0.2
    if(player2.vite < 1){
      life1.alpha=0.2;
      player2.kill();
      gameover3.alpha=1;
      gameover3.inputEnabled = true;
      ritorna = game.add.sprite(384, 300, 'ritorna');
      ritorna.alpha = 1;
      ritorna.fixedToCamera = true;
      ritorna.inputEnabled = true;
      ritorna.events.onInputDown.add(end);
      function end () {
      window.location.href = "index.html";
      }
    }}
}*/

function hitBird10(player2, bird10) {
    if (bird10.body.touching.up) { bird10.kill()}
    else {player2.vite = player2.vite - 1; player.x = xRespawn.x; player.y = xRespawn.y}
    { if(player2.vite < 3)
     life3.alpha=0.2
    if(player2.vite < 2)
     life2.alpha=0.2
    if(player2.vite < 1){
      life1.alpha=0.2;
      player2.kill();
      gameover3.alpha=1;
      gameover3.inputEnabled = true;
      ritorna = game.add.sprite(560, 160, 'ritorna');
      ritorna.alpha = 1;
      ritorna.scale.x = 0.7;
      ritorna.scale.y = 0.7;
      ritorna.fixedToCamera = true;
      ritorna.inputEnabled = true;
      ritorna.events.onInputDown.add(end);
      function end () {
      window.location.href = "index.html";
      }
    }}
}
//LIVELLO 2 COLPITO

function hitmare1(player2, mare11) {
  if (mare11.body.touching.up) { player2.vite = player.vite - 1; player2.x = xRespawn.x; player2.y = xRespawn.y}
  { if(player2.vite < 3)
   life3.alpha=0.2
  if(player2.vite < 2)
   life2.alpha=0.2
  if(player2.vite < 1){
    life1.alpha=0.2;
    player2.kill();
    gameover2.alpha=1;
    gameover2.inputEnabled = true;
    ritorna = game.add.sprite(600, 50, 'ritorna');
    ritorna.alpha = 1;
    ritorna.scale.x = 0.7;
    ritorna.scale.y = 0.7;
    ritorna.fixedToCamera = true;
    ritorna.inputEnabled = true;
    ritorna.events.onInputDown.add(end);
    function end () {
    window.location.href = "index.html";
    }
  }}
}

function hitOnda1(player2, onda11) {
  if (onda11.body.touching.down) {  onda11.kill() }
  else { player2.vite = player2.vite - 1; player2.x = xRespawn.x; player2.y = xRespawn.y}
  { if(player2.vite < 3)
   life3.alpha=0.2
  if(player2.vite < 2)
   life2.alpha=0.2
  if(player2.vite < 1){
    life1.alpha=0.2;
    player2.kill();
    gameover2.alpha=1;
    gameover2.inputEnabled = true;
    ritorna = game.add.sprite(600, 50, 'ritorna');
    ritorna.alpha = 1;
    ritorna.scale.x = 0.7;
    ritorna.scale.y = 0.7;
    ritorna.fixedToCamera = true;
    ritorna.inputEnabled = true;
    ritorna.events.onInputDown.add(end);
    function end () {
    window.location.href = "index.html";
    }
  }}
}


function hitOnda2(player2, onda22) {
  if (onda22.body.touching.down) {  onda22.kill() }
  else { player2.vite = player2.vite - 1; player2.x = xRespawn.x; player2.y = xRespawn.y}
  { if(player2.vite < 3)
   life3.alpha=0.2
  if(player2.vite < 2)
   life2.alpha=0.2
  if(player2.vite < 1){
    life1.alpha=0.2;
    player2.kill();
    gameover2.alpha=1;
    gameover2.inputEnabled = true;
    ritorna = game.add.sprite(600, 50, 'ritorna');
    ritorna.alpha = 1;
    ritorna.scale.x = 0.7;
    ritorna.scale.y = 0.7;
    ritorna.fixedToCamera = true;
    ritorna.inputEnabled = true;
    ritorna.events.onInputDown.add(end);
    function end () {
    window.location.href = "index.html";
    }
  }}
}

function hitmare2(player2, mare22){
  if (mare22.body.touching.up) {  player2.vite = player2.vite - 1; player2.x = xRespawn.x; player2.y = xRespawn.y};
  { if(player2.vite < 3)
   life3.alpha=0.2
  if(player2.vite < 2)
   life2.alpha=0.2
  if(player2.vite < 1){
    life1.alpha=0.2;
    player2.kill();
    gameover2.alpha=1;
    gameover2.inputEnabled = true;
    ritorna = game.add.sprite(600, 50, 'ritorna');
    ritorna.alpha = 1;
    ritorna.scale.x = 0.7;
    ritorna.scale.y = 0.7;
    ritorna.fixedToCamera = true;
    ritorna.inputEnabled = true;
    ritorna.events.onInputDown.add(end);
    function end () {
    window.location.href = "index.html";
    }
  }}
}

function hitCielo1(player2, cielo11){
  if (cielo11.body.touching.down) {  player2.vite = player2.vite - 1; player2.x = xRespawn.x; player2.y = xRespawn.y};
  { if(player2.vite < 3)
   life3.alpha=0.2
  if(player2.vite < 2)
   life2.alpha=0.2
  if(player2.vite < 1 &&(player2.x<23000)){
    life1.alpha=0.2;
    player2.kill();
    gameover2.alpha=1;
    gameover2.inputEnabled = true;
    ritorna = game.add.sprite(600, 50, 'ritorna');
    ritorna.alpha = 1;
    ritorna.scale.x = 0.7;
    ritorna.scale.y = 0.7;
    ritorna.fixedToCamera = true;
    ritorna.inputEnabled = true;
    ritorna.events.onInputDown.add(end);
    function end () {
    window.location.href = "index.html";
    }
  }
  if(player2.vite < 1 &&(player2.x>23000)){
    life1.alpha=0.2;
    player2.kill();
    gameover3.alpha=1;
    gameover3.inputEnabled = true;
    ritorna = game.add.sprite(560, 160, 'ritorna');
    ritorna.alpha = 1;
    ritorna.scale.x = 0.7;
    ritorna.scale.y = 0.7;
    ritorna.fixedToCamera = true;
    ritorna.inputEnabled = true;
    ritorna.events.onInputDown.add(end);
    function end () {
    window.location.href = "index.html";
    }
  }}
}

/*function hitCielo1(player2, cielo1){
  if (player2.body.touching.up) { player2.vite = player2.vite - 1; player2.x = xRespawn.x; player2.y = xRespawn.y};
  {if(player2.vite < 3)
   life3.alpha=0.2
  if(player2.vite < 2)
   life2.alpha=0.2
  if(player2.vite < 1){
    life1.alpha=0.2;
    player2.kill();
    gameover2.alpha=1;
    gameover2.inputEnabled = true;
    ritorna = game.add.sprite(384, 300, 'ritorna');
    ritorna.alpha = 1;
    ritorna.fixedToCamera = true;
    ritorna.inputEnabled = true;
    ritorna.events.onInputDown.add(end);
    function end () {
    window.location.href = "index.html";
    }
  }}
}
*/
function hitpietra1(player2, pietra1) {
  if (pietra1.body.touching.right) {  pietra1.kill() }
  else { player2.vite = player2.vite - 1;player2.x = xRespawn.x; player2.y = xRespawn.y}
  { if(player2.vite < 3)
   life3.alpha=0.2
  if(player2.vite < 2)
   life2.alpha=0.2
  if(player2.vite < 1){
    life1.alpha=0.2;
    player2.kill();
    gameover3.alpha=1;
    gameover3.inputEnabled = true;
    ritorna = game.add.sprite(560, 160, 'ritorna');
    ritorna.alpha = 1;
    ritorna.scale.x = 0.7;
    ritorna.scale.y = 0.7;
    ritorna.fixedToCamera = true;
    ritorna.inputEnabled = true;
    ritorna.events.onInputDown.add(end);
    function end () {
    window.location.href = "index.html";
    }
  }}
}

function hitpietra2(player2, pietra2) {
  if (pietra2.body.touching.right) {  pietra2.kill() }
  else { player2.vite = player2.vite - 1;player2.x = xRespawn.x; player2.y = xRespawn.y}
  { if(player2.vite < 3)
   life3.alpha=0.2
  if(player2.vite < 2)
   life2.alpha=0.2
  if(player2.vite < 1){
    life1.alpha=0.2;
    player2.kill();
    gameover3.alpha=1;
    gameover3.inputEnabled = true;
    ritorna = game.add.sprite(560, 160, 'ritorna');
    ritorna.alpha = 1;
    ritorna.scale.x = 0.7;
    ritorna.scale.y = 0.7;
    ritorna.fixedToCamera = true;
    ritorna.inputEnabled = true;
    ritorna.events.onInputDown.add(end);
    function end () {
    window.location.href = "index.html";
    }
  }}
}

function hitpietra3(player2, pietra3) {
  if (pietra3.body.touching.right) {  pietra3.kill() }
  else { player2.vite = player2.vite - 1;player2.x = xRespawn.x; player2.y = xRespawn.y}
  { if(player2.vite < 3)
   life3.alpha=0.2
  if(player2.vite < 2)
   life2.alpha=0.2
  if(player2.vite < 1){
    life1.alpha=0.2;
    player2.kill();
    gameover3.alpha=1;
    gameover3.inputEnabled = true;
    ritorna = game.add.sprite(560, 160, 'ritorna');
    ritorna.alpha = 1;
    ritorna.scale.x = 0.7;
    ritorna.scale.y = 0.7;
    ritorna.fixedToCamera = true;
    ritorna.inputEnabled = true;
    ritorna.events.onInputDown.add(end);
    function end () {
    window.location.href = "index.html";
    }
  }}
}

function hitlancia1(player2, lancia1) {
  if (lancia1.body.touching.right) {  lancia1.kill() }
  else { player2.vite = player2.vite - 1;player2.x = xRespawn.x; player2.y = xRespawn.y}
  { if(player2.vite < 3)
   life3.alpha=0.2
  if(player2.vite < 2)
   life2.alpha=0.2
  if(player2.vite < 1){
    life1.alpha=0.2;
    player2.kill();
    gameover3.alpha=1;
    gameover3.inputEnabled = true;
    ritorna = game.add.sprite(560, 160, 'ritorna');
    ritorna.alpha = 1;
    ritorna.scale.x = 0.7;
    ritorna.scale.y = 0.7;
    ritorna.fixedToCamera = true;
    ritorna.inputEnabled = true;
    ritorna.events.onInputDown.add(end);
    function end () {
    window.location.href = "index.html";
    }
  }}
}

function hitlancia2(player2, lancia2) {
  if (lancia2.body.touching.right) {  lancia2.kill() }
  else { player2.vite = player2.vite - 1;player2.x = xRespawn.x; player2.y = xRespawn.y}
  { if(player2.vite < 3)
   life3.alpha=0.2
  if(player2.vite < 2)
   life2.alpha=0.2
  if(player2.vite < 1){
    life1.alpha=0.2;
    player2.kill();
    gameover3.alpha=1;
    gameover3.inputEnabled = true;
    ritorna = game.add.sprite(560, 160, 'ritorna');
    ritorna.alpha = 1;
    ritorna.scale.x = 0.7;
    ritorna.scale.y = 0.7;
    ritorna.fixedToCamera = true;
    ritorna.inputEnabled = true;
    ritorna.events.onInputDown.add(end);
    function end () {
    window.location.href = "index.html";
    }
  }}
}

function hitlancia3(player2, lancia3) {
  if (lancia3.body.touching.right) {  lancia3.kill() }
  else { player2.vite = player2.vite - 1;player2.x = xRespawn.x; player2.y = xRespawn.y}
  { if(player2.vite < 3)
   life3.alpha=0.2
  if(player2.vite < 2)
   life2.alpha=0.2
  if(player2.vite < 1){
    life1.alpha=0.2;
    player2.kill();
    gameover3.alpha=1;
    gameover3.inputEnabled = true;
    ritorna = game.add.sprite(560, 160, 'ritorna');
    ritorna.alpha = 1;
    ritorna.scale.x = 0.7;
    ritorna.scale.y = 0.7;
    ritorna.fixedToCamera = true;
    ritorna.inputEnabled = true;
    ritorna.events.onInputDown.add(end);
    function end () {
    window.location.href = "index.html";
    }
  }}
}

//RESET VITE

function takeResetvite(player,resetvite) {
  if (resetvite.body.touching.up){player.kill()}
  else {changePlayer2();
    resetvite.kill();}
     if(player.vite = 2){
     player.vite = player.vite +1
     life3.alpha=1;
  }
    if(player.vite = 1){
     player.vite = player.vite +2;
     life2.alpha=1;
     resetvite.kill();
}}

function takeResetvite2(player,resetvite2) {
  if (resetvite2.body.touching.up){player.kill()}
  else {
    resetvite2.kill();}
    if(player.vite = 2){
    player.vite = player.vite +1
    life3.alpha=1;
 }
   if(player.vite = 1){
    player.vite = player.vite +2;
    life2.alpha=1;
    resetvite.kill();
}}
function takePiuma() {
    piuma.kill();
    piumetotali = piumetotali +1;
    piumacounter1.alpha=1

}

function takePiuma2() {
    piuma22.kill();
      piumetotali = piumetotali +1;
      piumacounter2.alpha=1
}

function takePiuma3() {
    piuma33.kill();
      piumetotali = piumetotali +1;
      piumacounter3.alpha=1
}

function takePiuma4() {
    piuma44.kill();
      piumetotali = piumetotali +1;
      piumacounter4.alpha=1
}

function takePiuma5() {
    piuma55.kill();
      piumetotali = piumetotali +1;
      piumacounter5.alpha=1
}

function takeCoin(){
    coin.kill();
}

function takeClessidra1(player, clessidra1) {
    clessidra1.kill();

}
function takeClessidra2(player, clessidra2) {
    clessidra2.kill();
}
function takeClessidra3(player, clessidra3) {
    clessidra3.kill();
}
function takeClessidra4(player, clessidra4) {
    clessidra4.kill();
}
function takeClessidra5(player, clessidra5) {
    clessidra5.kill();
}

function hitdedalo(player, dedalo1) {
    dedalo1.kill();
    player.kill();
    win1.alpha=1;
    win1.inputEnabled = true;
    ritorna = game.add.sprite(400, 50, 'ritorna');
    ritorna.alpha = 1;
    ritorna.fixedToCamera = true;
    ritorna.inputEnabled = true;
    ritorna.events.onInputDown.add(end);
    function end () {
    window.location.href = "index.html";
    }

}


function changePlayer2(){
if(whichplayer == 1){
  player.loadTexture("player2",0);
  whichplayer = 2;
  player2.vite = 3;
  player2.body.velocity.x = 250;

}else {
    player.loadTexture("player",0);
    whichplayer = 1;
    player.vite = 3;

}

}



function update () {


//tempo
    game.physics.arcade.overlap(player, clessidra1, function(player, clessidra1) {
        clessidra1.kill()
        timerTime += 20;
    });

    game.physics.arcade.overlap(player, clessidra2, function(player, clessidra2) {
        clessidra2.kill()
        timerTime += 20;
    });
    game.physics.arcade.overlap(player, clessidra3, function(player, clessidra3) {
        clessidra3.kill()
        timerTime += 20;
    });
    game.physics.arcade.overlap(player, clessidra4, function(player, clessidra4) {
        clessidra4.kill()
        timerTime += 20;
    });
    game.physics.arcade.overlap(player, clessidra5, function(player, clessidra5) {
        clessidra5.kill()
        timerTime += 20;
    });

    if(timerTime - game.time.totalElapsedSeconds() < 0) {
      gameover1.alpha = 1;
        }

    if(timerTime -game.time.totalElapsedSeconds()>=180){
         barratempo100.alpha=1;
        }

    if(timerTime -game.time.totalElapsedSeconds()>=160 && (timerTime -game.time.totalElapsedSeconds()<180)){
             barratempo99.alpha=1;
             barratempo100.alpha=0;
            }
      if(timerTime -game.time.totalElapsedSeconds()>=140 && (timerTime -game.time.totalElapsedSeconds()<160)){
                     barratempo88.alpha=1;
                     barratempo99.alpha=0;
                     barratempo100.alpha=0;
                    }

if(timerTime -game.time.totalElapsedSeconds()>=120 && (timerTime -game.time.totalElapsedSeconds()<140)){
               barratempo77.alpha=1;
               barratempo88.alpha=0;
               barratempo99.alpha=0;
               barratempo100.alpha=0;
}
if(timerTime -game.time.totalElapsedSeconds()>=100 && (timerTime -game.time.totalElapsedSeconds()<120)){
               barratempo66.alpha=1;
               barratempo77.alpha=0;
               barratempo88.alpha=0;
               barratempo99.alpha=0;
               barratempo100.alpha=0;
}
if(timerTime -game.time.totalElapsedSeconds()>=80 && (timerTime -game.time.totalElapsedSeconds()<100)){
               barratempo55.alpha=1;
               barratempo66.alpha=0;
               barratempo77.alpha=0;
               barratempo88.alpha=0;
               barratempo99.alpha=0;
               barratempo100.alpha=0;
}
if(timerTime -game.time.totalElapsedSeconds()>=60 && (timerTime -game.time.totalElapsedSeconds()<80)){
               barratempo44.alpha=1;
               barratempo55.alpha=0;
               barratempo66.alpha=0;
               barratempo77.alpha=0;
               barratempo88.alpha=0;
               barratempo99.alpha=0;
               barratempo100.alpha=0;
}
if(timerTime -game.time.totalElapsedSeconds()>=40 && (timerTime -game.time.totalElapsedSeconds()<60)){
               barratempo33.alpha=1;
               barratempo44.alpha=0;
               barratempo55.alpha=0;
               barratempo66.alpha=0;
               barratempo77.alpha=0;
               barratempo88.alpha=0;
               barratempo99.alpha=0;
               barratempo100.alpha=0;
}
if(timerTime -game.time.totalElapsedSeconds()>=20 && (timerTime -game.time.totalElapsedSeconds()<40)){
               barratempo22.alpha=1;
               barratempo33.alpha=0;
               barratempo44.alpha=0;
               barratempo55.alpha=0;
               barratempo66.alpha=0;
               barratempo77.alpha=0;
               barratempo88.alpha=0;
               barratempo99.alpha=0;
               barratempo100.alpha=0;
}
if(timerTime -game.time.totalElapsedSeconds()>=0 && (timerTime -game.time.totalElapsedSeconds()<20)){
               barratempo11.alpha=1;
               barratempo22.alpha=0;
               barratempo33.alpha=0;
               barratempo44.alpha=0;
               barratempo55.alpha=0;
               barratempo66.alpha=0;
               barratempo77.alpha=0;
               barratempo88.alpha=0;
               barratempo99.alpha=0;
               barratempo100.alpha=0;
}






//checkpoint

  if (player.x > 150 && xRespawn.x < 150 ) {xRespawn.x = 150; xRespawn.y = 150;}
  if (player.x > 2530 && xRespawn.x < 2530 ) {xRespawn.x = 2530; xRespawn.y = 150;}
  if (player.x > 7050 && xRespawn.x < 7050 ) {xRespawn.x = 7050; xRespawn.y = 230;}
  if (player.x > 12750 && xRespawn.x < 12750 ) {xRespawn.x = 12750; xRespawn.y = 150;}
  if (player.x > 15970 && xRespawn.x < 15970  ) {xRespawn.x = 15970; xRespawn.y = 150;}
  if (player.x > 19500 && xRespawn.x < 19500  ) {xRespawn.x = 19500; xRespawn.y = 150;}
  if (player.x > 24500 && xRespawn.x < 24500  ) {xRespawn.x = 24500; xRespawn.y = 150;}
  if (player.x > 28395 && xRespawn.x < 28395  ) {xRespawn.x = 28395; xRespawn.y = 150;}

if (player.x>150){
  torcia11.body.y = 150
}
if (player.x>2530){
  torcia22.body.y = 150
}
if (player.x>7050){
  torcia44.body.y = 230
}
if (player.x>12750){
  torcia55.body.y = 150
}

    game.physics.arcade.collide(player, blocco);
    game.physics.arcade.collide(player, platforms);
    game.physics.arcade.collide(player, platform2);
    game.physics.arcade.collide(player, platform3);
    game.physics.arcade.collide(player, piattaformafinale1);
    game.physics.arcade.collide(player, serpe1, hitSerpe1);
    game.physics.arcade.collide(player, serpe2, hitSerpe2);
    game.physics.arcade.collide(player, serpe3, hitSerpe3);
    game.physics.arcade.collide(player, serpe4, hitSerpe4);
    game.physics.arcade.collide(player, serpe5, hitSerpe5);
    game.physics.arcade.collide(player, serpe6, hitSerpe6);
    game.physics.arcade.collide(player, bird1, hitBird1);
    game.physics.arcade.collide(player, bird2, hitBird2);
    game.physics.arcade.collide(player, bird3, hitBird3);
    game.physics.arcade.collide(player, bird4, hitBird4);
    game.physics.arcade.collide(player, bird5, hitBird5);
    game.physics.arcade.collide(player, bird6, hitBird6);
    game.physics.arcade.collide(player, bird7, hitBird7);
    game.physics.arcade.collide(player, bird8, hitBird8);
    game.physics.arcade.collide(player, bird10, hitBird10);
    game.physics.arcade.collide(player, mare11, hitmare1);
    game.physics.arcade.collide(player, mare22, hitmare2);
    game.physics.arcade.collide(player, cielo11, hitCielo1);
    game.physics.arcade.overlap(player, onda11, hitOnda1);
    game.physics.arcade.overlap(player, onda22, hitOnda2);
    game.physics.arcade.overlap(player, pietra1, hitpietra1);
    game.physics.arcade.overlap(player, pietra2, hitpietra2);
    game.physics.arcade.overlap(player, pietra3, hitpietra3);
    game.physics.arcade.overlap(player, lancia1, hitlancia1);
    game.physics.arcade.overlap(player, lancia2, hitlancia2);
    game.physics.arcade.overlap(player, lancia3, hitlancia3);
    game.physics.arcade.collide(player, piuma, takePiuma);
    game.physics.arcade.collide(player, piuma22, takePiuma2);
    game.physics.arcade.collide(player, piuma33, takePiuma3);
    game.physics.arcade.collide(player, piuma44, takePiuma4);
    game.physics.arcade.collide(player, piuma55, takePiuma5);
    game.physics.arcade.collide(player, resetvite, takeResetvite);
    game.physics.arcade.collide(player, resetvite2, takeResetvite2);
    game.physics.arcade.collide(player, clessidra1, takeClessidra1);
    game.physics.arcade.collide(player, clessidra2, takeClessidra2);
    game.physics.arcade.collide(player, clessidra3, takeClessidra3);
    game.physics.arcade.collide(player, clessidra4, takeClessidra4);
    game.physics.arcade.collide(player, clessidra5, takeClessidra5);
    game.physics.arcade.collide(player, platform_Fake1);
    game.physics.arcade.collide(player, platform_Fake2);
    game.physics.arcade.collide(player, platform_Fake3);
    game.physics.arcade.collide(player, platform_Fake4);
    game.physics.arcade.collide(player, platform_Fake5);
    game.physics.arcade.collide(player, platform_Fake6);
    game.physics.arcade.collide(player, dedalo1, hitdedalo);
    game.physics.arcade.collide(player, scogliera);

// movimento mare e onde

mare11.x = Math.cos(game.time.totalElapsedSeconds()*1)*200;
mare11.setAll('body.immovable', true);
mare22.x = Math.sin(game.time.totalElapsedSeconds()*1)*200;
mare22.setAll('body.immovable', true);
cielo11.x = Math.sin(game.time.totalElapsedSeconds()*1)*200;
cielo11.setAll('body.immovable', true);

onda11.animations.play('left');


onda22.animations.play('left');


//movimento PIATTAFORME GRANDI
    platforms.children[0].body.velocity.y = Math.sin(game.time.totalElapsedSeconds()*1)*300
    platforms.children[1].body.velocity.x = Math.sin(game.time.totalElapsedSeconds()*1)*330
    platforms.children[2].body.velocity.y = Math.sin(game.time.totalElapsedSeconds()*1)*300
    platforms.children[3].body.velocity.x = Math.sin(game.time.totalElapsedSeconds()*1)*240

//movimento PIATTAFORME MEDIE
    platform2.children[0].body.velocity.y = Math.sin(game.time.totalElapsedSeconds()*1)*250

//movimento PIATTAFORME PICCOLISSIME
    //Move 1
    platform3.children[0].body.velocity.y = Math.sin(game.time.totalElapsedSeconds())*180
    platform3.children[1].body.velocity.y = Math.sin(game.time.totalElapsedSeconds())*180
    platform3.children[2].body.velocity.y = Math.sin(game.time.totalElapsedSeconds())*180
    //Move 2
    platform3.children[3].body.velocity.y = Math.cos(game.time.totalElapsedSeconds())*180
    platform3.children[4].body.velocity.y = Math.cos(game.time.totalElapsedSeconds())*180
    //Move 3
    platform3.children[5].body.velocity.y = Math.sin(game.time.totalElapsedSeconds())*180
    platform3.children[6].body.velocity.y = Math.sin(game.time.totalElapsedSeconds())*180
    platform3.children[7].body.velocity.y = Math.sin(game.time.totalElapsedSeconds())*180
    //Move 4
    platform3.children[8].body.velocity.y = Math.sin(game.time.totalElapsedSeconds())*250

//movimento SERPENTI
    serpe1.x = Math.cos(game.time.totalElapsedSeconds()*2.5)*150 + 1250
    serpe2.x = Math.cos(game.time.totalElapsedSeconds()*2)*230 + 2550
    serpe3.x = Math.cos(game.time.totalElapsedSeconds()*2)*230 + 4150
    serpe4.x = Math.cos(game.time.totalElapsedSeconds()*2)*230 + 4150
    serpe5.x = Math.cos(game.time.totalElapsedSeconds()*2)*230 + 8010
    serpe6.x = Math.cos(game.time.totalElapsedSeconds()*2)*230 + 8010

pietra1.x = Math.sin(game.time.totalElapsedSeconds()*1)*500+24000;
pietra1.y = Math.cos(game.time.totalElapsedSeconds()*1)*500+850 ;
pietra2.x = Math.sin(game.time.totalElapsedSeconds()*1)*300+25500;
pietra2.y = Math.cos(game.time.totalElapsedSeconds()*1)*500+850 ;
pietra3.x = Math.sin(game.time.totalElapsedSeconds()*1)*300+27000;
pietra3.y = Math.cos(game.time.totalElapsedSeconds()*1)*500+850 ;
lancia1.x = Math.sin(game.time.totalElapsedSeconds()*1)*500+28900;
lancia1.y = Math.cos(game.time.totalElapsedSeconds()*1)*500+850 ;
lancia2.x = Math.sin(game.time.totalElapsedSeconds()*1)*500+30400;
lancia2.y = Math.cos(game.time.totalElapsedSeconds()*1)*500+850 ;
lancia3.x = Math.sin(game.time.totalElapsedSeconds()*1)*500+31800;
lancia3.y = Math.cos(game.time.totalElapsedSeconds()*1)*500+850 ;



    serpe1.animations.play('left');
    serpe1.animations.play('right');
    serpe2.animations.play('left');
    serpe2.animations.play('right');
    serpe3.animations.play('left');
    serpe3.animations.play('right');
    serpe4.animations.play('left');
    serpe4.animations.play('right');
    serpe5.animations.play('left');
    serpe5.animations.play('right');
    serpe6.animations.play('left');
    serpe6.animations.play('right');

    serpe1.body.velocity.x = 0;
    serpe2.body.velocity.x = 0;
    serpe3.body.velocity.x = 0;
    serpe4.body.velocity.x = 0;
    serpe5.body.velocity.x = 0;
    serpe6.body.velocity.x = 0;


//MOVIMENTO uccelli

    bird1.animations.play('left');
    bird1.animations.play('right');
    bird2.animations.play('left');
    bird2.animations.play('right');
    bird3.animations.play('left');
    bird3.animations.play('right');
    bird4.animations.play('left');
    bird4.animations.play('right');
    bird5.animations.play('left');
    bird5.animations.play('right');
    bird6.animations.play('left');
    bird6.animations.play('right');
    bird7.animations.play('left');
    bird7.animations.play('right');
    bird8.animations.play('left');
    bird8.animations.play('right');
    bird10.animations.play('left');
    bird10.animations.play('right');


//movimento Clessidre
        clessidra1.children[0].body.velocity.y = Math.sin(game.time.totalElapsedSeconds()*5)*15
        clessidra2.children[0].body.velocity.y = Math.sin(game.time.totalElapsedSeconds()*2)*15
        clessidra3.children[0].body.velocity.y = Math.sin(game.time.totalElapsedSeconds()*2)*15
        clessidra4.children[0].body.velocity.y = Math.sin(game.time.totalElapsedSeconds()*2)*15
        clessidra5.children[0].body.velocity.y = Math.sin(game.time.totalElapsedSeconds()*2)*15


//movimento eroe

var inAria = !(player.body.onFloor() || player.body.touching.down)

    if (cursors.left.isDown)
    {
        player.body.velocity.x = -300;
        if (!inAria)
        player.animations.play('left', 18, false);
    }

    else if (cursors.right.isDown)
    {
        player.body.velocity.x = 300;
        if (!inAria)
        player.animations.play('right', 18, false);
        player2.body.velocity.x = 250;

    }
    else  {
        player.animations.stop();
        player.frame = 16;
        player.body.velocity.x = 0;
    }

    if (jumpButton.isDown && (player.body.onFloor() || player.body.touching.down))
    {
        player.body.velocity.y = -400;

    }

    if (inAria) {
      if (cursors.right.isDown)
      player.animations.play('saltosx')
      if (cursors.left.isDown)
      player.animations.play('saltodx')
    }


    if (player.body.onFloor() && (player.x<23000))
    {
      player.x = xRespawn.x; player.y = xRespawn.y ;player.vite = player.vite - 1;
      {
      if(player.vite < 3)
       life3.alpha=0.2
      if(player.vite < 2)
       life2.alpha=0.2
      if(player.vite < 1){
        life1.alpha=0.2;
        player.kill();
        gameover1.alpha=1;
        gameover1.inputEnabled = true;
        ritorna = game.add.sprite(600, 50, 'ritorna');
        ritorna.alpha = 1;
        ritorna.scale.x = 0.7;
        ritorna.scale.y = 0.7;
        ritorna.fixedToCamera = true;
        ritorna.inputEnabled = true;
        ritorna.events.onInputDown.add(end);
        function end () {
        window.location.href = "index.html";
        }
      }}
    }

    if (player.body.onFloor () && (player.x>23000))
    {
      player.x = xRespawn.x; player.y = xRespawn.y ;player.vite = player.vite - 1;
      {
      if(player.vite < 3)
       life3.alpha=0.2
      if(player.vite < 2)
       life2.alpha=0.2
      if(player.vite < 1){
        life1.alpha=0.2;
        player.kill();
        gameover3.alpha=1;
        gameover3.inputEnabled = true;
        ritorna = game.add.sprite(560, 160, 'ritorna');
        ritorna.alpha = 1;
        ritorna.scale.x = 0.7;
        ritorna.scale.y = 0.7;
        ritorna.fixedToCamera = true;
        ritorna.inputEnabled = true;
        ritorna.events.onInputDown.add(end);
        function end () {
        window.location.href = "index.html";
        }
      }}
    }


    if (jumpButton.isDown && (player.x > 15970))
    {
        player.body.velocity.y = -300;

    }

    if (player.x > 15970)
    {
      player.body.velocity.x = 250;
  }

  if (jumpButton.isDown && (player.x > 15970)) {
      player.animations.play('SPACEBAR', 20, false);
  }


  if (player.x > 33200)
  {
    player.kill();
    win1.alpha=1;
    win1.inputEnabled = true;
    ritorna = game.add.sprite(400, 50, 'ritorna');
    ritorna.alpha = 1;
    ritorna.fixedToCamera = true;
    ritorna.inputEnabled = true;
    ritorna.events.onInputDown.add(end);
    function end () {
    window.location.href = "index.html";
    }
  }



if (player.x>15600)
{
  piumacounter1.alpha=0;
  piumacounter2.alpha=0;
  piumacounter3.alpha=0;
  piumacounter4.alpha=0;
  piumacounter5.alpha=0;
  timerTime = game.time.totalElapsedSeconds() +20000
  barratempo11.alpha=0;
  barratempo22.alpha=0;
  barratempo33.alpha=0;
  barratempo44.alpha=0;
  barratempo55.alpha=0;
  barratempo66.alpha=0;
  barratempo77.alpha=0;
  barratempo88.alpha=0;
  barratempo99.alpha=0;
  barratempo100.alpha=0;
  contenitoretempo1.alpha=0;
}



//camera x il secondo livello

if (player.x > 11370 && player.x < 11810)
{
  game.camera.deadzone = new Phaser.Rectangle(250, 200, 700 , 00);
}
if (player.x > 11810)
{
  game.camera.deadzone = new Phaser.Rectangle(250, 200, 00 , 00);
}


if (player.x > 15040 && player.x < 16000)
{
  game.camera.deadzone = new Phaser.Rectangle(250, 200, 1000 , 00);
}

if (player.x <15040){
  game.camera.deadzone = new Phaser.Rectangle(250, 200, 0, 00);
}
if (player.x > 11370 && player.x < 11800)
{
  game.camera.deadzone = new Phaser.Rectangle(250, 200, 700 , 00);
}
if (player.x <11370){
  game.camera.deadzone = new Phaser.Rectangle(250, 200, 0, 00);
}


if (player.x > 15700)
{
game.camera.deadzone = new Phaser.Rectangle(100, 600, 0, 400);
}
if (player.x > 15970)
{
bird1.x = Math.cos(game.time.totalElapsedSeconds()*2)*200 + 17200;
}
if (player.x > 15970)
{
bird2.x = Math.cos(game.time.totalElapsedSeconds()*2)*200 + 19300;
}
if (player.x > 15970)
{
bird3.x = Math.cos(game.time.totalElapsedSeconds()*2)*200 + 19700;
}if (player.x > 15970)
{
bird4.x = Math.cos(game.time.totalElapsedSeconds()*2)*200 + 20400;
}
if (player.x > 15970)
{
bird5.x = Math.cos(game.time.totalElapsedSeconds()*2)*200 + 22200;
}
if (player.x > 15970)
{
bird6.x = Math.cos(game.time.totalElapsedSeconds()*2)*200 + 22900;
}

if (player.x > 15970)
{
bird7.x = Math.cos(game.time.totalElapsedSeconds()*2)*200+24200;
}if (player.x > 15970)
{
bird8.x = Math.cos(game.time.totalElapsedSeconds()*2)*200+26300;
}
if (player.x > 15970)
{
bird10.x = Math.cos(game.time.totalElapsedSeconds()*2)*200 +29500 ;
}

// porta che porta indietro
    if (aButton.isDown && (player.x> 11440) && (player.x< 11554))
    {
         player.x = 6800;

     }
//porta che porta avanti su
     if (aButton.isDown && (player.x> 11570) && (player.x< 11680))
     {
        player.x = 12501;
        // player.y = 600;
      }

      //porta che da porta avanti su porta a porta indietro che portava avanti su
           if (aButton.isDown && (player.x> 12300) && (player.x< 12500))
           {
              player.x = 11400;
              // player.y = 600;
            }


      //porta che porta avanti giu

   if (aButton.isDown && (player.x> 11691) && (player.x< 11805))
      {
         player.x = 13301;
        player.y = 672
    }

    //porta che da porta avanti giu porta a porta indietro che portava avanti giu
         if (aButton.isDown && (player.x> 13100) && (player.x< 13300))
         {
            player.x = 11400;
            player.y = 150;
          }

//porta che porta 2 livello
    if (aButton.isDown && (player.x> 15458) && (player.x< 15563) && (piumetotali > 4))
    {
         player.x = 15830;

     }



    // serpe1
    if (serpe1.x < 1600)
    {

    serpe1.animations.play('sleft');

    }
    else if (serpe1.x > 1600)
    {

    serpe1.animations.play('sright');

    }
    // serpe2
    if (serpe2.x < 2500)
    {

    serpe2.animations.play('sleft');

    }
    else if (serpe2.x > 2500)
    {

    serpe2.animations.play('sright');

    }

    // serpe3
    if (serpe3.x < 4150)
    {

    serpe3.animations.play('sleft');

    }
    else if (serpe3.x > 4250)
    {

    serpe3.animations.play('sright');

    }
    // serpe4
    if (serpe4.x < 4150)
    {

    serpe4.animations.play('sleft');

    }
    else if (serpe4.x > 4250)
    {

    serpe4.animations.play('sright');

    }
    // serpe5
    if (serpe5.x < 8010)
    {

    serpe5.animations.play('sleft');

    }
    else if (serpe5.x > 8110)
    {

    serpe5.animations.play('sright');

    }
    // serpe6
    if (serpe6.x < 8010)
    {

    serpe6.animations.play('sleft');

    }
    else if (serpe6.x > 8110)
    {

    serpe6.animations.play('sright');

    }

}


function render () {
//game.debug.body(cielo1)
//  game.debug.body(bird)
//game.debug.text(timerTime - game.time.totalElapsedSeconds() , 32, 32)

}
