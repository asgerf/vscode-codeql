import * as gulp from 'gulp';
import { compileTypeScript, watchTypeScript, copyViewCss } from './typescript';
import { compileTextMateGrammar } from './textmate';
import { copyTestData } from './tests';
import { compileView } from './webpack';
import { packageExtension } from './package';
import { compileSloth } from './codeql-sloth';

export const buildWithoutPackage = gulp.parallel(compileTypeScript, compileTextMateGrammar, compileView, copyTestData, copyViewCss, compileSloth);
export { compileTextMateGrammar, watchTypeScript, compileTypeScript };
exports.default = gulp.series(exports.buildWithoutPackage, packageExtension);
