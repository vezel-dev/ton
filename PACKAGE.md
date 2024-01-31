# TON

**TON** (Tree Object Notation) is a modern data language featuring two dialects:
One for programmatic generation of data, and a static subset for safe data
interchange.

**TON** is designed to be a pleasant and compact replacement for both
[XML](https://www.w3.org/TR/xml) and [JSON](https://www.json.org), combining the
best qualities of each, while allowing advanced users to programmatically
generate large data sets using the full language dialect. At its simplest,
**TON** can be used as a static data format just like XML or JSON, while at its
full potential, it can be used to maintain large and complex textual databases
at a level of maintainability that such data formats simply cannot achieve.

The original motivation for the creation of **TON** was the maintenance of the
sorts of large data sheets that video games often use to describe things like
areas, items, quests, characters, skills, etc. The code dialect should be
well-suited to any similar use case. On the other hand, the data dialect can
is well-suited as a safe and more compact replacement for XML and JSON, e.g. in
networked APIs.

**TON** is an open standard. This project provides both the specification and
the reference implementation in C#.

This project offers the following packages:

* [ton](https://www.nuget.org/packages/ton): Provides the .NET global tool.
* [Vezel.Ton](https://www.nuget.org/packages/Vezel.Ton): Provides the core
  parsing, analysis, and runtime services.
* [Vezel.Ton.Tooling](https://www.nuget.org/packages/Vezel.Ton.Tooling):
  Provides user-facing tooling such as syntax coloring and diagnostic
  rendering.
* [Vezel.Ton.Service](https://www.nuget.org/packages/Vezel.Ton.Service):
  Provides the Language Server Protocol implementation.
* [Vezel.Ton.Runtime](https://www.nuget.org/packages/Vezel.Ton.Runtime):
  Provides the interpreter and just-in-time compiler.

For more information, please visit the
[project home page](https://docs.vezel.dev/ton).
