import React from "react";
import DetailsCommonCompo from "./DetailsCommonCompo";

const Blogs = () => {
  return (
    <>
      <DetailsCommonCompo>Blog Page</DetailsCommonCompo>
      <div className="sm-container">
        <div className="my-32">
          {/* question 1 */}
          <div className="mockup-window border bg-base-300 mb-8">
            <div className="flex justify-center px-4 py-16 bg-base-200">
              <div>
                <h3 className="text-center my-4 text-2xl font-bold text-d1">
                  {" "}
                  When should you use context API?
                </h3>
                <p className="font-medium text-d3 leading-8 space-y-4">
                  Managing the state is an essential part of developing
                  applications in React. A common way to manage the state is by
                  passing props. But it can be annoying to pass props when you
                  have to send the same data to lots of components or when
                  components are far away from each other.
                  <p className="font-bold text-d2">
                    Here are some real-world use cases of Context API.
                  </p>
                  <ul className="list-decimal list-inside">
                    <li>
                      when we need to share data across multiple components.
                    </li>
                    <li>
                      when we have deeply nested components that need to access
                      shared data
                    </li>
                    <li>avoid prop drilling</li>
                    <li>
                      when we need to update multiple components in our React
                      application
                    </li>
                  </ul>
                  <p className="font-bold text-d2">
                    Other mostly common use cases of context API
                  </p>
                  <ul className="list-decimal list-inside">
                    <li>Theming </li>
                    <li>User Authentication / Current account</li>
                    <li>Multilingual Support</li>
                    <li>Routing</li>
                    <li>Managing state</li>
                    <li>Accessing data from external sources</li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
          {/* question 2 */}
          <div className="mockup-window border bg-base-300 mb-8">
            <div className="flex justify-center px-4 py-16 bg-base-200">
              <div>
                <h3 className="text-center my-4 text-2xl font-bold text-d1">
                  {" "}
                  What is a custom hook?
                </h3>
                <p className="font-medium text-d3 leading-8 space-y-4">
                  The hook is a special JavaScript function in React that can be
                  reused which means the hook used at any time and as many times
                  as we want. Custom Hooks is a JavaScript function. the naming
                  convention is it starts with "use" ( 'useSomething' ) because
                  all other hooks in React used this naming convention like
                  useState(), useEffect(), etc. Custom hooks can call other
                  Hooks. They are functions that can be extracted from a
                  component to reuse or simplify it. These functions have a
                  state, which is stored by React. They are special and have
                  specific rules to follow to avoid confusion.
                </p>
              </div>
            </div>
          </div>
          {/* question 3 */}
          <div className="mockup-window border bg-base-300 mb-8">
            <div className="flex justify-center px-4 py-16 bg-base-200">
              <div>
                <h3 className="text-center my-4 text-2xl font-bold text-d1">
                  {" "}
                  What is useRef() and what is its purpose in React?
                </h3>
                <p className="font-medium text-d3 leading-8 space-y-4">
                  useRef is a hook provided by React, which returns a mutable
                  ref object. A ref is a special object in React that allows us
                  to store a reference to a particular component or element. The
                  useRef hook allows us to create and maintain a reference to a
                  value or a DOM element across re-renders of a component.
                  <p className="font-bold text-d2">
                    Here are some common use cases for useRef():
                  </p>
                  <ul className="list-decimal list-inside">
                    <li>Accessing the value of an input element</li>
                    <li>Storing a value between renders</li>
                    <li>Accessing a child component</li>
                    <li>Creating a mutable object</li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
          {/* question 4 */}
          <div className="mockup-window border bg-base-300 mb-8">
            <div className="flex justify-center px-4 py-16 bg-base-200">
              <div>
                <h3 className="text-center my-4 text-2xl font-bold text-d1">
                  {" "}
                  What is useMemo() in React?
                </h3>
                <p className="font-medium text-d3 leading-8 space-y-4">
                  useMemo is a powerful hook in React that can help optimize the
                  performance of our React applications. it can memoize the
                  result of a function, for these reasons useMemo can avoid
                  unnecessary recalculations of expensive operations. useMemo
                  receives two arguments a function and an array as a
                  dependencies list. when one of the dependencies changes the
                  function is only executed. If none of the dependencies change,
                  useMemo returns the cached value of the function's result from
                  the previous render.
                  <p>
                    The most use-case of useMemo is to memoize expensive
                    calculations, such as sorting or filtering a large list of
                    data. Additionally, useMemo can be used to memorize the
                    props of a component that are expensive to compute or change
                    frequently.
                  </p>
                  <p>
                    Another advantage of useMemo is that it can be used to
                    memorize callback functions that are passed down as props.
                    By memorizing the callback function, we can prevent
                    unnecessary re-renders of the child components if the
                    callback function hasn't changed.
                  </p>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blogs;
