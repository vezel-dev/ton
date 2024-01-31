# CLI Driver

```text
ton <command> [arguments...] [options...]
```

The ton command line tool is the driver for the reference implementation of TON.
It supports evaluation, validation, formatting, and conversion of TON code and
data files, and provides a language service for use in text editors.

| Option | Description | Default |
| - | - | - |
| `--color <color>` | Specifies when to use colored output (`auto`, `always`, `never`). | `auto` |

## ton check

```text
ton check <input>
```

Checks that a TON file evaluates successfully.

For a code file, this command runs the script to completion and discards any
resulting data. For a data file, this command just checks whether the file
parses successfully.

## ton convert

```text
ton convert <mode> <input> <output>
```

Converts between TON and other data formats.

Valid mode values are:

* `xml2ton`: Convert an input XML file to a TON data file.
* `ton2xml`: Convert an input TON code or data file to an XML file.

Note that conversion is done on a best-effort basis; some niche language
constructs may not be translated.

## ton format

```text
ton format [input] [options...]
```

Formats a TON code or data file according to the official formatting
conventions, or optionally in a minified fashion.

If no input file is given, this command reads from standard output and `--fix`
will be ignored.

| Option | Description | Default |
| - | - | - |
| `--fix` | Enables automatic in-place fixing. | `false` |
| `--diff` | Enables printing diffs instead of formatted code. | `false` |
| `--minify` | Enables minification instead of normal formatting. | `false` |

## ton info

```text
ton info
```

Prints runtime environment information.

## ton reduce

```text
ton reduce <input> <output>
```

Converts a TON code file to a data file.

This command runs the script to completion and outputs the resulting data using
the official formatting conventions. If this command is invoked with a data file
as input, it effectively functions as a roundabout `ton format`.

## ton serve

```text
ton serve [options...]
```

Runs the TON language service.

The language service can be used by e.g. the
[Visual Studio Code extension](https://marketplace.visualstudio.com/items?itemName=vezel.ton).

| Option | Description | Default |
| - | - | - |
| `--stdio` | Enables standard I/O communication. | `true` |
