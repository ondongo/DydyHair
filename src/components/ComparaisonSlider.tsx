"use client";
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useRef, useState } from "react";

import "../static/styles.css";
function ComparaisonSlider() {
  const sliderRef = useRef<HTMLInputElement | null>(null);
  const thumbRef = useRef<HTMLSpanElement | null>(null);
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const [isActive, setIsActive] = useState<boolean>(false);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (overlayRef.current && sliderRef.current) {
      overlayRef.current.style.width = `${value}%`;
      sliderRef.current.style.left = `${value}%`;
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!isActive || !thumbRef.current || !sliderRef.current) return;

    let position = e.nativeEvent.offsetY - 20;

    if (position <= -20) {
      position = -20;
    }

    if (position >= sliderRef.current.offsetHeight - 20) {
      position = sliderRef.current.offsetHeight - 20;
    }

    thumbRef.current.style.top = `${position}px`;
  };

  useEffect(() => {
    const sliderElement = sliderRef.current;
    if (sliderElement) {
      const handleMouseUp = () => setIsActive(false);
      sliderElement.addEventListener("mouseup", handleMouseUp);
      return () => sliderElement.removeEventListener("mouseup", handleMouseUp);
    }
  }, []);
  return (
    <>
      <section
        className="image-comparison "
        data-component="image-comparison-slider"
      >
        <div className="image-comparison__slider-wrapper">
          <label
            htmlFor="image-compare-range"
            className="image-comparison__label"
          >
            Move image comparison slider
          </label>
          <input
            type="range"
            min="0"
            max="100"
            defaultValue="50"
            className="image-comparison__range"
            id="image-compare-range"
            ref={sliderRef}
          />

          <div
            className="image-comparison__image-wrapper image-comparison__image-wrapper--overlay"
            ref={overlayRef}
          >
            <figure className="image-comparison__figure image-comparison__figure--overlay">
              <img
                src="https://images.unsplash.com/photo-1566702580807-95611c919b47?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&h=1000&q=80"
                alt="Before"
                className="image-comparison__image"
              />
              <figcaption className="image-comparison__caption image-comparison__caption--before">
                <span className="image-comparison__caption-body">
                  Before Label
                </span>
              </figcaption>
            </figure>
          </div>

          <div className="image-comparison__image-wrapper">
            <figure className="image-comparison__figure">
              <img
                src="https://images.unsplash.com/photo-1554110397-9bac083977c6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&h=1000&q=80"
                alt="After"
                className="image-comparison__image"
              />
              <figcaption className="image-comparison__caption image-comparison__caption--after">
                <span className="image-comparison__caption-body">
                  After Label
                </span>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>
    </>
  );
}

export default ComparaisonSlider;
