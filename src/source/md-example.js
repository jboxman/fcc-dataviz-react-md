export const mdText = `
Heading
=======

Sub-heading
-----------

### Another deeper heading

Paragraphs are separated
by a blank line.

Leave 2 spaces at the end of a line to do a
line break

Text attributes *italic*, **bold**,
\`monospace\`, ~~strikethrough~~ .

Shopping list:

* apples
* oranges
* pears

Numbered list:

1. apples
2. oranges
3. pears

The rain---not the reign---in
Spain.

*[Herman Fassett](https://freecodecamp.com/hermanfassett)*
`;

export const mdParsed = `
<h1 id="heading">Heading</h1>
<h2 id="sub-heading">Sub-heading</h2>
<h3 id="another-deeper-heading">Another deeper heading</h3>
<p>Paragraphs are separated
by a blank line.</p>
<p>Leave 2 spaces at the end of a line to do a
line break</p>
<p>Text attributes <em>italic</em>, <strong>bold</strong>,
<code>monospace</code>, <del>strikethrough</del></p>
<p>Shopping list:
s</p>
<ul>
<li>apples</li>
<li>oranges</li>
<li>pears</li>
Numbered list:
d</li>
<li>apples</li>
<li>oranges</li>
<li>pears</li>
</ul>
<p>The rain---not the reign---in
Spain.</p>
<p><em><a href="https://freecodecamp.com/hermanfassett">Herman Fassett</a></em></p>
`;
