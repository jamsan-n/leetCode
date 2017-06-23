#!/bin/sh
docker run --rm -it -v $HOME/.Xauthority:/root/.Xauthority -v $PWD:/data --network="host" -e DISPLAY=:10.0 -p 8080:8080 --name node-dev njs/node:0.1 bash
