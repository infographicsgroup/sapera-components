#!/bin/bash
set -eo pipefail

if [[ $CIRCLE_BRANCH == "master" ]]; then
  echo "=> Deploy Netlify Storybook"
  # Deploy to staging netlify website: https://<site-name>.netlify.app
  npx netlify-cli deploy --prod
  exit 0
else
  echo "=> Deploy Netlify PR-Preview"
  # Deploy preview to netlify: https://<unique-id>--<site-name>.netlify.app
  npx netlify-cli deploy
  exit 0
fi
