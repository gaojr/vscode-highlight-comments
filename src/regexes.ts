import * as vscode from 'vscode';
import * as _ from 'lodash';
import { configs } from './config';
import { Template, templates } from './templates';

export interface Regex {
  language: string;
  regexes: string[];
}

export const regexes = {
  language: '',
  regexes: [],
};

function createGroup(...arr: string[]): string {
  let result = '';
  arr.forEach((str) => {
    if (_.isEmpty(str)) {
      result += '';
    }
    result += '(' + str + ')';
  });
  return result;
}

function createReg(template: Template, keyword: string): RegExp {
  const regStr = createGroup(template.prefix, keyword, template.link, template.message, template.postfix);
  return new RegExp(regStr, 'g');
}

export function init(): void {
  templates.map((template) => {
    configs.map((c) => {
      createReg(template, c.keyword);
    });
  });
}
