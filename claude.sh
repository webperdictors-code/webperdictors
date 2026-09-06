#!/usr/bin/env bash
set -euo pipefail

# Simple terminal CLI for Anthropic Claude using curl.
# Requires: set ANTHROPIC_API_KEY in your environment.
# Optionally install `jq` to pretty-print JSON responses.

: "${ANTHROPIC_API_KEY:?Please set ANTHROPIC_API_KEY environment variable}"
MODEL="${CLAUDE_MODEL:-claude-2}"
API_URL="https://api.anthropic.com/v1/complete"

usage() {
  cat <<-USAGE
Usage: $0 ["prompt text"]

Examples:
  echo "Write a haiku about coding" | $0
  $0 "Write a haiku about coding"

Environment variables:
  ANTHROPIC_API_KEY - required API key
  CLAUDE_MODEL      - optional (default: $MODEL)
USAGE
}

if [[ "${1:-}" == "-h" || "${1:-}" == "--help" ]]; then
  usage
  exit 0
fi

# Read prompt from args or stdin
if [ $# -gt 0 ]; then
  PROMPT="$*"
else
  # Read entire stdin into PROMPT
  PROMPT="$(cat -)"
fi

if [ -z "$PROMPT" ]; then
  echo "No prompt provided." >&2
  usage
  exit 2
fi

PAYLOAD=$(cat <<-JSON
{
  "model": "$MODEL",
  "prompt": "$PROMPT",
  "max_tokens_to_sample": 512
}
JSON
)

# Send request. Many Anthropic setups accept x-api-key; if your account requires
# Authorization: Bearer, edit the header below accordingly.
RESPONSE=$(curl -sS -X POST "$API_URL" \
  -H "Content-Type: application/json" \
  -H "x-api-key: $ANTHROPIC_API_KEY" \
  -d "$PAYLOAD")

if command -v jq >/dev/null 2>&1; then
  echo "$RESPONSE" | jq
else
  echo "$RESPONSE"
fi
