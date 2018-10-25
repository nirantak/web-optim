#!/bin/bash
# strip-imgs.sh

for file in ./src/img/*
do
	case "$file" in
		*.svg)
			echo "$file skipped"
			continue
			;;
		*)
			echo "$file processing..."
			convert $file -strip $file
			;;
	esac
done
echo -e "\e[32m* Removed all metadata *\e[0m"
