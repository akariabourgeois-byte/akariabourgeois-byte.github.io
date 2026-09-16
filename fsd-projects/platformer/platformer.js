$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(200, 400, 100, 20, "white")
    createPlatform(500, 200, 100, 20, "hotpink")
    createPlatform(500, 500, 100, 20, "hotpink")
    createPlatform(800, 300, 100, 20, "white")
    createPlatform(1000, 100, 100,20, "hotpink")
    createPlatform(1100, 500, 100, 20,"hotpink")
    createPlatform(1300, 200, 100,20, "white")
    createPlatform(100, 700, 100, 20, "hotpink")
    createPlatform(300, 600, 100, 20, "white")




    // TODO 3 - Create Collectables
      createCollectable("kennedi", 1335, 165);
      createCollectable("kennedi", 830, 265);
      createCollectable("kennedi", 230, 365);



    
    // TODO 4 - Create Cannons
    createCannon("left", 340, 700);
    createCannon("top", 760, 700);
    createCannon("bottom",640, 900 );
    createCannon("right", 460,);

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
