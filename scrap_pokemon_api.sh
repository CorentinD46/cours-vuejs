#!/bin/bash

URL='https://pokeapi.co/api/v2/pokemon/'
COUNT_LIMIT=20
TARGET_FILE="pokemons.json"

echo '[' > $TARGET_FILE

for i in $(seq 1 $COUNT_LIMIT);
do
    POKEMON=$(curl "https://pokeapi.co/api/v2/pokemon/${i}" | jq ". | .id, .name, .sprites.other.dream_world.front_default")
    ID=$(echo $POKEMON | cut -d' ' -f1)
    NAME=$(echo $POKEMON | cut -d' ' -f2)
    SPRITE=$(echo $POKEMON | cut -d' ' -f3)
    
    echo '  {' >> $TARGET_FILE

    echo -n '    "id": ' >> $TARGET_FILE
    echo "${ID}," | cut -d' ' -f1 >> $TARGET_FILE

    echo -n '    "name": ' >> $TARGET_FILE
    echo "${NAME}," | cut -d' ' -f2 >> $TARGET_FILE

    echo -n '    "sprite": ' >> $TARGET_FILE
    echo "${SPRITE}" | cut -d' ' -f3 >> $TARGET_FILE

    echo -n '  }' >> $TARGET_FILE

    if [ $i -lt $COUNT_LIMIT ]; then
      echo -n ',' >> $TARGET_FILE
    fi;
    echo '' >> $TARGET_FILE
done

echo ']' >> $TARGET_FILE
