import * as React from "react";
import styled from "styled-components";
import { IntersectObserver } from "./useIntersect";

let observer = null;
const intersectionObserverCallback = (currentTarget, id) => entries => {
  console.log("id = ", id);
  console.log("entries = ", entries);
  console.log("currentTarget = ", currentTarget);

  const entry = entries.find(entry => {
    return entry.target === currentTarget;
  });
  console.log("entry.isIntersecting = ", entry.isIntersecting);
  console.log("entry = ", entry);

  if (entry && entry.isIntersecting) {
    console.log("Got here");
    observer.unobserve(currentTarget);
  }
  console.log("====================================");
};
export const Dummy = ({ id, children }) => {
  // const intersectionTarget = React.useRef(null);

  // React.useEffect(() => {
  //   console.log("Effect called!");
  //   observer = new IntersectionObserver(
  //     intersectionObserverCallback(intersectionTarget.current, id),
  //     {
  //       root: null,
  //       rootMargin: "0px",
  //       threshold: 0
  //     }
  //   );
  //   observer.observe(intersectionTarget.current);

  //   return () => {
  //     observer.unobserve(intersectionTarget.current);
  //   };
  // });
  const [setNode, entry] = IntersectObserver({ root: null });

  return (
    <Container ref={setNode}>
      {!entry.isIntersecting && console.log("Not loaded " + id)}
      {entry.isIntersecting && console.log("Loaded " + id)}
    </Container>
  );
};

// export class IntersectObserver extends React.Component {
//   state = {
//     hasIntersected: false
//   };

//   targetContainerRef = React.createRef();

//   options = {
//     root: this.props.root || null,
//     rootMargin: this.props.margin || "0px",
//     threshold: this.props.threshold || 0
//   };

//   observer;

//   componentDidMount() {
//     this.observer = new IntersectionObserver(
//       this.load(this.props.id),
//       this.options
//     );
//     this.observer.observe(this.targetContainerRef.current);
//   }

//   componentWillUnmount() {
//     // unbind observer
//     this.observer.unobserve(this.targetContainerRef.current);
//   }

//   load = id => entries => {
//     // first condition is for when we want the intersection observer
//     // to only execute the callback at most once. This is useful when
//     // loading in modules on demand.
//     const entry = entries.find(entry => {
//       console.log("entry.target = ", entry.target);
//       return entry.target === this.targetContainerRef.current;
//     });

//     if (entry && entry.isIntersecting) {
//       console.log(
//         "this.targetContainerRef.current = ",
//         this.targetContainerRef.current
//       );
//       this.observer.unobserve(this.targetContainerRef.current);
//     }

//     console.log("id = ", id);
//     console.log("====================");
//   };

//   render() {
//     const { children = null, continueObserving } = this.props;
//     return (
//       <Container
//         className="intersectionObserver"
//         ref={this.targetContainerRef}
//         style={{ ...this.props.style }}
//       >
//         {/* render the children of this component only when the intersection happens */}
//         {continueObserving ? children : this.state.hasIntersected && children}
//       </Container>
//     );
//   }
// }

const Container = styled.div`
  width: 200px;
  height: 500px;
  border: 1px solid black;
  margin: 10px;
`;
