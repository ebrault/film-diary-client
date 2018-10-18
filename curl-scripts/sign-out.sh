#!/bin/bash
curl "http://localhost:4741/sign-out" \
  --include \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --request DELETE \

  echo
