/**
 * @generated SignedSource<<861132d09db1483f18f793e0818d9ca8>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ContactsListFragment$data = {
  readonly contacts: ReadonlyArray<{
    readonly id: string;
    readonly " $fragmentSpreads": FragmentRefs<"ContactRowFragment">;
  } | null | undefined> | null | undefined;
  readonly " $fragmentType": "ContactsListFragment";
};
export type ContactsListFragment$key = {
  readonly " $data"?: ContactsListFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"ContactsListFragment">;
};

import ContactsListRefetchQuery_graphql from './ContactsListRefetchQuery.graphql';

const node: ReaderFragment = {
  "argumentDefinitions": [
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "search"
    }
  ],
  "kind": "Fragment",
  "metadata": {
    "refetch": {
      "connection": null,
      "fragmentPathInResult": [
        "viewer"
      ],
      "operation": ContactsListRefetchQuery_graphql
    }
  },
  "name": "ContactsListFragment",
  "selections": [
    {
      "alias": null,
      "args": [
        {
          "kind": "Variable",
          "name": "search",
          "variableName": "search"
        }
      ],
      "concreteType": null,
      "kind": "LinkedField",
      "name": "contacts",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "id",
          "storageKey": null
        },
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "ContactRowFragment"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Viewer",
  "abstractKey": null
};

(node as any).hash = "a58a5b12c5813e115be4ed129437cb3a";

export default node;
