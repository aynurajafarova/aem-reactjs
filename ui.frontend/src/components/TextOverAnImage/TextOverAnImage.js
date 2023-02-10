import React from "react";
import { MapTo } from "@adobe/aem-react-editable-components";

export const TextOverAnImageEditConfig = {
  emptyLabel: "TextOverAnImage",

  isEmpty: (props) => {
    return !props || !props.src;
  },
};

export default function TextOverAnImage(props) {
  const { src, alt, title, headline, content } = props;

  const textOverAnImageWrapper = {
    position: "relative",
    width: "100%",
    color: "white",
  };
  const textOverAnImageWrapperBody = {
    position: "absolute",
    bottom: "40px",
    width: "100%",
    boxSizing: "border-box",
    padding: "20px",
    textAlign: "center",
  };

  const getImage = () => {
    return (
      <img
        className="Image-src"
        src={src}
        alt={alt}
        title={title ? title : alt}
        style={{
          width: "315px",
          height: "400px",
          objectFit: "scale-down",
        }}
      />
    );
  };

  const checkContent = (text) => {
    return text ? <p>{text}</p> : null;
  };

  if (TextOverAnImageEditConfig.isEmpty(props)) {
    return null;
  }

  return (
    <div style={textOverAnImageWrapper}>
      <div style={textOverAnImageWrapperBody}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            textTransform: "uppercase",
            fontFamily: "sans-serif",
            fontWeight: "600",
          }}
        >
          {checkContent(headline)}
          {checkContent(content)}
        </div>
      </div>
      {getImage()}
    </div>
  );
}

MapTo("wknd-spa-react/components/textOverAnImage")(
  TextOverAnImage,
  TextOverAnImageEditConfig
);
