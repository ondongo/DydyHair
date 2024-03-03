import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, RotateCcw } from "react-feather";
import Stories from "react-insta-stories";
import React from "react";

const stories = [
  {
    type: "iframe",
    html: `<html>
            <body style='
              margin: 0;
              padding: 0;
              overflow: hidden;
              display: flex;
              justify-content: center;
              align-items: center;
            '>
              <img src="image/tarif/tarif1.jpg" style="  height: 675px;
              width: 375px; object-fit: cover;" />
            </body>
          </html>`,
  },
  {
    type: "iframe",
    html: `<html>
            <body style='
              margin: 0;
              padding: 0;
              overflow: hidden;
              display: flex;
              justify-content: center;
              align-items: center;
            '>
              <img src="image/tarif/tarif2.png" style="  height: 675px;
              width: 375px; object-fit: cover;" />
            </body>
          </html>`,
  },
  {
    type: "iframe",
    html: `<html>
            <body style='
              margin: 0;
              padding: 0;
              overflow: hidden;
              display: flex;
              justify-content: center;
              align-items: center;
            '>
              <img src="image/coupe/coupe1.jpg" style="  height: 675px;
              width: 375px; object-fit: cover;" />
            </body>
          </html>`,
  },
  {
    type: "iframe",
    html: `<html>
            <body style='
              margin: 0;
              padding: 0;
              overflow: hidden;
              display: flex;
              justify-content: center;
              align-items: center;
            '>
              <img src="image/coupe/coupe4.jpg" style="  height: 675px;
              width: 375px; object-fit: cover;" />
            </body>
          </html>`,
  },
];


const isValidStory = (index: any) =>
  index >= 0 && index < stories.length ? index : 0;

const Iframe = ({ html }) => {
  return (
    <iframe
      title="container"
      style={{
        borderRadius: "16px",
      }}
      frameBorder="0"
      width="100%"
      height="100%"
      srcDoc={html}
    />
  );
};

const Renderer = ({ story, action, isPaused, config }) => {
  useEffect(() => {
    action("play");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [story]);

  return <Iframe html={story.html} />;
};

const tester = (story: any) => {
  return {
    condition: story.type === "iframe",
    priority: 1,
  };
};

const Preview = ({ index, isLeft }: any) => {
  const shouldNotDisplay =
    (index === 0 && isLeft) || (index === stories.length - 1 && !isLeft);

  return (
    <div
      style={{
        width: 250,
        height: 400,
        borderRadius: "16px",
        opacity: 0.5,
      }}
    >
      {shouldNotDisplay ? null : (
        <Iframe
          html={isLeft ? stories[index - 1].html : stories[index + 1].html}
        />
      )}
    </div>
  );
};

function InstaStories() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isStoryOver, setIsStoryOver] = useState(false);

  useEffect(() => {
    setIsStoryOver(currentIndex + 1 === stories.length);
  }, [currentIndex]);

  const handleStoryChange = (newIndex: any) => {
    setCurrentIndex(newIndex);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
        backgroundColor: "#1e1e1e",
      }}
    >
      <div
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Preview index={currentIndex} isLeft={true} />
      </div>
      <div
        style={{
          flex: 1,
          position: "relative",
          display: "flex",
          justifyContent: "center",
          padding: "0 20px",
        }}
      >
        <button
          style={{
            position: "absolute",
            top: "40%",
            left: 0,
            transform: "translate(0 50px)",
            backgroundColor: "#616161",
            border: "none",
            borderRadius: "50px",
            padding: "8px 10px",
            cursor: "pointer",
            zIndex: 999,
          }}
          disabled={currentIndex === 0}
          onClick={() => setCurrentIndex(isValidStory(currentIndex - 1))}
        >
          <ChevronLeft color="white" />
        </button>
        <Stories
          currentIndex={currentIndex}
          stories={stories}
          renderers={[{ renderer: Renderer, tester }]}
          defaultInterval={5000}
          loop={false}
          keyboardNavigation
          width={375}
          height={675}
          storyContainerStyles={{
            borderRadius: "16px",
          }}
          storyStyles={{
            borderRadius: "16px",
            zIndex: 20,
          }}
          onStoryStart={(index: any) => {
            handleStoryChange(index);
          }}
        />
        <button
          style={{
            position: "absolute",
            top: "40%",
            right: 0,
            backgroundColor: "#616161",
            border: "none",
            borderRadius: "50px",
            padding: "8px 10px",
            cursor: "pointer",
          }}
          disabled={currentIndex + 1 === stories.length && !isStoryOver}
          onClick={() => setCurrentIndex(isValidStory(currentIndex + 1))}
        >
          {isStoryOver ? (
            <RotateCcw color="white" />
          ) : (
            <ChevronRight key="1" color="white" />
          )}
        </button>
      </div>
      <div
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Preview index={currentIndex} isLeft={false} />
      </div>
    </div>
  );
}

export default InstaStories;
