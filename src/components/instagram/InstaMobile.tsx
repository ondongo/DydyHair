import { Flex, Image } from "@chakra-ui/react";
import React from "react";
import Stories, { WithSeeMore } from "react-insta-stories";

function InstaMobile() {
  return (
    <Flex width={"100%"}>
      <Stories
        loop
        keyboardNavigation
        defaultInterval={3000}
        stories={stories2}
        onStoryEnd={(s, st) => console.log("story ended", s, st)}
        onAllStoriesEnd={(s, st) => console.log("all stories ended", s, st)}
        onStoryStart={(s, st) => console.log("story started", s, st)}
        width={"100%"}
      />
    </Flex>
  );
}

export default InstaMobile;

const Story2 = ({ action, isPaused }) => {
  return (
    <div
      style={{ ...contentStyle, background: "Aquamarine", color: "#16161d" }}
    >
      <h1>Eldy story ❤️.</h1>
      {/* <p>
          Render your custom JSX by passing just a{" "}
          <code style={{ fontStyle: "italic" }}>content</code> property inside
          your story object.
        </p> */}
      {/* <p>
          You get a <code style={{ fontStyle: "italic" }}>action</code> prop as an
          input to your content function, that can be used to play or pause the
          story.
        </p> */}
      {/* <h1>{isPaused ? "Paused" : "Playing"}</h1> */}
      <h4>
     prennez rendez-vous chez dydy hair 😄<br /> 
      </h4>
      {/* <p>React Native version coming soon.</p> */}
    </div>
  );
};

const stories2 = [
  {
    url: "/video/video2.mov",
    type: "video",
  },
  {
    content: ({ action, isPaused }) => {
      return (
        <div style={contentStyle}>
          <h1>Hey All 👋</h1>
          <h1>Check &apos;s journey story.</h1>

          <Image
            style={image}
            src="/image/coupe/coupe4.jpg"
            alt=""
            objectFit={"cover"}
          />
          <h4>stories by Eldy ❤️</h4>
        </div>
      );
    },
  },

  {
    content: ({ action, isPaused }) => {
      return (
        <div style={contentStyle}>
          <Image
            style={image}
            src="/image/coupe/coupe1.jpg"
            alt=""
            objectFit={"cover"}
          />
          <h4>stories by Eldy ❤️</h4>
        </div>
      );
    },
  },

  {
    content: ({ action, isPaused }) => {
      return (
        <div style={contentStyle}>
          <h1>Hey All 👋</h1>
          <h1>Check &apos;s journey story.</h1>

          <Image
            style={image}
            src="image/coupe/coupe3.jpg"
            alt=""
            objectFit={"cover"}
          />
          <h4>stories by Eldy ❤️</h4>
        </div>
      );
    },
  },
  // {
  //   content: ({ action, isPaused }) => {
  //     return (
  //       <div style={contentStylestoryback}>
  //         <img
  //           style={image}
  //           src="https://downloadwap.com/thumbs2/wallpapers/p2/2019/nature/48/c62b256713551358.jpg"
  //         ></img>
  //       </div>
  //     );
  //   }
  // },

  // {
  //   url: "https://picsum.photos/1080/1920"
  //   seeMore: ({ close }) => (
  //     <div
  //       style={{
  //         maxWidth: "100%",
  //         height: "100%",
  //         padding: 40,
  //         background: "white"
  //       }}
  //     >
  //       <h2>Just checking the see more feature.</h2>
  //       <p style={{ textDecoration: "underline" }} onClick={close}>
  //         Go on, close this popup.
  //       </p>
  //     </div>
  //   )
  // },

  {
    content: Story2,
  },
];

const image = {
  display: "block",
  maxWidth: "100%",
  borderRadius: 4,
};

const contentStylestoryback = {
  background: "black",
  width: "100%",
  padding: 20,
  color: "white",
};

const contentStylestorywhite = {
  background: "white",
  width: "100%",
  padding: 20,
  color: "white",
};

const code = {
  background: "#eee",
  padding: "5px 10px",
  borderRadius: "4px",
  color: "#333",
};

const contentStyle = {
  background: "salmon",
  width: "100%",
  padding: 20,
  color: "white",
};

const customSeeMore = {
  textAlign: "center",
  fontSize: 14,
  bottom: 20,
  position: "relative",
};
