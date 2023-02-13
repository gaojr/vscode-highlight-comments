export interface Template {
  language: string;
  type: 'line' | 'block';
  prefix: string;
  link: string;
  message: string;
  postfix: string;
}

export const templates: Template[] = [
  {
    language: 'bat',
    type: 'line',
    prefix: 'REM *',
    link: ':? *',
    message: '.*',
    postfix: '',
  },
  {
    language: 'sql',
    type: 'line',
    prefix: '-- *',
    link: ':? *',
    message: '.*',
    postfix: '',
  },
  {
    language: 'dockfile|ini|properties|shell|yaml',
    type: 'line',
    prefix: '# *',
    link: ':? *',
    message: '.*',
    postfix: '',
  },
  {
    language: 'c|cpp|cs|java|javascript|json|php|typescript',
    type: 'line',
    prefix: '// *',
    link: ':? *',
    message: '.*',
    postfix: '',
  },
  {
    language: 'c|cpp|cs|java|javascript|json|php|typescript|css|sql',
    type: 'block',
    prefix: '/\\* *',
    link: ':? *',
    message: '.*',
    postfix: '\\*/',
  },
  {
    language: 'markdown|html|xml',
    type: 'block',
    prefix: '<!-- *',
    link: ':? *',
    message: '.*',
    postfix: ' *-->',
  },
];
