import { BlockNoteEditor, defaultBlockSchema } from "@blocknote/core";
import {
  BlockNoteView,
  getDefaultReactSlashMenuItems,
  useBlockNote,
} from "@blocknote/react";
import "@blocknote/core/style.css";
import { codeBlockSchema, insertCodeBlock } from "./blocks/Codeblock";
import { uploadFile } from "./firebase/Firebase";

const Editor = () => {
  // Creates a new editor instance.
  const editor = useBlockNote({
    blockSchema: { ...defaultBlockSchema, ...codeBlockSchema },
    slashMenuItems: [...getDefaultReactSlashMenuItems(), insertCodeBlock],
    uploadFile: uploadFile,
  });

  // Renders the editor instance using a React component.
  return (
    <div className="w-full min-h-screen overflow-hidden text-left flex justify-center">
      <div className="w-full max-w-screen-xl m-12">
        <BlockNoteView editor={editor} theme={"light"} />
      </div>
    </div>
  );
};

export default Editor;
