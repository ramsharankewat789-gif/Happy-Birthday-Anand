// ======================================================
// Birthday Project - Enhanced Animation
// ======================================================


// ======================================================
// Load Customization
// ======================================================

const fetchData = () => {

  const cacheBuster = "?v=" + Date.now();

  return fetch("customize.json" + cacheBuster)

    .then(response => {

      if (!response.ok) {
        throw new Error(
          "Unable to load customize.json. Status: " +
          response.status
        );
      }

      return response.json();
    })

    .then(data => {

      console.log("Customization loaded:", data);


      if (data.name) {
        document.getElementById("name").textContent =
          data.name;
      }


      if (data.greetingText) {
        document.getElementById("greetingText").textContent =
          data.greetingText;
      }


      if (data.birthdayAnnouncement) {
        document.getElementById("birthdayAnnouncement").textContent =
          data.birthdayAnnouncement;
      }


      if (data.chatMessage) {
        document.getElementById("chatMessage").textContent =
          data.chatMessage;
      }


      if (data.idea1) {
        document.getElementById("idea1").textContent =
          data.idea1;
      }


      if (data.idea2) {
        document.getElementById("idea2").textContent =
          data.idea2;
      }


      if (data.idea3) {
        document.getElementById("idea3").innerHTML =
          data.idea3;
      }


      if (data.idea4) {
        document.getElementById("idea4").textContent =
          data.idea4;
      }


      if (data.idea5) {
        document.getElementById("idea5").textContent =
          data.idea5;
      }


      if (data.birthdayTitle) {
        document.getElementById("birthdayTitle").textContent =
          data.birthdayTitle;
      }


      if (data.wishText) {
        document.getElementById("wishText").textContent =
          data.wishText;
      }


      if (data.imagePath) {
        document.getElementById("imagePath").src =
          data.imagePath;
      }


      if (data.finalMessage) {
        document.getElementById("finalMessage").textContent =
          data.finalMessage;
      }

    });
};


// ======================================================
// Create Floating Particles
// ======================================================

const createParticles = () => {

  const particleContainer =
    document.createElement("div");

  particleContainer.className =
    "floating-particles";

  document.body.appendChild(
    particleContainer
  );


  const symbols = [
    "✦",
    "♡",
    "•",
    "✧",
    "♥"
  ];


  for (let i = 0; i < 30; i++) {

    const particle =
      document.createElement("span");

    particle.innerHTML =
      symbols[Math.floor(
        Math.random() * symbols.length
      )];

    particle.style.position = "absolute";

    particle.style.left =
      Math.random() * 100 + "%";

    particle.style.top =
      Math.random() * 100 + "%";

    particle.style.fontSize =
      (8 + Math.random() * 18) + "px";

    particle.style.opacity =
      0.15 + Math.random() * 0.5;

    particle.style.pointerEvents =
      "none";

    particleContainer.appendChild(
      particle
    );


    TweenMax.to(
      particle,
      4 + Math.random() * 5,
      {
        y: -80 - Math.random() * 100,
        x: -40 + Math.random() * 80,
        rotation: 180 + Math.random() * 360,
        repeat: -1,
        yoyo: true,
        ease: Power1.easeInOut,
        delay: Math.random() * 4
      }
    );
  }
};


// ======================================================
// Main Animation
// ======================================================

