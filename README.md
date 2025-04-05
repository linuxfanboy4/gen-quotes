# Gen-Quote: AI-Powered Quote Generator

## Overview

Gen-Quote is an advanced command-line utility that leverages Google's Gemini AI to generate dynamic quotes, jokes, stories, and historical facts. Designed as a modern successor to traditional fortune programs, Gen-Quote offers unparalleled customization and AI-driven content generation capabilities.

## Key Features

- **AI-Powered Generation**: Utilizes Google's Gemini 2.0 Flash model for high-quality content generation
- **Extensive Content Options**: Generate quotes, jokes, stories, historical facts, word explanations, and more
- **Advanced Filtering**: Filter by length, category, mood, author, time period, and other parameters
- **Custom Output Formats**: Supports JSON, Markdown, and plaintext output formats
- **Bulk Generation**: Generate multiple items in a single request
- **Context-Aware**: Maintains contextual understanding for coherent and relevant outputs

## Installation

To install Gen-Quote, run the following command:

```bash
wget https://raw.githubusercontent.com/linuxfanboy4/gen-quotes/refs/heads/main/src/main.js && node main.js
```

## Usage

Gen-Quote offers a comprehensive set of command-line options:

### Basic Commands
```
-s          Generate a short, random funny quote
-l          Generate a long, random funny quote
-j          Generate a random funny joke
-h          Generate a random humorous quote or joke
```

### Content Customization
```
-c <content>    Generate a custom response based on provided content
-q <keyword>    Generate content related to a specific keyword
-r <length>     Generate content of specified length (short, medium, long)
-i <category>   Generate content from a specific category
```

### Specialized Content
```
-t          Generate positive-toned content
-m          Generate motivational quotes
-d <date>   Generate historical content from a specific date
-a <author> Generate content by a specific author
-x          Generate a short story or anecdote
-b <type>   Generate famous quotes by genre
-y <year>   Generate content from a specific year
-w <word>   Get word definitions and explanations
```

### Output Control
```
-p <mood>   Generate content matching a specific mood
-f <format> Specify output format (json, markdown, text)
-n <number> Generate multiple items at once
```

## Examples

1. Generate a motivational quote:
```bash
node main.js -m
```

2. Get three jokes about technology:
```bash
node main.js -j -q technology -n 3
```

3. Get a historical event from a specific date in JSON format:
```bash
node main.js -d "July 20, 1969" -f json
```

4. Generate a medium-length philosophical quote:
```bash
node main.js -i philosophical -r medium
```

## Technical Details

- **AI Model**: Gemini 2.0 Flash (via Google GenAI API)
- **API Key**: Pre-configured in the application (rate limits may apply)
- **Dependencies**: 
  - @google/genai
  - commander

## Performance Considerations

- Responses are generated in real-time via API calls
- Complex or lengthy requests may take additional time
- Bulk generation (-n option) may be subject to API rate limits

## License

Gen-Quote is released under the MIT License. See LICENSE file for details.

## Contributing

Contributions to Gen-Quote are welcome. Please follow standard GitHub pull request procedures.

## Support

For support issues, please open an issue on the GitHub repository.
