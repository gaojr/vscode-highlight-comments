import { TextDocument, TextEditor, window } from 'vscode';

const Utils = {
  document: {
    isFiltered(doc: TextDocument, regex: string): boolean {
      const language = doc.languageId;
      if (!language) {
        return false;
      }
      return new RegExp(regex, 'i').test(language);
    },

    getEditors(doc: TextDocument): TextEditor[] {
      return window.visibleTextEditors.filter((editor) => editor.document === doc);
    },
  },

  editor: {
    is(x: TextEditor): x is TextEditor {
      return !!x.document;
    },
  },
};

export default Utils;
