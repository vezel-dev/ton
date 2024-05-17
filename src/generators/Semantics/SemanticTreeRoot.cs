// SPDX-License-Identifier: 0BSD

namespace Vezel.Ton.Generators.Semantics;

[XmlRoot("Tree", Namespace = "https://vezel.dev/ton/SemanticTree")]
public sealed class SemanticTreeRoot
{
    [SuppressMessage("", "CA1819")]
    [XmlElement("Type")]
    public SemanticTreeType[] Types { get; set; } = null!;
}
