import React from 'react';

const GREEK: Record<string, string> = {
  alpha: 'α', beta: 'β', gamma: 'γ', delta: 'δ', epsilon: 'ε',
  zeta: 'ζ', eta: 'η', theta: 'θ', iota: 'ι', kappa: 'κ',
  lambda: 'λ', mu: 'μ', nu: 'ν', xi: 'ξ', omicron: 'ο',
  pi: 'π', rho: 'ρ', sigma: 'σ', tau: 'τ', upsilon: 'υ',
  phi: 'φ', chi: 'χ', psi: 'ψ', omega: 'ω',
  Gamma: 'Γ', Delta: 'Δ', Theta: 'Θ', Lambda: 'Λ',
  Xi: 'Ξ', Pi: 'Π', Sigma: 'Σ', Phi: 'Φ', Psi: 'Ψ', Omega: 'Ω',
};

const SYMBOLS: Record<string, string> = {
  infty: '∞', inft: '∞',
  cdot: '·', times: '×', div: '÷',
  pm: '±', mp: '∓',
  leq: '≤', le: '≤', geq: '≥', ge: '≥',
  neq: '≠', ne: '≠', approx: '≈',
  subset: '⊂', supset: '⊃', subseteq: '⊆', supseteq: '⊇',
  cup: '∪', cap: '∩', in: '∈', notin: '∉',
  forall: '∀', exists: '∃', emptyset: '∅',
  nabla: '∇', partial: '∂',
  rightarrow: '→', leftarrow: '←', Rightarrow: '⇒', Leftarrow: '⇐',
  leftrightarrow: '↔', uparrow: '↑', downarrow: '↓',
  angle: '∠', perp: '⊥', parallel: '∥',
  circ: '°', degree: '°',
};

function renderLatex(math: string): string {
  math = math.replace(/\s+/g, ' ').trim();

  math = math.replace(/\\frac\{([^}]*)\}\{([^}]*)\}/g, '<span style="display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;margin:0 2px"><span style="border-bottom:1px solid currentColor;padding:0 4px 1px">$1</span><span style="padding:1px 4px 0">$2</span></span>');

  math = math.replace(/\\sqrt(?:\[([^\]]*)\])?\{([^}]*)\}/g, (_m: string, n: string | undefined, content: string) =>
    `<span style="display:inline-flex;align-items:center;vertical-align:middle"><span style="font-size:1.1em;margin-right:1px">√</span><span style="border-top:1px solid currentColor;padding:0 4px">${n ? `<sup>${n}</sup>` : ''}${content}</span></span>`
  );

  math = math.replace(/\^\{([^}]+)\}/g, '<sup style="font-size:0.75em">$1</sup>');
  math = math.replace(/\^(\w)/g, '<sup style="font-size:0.75em">$1</sup>');

  math = math.replace(/_\{([^}]+)\}/g, '<sub style="font-size:0.75em">$1</sub>');
  math = math.replace(/_(\w)/g, '<sub style="font-size:0.75em">$1</sub>');

  math = math.replace(/\\([a-zA-Z]+)/g, (_m: string, name: string) => {
    if (GREEK[name]) return GREEK[name];
    if (SYMBOLS[name]) return SYMBOLS[name];
    if (name === ' ' || name === ',') return '';
    return _m;
  });

  return math;
}

function parseMath(text: string): React.ReactNode[] {
  const parts: React.ReactNode[] = [];
  const regex = /\$\$([\s\S]*?)\$\$|\$([^$\n]*?)\$/g;
  let lastIdx = 0;
  let id = 0;

  text = text.replace(/\\\[/g, '$$').replace(/\\\]/g, '$$');

  let match: RegExpExecArray | null;
  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIdx) {
      parts.push(<span key={`t${id++}`}>{text.slice(lastIdx, match.index)}</span>);
    }
    const isDisplay = match[1] !== undefined;
    const mathContent = isDisplay ? match[1] : match[2];
    const html = renderLatex(mathContent);
    parts.push(
      <span
        key={`m${id++}`}
        className={isDisplay ? 'block text-center my-3' : 'inline'}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    );
    lastIdx = match.index + match[0].length;
  }
  if (lastIdx < text.length) {
    parts.push(<span key={`t${id++}`}>{text.slice(lastIdx)}</span>);
  }
  return parts;
}

interface MathRendererProps {
  text: string;
  className?: string;
  as?: 'span' | 'div';
}

export const MathRenderer: React.FC<MathRendererProps> = ({ text, className, as: Tag = 'span' }) => {
  const parsed = parseMath(text);
  if (parsed.length === 1 && typeof parsed[0] === 'object' && React.isValidElement(parsed[0]) && parsed[0].type === 'span' && !parsed[0].props.className) {
    const el = parsed[0] as React.ReactElement;
    if (el.props.children === text) {
      return <Tag className={className}>{text}</Tag>;
    }
  }
  return <Tag className={className}>{parsed}</Tag>;
};
