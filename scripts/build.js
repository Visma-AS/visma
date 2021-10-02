import spawn from 'cross-spawn';
import fg from 'fast-glob';
import { dirname } from 'path';
import toposort from 'toposort';
import packageJson from '../package.json';

const isInternalDependency = ([, dependency]) =>
  dependencyGraph.some(([packageName]) => packageName === dependency);

const toPackagePath = (packageName) =>
  packages.find((packageJson) => packageJson.name === packageName).path;

const dependencyGraph = [];
const packages = [];

for (const workspace of packageJson.workspaces) {
  for (const packagePath of await fg(`${workspace}/package.json`)) {
    const packageJson = (await import(`../${packagePath}`)).default;

    const dependencies = {
      ...packageJson.dependencies,
      ...packageJson.devDependencies,
      ...packageJson.optionalDependencies,
      ...packageJson.peerDependencies,
    };

    dependencyGraph.push(
      ...Object.keys(dependencies).map((dependency) => [
        packageJson.name,
        dependency,
      ])
    );

    packages.push({
      name: packageJson.name,
      path: dirname(packagePath),
    });
  }
}

const internalDependencyGraph = dependencyGraph.filter(isInternalDependency);

const buildOrder = toposort(internalDependencyGraph).reverse();

const buildPaths = buildOrder.map(toPackagePath);

for (const buildPath of buildPaths) {
  spawn.sync(
    'npm',
    ['run', 'build', '--workspace', buildPath, '--if-present'],
    { stdio: 'inherit' }
  );
}
