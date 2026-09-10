#!/bin/bash
WORDS=("assert" "stance" "premise" "contend" "put forward" "viewpoint" "advocate" "articulate" "justification" "essentially" "reasoning" "assumption" "implication" "deduce" "correlation" "validity" "back up" "rule out" "subsequently" "derive" "contradict" "discrepancy" "flaw" "limitation" "subjective" "dispute" "arguably" "refute" "concede" "brush off" "compelling" "sway" "rationale" "inevitably" "coherent" "plausible" "win over" "legitimate" "ultimately" "reiterate")

for word in "${WORDS[@]}"; do
  if grep -qi "^${word}$" existing_words.txt; then
    echo "DUPLICATE: $word"
  fi
done
