#! /usr/bin/env node

import fetch from 'node-fetch';
import fs from 'fs';
import path from 'path';
import semverSort from 'semver-sort';
import { prerelease } from 'semver';
import { createRequire } from 'module';

const requireShim = createRequire(import.meta.url);

const newVersion = requireShim('../package.json').version;

const currentVersionsUrl =
  'https://apps.inindca.com/common-ui-docs/genesys-webcomponents/versions.json';
const currentVersionsFile = await fetch(currentVersionsUrl);
const currentVersionsJson = await currentVersionsFile.json();

const npmPackageUrl = 'https://registry.npmjs.org/genesys-spark-components';
const npmPackageFile = await fetch(npmPackageUrl);
const npmPackageJson = await npmPackageFile.json();
const npmVersionsJson = Object.keys(npmPackageJson.versions);

const newVersionsJson = semverSort
  .desc([
    ...new Set([].concat(currentVersionsJson, npmVersionsJson, newVersion))
  ])
  .filter(v => {
    if (v === '5.0.0') {
      return false;
    }

    return !Boolean(prerelease(v));
  });
const newVersionsString = JSON.stringify(newVersionsJson, null, 2);

fs.writeFileSync(path.resolve('./dist/versions.json'), newVersionsString, {
  encoding: 'utf8'
});
