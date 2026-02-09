<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>WHERE QUESTIONS MEET SCIENCE: The Mysteries of the Brain</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <style>
    :root{
      --bg:#0b1020;
      --panel:#121a33;
      --text:#e7ecff;
      --muted:#b7c0ff;
      --accent:#7c5cff;
      --accent2:#2dd4bf;
      --shadow:0 20px 40px rgba(0,0,0,.45);
      --radius:22px;
    }

    body{
      margin:0;
      font-family: system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
      background:
        radial-gradient(900px 500px at 20% 0%, rgba(124,92,255,.25), transparent 55%),
        radial-gradient(900px 500px at 80% 20%, rgba(45,212,191,.18), transparent 55%),
        var(--bg);
      color:var(--text);
    }

    .container{
      width:min(1100px,92%);
      margin:auto;
    }

    /* HERO */
    .hero{
      min-height:70vh;
      display:flex;
      align-items:center;
    }

    .hero-wrap{
      display:flex;
      align-items:center;
      justify-content:space-between;
      gap:50px;
    }

    .kicker{
      display:inline-block;
      padding:8px 14px;
      border-radius:999px;
      letter-spacing:.2em;
      font-weight:900;
      font-size:.85rem;
      color:var(--muted);
      border:1px solid rgba(255,255,255,.15);
      margin-bottom:18px;
    }

    h1{
      font-size:clamp(2.4rem,5vw,3.5rem);
      margin:0;
    }

    .accent{
      color:var(--accent);
    }

    /* 3D IMAGE */
    .hero-3d{
      perspective: 1000px;
    }

    .brain-3d{
      width:280px;
      max-width:100%;
      transform-style: preserve-3d;
      transition: transform 0.12s ease;
      filter: drop-shadow(0 35px 55px rgba(0,0,0,.65));
      will-change: transform;
    }

    /* SECTION */
    .section{
      padding:70px 0;
    }

    .section h2{
      text-align:center;
      margin-bottom:40px;
      font-size:2rem;
    }

    footer{
      text-align:center;
      padding:30px 0;
      color:var(--muted);
      border-top:1px solid rgba(255,255,255,.12);
      font-size:.9rem;
    }

    @media(max-width:800px){
      .hero-wrap{
        flex-direction:column;
        text-align:center;
      }
    }
  </style>
</head>

<body>

  <!-- HERO -->
  <section class="hero">
    <div class="container hero-wrap">

      <div>
        <p class="kicker">WHERE QUESTIONS MEET SCIENCE</p>
        <h1>The Mysteries of the <span class="accent">Brain</span></h1>
      </div>

      <div class="hero-3d">
        <img src="brain.png" class="brain-3d" alt="Brain">
      </div>

    </div>
  </section>

  <!-- CONTENT PLACEHOLDER -->
  <section class="section">
    <div class="container">
      <h2>Scientific Summaries</h2>
      <p style="text-align:center;color:var(--muted)">
        (Content will be added here)
      </p>
    </div>
  </section>

  <footer>
    © 2026 — WHERE QUESTIONS MEET SCIENCE
  </footer>

  <!-- JAVASCRIPT : 3D MOVEMENT -->
  <script>
    const brain = document.querySelector(".brain-3d");
    const box = document.querySelector(".hero-3d");

    function moveBrain(e){
      const r = box.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width;
      const y = (e.clientY - r.top) / r.height;

      const rotateY = (x - 0.5) * 26;
      const rotateX = (0.5 - y) * 20;

      brain.style.transform =
        `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(12px)`;
    }

    function resetBrain(){
      brain.style.transform =
        "rotateX(0deg) rotateY(0deg) translateZ(0)";
    }

    box.addEventListener("mousemove", moveBrain);
    box.addEventListener("mouseleave", resetBrain);

    // Mobile support
    box.addEventListener("touchmove", e => {
      if(e.touches.length > 0){
        moveBrain(e.touches[0]);
      }
    }, { passive:true });

    box.addEventListener("touchend", resetBrain);
  </script>

</body>
</html>
