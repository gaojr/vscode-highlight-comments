import * as vscode from 'vscode';
import Changes from './changes';
import Decorator from './decorator';

function activate(context: vscode.ExtensionContext): void {
  Decorator.init();

  context.subscriptions.push(
    // 配置发生变化时触发
    vscode.workspace.onDidChangeConfiguration(() => {
      Decorator.init();
      Decorator.decorate(undefined);
    }),
    // 文字改变时触发
    // vscode.workspace.onDidChangeTextDocument((event) => Changes.onChanges(event)),
    // 切换页标签时触发
    vscode.window.onDidChangeActiveTextEditor(() => Decorator.decorate(undefined))
  );

  Decorator.decorate();
}

export { activate };
