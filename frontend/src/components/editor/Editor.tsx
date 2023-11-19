import { BlockNoteEditor, defaultBlockSchema } from "@blocknote/core";
import { BlockNoteView, getDefaultReactSlashMenuItems, useBlockNote } from "@blocknote/react";
import "@blocknote/core/style.css";
import { codeBlockSchema, insertCodeBlock } from "./blocks/Codeblock";


const Editor = () => {

  // Creates a new editor instance.
  const editor = useBlockNote({
    blockSchema: {...defaultBlockSchema, ...codeBlockSchema},
    slashMenuItems: [ ...getDefaultReactSlashMenuItems(), insertCodeBlock]
  });

  // Renders the editor instance using a React component.
  return (
    <div className="w- max-w-screen-xl overflow-hidden text-left">
      <BlockNoteView editor={editor} theme={"light"} />
    </div>
  );
};

export default Editor;
