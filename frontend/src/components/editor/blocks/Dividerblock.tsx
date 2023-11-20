import { BlockSchema } from "@blocknote/core";
import { createReactBlockSpec, ReactSlashMenuItem } from "@blocknote/react";
import { RiEqualFill } from "react-icons/ri";
import { IoClipboardOutline } from "react-icons/io5";

const Divider = createReactBlockSpec({
  type: "divider",
  propSchema: {},
  containsInlineContent: false,

  render: () => {
    return <div className="flex justify-center">
      <div className=" w-[95%] border-t-2 border-slate-200 my-4" />
    </div>;
  },
});

export const dividerBlockSchema = {
  divider: Divider,
} satisfies BlockSchema;

export const insertDividerBlock: ReactSlashMenuItem<typeof dividerBlockSchema> = {
  name: "Insert Divider",
  execute: (editor) => {
    editor.insertBlocks(
      [
        {
          type: "divider",
        },
      ],
      editor.getTextCursorPosition().block,
      "after"
    );
  },
  aliases: ["divider"],
  group: "Basic blocks",
  icon: <RiEqualFill />,
  hint: "Insert a divider",
  shortcut: "crtl+alt+d",
};
