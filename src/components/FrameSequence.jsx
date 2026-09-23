import { useEffect, useRef } from "react";
import SiteFooter from "./SiteFooter";
import SiteNavigation from "./SiteNavigation";

const SEGMENTS = [
  { folder: "1_Blueprint-to-real", frameCount: 240 },
  { folder: "2_real-to-hall", frameCount: 300 },
  { folder: "3_hall-to-bedroom", frameCount: 300 },
];
const FRAME_PATHS = SEGMENTS.flatMap(({ folder, frameCount }) =>
  Array.from({ length: frameCount }, (_, index) => {
    const frameNumber = String(index + 1).padStart(3, "0");
    return `${import.meta.env.BASE_URL}${folder}/ezgif-frame-${frameNumber}.jpg`;
  }),
);

function HomeAfterHero() {
  return (
    <section className="home-after-hero">
      <div className="home-intro-copy">
        <p className="home-eyebrow">Dream Decor / Interior + Exterior</p>
        <h2>
          We design spaces
          <br />
          with a sense of place.
        </h2>
      </div>
      <div className="home-intro-detail">
        <p>
          From the first line of a blueprint to the last beam of light, we
          create homes that are meant to be felt, lived in and remembered.
        </p>
        <a className="home-arrow-link" href="/studio">
          Discover the studio <span aria-hidden="true">↗</span>
        </a>
      </div>
      <div className="home-service-strip" aria-label="Studio services">
        <a href="/projects">
          <span>01</span>
          <strong>Architecture</strong>
          <em>Explore work ↗</em>
        </a>
        <a href="/services">
          <span>02</span>
          <strong>Interiors</strong>
          <em>Our services ↗</em>
        </a>
        <a href="/contact">
          <span>03</span>
          <strong>Built around you</strong>
          <em>Start a conversation ↗</em>
        </a>
      </div>
    </section>
  );
}

export default function FrameSequence() {
  const canvasRef = useRef(null);
  const stageRef = useRef(null);
  const framesRef = useRef([]);
  const currentFrameRef = useRef(0);
  const requestedFrameRef = useRef(0);
  const rafRef = useRef(0);
  const dimensionsRef = useRef({ width: 0, height: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const stage = stageRef.current;
    const context = canvas.getContext("2d", { alpha: false });
    let disposed = false;

    const drawFrame = (image) => {
      if (!image) return;
      const { width, height } = dimensionsRef.current;
      const imageRatio = image.naturalWidth / image.naturalHeight;
      const canvasRatio = width / height;
      let drawWidth = width;
      let drawHeight = height;
      let offsetX = 0;
      let offsetY = 0;

      context.fillStyle = "#161513";
      context.fillRect(0, 0, width, height);
      if (imageRatio > canvasRatio) {
        drawWidth = height * imageRatio;
        offsetX = (width - drawWidth) / 2;
      } else {
        drawHeight = width / imageRatio;
        offsetY = (height - drawHeight) / 2;
      }
      context.drawImage(image, offsetX, offsetY, drawWidth, drawHeight);
    };

    const resizeCanvas = () => {
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
      const width = stage.clientWidth;
      const height = stage.clientHeight;
      dimensionsRef.current = { width, height };
      canvas.width = Math.round(width * pixelRatio);
      canvas.height = Math.round(height * pixelRatio);
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
      drawFrame(framesRef.current[currentFrameRef.current]);
    };

    const paintRequestedFrame = () => {
      rafRef.current = 0;
      const nextFrame = framesRef.current[requestedFrameRef.current];
      if (nextFrame) {
        currentFrameRef.current = requestedFrameRef.current;
        drawFrame(nextFrame);
      }
    };

    const requestFrame = (frameIndex) => {
      requestedFrameRef.current = frameIndex;
      if (!rafRef.current)
        rafRef.current = requestAnimationFrame(paintRequestedFrame);
    };

    const updateFromScroll = () => {
      const scrollDistance =
        stage.parentElement.offsetHeight - window.innerHeight;
      const progress = Math.min(
        1,
        Math.max(
          0,
          (window.scrollY - stage.parentElement.offsetTop) / scrollDistance,
        ),
      );
      requestFrame(
        Math.min(
          FRAME_PATHS.length - 1,
          Math.floor(progress * FRAME_PATHS.length),
        ),
      );
    };

    const preloadFrame = (frameIndex) =>
      new Promise((resolve) => {
        const image = new Image();
        image.decoding = "async";
        image.onload = () => {
          framesRef.current[frameIndex] = image;
          resolve(image);
        };
        image.onerror = () => resolve(null);
        image.src = FRAME_PATHS[frameIndex];
      });

    const preloadSequence = async () => {
      const firstFrame = await preloadFrame(0);
      if (disposed) return;
      resizeCanvas();
      drawFrame(firstFrame);
      for (
        let start = 1;
        start < FRAME_PATHS.length && !disposed;
        start += 12
      ) {
        await Promise.all(
          FRAME_PATHS.slice(start, start + 12).map((_, offset) =>
            preloadFrame(start + offset),
          ),
        );
        if (framesRef.current[requestedFrameRef.current])
          requestFrame(requestedFrameRef.current);
      }
    };

    window.addEventListener("scroll", updateFromScroll, { passive: true });
    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();
    preloadSequence();

    return () => {
      disposed = true;
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("scroll", updateFromScroll);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <>
      <main
        className="frame-sequence"
        aria-label="Scroll-controlled architectural frame sequence"
      >
        <div ref={stageRef} className="sticky-stage">
          <canvas
            ref={canvasRef}
            className="sequence-canvas"
            aria-label="Architectural visualization controlled by scrolling"
          />
          <div className="canvas-shade" aria-hidden="true" />
          <SiteNavigation variant="home" />
        </div>
      </main>

      <HomeAfterHero />
      <SiteFooter variant="home" />
    </>
  );
}
