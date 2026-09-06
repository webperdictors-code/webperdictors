Claude shell helper
===================

Quick curl-based shell script to call Anthropic Claude from the terminal.

Setup
-----

1. Export your API key:

```bash
export ANTHROPIC_API_KEY="your_key_here"
```

2. Make the script executable:

```bash
chmod +x claude.sh
```

Usage
-----

Pass a prompt as an argument or pipe text into the script:

```bash
./claude.sh "Write a haiku about programming"
echo "Write a haiku about programming" | ./claude.sh
```

Notes
-----
- The script posts to `https://api.anthropic.com/v1/complete` using header `x-api-key`.
- If your account requires `Authorization: Bearer`, edit the header in `claude.sh`.
- Install `jq` for pretty JSON output (optional).
