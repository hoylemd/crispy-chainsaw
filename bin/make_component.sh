#! /usr/bin/env bash

# Stamp out a React component starter file

# SETTINGS
DEST_PREFIX="./catch-of-the-day/src/components"
TEMPLATE_SRC="./bin/templates"

# args:
# - name: string, Name of the component
# - is_sfc: boolean, default false, true if the stateless functional component
#    template should be used
# - dest_prefix: str, optional, override the default destination prefix

if ! command -v mustache > /dev/null; then
  echo "Mustache is not installed! cannot stamp out the file.";
  echo "  do \`npm install -g mustache\` to rectify";
  exit 1;
fi

name="$1";

if [[ "$2" ]]; then
  is_sfc=true;
else
  is_sfc=false;
fi

if [[ "$3" ]]; then
  dest_prefix="$3";
else
  dest_prefix="$DEST_PREFIX";
fi

# build context json
context='{';
if $is_sfc; then
  template="$TEMPLATE_SRC/sf-component.js.mst";
  name_lower="$(python3 -c "print('$name'.lower())")";
  context="$context \"name\": \"$name\"";
  context="$context, \"name_lower\": \"$name_lower\"";
else
  template="$TEMPLATE_SRC/component.js.mst";
  context="$context \"name\": \"$name\"";
fi
context="$context}"

dest="$dest_prefix/$name.js";

echo "$context" | mustache - "$template" > "$dest";
