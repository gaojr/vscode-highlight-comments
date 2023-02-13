import { workspace } from 'vscode';
import * as _ from 'lodash';
import * as color from './color';

export interface Config {
  keyword: string;
  color: string;
}

const defaultConfigs: Config[] = [
  { keyword: 'todo', color: '#FFA500' },
  { keyword: 'fixme', color: '#FF0000' },
];

export let configs: Config[] = [];

function get(extension = 'highlight-comments.config'): Config[] | null | undefined {
  return workspace.getConfiguration().get<Config[]>(extension);
}

function clean(config: Config[]): void {
  // todo 配置的值的有效性
  config.forEach((c) => {
    if (_.isEmpty(c.keyword) || !color.check(c.color)) {
      return;
    }
    color.get(c.color);
    configs.push(c);
  });
}

export function init(): void {
  configs = [];
  let config = get();
  if (config === undefined) {
    config = defaultConfigs;
  }
  if (config === null) {
    config = [];
  }
  clean(config);
}
