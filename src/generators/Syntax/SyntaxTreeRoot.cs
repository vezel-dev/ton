// SPDX-License-Identifier: 0BSD

namespace Vezel.Ton.Generators.Syntax;

[XmlRoot("Tree", Namespace = "https://vezel.dev/ton/SyntaxTree")]
public sealed class SyntaxTreeRoot
{
    [SuppressMessage("", "CA1819")]
    [XmlElement("Type")]
    public SyntaxTreeType[] Types { get; set; } = null!;
}
