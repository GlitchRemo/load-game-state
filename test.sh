#! /bin/bash

json=$(cat game-state-1.json)
echo "abc" $json

curl -v -X 'PATCH' localhost:8000/test/game-state --data "$json"