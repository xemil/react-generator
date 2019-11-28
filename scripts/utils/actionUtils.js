const {
  classComponentTemplate,
  componentStyleTemplate,
  componentTemplate,
  componentStoryTemplate,
  componentTestTemplate,
  storybookConfigTemplate,
  storybookWebpackConfigTemplate,
} = require('../../plop-templates/templates.js');
const appRoot = require('app-root-path');

const generateComponentActions = (
  type,
  cwd,
  jsExt,
  ssExt,
  isJest,
  isStorybook,
  isSemicolons,
  isSavePref,
) => {
  const actions = generateBaseFiles(cwd, jsExt, ssExt, type);
  addTestFiles(actions, cwd, isJest, isStorybook);
  addOtherPreferences(actions, cwd, jsExt, isSemicolons);
  addSavePreferences(actions, isSavePref);
  return actions;
};

const generateBaseFiles = (cwd, jsExt, ssExt, type) => {
  return [
    addAction(
      `${cwd}/{{snakeCase name}}/{{snakeCase name}}.${jsExt}`,
      (type === 'component')
        ? componentTemplate
        : classComponentTemplate
    ),
    addAction(
      `${cwd}/{{snakeCase name}}/{{snakeCase name}}.${ssExt}`,
      componentStyleTemplate
    ),
  ];
}

const addTestFiles = (actions, cwd, isJest, isStorybook) => {
  isJest && 
    actions.push(
      addAction(
        `${cwd}/{{snakeCase name}}/__test__/{{snakeCase name}}.test.${jsExt}`,
        componentTestTemplate
      )
    );
  if (isStorybook) {
    actions.push(
      addAction(
        `${cwd}/{{snakeCase name}}/__test__/{{snakeCase name}}.story.js`,
        componentTestTemplate,
      )
    );
    actions.push(
      addAction(
        `${appRoot.path}/.storybook/config.js`,
        storybookConfigTemplate,
        true,
      )
    );
    actions.push(
      addAction(
        `${appRoot.path}/.storybook/webpack.config.js`,
        storybookWebpackConfigTemplate,
        true,
      )
    );
  }
};

const addOtherPreferences = (actions, cwd, jsExt, isSemicolons) => {
  !isSemicolons &&
    actions.push(
      modifyAction(
        `${cwd}/{{snakeCase name}}/{{snakeCase name}}.${jsExt}`,
        /;\n/g,
        '\n'
      )
    );
};

const addSavePreferences = (actions, isSavePref) => {
  isSavePref &&
    actions.push(
      addAction(
        `${appRoot.path}/react.preferences.json`,
        JSON.stringify({
          isSemicolons: data.isSemicolons,
          isJsx: data.isJsx
        }, null, 2)
      )
    );
};

const addAction = (path, template, skipIfExists = false) => ({
  type: 'add',
  path,
  template,
  skipIfExists,
});

const modifyAction = (path, pattern, template) => ({
  type: 'modify',
  path,
  pattern,
  template,
});

module.exports = {
  generateComponentActions,
  generateBaseFiles,
  addTestFiles,
  addOtherPreferences,
  addSavePreferences,
  addAction,
  modifyAction,
};

