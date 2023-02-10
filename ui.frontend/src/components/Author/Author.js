import React, { Component } from "react";
import { MapTo } from "@adobe/aem-react-editable-components";

export const AuthorEditConfig = {
  emptyLabel: "Author",
  isEmpty: function (props) {
    return !props || !props.firstName || !props.firstName.trim().length < 1;
  },
};

// export default function Author(props) {
//     console.log(props)
// //   if (AuthorEditConfig.isEmpty(props)) {
// //     return null;
// //   }
//   return (
//     <div className="author">
//       <h2 className="author-name">{props.firstName}</h2>
//       <h4 className="author-lastname">{props.lastName}</h4>
//       <h4 className="author-professor">
//         {props.professor ? "Author is professor" : "Author is not professor"}
//       </h4>
//     </div>
//   );
// }

export default class Author extends Component {
  get authorInfo() {
    if (this.props.firstName) {
      return (
        <>
          <h2 className="author-name">{this.props.firstName}</h2>
          <h4 className="author-lastname">{this.props.lastName}</h4>
          <h4 className="author-professor">
            {this.props.isProfessor
              ? "Author is professor"
              : "Author is not professor"}
          </h4>
        </>
      );
    }

    return null;
  }

  render() {
    // console.log(this.props);
    if (AuthorEditConfig.isEmpty(this.props)) {
      return null;
    }
    return <div className="author">{this.authorInfo}</div>;
  }
}

MapTo("wknd-spa-react/components/author")(Author, AuthorEditConfig);
