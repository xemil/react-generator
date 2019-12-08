module.exports=function(e){var n={};function t(s){if(n[s])return n[s].exports;var o=n[s]={i:s,l:!1,exports:{}};return e[s].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=e,t.c=n,t.d=function(e,n,s){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:s})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(t.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(s,o,function(n){return e[n]}.bind(null,o));return s},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=2)}([function(e,n,t){"use strict";(function(n){var s=t(5);e.exports=s(n)}).call(this,"node_modules/app-root-path")},function(e,n){e.exports=require("path")},function(e,n,t){function s(e){return function(e){if(Array.isArray(e)){for(var n=0,t=new Array(e.length);n<e.length;n++)t[n]=e[n];return t}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var o=t(0),r=t(3),a=r.loadSettings,c=r.applySettings,i=t(9),p=i.getFileInfo,u=i.getJsFileExtension,l=t(10),f=l.generateComponentActions,m=l.addAction,d=l.modifyAction,y=t(11),h=y.hookRequestTemplate,k=y.hookRequestTestTemplate,x=t(19).prompt,T=a();e.exports=function(e){var n=[x("input","name","What is the name of the component?")];e.setGenerator("component",{description:"Create a functional react component",prompts:n,actions:function(e){c(e,T);var n=p(e.name,T),t=n.path,s=n.componentName,o=n.jsExtension,r=n.styleExtension;e.name=s,e.styleSheetExtension=r;var a="".concat(process.cwd(),"/").concat(t),i=f("component",a,o,r,T.isJest,T.isStorybook,T.isSemicolons);return i}}),e.setGenerator("class component",{description:"Create a class based react component",prompts:n,actions:function(e){c(e,T);var n=p(e.name,T),t=n.path,s=n.componentName,o=n.jsExtension,r=n.styleExtension;e.name=s,e.styleSheetExtension=r;var a="".concat(process.cwd(),"/").concat(t),i=f("class component",a,o,r,T.isJest,T.isStorybook,T.isSemicolons);return i}}),e.setGenerator("request hook",{description:"Create a hook that request data from a resource.",prompts:[x("input","name","What is the name of the data being requested?"),x("input","url","What is the url of the resource?")],actions:function(e){c(e,T);var n=u(T.isTypescript,T.isJsx),t=[m("".concat(o.path,"/src/hooks/{{snakeCase name}}.").concat(n),h)];return T.isSemicolons||(t=[].concat(s(t),[d("".concat(o.path,"/src/hooks/{{snakeCase name}}.").concat(n),/;\n/g,"\n")])),T.isJest&&(t=[].concat(s(t),[m("".concat(o.path,"/src/hooks/__test__/{{snakeCase name}}.test.").concat(n),k)]),T.isSemicolons||(t=[].concat(s(t),[d("".concat(o.path,"/src/hooks/__test__/{{snakeCase name}}.test.").concat(n),/;\n/g,"\n")]))),t}})}},function(e,n,t){function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var o=t(4),r=t(0),a=function(){try{return JSON.parse(o.readFileSync("".concat(r.path,"/package.json"),"utf8"))}catch(e){throw new Error("You must have a package.json file initialized.".concat(e))}},c=function(){try{return JSON.parse(o.readFileSync("".concat(r.path,"/.eslintrc.json"),"utf8"))}catch(e){return null}},i=function(e){return Object.keys(e).some((function(e){return"typescript"===e}))},p=function(e){return Object.keys(e).some((function(e){return"postcss"===e}))},u=function(e){return Object.keys(e).some((function(e){return"@storybook/cli"===e}))},l=function(e){return Object.keys(e).some((function(e){return"node-sass"===e}))},f=function(e){return Object.keys(e).some((function(e){return"jest"===e}))},m=function(e){var n=e.rules;return Object.keys(n).some((function(e){return"react/jsx-filename-extension"===e}))&&n["react/jsx-filename-extension"][1].extensions.indexOf("jsx")>-1},d=function(e){var n=e.rules;return!Object.keys(n).some((function(e){return"semi"===e}))||Object.keys(n).some((function(e){return"semi"===e}))&&"never"!==n.semi[1]};e.exports={loadSettings:function(){var e=a(),n=c(),t=function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},o=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),o.forEach((function(n){s(e,n,t[n])}))}return e}({},e.devDependencies,e.dependencies);return{isTypescript:i(t),isPostcss:p(t),isStorybook:u(t),isSass:l(t),isJest:f(t),isJsx:n&&m(n),isSemicolons:n&&d(n)}},checkIsTypescript:i,checkIsPostcss:p,checkIsStorybook:u,checkIsSass:l,checkIsJestInstalled:f,checkIsJsx:m,checkIsSemicolon:d,loadPackages:a,loadEslint:c,applySettings:function(e,n){return Object.keys(n).forEach((function(t){e[t]=n[t]}))}}},function(e,n){e.exports=require("fs")},function(e,n,t){"use strict";e.exports=function(e){var n=t(1),s=t(6)(e),o={resolve:function(e){return n.join(s,e)},require:function(e){return t(8)(o.resolve(e))},toString:function(){return s},setPath:function(e){s=n.resolve(e),o.path=s},path:s};return o}},function(e,n,t){"use strict";var s,o=t(1),r=t(7).globalPaths;s="win32"===process.platform?o.dirname(process.execPath):o.dirname(o.dirname(process.execPath));var a=o.resolve(s,"lib","node_modules"),c=o.sep,i=require;const p=function(e){const n=c+"node_modules";if(-1!==e.indexOf(n)){const t=e.split(n);if(t.length)return t[0]}return null};e.exports=function(e){if(process.env.APP_ROOT_PATH)return o.resolve(process.env.APP_ROOT_PATH);if(process.versions.pnp)try{var n=i("pnpapi");return n.getPackageInformation(n.topLevel).packageLocation}catch(e){}if("undefined"!=typeof window&&window.process&&"renderer"===window.process.type)try{return i("electron").remote.require("app-root-path").path}catch(e){}if(process.env.LAMBDA_TASK_ROOT&&process.env.AWS_EXECUTION_ENV)return process.env.LAMBDA_TASK_ROOT;var t=o.resolve(e),s=!1,u=null;return function(e){const n=c+".pnpm";for(const t of r)if(-1!==t.indexOf(n)&&-1!==e.indexOf(n))return!0;return!1}(t)&&(u=p(t))?u:(r.forEach((function(e){s||0!==t.indexOf(e)||(s=!0)})),s||(u=p(t)),(s||null==u)&&(u=o.dirname(i.main.filename)),s&&-1!==u.indexOf(a)&&u.length-4===u.indexOf(c+"bin")&&(u=u.slice(0,-4)),u)}},function(e,n){e.exports=require("module")},function(e,n){function t(e){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}t.keys=function(){return[]},t.resolve=t,e.exports=t,t.id=8},function(e,n){function t(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=[],s=!0,o=!1,r=void 0;try{for(var a,c=e[Symbol.iterator]();!(s=(a=c.next()).done)&&(t.push(a.value),!n||t.length!==n);s=!0);}catch(e){o=!0,r=e}finally{try{s||null==c.return||c.return()}finally{if(o)throw r}}return t}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var s=function(e,n){return e?"tsx":n?"jsx":"js"},o=function(e){switch(e.toLowerCase()){case"scss":case"sass":return"scss";case"postcss":case"post-css":case"css":default:return"css"}},r=function(e){return process.cwd().indexOf("src/components")<0&&e.indexOf("src/components")<0?"src/components/".concat(e):e},a=function(e){if(e.indexOf("/")>-1){var n=t(e.split("/",-1),2),s=n[0],o=n[1];return[r(s),o]}return[r(""),e]};e.exports={getJsFileExtension:s,getStyleSheetExtension:o,extractPathAndComponentName:a,getFileInfo:function(e,n){var r=n.isTypescript,c=n.isSass,i=n.isJsx,p=t(a(e),2),u=p[0];return{componentName:p[1],path:u,jsExtension:s(r,i),styleExtension:o(c?"sass":"css")}},generatePathWithPrefix:r}},function(e,n,t){function s(e){return function(e){if(Array.isArray(e)){for(var n=0,t=new Array(e.length);n<e.length;n++)t[n]=e[n];return t}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var o=t(0),r=t(11),a=r.classComponentTemplate,c=r.componentStyleTemplate,i=r.componentTemplate,p=r.componentStoryTemplate,u=r.componentTestTemplate,l=r.storybookConfigTemplate,f=r.storybookWebpackConfigTemplate,m=function(e,n){var t=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return{type:"add",path:e,template:n,skipIfExists:t}},d=function(e,n,t){return{type:"modify",path:e,pattern:n,template:t}},y=function(e,n,t,o,r){var p=[m("".concat(e,"/{{snakeCase name}}/{{snakeCase name}}.").concat(n),"component"===o?i:a),m("".concat(e,"/{{snakeCase name}}/{{snakeCase name}}.").concat(t),c)];return r||(p=[].concat(s(p),[d("".concat(e,"/{{snakeCase name}}/{{snakeCase name}}.").concat(n),/;\n/g,"\n")])),p},h=function(e,n,t,r,a){var c=[];return n&&(c=[].concat(s(c),[m("".concat(e,"/{{snakeCase name}}/__test__/{{snakeCase name}}.test.").concat(r),u)]),a||(c=[].concat(s(c),[d("".concat(e,"/{{snakeCase name}}/__test__/{{snakeCase name}}.test.").concat(r),/;\n/g,"\n")]))),t&&(c=[].concat(s(c),[m("".concat(e,"/{{snakeCase name}}/__test__/{{snakeCase name}}.story.").concat(r),p),m("".concat(o.path,"/.storybook/config.js"),l,!0),m("".concat(o.path,"/.storybook/webpack.config.js"),f,!0)]),a||(c=[].concat(s(c),[d("".concat(e,"/{{snakeCase name}}/__test__/{{snakeCase name}}.story.").concat(r),/;\n/g,"\n")]))),c};e.exports={generateComponentActions:function(e,n,t,o,r,a,c){return[].concat(s(y(n,t,o,e,c)),s(h(n,r,a,t,c)))},generateBaseFiles:y,generateTestFiles:h,addAction:m,modifyAction:d}},function(e,n,t){e.exports={classComponentTemplate:t(12).default,componentStyleTemplate:t(13).default,componentTemplate:t(14).default,componentStoryTemplate:t(15).default,componentTestTemplate:t(16).default,storybookConfigTemplate:t(17).default,storybookWebpackConfigTemplate:t(18).default,hookRequestTemplate:t(20).default,hookRequestTestTemplate:t(21).default}},function(e,n,t){"use strict";t.r(n),n.default="import{{#isTypescript}} * as{{/isTypescript}} React, { Component } from 'react';\nimport './{{snakeCase name}}.{{styleSheetExtension}}';\n\n{{#isTypescript}}\ninterface i{{pascalCase name}}Props {\n\n}\n\ninterface i{{pascalCase name}}State {\n\n}\n\n{{/isTypescript}}\nexport default class {{pascalCase name}} extends Component{{#isTypescript}}<i{{pascalCase name}}Props, i{{pascalCase name}}State>{{/isTypescript}} {\n  constructor(props{{#isTypescript}}: i{{pascalCase name}}Props{{/isTypescript}}) {\n    super(props);\n  }\n\n  render() {\n    return (\n      <div className=\"{{snakeCase name}}\">\n        New {{pascalCase name}} component.\n      </div>\n    );\n  }\n}\n\n{{#isTypescript}}\nexport {\n  i{{pascalCase name}}Props,\n  i{{pascalCase name}}State,\n};\n\n{{/isTypescript}}\n"},function(e,n,t){"use strict";t.r(n),n.default=".{{snakeCase name}} {\n\n}\n\n"},function(e,n,t){"use strict";t.r(n),n.default="import{{#isTypescript}} * as{{/isTypescript}} React from 'react';\nimport './{{snakeCase name}}.{{styleSheetExtension}}';\n\n{{#isTypescript}}\ninterface i{{pascalCase name}}Props {\n\n}\n\n{{/isTypescript}}\nconst {{pascalCase name}}{{#isTypescript}}: React.FunctionComponent<i{{pascalCase name}}Props>{{/isTypescript}} = () => {\n  // State\n\n  // Effects\n\n  return (\n    <div className=\"{{snakeCase name}}\">\n      New {{pascalCase name}} component.\n    </div>\n  );\n};\n\nexport default {{pascalCase name}};\n{{#isTypescript}}\nexport { i{{pascalCase name}}Props };\n{{/isTypescript}}\n\n"},function(e,n,t){"use strict";t.r(n),n.default="import React from 'react';\nimport { storiesOf } from '@storybook/react';\nimport {{pascalCase name}} from '../{{snakeCase name}}';\n\nstoriesOf('{{pascalCase name}}', module)\n  .add('Render', () => (\n    <{{pascalCase name}} />\n  ));\n\n"},function(e,n,t){"use strict";t.r(n),n.default="import {{#isTypescript}}* as {{/isTypescript}}React from 'react';\nimport {{pascalCase name}} from '../{{snakeCase name}}';\nimport {{#isTypescript}}* as {{/isTypescript}}renderer from 'react-test-renderer';\n\nit('Renders', () => {\n  const component = renderer.create(\n    <{{pascalCase name}} />\n  );\n  const results = component.toJSON();\n  expect(results).toMatchSnapshot();\n});\n\n"},function(e,n,t){"use strict";t.r(n),n.default="import { addParameters, configure } from '@storybook/react';\nimport { themes } from '@storybook/theming';\n\nconst req = require.context('../src', true, /\\.story\\.js$/);\n\nconst sortByFileName = (filePath1, filePath2) => {\n  const file1 = filePath1.split('\\\\\\\\').pop().split('/').pop();;\n  const file2 = filePath2.split('\\\\\\\\').pop().split('/').pop();;\n  if (file1 > file2) {\n    return 1;\n  } else if ( file1 < file2) {\n    return -1;\n  } else {\n    return 0;\n  }\n}\n\nfunction loadStories() {\n  req.keys().sort(sortByFileName).forEach(fileName => req(fileName))\n}\n\naddParameters({\n  options: {\n    name: 'My Storybook',\n    theme: themes.dark,\n  },\n});\n\nconfigure(loadStories, module);\n\n"},function(e,n,t){"use strict";t.r(n),n.default="const path = require(\"path\");\n{{#isPostcss}}\n\nmodule.exports = ({ config, mode }) => {\n  // Excluding existing CSS rules in the default storybook webpack config.\n  const isTestToBeExcluded = (test) => (test.source == '\\\\\\\\.css$' || test.source == '\\\\\\\\.module\\\\\\\\.css$');\n  const excludedTest = config.module.rules.filter(({ test }) => isTestToBeExcluded(test));\n  config.module.rules = config.module.rules.filter(({ test }) => !isTestToBeExcluded(test));\n\n  config.module.rules.push({\n    test: /\\.css$/,\n    use: [\n      'style-loader',\n      'css-loader',\n      {\n        loader: 'postcss-loader',\n        options: {\n          ident: 'postcss',\n          plugins: [\n            require('tailwindcss'),\n            require('autoprefixer'),\n            require('postcss-nested')\n          ],\n        },\n      },\n    ],\n  });\n{{/isPostcss}}\n\n  config.module.rules.push({\n    test: /\\.[t|j]s(x)?$/,\n    use: [{{#isTypescript}}\n      'ts-loader',{{/isTypescript}}\n      {\n        loader: 'babel-loader',\n        options: {\n          presets: [{{#isTypescript}}\n            ['@babel/preset-typescript', { allExtensions:true, isTSX: true }],{{/isTypescript}}\n            '@babel/preset-react',\n            '@babel/preset-env',\n          ],\n        }\n      },\n    ],\n    exclude: /node_modules/,\n  });\n\n  return config;\n};\n\n"},function(e,n){e.exports={prompt:function(e,n,t){return{type:e,name:n,message:t}}}},function(e,n,t){"use strict";t.r(n),n.default="import {{#isTypescript}} * as {{/isTypescript}}React from 'react';\nimport { useState, useEffect } from 'react';\n\nconst request{{pascalCase name}} = () => {\n  const url = '{{url}}';\n  const [{{camelCase name}}, set{{pascalCase name}}] = useState(undefined);\n\n  useEffect(() => {\n    async function fetchData() {\n      const response = await fetch(url);\n      const json = await response.json();\n      set{{pascalCase name}}(json);\n    }\n    fetchData();\n  }, [url]);\n\n  return {{camelCase name}};\n};\n\nexport default request{{pascalCase name}};\n\n"},function(e,n,t){"use strict";t.r(n),n.default="/* eslint-disable import/first */\nconst reactMock = jest.mock('react', () => {\n  let value;\n  return {\n    useState: jest.fn(() => [\n      value,\n      (val) => {\n        value = val;\n      },\n    ]),\n    useEffect: jest.fn((func) => {\n      func();\n    }),\n  };\n});\n\n/* eslint-disable-next-line no-unused-vars */\njest.mock('fetch', () => (url: string) => new Promise((resolve) => {\n  resolve([]);\n}));\nimport request{{pascalCase name}} from '../{{snakeCase name}}';\n\nit('request {{snakeCase name}}', () => {\n  expect.assertions(3);\n  const results{{#isTypescript}}: Promise<any[]>{{/isTypescript}} = request{{pascalCase name}}();\n  results.then((response{{#isTypescript}}: any[]{{/isTypescript}}) => {\n    expect(response).toEqual([]);\n  }\n  expect(reactMock.useState).toHaveBeenCalled();\n  expect(reactMock.useEffect).toHaveBeenCalled();\n});\n\n"}]);