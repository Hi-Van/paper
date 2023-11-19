import { BlockSchema } from "@blocknote/core";
import {
  createReactBlockSpec,
  InlineContent,
  ReactSlashMenuItem,
} from "@blocknote/react";
import { RiCodeFill } from "react-icons/ri";
import { IoClipboardOutline } from "react-icons/io5";
import CodeEditor from "@uiw/react-textarea-code-editor";
import { useState } from "react";

const codeBlock = createReactBlockSpec({
  type: "codeblock",
  propSchema: {
    language: {
      default: "ts",
    },
  },
  containsInlineContent: false,

  render: ({ block }) => {
    const [code, setCode] = useState("");
    const copyToClipboard = () => {
      navigator.clipboard.writeText(code);
    };

    return (
      <div style={{ position: "relative" }}>
        <CodeEditor
          value={code}
          language={block.props.language}
          placeholder="Please enter your code..."
          onChange={(evn) => setCode(evn.target.value)}
          padding={12}
          style={{
            fontSize: 16,
            fontFamily:
              "ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace",
            borderRadius: 8,
          }}
        />

        <IoClipboardOutline
        style={{
            position: "absolute",
            top: 8,
            right: 8,
            cursor: "pointer",
            color: "rgba(0, 0, 0, 0.25)", // Change the color here
            fontSize: 20, // Increase the font size here
            fontWeight: "bold", // Set the font weight to bold
        }}
          onClick={copyToClipboard}
        />
      </div>
    );
  },
});

export const codeBlockSchema = {
  codeblock: codeBlock,
} satisfies BlockSchema;

export const insertCodeBlock: ReactSlashMenuItem<typeof codeBlockSchema> = {
  name: "Insert Code Block",
  execute: (editor) => {
    editor.insertBlocks(
      [
        {
          type: "codeblock",
          props: {
            language: "tsx",
          },
        },
      ],
      editor.getTextCursorPosition().block,
      "after"
    );
  },
  aliases: ["codeblock"],
  group: "Basic blocks",
  icon: <RiCodeFill />,
  hint: "Insert a code block",
  shortcut: "crtl+alt+c",
};
