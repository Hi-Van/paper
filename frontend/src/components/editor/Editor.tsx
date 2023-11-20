import { BlockNoteEditor, defaultBlockSchema } from "@blocknote/core";
import {
  BlockNoteView,
  getDefaultReactSlashMenuItems,
  useBlockNote,
  DefaultFormattingToolbar,
  FormattingToolbarPositioner,
  defaultBlockTypeDropdownItems,
} from "@blocknote/react";
import "@blocknote/core/style.css";
import {
  codeBlockSchema,
  insertCodeBlock,
  CodeblockIcon,
} from "./blocks/Codeblock";
import {
  dividerBlockSchema,
  insertDividerBlock,
  DividerIcon,
} from "./blocks/Dividerblock";
import { uploadFile } from "./firebase/Firebase";

const Editor = () => {
  // Creates a new editor instance.

  const editor = useBlockNote({
    blockSchema: {
      ...defaultBlockSchema,
      ...codeBlockSchema,
      ...dividerBlockSchema,
    },
    slashMenuItems: [
      ...getDefaultReactSlashMenuItems(),
      insertCodeBlock,
      insertDividerBlock,
    ],
    uploadFile: uploadFile,
  });

  return (
    <div className="w-full min-h-screen overflow-hidden text-left flex justify-center">
      <div className="w-full max-w-screen-xl m-12">
        <BlockNoteView editor={editor} theme={"light"}>
          <FormattingToolbarPositioner
            editor={editor}
            formattingToolbar={() => (
              <DefaultFormattingToolbar
                editor={editor}
                blockTypeDropdownItems={[
                  ...defaultBlockTypeDropdownItems,
                  {
                    type: "codeblock",
                    name: "Codeblock",
                    icon: CodeblockIcon,
                    isSelected: (block) => block.type === "codeblock",
                  },
                ]}
              />
            )}
          />
        </BlockNoteView>
      </div>
    </div>
  );
};

export default Editor;
