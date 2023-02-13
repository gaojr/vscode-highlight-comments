import * as vscode from 'vscode';
import * as _ from 'lodash';
import * as config from './config';
import * as regex from './regexes';

const Decorator = {
  init(): void {
    config.init();
    regex.init();
  },

  // todo 装饰

  decorate(target?: vscode.TextEditor | vscode.TextDocument): void {
    // todo
  },
};

export default Decorator;
