import type {NewsfeedQuery as NewsfeedQueryType} from './__generated__/NewsfeedQuery.graphql';
import type { NewsfeedContentsRefetchQuery as NewsfeedContentsRefetchQueryType } from './__generated__/NewsfeedContentsRefetchQuery.graphql';
import type { NewsfeedContentsFragment$key } from './__generated__/NewsfeedContentsFragment.graphql';

import * as React from "react";
import { graphql } from "relay-runtime";
import { useLazyLoadQuery, usePaginationFragment } from "react-relay";
import Story from "./Story";
import InfiniteScrollTrigger from "./InfiniteScrollTrigger";

const NewsfeedQuery = graphql`
  query NewsfeedQuery {
    ...NewsfeedContentsFragment
  }
`;

const NewsfeedContentsFragment = graphql`
  fragment NewsfeedContentsFragment on Query
    @argumentDefinitions (
      cursor: { type: "String" }
      count: { type: "Int", defaultValue: 3 }
    )
    @refetchable(queryName: "NewsfeedContentsRefetchQuery")
  {
    viewer {
      newsfeedStories(after: $cursor, first: $count)
        @connection(key: "NewsfeedContentsFragment_newsfeedStories")
      {
        edges {
          node {
            id
            ...StoryFragment
          }
        }
      }
    }
  }
`;

export default function Newsfeed() {
  const queryData = useLazyLoadQuery<NewsfeedQueryType>(NewsfeedQuery, {});
  const {data, loadNext, hasNext, isLoadingNext} = usePaginationFragment<
    NewsfeedContentsRefetchQueryType,
    NewsfeedContentsFragment$key
  >(NewsfeedContentsFragment, queryData);
  const storyEdges = data.viewer.newsfeedStories.edges;
  return (
    <div className="newsfeed">
      {storyEdges.map(storyEdge => <Story id={storyEdge.node.id} story={storyEdge.node} />)}
      <InfiniteScrollTrigger
        onEndReached={() => loadNext(1)}
        hasNext={hasNext}
        isLoadingNext={isLoadingNext}
      />
    </div>
  );
}
