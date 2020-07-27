import * as cp from 'child_process';

export function compileSloth() {
  return cp.spawn('npm', ['install'], {
    cwd: '../../codeql-sloth'
  });
}
