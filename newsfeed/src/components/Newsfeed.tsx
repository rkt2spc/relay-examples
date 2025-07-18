import type {NewsfeedQuery as NewsfeedQueryType} from './__generated__/NewsfeedQuery.graphql';

import * as React from "react";
import { graphql } from "relay-runtime";
import Story from "./Story";
import { useLazyLoadQuery } from "react-relay";

const NewsfeedQuery = graphql`
  query NewsfeedQuery {
    topStories {
      id
      ...StoryFragment
    }
  }
`;

export default function Newsfeed() {
  const data = useLazyLoadQuery<NewsfeedQueryType>(NewsfeedQuery, {});
  const { topStories: stories } = data;

  return (
    <div className="newsfeed">
      {stories.map(story => <Story id={story.id} story={story} />)}
    </div>
  );
}
