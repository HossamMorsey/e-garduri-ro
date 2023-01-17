// List of imports that's used inside this component

import React, { useState } from "react";
import "./Tabs.css";

// declaring colors that will be used to color the fence
const FENCE_COLORS = ["#000000", "#6c9974", "#80532c", "#233a53", "#757575", "#00cec9"];

// Function component for Tabs.

const Tabs = () => {
  // Local state that will be used inside Tabs component
  const [toggleState, setToggleState] = useState(1);
  const [color, setColor] = useState(1);

  // function responsible for changing between tabs
  const toggleTab = (index) => {
    setToggleState(index);
  };

  // function responsible for handling any change of colors.
  const handleOnChangeColor = (color) => {
    setColor(color);
  };

  const fenceItems = (length) => {
    let fenceColor = FENCE_COLORS[color] ? FENCE_COLORS[color] : "#000000";
    const fenceItem = [];
    for (let i = 0; i < length; i++) {
      fenceItem.push(
        <div className="panel" style={{ backgroundColor: fenceColor }}></div>
      );
    }
    return fenceItem;
  };

  // Main return function that responsible for Tabs component
  return (
    <div className="container">
      {/* Here is the tabs titles  */}
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          Color
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          Panels
        </button>
        <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
          Auto Gates
        </button>
        <button
          className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(4)}
        >
          Pedestrian Gates
        </button>
        <button
          className={toggleState === 5 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(5)}
        >
          Offer
        </button>
        <button
          className={toggleState === 6 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(6)}
        >
          Airport Gates
        </button>
      </div>

      {/* Here's the tabs contents  */}
      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          <h2 style={{ padding: "40px" }}>
            <span style={{ textDecoration: "underline", fontSize: "50px" }}>
              Color
            </span>
          </h2>

          <div className="fences-container">
            <div className="vertical-bar-container">
              <div className="v-bar"></div>
              <div className="bar-tag"></div>
            </div>

            <div className="fence">
              <div
                className="horizontal-fence"
                style={{ border: `10px solid ${FENCE_COLORS[color]}` }}
              >
                {fenceItems(11)}
              </div>
              <div className="horizontal-bar"></div>
            </div>

            <div className="vertical-bar-container">
              <div className="v-bar"></div>
              <div className="bar-tag"></div>
            </div>

            <div className="fence">
              <div
                className="horizontal-fence"
                style={{ border: `10px solid ${FENCE_COLORS[color]}` }}
              >
                {fenceItems(15)}
              </div>
            </div>

            <div className="vertical-bar-container">
              <div className="v-bar"></div>
              <div className="bar-tag"></div>
            </div>

            <div className="fence">
              <div className="gate">
                <div
                  className="panel-container"
                  style={{ border: `10px solid ${FENCE_COLORS[color]}` }}
                >
                  <div className="horizontal-fence">{fenceItems(15)}</div>
                </div>

                <div
                  className="vertical-bar-gate-splitter"
                  style={{ backgroundColor: FENCE_COLORS[color] }}
                ></div>
              </div>
            </div>

            <div className="fence">
              <div className="gate">
                <div
                  className="vertical-bar-gate-splitter"
                  style={{ backgroundColor: FENCE_COLORS[color] }}
                ></div>
                <div
                  className="vertical-bar-gate-splitter right-border"
                  style={{ backgroundColor: FENCE_COLORS[color] }}
                ></div>
                <div
                  className="panel-container"
                  style={{ border: `10px solid ${FENCE_COLORS[color]}` }}
                >
                  <div className="horizontal-fence">{fenceItems(15)}</div>
                </div>
              </div>
            </div>
            <div className="vertical-bar-container">
              <div className="v-bar"></div>
              <div className="bar-tag"></div>
            </div>
          </div>

          <div className="color-picker">
            <p style={{ textAlign: "center" }}>
              {" "}
              Please Pick your Fence Color{" "}
            </p>
            <div className="color-container">
              <span
                className="color black"
                onClick={() => {
                  handleOnChangeColor(0);
                }}
              ></span>
              <span
                className="color green"
                onClick={() => {
                  handleOnChangeColor(1);
                }}
              ></span>
              <span
                className="color brown"
                onClick={() => {
                  handleOnChangeColor(2);
                }}
              ></span>
              <span
                className="color night-blue"
                onClick={() => {
                  handleOnChangeColor(3);
                }}
              ></span>
              <span
                className="color grey"
                onClick={() => {
                  handleOnChangeColor(4);
                }}
              ></span>
              <span
                className="color robin"
                onClick={() => {
                  handleOnChangeColor(5);
                }}
              ></span>
            </div>
            <button
              onClick={() => {
                toggleTab(2);
              }}
              className="continue-button"
            >
              Continue
            </button>
          </div>
        </div>

        {/*  From here it's just demo data to be displayed, afterwards all this tabs will be changed.
         A new tab component will be created and we wil pass the values to it to be displayed. */}
        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <h2>Panel</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>

        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
          <h2>Content 3</h2>
          <p>
            Why do we use it? It is a long established fact that a reader will
            be distracted by the readable content of a page when looking at its
            layout. The point of using Lorem Ipsum is that it has a more-or-less
            normal distribution of letters, as opposed to using 'Content here,
            content here', making it look like readable English. Many desktop
            publishing packages and web page editors now use Lorem Ipsum as
            their default model text, and a search for 'lorem ipsum' will
            uncover many web sites still in their infancy. Various versions have
            evolved over the years, sometimes by accident, sometimes on purpose
            (injected humour and the like).
          </p>
        </div>
        <div
          className={toggleState === 4 ? "content  active-content" : "content"}
        >
          <h2>Content 4</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
        <div
          className={toggleState === 5 ? "content  active-content" : "content"}
        >
          <h2>Content 5</h2>
          <p>
            Why do we use it? It is a long established fact that a reader will
            be distracted by the readable content of a page when looking at its
            layout. The point of using Lorem Ipsum is that it has a more-or-less
            normal distribution of letters, as opposed to using 'Content here,
            content here', making it look like readable English. Many desktop
            publishing packages and web page editors now use Lorem Ipsum as
            their default model text, and a search for 'lorem ipsum' will
            uncover many web sites still in their infancy. Various versions have
            evolved over the years, sometimes by accident, sometimes on purpose
            (injected humour and the like).
          </p>{" "}
        </div>
        <div
          className={toggleState === 6 ? "content  active-content" : "content"}
        >
          <h2>Content 6</h2>
          <p>
            Hey There, How is your day going ? Hope all is well.
            Here I am just testing if I still get it about how 
            to add new contents inside this old project.
            Hopefully, As you read this then I have done it.
            Thanks for visiting Sam :* 
          </p>{" "}
        </div>
      </div>
    </div>
  );
};

export default Tabs;