const animationTimeline = () => {

  const textBoxChars =
    document.getElementById("chatMessage");

  const hbd =
    document.getElementById("birthdayTitle");


  // ----------------------------------------------------
  // Split message into characters
  // ----------------------------------------------------

  let chatText = textBoxChars.textContent.trim();
  textBoxChars.innerHTML = chatText.split(" ").map(word => 
    "<div style='display:inline-block;'>" + word.split("").map(c => "<span>" + c + "</span>").join("") + "</div>"
  ).join(" ");


  // ----------------------------------------------------
  // Split birthday title
  // ----------------------------------------------------

  let hbdText = hbd.textContent.trim();
  hbd.innerHTML = hbdText.split(" ").map(word => 
    "<div style='display:inline-block;'>" + word.split("").map(c => "<span>" + c + "</span>").join("") + "</div>"
  ).join(" ");


  const ideaTextTrans = {
    opacity: 0,
    y: -30,
    rotationX: 10,
    skewX: "10deg"
  };


  const ideaTextTransLeave = {
    opacity: 0,
    y: 30,
    rotationY: 10,
    skewX: "-10deg"
  };


  const tl =
    new TimelineMax();


  // ====================================================
  // OPENING
  // ====================================================

  tl

    .to(
      ".container",
      0.2,
      {
        visibility: "visible"
      }
    )

    .from(
      ".one",
      1,
      {
        opacity: 0,
        y: 40,
        scale: 0.9,
        ease: Power3.easeOut
      }
    )

    .from(
      ".two",
      0.8,
      {
        opacity: 0,
        y: 20
      },
      "-=0.4"
    )

    .to(
      ".one",
      0.8,
      {
        opacity: 0,
        y: -40,
        scale: 1.05
      },
      "+=2.5"
    )

    .to(
      ".two",
      0.6,
      {
        opacity: 0,
        y: -20
      },
      "-=0.6"
    );


  // ====================================================
  // BIRTHDAY REVEAL
  // ====================================================

  tl

    .from(
      ".three",
      1,
      {
        opacity: 0,
        scale: 0.4,
        rotation: -8,
        ease: Elastic.easeOut.config(1, 0.5)
      }
    )

    .to(
      ".three",
      0.15,
      {
        scale: 1.08
      }
    )

    .to(
      ".three",
      0.15,
      {
        scale: 1
      }
    )

    .to(
      ".three",
      0.7,
      {
        opacity: 0,
        y: -40
      },
      "+=1.7"
    );


  // ====================================================
  // MESSAGE CARD
  // ====================================================

  tl

    .from(
      ".four",
      0.9,
      {
        opacity: 0,
        scale: 0.75,
        y: 50,
        ease: Back.easeOut.config(1.5)
      }
    )

    .from(
      ".fake-btn",
      0.5,
      {
        opacity: 0,
        scale: 0
      },
      "-=0.4"
    )

    .staggerTo(
      "#chatMessage span",
      0.04,
      {
        visibility: "visible"
      },
      0.025
    )

    .to(
      ".fake-btn",
      0.25,
      {
        scale: 1.1,
        backgroundColor: "#ff8fab"
      }
    )

    .to(
      ".fake-btn",
      0.2,
      {
        scale: 1
      }
    )

    .to(
      ".four",
      0.7,
      {
        opacity: 0,
        scale: 0.8,
        y: -80
      },
      "+=1"
    );


  // ====================================================
  // IDEAS
  // ====================================================

  tl

    .from(
      ".idea-1",
      0.8,
      ideaTextTrans
    )

    .to(
      ".idea-1",
      0.7,
      ideaTextTransLeave,
      "+=1.2"
    )

    .from(
      ".idea-2",
      0.8,
      ideaTextTrans
    )

    .to(
      ".idea-2",
      0.7,
      ideaTextTransLeave,
      "+=1.2"
    )

    .from(
      ".idea-3",
      0.8,
      ideaTextTrans
    )

    .to(
      ".idea-3 strong",
      0.5,
      {
        scale: 1.25,
        backgroundColor: "#ff5c8a",
        color: "#fff",
        boxShadow:
          "0 8px 25px rgba(255,92,138,0.3)"
      }
    )

    .to(
      ".idea-3",
      0.7,
      ideaTextTransLeave,
      "+=1.2"
    )

    .from(
      ".idea-4",
      0.8,
      ideaTextTrans
    )

    .to(
      ".idea-4",
      0.7,
      ideaTextTransLeave,
      "+=1.2"
    );


  // ====================================================
  // SPECIAL MOMENT
  // ====================================================

  tl

    .from(
      ".idea-5",
      1,
      {
        opacity: 0,
        scale: 0.3,
        rotation: -15,
        y: 80,
        ease: Elastic.easeOut.config(1, 0.5)
      }
    )

    .to(
      ".idea-5",
      0.5,
      {
        scale: 1.08
      }
    )

    .to(
      ".idea-5",
      0.5,
      {
        scale: 1
      }
    )

    .to(
      ".idea-5",
      0.7,
      {
        opacity: 0,
        scale: 0.3,
        rotation: 10
      },
      "+=1.5"
    );


  // ====================================================
  // SO
  // ====================================================

  tl

    .staggerFrom(
      ".idea-6 span",
      0.8,
      {
        scale: 3,
        opacity: 0,
        rotation: 20,
        ease: Elastic.easeOut.config(1, 0.5)
      },
      0.2
    )

    .staggerTo(
      ".idea-6 span",
      0.7,
      {
        scale: 2.5,
        opacity: 0,
        rotation: -20
      },
      0.15,
      "+=0.8"
    );


  // ====================================================
  // BALLOONS
  // ====================================================

  tl

    .staggerFromTo(
      ".baloons img",
      3,
      {
        opacity: 0,
        y: 1400,
        rotation: -10
      },
      {
        opacity: 1,
        y: -1000,
        rotation: 10,
        ease: Power1.easeOut
      },
      0.15
    );


  // ====================================================
  // PHOTO REVEAL
  // ====================================================

  tl

    .from(
      ".six",
      1.2,
      {
        scale: 0.4,
        opacity: 0,
        y: 100,
        rotationZ: -5,
        ease: Elastic.easeOut.config(1, 0.5)
      },
      "-=1.8"
    )

    .from(
      ".hat",
      0.8,
      {
        x: -120,
        y: -250,
        rotation: -180,
        opacity: 0,
        ease: Back.easeOut.config(1.7)
      },
      "-=0.5"
    );


  // ====================================================
  // BIRTHDAY TITLE
  // ====================================================

  tl

    .staggerFrom(
      "#birthdayTitle span",
      0.7,
      {
        opacity: 0,
        y: -60,
        rotation: 120,
        scale: 0.4,
        ease: Elastic.easeOut.config(1, 0.5)
      },
      0.07
    )

    .staggerFromTo(
      "#birthdayTitle span",
      0.6,
      {
        scale: 1.3
      },
      {
        scale: 1,
        rotationY: 0,
        ease: Expo.easeOut
      },
      0.05,
      "birthday"
    )

    .from(
      "#wishText",
      0.8,
      {
        opacity: 0,
        y: 25,
        skewX: "-10deg"
      },
      "birthday+=0.2"
    );


  // ====================================================
  // DECORATIVE PARTICLES
  // ====================================================

  tl

    .staggerTo(
      ".eight svg",
      1.5,
      {
        visibility: "visible",
        opacity: 0,
        scale: 60,
        repeat: 2,
        repeatDelay: 1
      },
      0.2
    );


  // ====================================================
  // FINAL SECTION
  // ====================================================

  tl

    .to(
      ".six",
      0.8,
      {
        opacity: 0,
        y: -40,
        scale: 0.95,
        visibility: "hidden"
      }
    )

    .staggerFrom(
      ".nine > *",
      1,
      {
        opacity: 0,
        y: 30,
        scale: 0.9
      },
      0.4
    )

    .to(
      ".last-smile",
      0.5,
      {
        rotation: 90,
        scale: 1.2
      },
      "+=0.8"
    );


  // ====================================================
  // REPLAY
  // ====================================================

  const replayButton =
    document.getElementById("replay");


  if (replayButton) {

    replayButton.addEventListener(
      "click",
      () => {

        tl.restart();

      }
    );

  }

};


// ======================================================
// START
// ======================================================

fetchData()

  .then(() => {

    createParticles();

    animationTimeline();

  })

  .catch(error => {

    console.error(
      "Customization loading failed:",
      error
    );

    createParticles();

    animationTimeline();

  });
