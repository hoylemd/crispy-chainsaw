#! /usr/bin/env bash

source "$HOME/bin/bash_helpers.sh";

# args: name

name="$1";
template="$HOME/.templates/react/component.js.mst";
dest="./catch-of-the-day/src/components/$name.js";

echo "{\"name\": \"$name\"}" | mustache - "$template" > "$dest";
