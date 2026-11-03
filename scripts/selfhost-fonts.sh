#!/usr/bin/env bash
# Pulls the two Google Fonts into assets/fonts/ and prints the @font-face CSS
# to paste at the top of assets/styles.css. Run it once, locally, then delete
# the three font-related <link> tags from index.html and drop
# https://fonts.googleapis.com and https://fonts.gstatic.com from the CSP.
#
# Why bother: it removes your only third-party request, kills two DNS lookups
# on first paint, and in the EU hotlinking Google Fonts has already been ruled
# a GDPR breach (LG München I, 3 O 17493/20) because it hands Google the
# visitor's IP without consent.
set -euo pipefail
cd "$(dirname "$0")/.."
mkdir -p assets/fonts

UA='Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
URL='https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,700;12..96,800&family=Instrument+Sans:wght@400;500;600;700&display=swap'

curl -sS -A "$UA" "$URL" -o /tmp/gf.css
grep -o 'https://fonts.gstatic.com[^)]*' /tmp/gf.css | sort -u | while read -r u; do
  curl -sS "$u" -o "assets/fonts/$(basename "$u")"
done
sed -E 's#https://fonts\.gstatic\.com[^)]*/#/assets/fonts/#g' /tmp/gf.css > assets/fonts/fonts.css

echo
echo "Fonts in assets/fonts/. Add this to index.html in place of the Google links:"
echo '  <link rel="stylesheet" href="/assets/fonts/fonts.css">'
