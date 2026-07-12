/**
 * Lightweight markdown-to-HTML renderer for lesson content.
 * Handles: headings, bold, inline code, fenced code blocks, tables, lists, paragraphs.
 */
export function renderMarkdown(content: string): string {
  let html = content;

  // Protect fenced code blocks from other transforms
  const codeBlocks: string[] = [];
  html = html.replace(/```(\w*)\n?([\s\S]*?)```/g, (_, lang, code) => {
    codeBlocks.push(
      `<pre><code class="language-${lang}">${code.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</code></pre>`
    );
    return `\n%%CODEBLOCK${codeBlocks.length - 1}%%\n`;
  });

  // Block elements
  html = html
    .replace(/^### (.+)$/gm, "<h3>$1</h3>")
    .replace(/^## (.+)$/gm, "<h2>$1</h2>")
    .replace(/^# (.+)$/gm, "<h1>$1</h1>");

  // Tables (before list/inline transforms)
  html = html.replace(/\|(.+)\|\n\|[-| ]+\|\n((?:\|.+\|\n?)+)/g, (_, header, rows) => {
    const ths = header.split("|").filter(Boolean).map((h: string) => `<th>${h.trim()}</th>`).join("");
    const trs = rows.trim().split("\n").map((row: string) => {
      const tds = row.split("|").filter(Boolean).map((c: string) => `<td>${c.trim()}</td>`).join("");
      return `<tr>${tds}</tr>`;
    }).join("");
    return `<table><thead><tr>${ths}</tr></thead><tbody>${trs}</tbody></table>`;
  });

  // Inline elements
  html = html
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/`([^`\n]+)`/g, "<code>$1</code>");

  // Lists
  html = html
    .replace(/^- (.+)$/gm, "<li>$1</li>")
    .replace(/^\d+\. (.+)$/gm, "<li>$1</li>");
  html = html.replace(/((?:<li>.*<\/li>\n?)+)/g, "<ul>$1</ul>\n");

  // Paragraphs: wrap remaining plain-text blocks
  html = html
    .split(/\n{2,}/)
    .map((block) => {
      const t = block.trim();
      if (!t) return "";
      if (/^<(h[1-6]|ul|ol|pre|table|blockquote)/.test(t) || t.startsWith("%%CODEBLOCK")) return t;
      return `<p>${t.replace(/\n/g, "<br/>")}</p>`;
    })
    .join("\n");

  // Restore code blocks
  html = html.replace(/%%CODEBLOCK(\d+)%%/g, (_, i) => codeBlocks[Number(i)]);

  return html;
}
