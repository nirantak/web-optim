#!/bin/bash
# img-optim.sh

for file in ./src/img/*
do
    echo "$file"
    convert $file -strip $file
    convert $file -resize 1000x1000\> $file
done
echo -e "\x1B[32m* Removed all metadata, max resolution 1000x1000 *\x1B[0m"
