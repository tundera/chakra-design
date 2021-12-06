#!/usr/bin/env node -r tsm -r tsconfig-paths/register

import task from 'tasuku'
import { execa } from 'execa'

type BuildOptions = {
  // Add any command options here
}

const buildWorkspaces = async () => {
  await execa('yarn', ['workspaces', 'foreach', '-ptv', 'run', 'build'])
}

const runBuildTasks = async (options?: BuildOptions) => {
  await task('Building workspaces', async ({ setTitle }) => {
    await buildWorkspaces()

    setTitle('Build completed')
  })
}

const main = async () => {
  await runBuildTasks()
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    process.exit(0)
  })
