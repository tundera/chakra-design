#!/usr/bin/env node

import task from 'tasuku'
import { execa } from 'execa'

type CleanOptions = {
  reinstall?: boolean
}

const removeBuildFiles = async () => {
  await execa('yarn', [
    'workspaces',
    'foreach',
    '-ptv',
    'dlx',
    'rimraf',
    'dist',
  ])
}

const removeDependencies = async () => {
  await execa('yarn', [
    'workspaces',
    'foreach',
    '-ptv',
    'dlx',
    'rimraf',
    'node_modules',
  ])
}

const installDependencies = async () => {
  await execa('yarn', ['install'])
}

const runCleanTasks = async (options?: CleanOptions) => {
  await task('Cleaning files', async ({ task, setTitle }) => {
    const removeFiles = await task.group((task) => [
      task('Removing build files', async () => await removeBuildFiles()),
      task('Removing dependencies', async () => await removeDependencies()),
    ])

    if (options?.reinstall) {
      removeFiles.clear()

      setTitle('Reinstalling dependencies')

      await installDependencies()
    }

    setTitle('Done')
  })
}

const main = async () => {
  const args = process.argv.slice(2)

  await runCleanTasks({
    reinstall: args?.includes('--reinstall'),
  })
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    process.exit(0)
  })
