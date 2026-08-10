#!/bin/sh
# Lance toutes les suites de test. Aucune dépendance : Node seul suffit.
cd "$(dirname "$0")"
ko=0
for f in *.js; do
  out=$(node "$f" 2>&1)
  e=$(echo "$out" | grep -cE "✗|ERREUR|CASSÉ|PERDU|SyntaxError|TypeError|ReferenceError")
  o=$(echo "$out" | grep -cE "✓|Aucune erreur|exacts|conforme")
  if [ "$e" -eq 0 ]; then printf "  ✓ %-14s %s\n" "${f%.js}" "$o vérifications"
  else ko=$((ko+1)); printf "  ✗ %-14s %s\n" "${f%.js}" "$e problème(s)"; echo "$out" | grep -E "✗|Error" | head -3 | sed 's/^/      /'; fi
done
echo
[ "$ko" -eq 0 ] && echo "Toutes les suites passent." || echo "$ko suite(s) en échec."
exit $ko
