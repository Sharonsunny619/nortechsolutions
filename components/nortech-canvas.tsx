"use client";
import { ContextMode } from "glsl-canvas-js/dist/esm/context/context";
import { Canvas, type ICanvasOptions } from "glsl-canvas-js/dist/esm/glsl";
import { type FC, useLayoutEffect, useRef } from "react";
import React from "react";

const glsl = (x: TemplateStringsArray) => x[0];

const vertexShader = glsl`
  attribute vec4 a_position;

  varying vec2 v_uv;

  void main() {
    v_uv = a_position.xy;
    gl_Position = a_position;
  }
`;

const fragmentShader = glsl`
    #ifdef GL_ES
    precision mediump float;
    #endif

    uniform vec2 u_resolution;
    uniform float u_time;

    varying vec2 v_uv;

    // Simplex 2D noise from https://gist.github.com/patriciogonzalezvivo/670c22f3966e662d2f83
    vec3 permute(vec3 x) { return mod(((x*34.0)+1.0)*x, 289.0); }

    float snoise(vec2 v){
        const vec4 C = vec4(0.211324865405187, 0.366025403784439,
                -0.577350269189626, 0.024390243902439);
        vec2 i  = floor(v + dot(v, C.yy) );
        vec2 x0 = v -   i + dot(i, C.xx);
        vec2 i1;
        i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
        vec4 x12 = x0.xyxy + C.xxzz;
        x12.xy -= i1;
        i = mod(i, 289.0);
        vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
        + i.x + vec3(0.0, i1.x, 1.0 ));
        vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy),
            dot(x12.zw,x12.zw)), 0.0);
        m = m*m ;
        m = m*m ;
        vec3 x = 2.0 * fract(p * C.www) - 1.0;
        vec3 h = abs(x) - 0.5;
        vec3 ox = floor(x + 0.5);
        vec3 a0 = x - ox;
        m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
        vec3 g;
        g.x  = a0.x  * x0.x  + h.x  * x0.y;
        g.yz = a0.yz * x12.xz + h.yz * x12.yw;
        return 130.0 * dot(m, g);
    }

    // Cognyn.ai brand colors - Dark Bluish and Silverish
    const vec4 COLOUR_LIGHT = vec4(226.0, 232.0, 240.0, 1.0) / 255.0;    // Silver/White
    const vec4 COLOUR_DARK = vec4(37.0, 99.0, 235.0, 1.0) / 255.0;     // Logo Blue
    const vec4 COLOUR_MID_1 = vec4(100.0, 116.0, 139.0, 1.0) / 255.0;    // Slate
    const vec4 COLOUR_MID_2 = vec4(26.0, 54.0, 93.0, 1.0) / 255.0;    // Silver Dark
 
  
    
    void main() {
        float timeA = u_time * 0.08;
        float timeB = u_time * 0.15;
        float timeC = u_time * 0.25;
        
        // Normalized noise values with different uv scales
        float noiseA = snoise(v_uv + timeA) * 0.5 + 0.5;
        float noiseB = snoise(v_uv * 0.3 - timeB) * 0.5 + 0.5;
        float noiseC = snoise(v_uv * 0.6 + timeC) * 0.5 + 0.5;

        // Creates 2 layers for above and below the wave
        vec4 colourA = mix(mix(COLOUR_LIGHT, COLOUR_MID_1, noiseA), COLOUR_MID_2, noiseC);
        vec4 colourB = mix(mix(COLOUR_DARK, COLOUR_LIGHT, noiseC), COLOUR_MID_1, noiseB);

        // Mix the 2 colours using a wave pattern
        float mixWave = sin((v_uv.x * 3.5) + u_time * 0.2) + (v_uv.y + noiseB * 0.4 + 1.0);
        float maxStep = clamp(noiseA - 0.12 * 1.1, 0.0, 1.0);
        mixWave = smoothstep(0.0, maxStep, mixWave - noiseB * 0.15);

        vec4 finalColor = mix(colourA, colourB, mixWave);

        gl_FragColor = finalColor;
    }
`;

interface NortechCanvasProps {
  isBottom?: boolean;
}

const NortechCanvas: FC<NortechCanvasProps> = ({ isBottom }) => {
  const canvas = useRef<HTMLCanvasElement>(null);

  useLayoutEffect(() => {
    if (!canvas.current) return;
    const options: ICanvasOptions = {
      vertexString: vertexShader,
      fragmentString: fragmentShader,
      alpha: false,
      depth: false,
      antialias: true,
      mode: ContextMode.Flat,
    };
    const glsl = new Canvas(canvas.current, options);
  }, [canvas]);

  return (
    <canvas
      ref={canvas}
      width={1200}
      height={450}
      className={`absolute left-0 right-0 ${isBottom ?"bottom-0":"top-0"} h-[450px] w-full overflow-hidden`}
      style={{ transform: isBottom?"translateY(60%) skewY(-7deg)":"translateY(-60%) skewY(-7deg)" }}
    />
  );
};

export default NortechCanvas;
 