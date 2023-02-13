import * as vscode from 'vscode';
import Decorator from './decorator';

const Changes = {
  changes: [],

  // onChanges(event: vscode.TextDocumentChangeEvent): void {
  //   if (!contentChanges.length) {
  //     return;
  //   } //URL: https://github.com/Microsoft/vscode/issues/50344
  //   Changes.changes.push(...event.contentChanges);
  //   Changes.decorate(event.document);
  // },

  // decorate(document: vscode.TextDocument): void {
  //   const areSingleLines = Changes.changes.every(({ range }) => range.isSingleLine);
  //   if (areSingleLines) {
  //     const lineNrs = Changes.changes.map(({ range }) => range.start.line);
  //     Decorator.decorateLines(document, lineNrs);
  //   } else {
  //     Decorator.decorate(document);
  //   }
  //   Changes.changes = [];
  // },
};

export default Changes;
