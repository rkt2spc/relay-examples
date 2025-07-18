import * as React from "react";
import RelayEnvironment from "../relay/RelayEnvironment";
import Newsfeed from "./Newsfeed";
import Sidebar from "./Sidebar";
import LoadingSpinner from "./LoadingSpinner";

export default function App(): React.ReactElement {
  return (
    <RelayEnvironment>
      <React.Suspense
        fallback={
          <div className="app-loading-spinner">
            <LoadingSpinner />
          </div>
        }
      >
        <div className="app">
          <Newsfeed />
          <Sidebar />
        </div>
      </React.Suspense>
    </RelayEnvironment>
  );
}
