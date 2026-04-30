import React, { useState } from 'react';

// ─── Formula Data ─────────────────────────────────────────────────────────────
const formulaData = {
  '10': {
    'Algebra': [
      { name: 'Quadratic Formula', formula: 'x = (-b ± √(b²-4ac)) / 2a', desc: 'Roots of ax² + bx + c = 0' },
      { name: 'Discriminant', formula: 'D = b² - 4ac', desc: 'D>0: two real roots, D=0: one root, D<0: no real roots' },
      { name: 'Sum of Roots', formula: 'α + β = -b/a', desc: 'For quadratic ax² + bx + c = 0' },
      { name: 'Product of Roots', formula: 'α × β = c/a', desc: 'For quadratic ax² + bx + c = 0' },
      { name: 'AP nth Term', formula: 'aₙ = a + (n-1)d', desc: 'a = first term, d = common difference' },
      { name: 'AP Sum', formula: 'Sₙ = n/2 × [2a + (n-1)d]', desc: 'Sum of n terms of AP' },
      { name: 'AP Sum (last term)', formula: 'Sₙ = n/2 × (a + l)', desc: 'l = last term' },
    ],
    'Geometry': [
      { name: 'Distance Formula', formula: 'd = √[(x₂-x₁)² + (y₂-y₁)²]', desc: 'Distance between two points' },
      { name: 'Section Formula', formula: 'P = ((mx₂+nx₁)/(m+n), (my₂+ny₁)/(m+n))', desc: 'Point dividing line in ratio m:n' },
      { name: 'Midpoint Formula', formula: 'M = ((x₁+x₂)/2, (y₁+y₂)/2)', desc: 'Midpoint of a line segment' },
      { name: 'Area of Triangle', formula: 'A = ½|x₁(y₂-y₃) + x₂(y₃-y₁) + x₃(y₁-y₂)|', desc: 'Using coordinates' },
      { name: 'Pythagoras Theorem', formula: 'c² = a² + b²', desc: 'In a right triangle, c = hypotenuse' },
      { name: 'Area of Circle', formula: 'A = πr²', desc: 'r = radius' },
      { name: 'Circumference', formula: 'C = 2πr', desc: 'Perimeter of circle' },
      { name: 'Area of Sector', formula: 'A = (θ/360) × πr²', desc: 'θ = angle in degrees' },
      { name: 'Length of Arc', formula: 'l = (θ/360) × 2πr', desc: 'θ = angle in degrees' },
    ],
    'Trigonometry': [
      { name: 'sin θ', formula: 'sin θ = Opposite / Hypotenuse', desc: 'Basic trig ratio' },
      { name: 'cos θ', formula: 'cos θ = Adjacent / Hypotenuse', desc: 'Basic trig ratio' },
      { name: 'tan θ', formula: 'tan θ = Opposite / Adjacent = sin θ / cos θ', desc: 'Basic trig ratio' },
      { name: 'Pythagorean Identity', formula: 'sin²θ + cos²θ = 1', desc: 'Most important identity' },
      { name: 'Identity 2', formula: '1 + tan²θ = sec²θ', desc: 'Derived from Pythagorean identity' },
      { name: 'Identity 3', formula: '1 + cot²θ = cosec²θ', desc: 'Derived from Pythagorean identity' },
      { name: 'sin 0°', formula: '0', desc: 'Standard angle value' },
      { name: 'sin 30°', formula: '1/2', desc: 'Standard angle value' },
      { name: 'sin 45°', formula: '1/√2 = √2/2', desc: 'Standard angle value' },
      { name: 'sin 60°', formula: '√3/2', desc: 'Standard angle value' },
      { name: 'sin 90°', formula: '1', desc: 'Standard angle value' },
      { name: 'cos 0°', formula: '1', desc: 'Standard angle value' },
      { name: 'cos 30°', formula: '√3/2', desc: 'Standard angle value' },
      { name: 'cos 45°', formula: '1/√2', desc: 'Standard angle value' },
      { name: 'cos 60°', formula: '1/2', desc: 'Standard angle value' },
      { name: 'cos 90°', formula: '0', desc: 'Standard angle value' },
    ],
    'Statistics': [
      { name: 'Mean (Direct)', formula: 'x̄ = Σfᵢxᵢ / Σfᵢ', desc: 'Weighted mean of grouped data' },
      { name: 'Mean (Assumed)', formula: 'x̄ = a + (Σfᵢdᵢ / Σfᵢ)', desc: 'a = assumed mean, d = x - a' },
      { name: 'Mean (Step Deviation)', formula: 'x̄ = a + h × (Σfᵢuᵢ / Σfᵢ)', desc: 'u = (x-a)/h, h = class width' },
      { name: 'Median', formula: 'M = l + [(n/2 - cf) / f] × h', desc: 'l=lower boundary, cf=cumulative freq, f=freq, h=class width' },
      { name: 'Mode', formula: 'Mo = l + [(f₁-f₀) / (2f₁-f₀-f₂)] × h', desc: 'f₁=modal class freq, f₀=prev, f₂=next' },
    ],
    'Surface Area & Volume': [
      { name: 'Cube SA', formula: 'SA = 6a²', desc: 'a = side length' },
      { name: 'Cube Volume', formula: 'V = a³', desc: 'a = side length' },
      { name: 'Cuboid SA', formula: 'SA = 2(lb + bh + lh)', desc: 'l=length, b=breadth, h=height' },
      { name: 'Cuboid Volume', formula: 'V = l × b × h', desc: '' },
      { name: 'Cylinder CSA', formula: 'CSA = 2πrh', desc: 'Curved surface area' },
      { name: 'Cylinder TSA', formula: 'TSA = 2πr(r + h)', desc: 'Total surface area' },
      { name: 'Cylinder Volume', formula: 'V = πr²h', desc: '' },
      { name: 'Cone CSA', formula: 'CSA = πrl', desc: 'l = slant height = √(r²+h²)' },
      { name: 'Cone TSA', formula: 'TSA = πr(r + l)', desc: '' },
      { name: 'Cone Volume', formula: 'V = (1/3)πr²h', desc: '' },
      { name: 'Sphere SA', formula: 'SA = 4πr²', desc: '' },
      { name: 'Sphere Volume', formula: 'V = (4/3)πr³', desc: '' },
      { name: 'Hemisphere CSA', formula: 'CSA = 2πr²', desc: '' },
      { name: 'Hemisphere TSA', formula: 'TSA = 3πr²', desc: '' },
      { name: 'Hemisphere Volume', formula: 'V = (2/3)πr³', desc: '' },
    ],
    'Probability': [
      { name: 'Probability', formula: 'P(E) = Number of favourable outcomes / Total outcomes', desc: '0 ≤ P(E) ≤ 1' },
      { name: 'Complementary', formula: 'P(Ē) = 1 - P(E)', desc: 'Probability of event NOT occurring' },
      { name: 'Sum Rule', formula: 'P(E) + P(Ē) = 1', desc: 'Always true' },
    ]
  },
  '12': {
    'Calculus — Derivatives': [
      { name: 'Definition', formula: "f'(x) = lim[h→0] (f(x+h) - f(x)) / h", desc: 'First principle of differentiation' },
      { name: 'd/dx (xⁿ)', formula: 'nxⁿ⁻¹', desc: 'Power rule' },
      { name: 'd/dx (eˣ)', formula: 'eˣ', desc: '' },
      { name: 'd/dx (aˣ)', formula: 'aˣ ln a', desc: '' },
      { name: 'd/dx (ln x)', formula: '1/x', desc: '' },
      { name: 'd/dx (sin x)', formula: 'cos x', desc: '' },
      { name: 'd/dx (cos x)', formula: '-sin x', desc: '' },
      { name: 'd/dx (tan x)', formula: 'sec²x', desc: '' },
      { name: 'd/dx (cot x)', formula: '-cosec²x', desc: '' },
      { name: 'd/dx (sec x)', formula: 'sec x · tan x', desc: '' },
      { name: 'd/dx (cosec x)', formula: '-cosec x · cot x', desc: '' },
      { name: 'Product Rule', formula: 'd/dx(uv) = u·v\' + v·u\'', desc: '' },
      { name: 'Quotient Rule', formula: 'd/dx(u/v) = (v·u\' - u·v\') / v²', desc: '' },
      { name: 'Chain Rule', formula: 'dy/dx = (dy/du) × (du/dx)', desc: '' },
    ],
    'Calculus — Integrals': [
      { name: '∫xⁿ dx', formula: 'xⁿ⁺¹/(n+1) + C', desc: 'n ≠ -1' },
      { name: '∫1/x dx', formula: 'ln|x| + C', desc: '' },
      { name: '∫eˣ dx', formula: 'eˣ + C', desc: '' },
      { name: '∫aˣ dx', formula: 'aˣ/ln a + C', desc: '' },
      { name: '∫sin x dx', formula: '-cos x + C', desc: '' },
      { name: '∫cos x dx', formula: 'sin x + C', desc: '' },
      { name: '∫sec²x dx', formula: 'tan x + C', desc: '' },
      { name: '∫cosec²x dx', formula: '-cot x + C', desc: '' },
      { name: '∫sec x tan x dx', formula: 'sec x + C', desc: '' },
      { name: '∫cosec x cot x dx', formula: '-cosec x + C', desc: '' },
      { name: 'Definite Integral', formula: '∫[a to b] f(x)dx = F(b) - F(a)', desc: 'F is antiderivative of f' },
      { name: 'Area under curve', formula: 'A = ∫[a to b] |f(x)| dx', desc: 'Area between curve and x-axis' },
    ],
    'Algebra & Matrices': [
      { name: 'Matrix Addition', formula: '(A+B)ᵢⱼ = Aᵢⱼ + Bᵢⱼ', desc: 'Same order matrices' },
      { name: 'Matrix Multiplication', formula: '(AB)ᵢⱼ = Σ Aᵢₖ Bₖⱼ', desc: '' },
      { name: 'Determinant 2×2', formula: '|A| = ad - bc for [[a,b],[c,d]]', desc: '' },
      { name: 'Inverse of Matrix', formula: 'A⁻¹ = adj(A) / |A|', desc: '|A| ≠ 0' },
      { name: 'Cramer\'s Rule', formula: 'x = D₁/D, y = D₂/D, z = D₃/D', desc: 'For system of linear equations' },
    ],
    'Vectors': [
      { name: 'Magnitude', formula: '|a⃗| = √(x² + y² + z²)', desc: 'For vector a⃗ = xi + yj + zk' },
      { name: 'Unit Vector', formula: 'â = a⃗ / |a⃗|', desc: '' },
      { name: 'Dot Product', formula: 'a⃗·b⃗ = |a||b|cosθ = x₁x₂+y₁y₂+z₁z₂', desc: '' },
      { name: 'Cross Product Magnitude', formula: '|a⃗×b⃗| = |a||b|sinθ', desc: '' },
      { name: 'Angle between vectors', formula: 'cosθ = (a⃗·b⃗) / (|a⃗||b⃗|)', desc: '' },
      { name: 'Perpendicular condition', formula: 'a⃗·b⃗ = 0', desc: 'Vectors are perpendicular' },
      { name: 'Parallel condition', formula: 'a⃗×b⃗ = 0⃗', desc: 'Vectors are parallel' },
    ],
    '3D Geometry': [
      { name: 'Distance Formula', formula: 'd = √[(x₂-x₁)²+(y₂-y₁)²+(z₂-z₁)²]', desc: 'Between two 3D points' },
      { name: 'Direction Cosines', formula: 'l²+m²+n² = 1', desc: 'l=cosα, m=cosβ, n=cosγ' },
      { name: 'Equation of Line', formula: '(x-x₁)/a = (y-y₁)/b = (z-z₁)/c', desc: 'Symmetric form' },
      { name: 'Equation of Plane', formula: 'ax + by + cz + d = 0', desc: 'General form' },
      { name: 'Distance: Point to Plane', formula: 'd = |ax₁+by₁+cz₁+d| / √(a²+b²+c²)', desc: '' },
    ],
    'Probability': [
      { name: 'Conditional Probability', formula: 'P(A|B) = P(A∩B) / P(B)', desc: 'P(B) ≠ 0' },
      { name: 'Multiplication Rule', formula: 'P(A∩B) = P(A) × P(B|A)', desc: '' },
      { name: 'Bayes\' Theorem', formula: 'P(Aᵢ|B) = P(Aᵢ)P(B|Aᵢ) / ΣP(Aⱼ)P(B|Aⱼ)', desc: '' },
      { name: 'Independent Events', formula: 'P(A∩B) = P(A) × P(B)', desc: 'If A and B are independent' },
      { name: 'Binomial Distribution Mean', formula: 'μ = np', desc: 'n=trials, p=probability of success' },
      { name: 'Binomial Distribution Variance', formula: 'σ² = npq', desc: 'q = 1-p' },
    ],
    'Linear Programming': [
      { name: 'Objective Function', formula: 'Z = ax + by', desc: 'To maximize or minimize' },
      { name: 'Corner Point Method', formula: 'Evaluate Z at each corner of feasible region', desc: 'Optimal value is at a corner point' },
    ]
  }
};

