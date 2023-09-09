"use client";

import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { PlainTextPlugin } from "@lexical/react/LexicalPlainTextPlugin";
import { CollaborationPlugin } from "@lexical/react/LexicalCollaborationPlugin";
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import * as Y from "yjs";
import YPartyKitProvider from "y-partykit/provider";
import { $getSelection, DecoratorNode, LexicalNode, NodeKey } from "lexical";
import { ReactNode } from "react";

declare const PARTYKIT_HOST: string | undefined;

const partykitHost =
  typeof PARTYKIT_HOST === "undefined" ? "localhost:1999" : PARTYKIT_HOST;

export default function EditorPage() {
  const initialConfig = {
    editorState: null,
    namespace: "oops",
    nodes: [VideoNode],
    onError(error: Error) {
      throw error;
    },
  };

  return (
    <div className="bg-white">
      <LexicalComposer initialConfig={initialConfig}>
        <InsertVideoButton />
        <PlainTextPlugin
          contentEditable={<ContentEditable className="bg-slate-100" />}
          placeholder={<div>Enter some text...</div>}
          ErrorBoundary={LexicalErrorBoundary}
        />
        <CollaborationPlugin
          id="yjs"
          // TODO: we should fix it sometime
          // @ts-expect-error TODO: we need to align with lexical's definitions here
          providerFactory={(id, yjsDocMap) => {
            const doc = new Y.Doc();
            yjsDocMap.set(id, doc);

            const provider = new YPartyKitProvider(
              partykitHost || "localhost:1999",
              id,
              doc,
            );

            return provider;
          }}
          shouldBootstrap={true}
        />
      </LexicalComposer>
    </div>
  );
}

function InsertVideoButton() {
  const [editor] = useLexicalComposerContext();

  return (
    <button
      onClick={() => {
        editor.update(() => {
          const selection = $getSelection();
          if (selection === null) return;
          selection.insertNodes([new VideoNode("test")]);
        });
      }}
    >
      Insert video
    </button>
  );
}

export class VideoNode extends DecoratorNode<ReactNode> {
  __id: string;
  __summary: string;
  __details: string;

  static getType(): string {
    return "video";
  }

  static clone(node: VideoNode): VideoNode {
    return new VideoNode(node.__id, node.__summary, node.__details, node.__key);
  }

  constructor(id: string, summary: string, details: string, key?: NodeKey) {
    super(key);
    this.__id = id;
  }

  createDOM(): HTMLElement {
    return document.createElement("div");
  }

  updateDOM(): false {
    return false;
  }

  decorate(): ReactNode {
    return (
      <details>
        <summary>
          <input
            value={this.__summary}
            onChange={(event) => {
              this.__summary = event.target.value;
            }}
          ></input>
        </summary>
        {this.__details}
      </details>
    );
    //return <VideoPlayer videoID={this.__id} />;
  }
}

export function $createVideoNode(id: string): VideoNode {
  return new VideoNode(id, "", "");
}

export function $isVideoNode(
  node: LexicalNode | null | undefined,
): node is VideoNode {
  return node instanceof VideoNode;
}
