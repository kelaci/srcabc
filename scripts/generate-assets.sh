#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
CONVERT_BIN="convert"

if command -v magick >/dev/null 2>&1; then
  CONVERT_BIN="magick"
fi

"${CONVERT_BIN}" "${ROOT_DIR}/public/favicon.svg" -background none -resize 16x16 "${ROOT_DIR}/public/favicon-16x16.png"
"${CONVERT_BIN}" "${ROOT_DIR}/public/favicon.svg" -background none -resize 32x32 "${ROOT_DIR}/public/favicon-32x32.png"
"${CONVERT_BIN}" "${ROOT_DIR}/public/favicon.svg" -background none -resize 180x180 "${ROOT_DIR}/public/apple-touch-icon.png"
"${CONVERT_BIN}" "${ROOT_DIR}/public/favicon.svg" -background none -resize 192x192 "${ROOT_DIR}/public/android-chrome-192x192.png"
"${CONVERT_BIN}" "${ROOT_DIR}/public/favicon.svg" -background none -resize 512x512 "${ROOT_DIR}/public/android-chrome-512x512.png"
"${CONVERT_BIN}" "${ROOT_DIR}/public/favicon.svg" -background none -define icon:auto-resize=16,32,48 "${ROOT_DIR}/public/favicon.ico"
"${CONVERT_BIN}" "${ROOT_DIR}/public/og/srcabc-og.svg" "${ROOT_DIR}/public/og/srcabc-og.png"