// Color themes per chapter
const colors = [
  { bg: 'bg-blue-50', border: 'border-blue-400', badge: 'bg-blue-100 text-blue-700', icon: '📐' },
  { bg: 'bg-green-50', border: 'border-green-400', badge: 'bg-green-100 text-green-700', icon: '📊' },
  { bg: 'bg-purple-50', border: 'border-purple-400', badge: 'bg-purple-100 text-purple-700', icon: '📏' },
  { bg: 'bg-orange-50', border: 'border-orange-400', badge: 'bg-orange-100 text-orange-700', icon: '🔢' },
  { bg: 'bg-pink-50', border: 'border-pink-400', badge: 'bg-pink-100 text-pink-700', icon: '📈' },
  { bg: 'bg-teal-50', border: 'border-teal-400', badge: 'bg-teal-100 text-teal-700', icon: '🧮' },
  { bg: 'bg-yellow-50', border: 'border-yellow-400', badge: 'bg-yellow-100 text-yellow-700', icon: '⚡' },
];

function FormulaSheet() {
  const [selectedClass, setSelectedClass] = useState('10');
  const [search, setSearch] = useState('');
  const [copied, setCopied] = useState('');

  const data = formulaData[selectedClass];

  // Filter by search
  const filtered = Object.entries(data).reduce((acc, [chapter, formulas]) => {
    const q = search.toLowerCase();
    const matched = formulas.filter(f =>
      f.name.toLowerCase().includes(q) ||
      f.formula.toLowerCase().includes(q) ||
      f.desc.toLowerCase().includes(q) ||
      chapter.toLowerCase().includes(q)
    );
    if (matched.length > 0) acc[chapter] = matched;
    return acc;
  }, {});

  const copyFormula = (formula, name) => {
    navigator.clipboard.writeText(formula).then(() => {
      setCopied(name);
      setTimeout(() => setCopied(''), 2000);
    });
  };

  const totalFormulas = Object.values(data).reduce((a, b) => a + b.length, 0);

  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">📐 Maths Formula Sheet</h1>
        <p className="text-gray-500 mt-1">All important formulas for CBSE Board Exams</p>
      </div>

      {/* Class Selector + Stats */}
      <div className="bg-white rounded-2xl shadow-md p-5 mb-6">
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
          {/* Class Tabs */}
          <div className="flex gap-3">
            {['10', '12'].map(cls => (
              <button key={cls}
                onClick={() => { setSelectedClass(cls); setSearch(''); }}
                className={`px-6 py-2.5 rounded-xl font-bold text-sm transition ${
                  selectedClass === cls
                    ? 'bg-indigo-600 text-white shadow-md'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}>
                Class {cls}
              </button>
            ))}
          </div>

          {/* Stats */}
          <div className="flex gap-4 text-center">
            <div className="bg-indigo-50 px-4 py-2 rounded-xl">
              <div className="text-xl font-bold text-indigo-600">{totalFormulas}</div>
              <div className="text-xs text-gray-500">Formulas</div>
            </div>
            <div className="bg-green-50 px-4 py-2 rounded-xl">
              <div className="text-xl font-bold text-green-600">{Object.keys(data).length}</div>
              <div className="text-xs text-gray-500">Chapters</div>
            </div>
          </div>
        </div>

        {/* Search */}
        <div className="mt-4">
          <input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="🔍 Search formula, topic, or keyword..."
            className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 text-sm"
          />
        </div>
      </div>

      {/* Formula Sections */}
      {Object.entries(filtered).length === 0 ? (
        <div className="text-center py-16 text-gray-400">
          <div className="text-5xl mb-3">🔍</div>
          <p className="text-lg">No formulas found for "{search}"</p>
        </div>
      ) : (
        Object.entries(filtered).map(([chapter, formulas], idx) => {
          const theme = colors[idx % colors.length];
          return (
            <div key={chapter} className={`${theme.bg} rounded-2xl border-l-4 ${theme.border} shadow-sm mb-6 overflow-hidden`}>
              {/* Chapter Header */}
              <div className="px-6 py-4 flex items-center gap-3">
                <span className="text-2xl">{theme.icon}</span>
                <div>
                  <h2 className="text-lg font-bold text-gray-800">{chapter}</h2>
                  <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${theme.badge}`}>
                    {formulas.length} formula{formulas.length > 1 ? 's' : ''}
                  </span>
                </div>
              </div>

              {/* Formulas Grid */}
              <div className="px-4 pb-4 grid grid-cols-1 md:grid-cols-2 gap-3">
                {formulas.map((f, i) => (
                  <div key={i}
                    className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition group relative">
                    {/* Copy button */}
                    <button
                      onClick={() => copyFormula(f.formula, f.name)}
                      className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition text-xs bg-gray-100 hover:bg-indigo-100 text-gray-500 hover:text-indigo-600 px-2 py-1 rounded-lg"
                      title="Copy formula">
                      {copied === f.name ? '✅ Copied!' : '📋 Copy'}
                    </button>

                    {/* Formula Name */}
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">{f.name}</p>

                    {/* Formula */}
                    <div className="bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 mb-2">
                      <code className="text-indigo-700 font-bold text-sm break-all">{f.formula}</code>
                    </div>

                    {/* Description */}
                    {f.desc && (
                      <p className="text-xs text-gray-500 leading-relaxed">{f.desc}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          );
        })
      )}

      {/* Footer tip */}
      <div className="text-center mt-6 text-sm text-gray-400">
        💡 Hover over any formula card to copy it • Click the formula to use in AI Tutor
      </div>
    </div>
  );
}

export default FormulaSheet;
