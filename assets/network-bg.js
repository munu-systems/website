(function () {
  function boot() {
    var canvas = document.querySelector(".network-bg");
    if (!canvas) {
      canvas = document.createElement("canvas");
      canvas.className = "network-bg";
      document.body.prepend(canvas);
    }
    runBg(canvas);
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }

  function runBg(canvas) {
    var ctx = canvas.getContext("2d");
    var W = 0, H = 0, dpr = Math.min(window.devicePixelRatio || 1, 2);
    var nodes = [];
    var raf = 0;
    var mouseX = -9999, mouseY = -9999;

    var NODE_COUNT_BASE = 70;
    var CONNECT_DIST = 160;
    var PULSE_SPEED = 0.0006;

    function resize() {
      W = canvas.clientWidth = window.innerWidth;
      H = canvas.clientHeight = Math.max(window.innerHeight, document.body.scrollHeight);
      canvas.width = W * dpr;
      canvas.height = H * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      initNodes();
    }

    function initNodes() {
      var count = Math.round(NODE_COUNT_BASE * Math.min(1.5, (W * H) / (1400 * 900)));
      nodes = [];
      for (var i = 0; i < count; i++) {
        nodes.push({
          x: Math.random() * W,
          y: Math.random() * H,
          vx: (Math.random() - 0.5) * 0.12,
          vy: (Math.random() - 0.5) * 0.12,
          r: Math.random() * 1.4 + 0.6,
          phase: Math.random() * Math.PI * 2,
        });
      }
    }

    function step(t) {
      ctx.clearRect(0, 0, W, H);

      for (var i = 0; i < nodes.length; i++) {
        var a = nodes[i];
        a.x += a.vx; a.y += a.vy;
        if (a.x < 0 || a.x > W) a.vx *= -1;
        if (a.y < 0 || a.y > H) a.vy *= -1;

        for (var j = i + 1; j < nodes.length; j++) {
          var b = nodes[j];
          var dx = a.x - b.x, dy = a.y - b.y;
          var d2 = dx * dx + dy * dy;
          if (d2 < CONNECT_DIST * CONNECT_DIST) {
            var d = Math.sqrt(d2);
            var alpha = (1 - d / CONNECT_DIST) * 0.18;
            ctx.strokeStyle = "rgba(45, 212, 191, " + alpha + ")";
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }

        var mdx = a.x - mouseX, mdy = a.y - mouseY;
        var md2 = mdx * mdx + mdy * mdy;
        if (md2 < 180 * 180) {
          var md = Math.sqrt(md2);
          var malpha = (1 - md / 180) * 0.35;
          ctx.strokeStyle = "rgba(45, 212, 191, " + malpha + ")";
          ctx.lineWidth = 0.8;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(mouseX, mouseY);
          ctx.stroke();
        }
      }

      for (var k = 0; k < nodes.length; k++) {
        var n = nodes[k];
        var pulse = 0.5 + 0.5 * Math.sin(t * PULSE_SPEED + n.phase);
        var r = n.r * (0.8 + 0.4 * pulse);
        ctx.fillStyle = "rgba(150, 220, 210, " + (0.25 + 0.35 * pulse) + ")";
        ctx.beginPath();
        ctx.arc(n.x, n.y, r, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = "rgba(45, 212, 191, " + (0.05 + 0.05 * pulse) + ")";
        ctx.beginPath();
        ctx.arc(n.x, n.y, r * 4, 0, Math.PI * 2);
        ctx.fill();
      }

      raf = requestAnimationFrame(step);
    }

    window.addEventListener("resize", function () {
      cancelAnimationFrame(raf);
      resize();
      raf = requestAnimationFrame(step);
    });
    window.addEventListener("mousemove", function (e) {
      mouseX = e.clientX + window.scrollX;
      mouseY = e.clientY + window.scrollY;
    });
    window.addEventListener("mouseout", function () { mouseX = -9999; mouseY = -9999; });

    resize();
    raf = requestAnimationFrame(step);
  }
})();
