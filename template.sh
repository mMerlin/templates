#!/bin/bash

# Simple version to get the full path to the directory this script file is stored in
# http://stackoverflow.com/questions/59895/can-a-bash-script-tell-what-directory-its-stored-in
base_dir=$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )
# echo "The running script, \"`basename \"$0\"`\" is located in: \"$base_dir\""
