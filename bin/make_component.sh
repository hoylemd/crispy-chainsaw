#! /usr/bin/env bash

source "$HOME/bin/bash_helpers.sh";

# args:
# - name: string, Name of the component
# - is_class: boolean, default false, true if the full-class template should be
#   used

name="$1";

if [[ "$2" ]]; then
  is_class=true;
else
  is_class=false;
fi

context='{';
set -x
if $is_class; then
  template="$HOME/.templates/react/component.js.mst";
  context="$context \"name\": \"$name\"";
else
  template="$HOME/.templates/react/sf-component.js.mst";
  name_lower="$(python3 -c "print('$name'.lower())")";
  context="$context \"name\": \"$name\"";
  context="$context, \"name_lower\": \"$name_lower\"";
fi
context="$context}"

echo "context: '$context'";

dest="./catch-of-the-day/src/components/$name.js";

echo "$context" | mustache - "$template" > "$dest";
set +x
