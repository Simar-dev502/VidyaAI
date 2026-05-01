import React from "react";

// Trig Table
const trigTable = {
  headers: ["Angle", "sin", "cos", "tan", "cosec", "sec", "cot"],
  rows: [
    ["0 deg",  "0",       "1",       "0",        "undefined", "1",        "undefined"],
    ["30 deg", "1/2",     "sqrt3/2", "1/sqrt3",  "2",         "2/sqrt3",  "sqrt3"],
    ["45 deg", "1/sqrt2", "1/sqrt2", "1",        "sqrt2",     "sqrt2",    "1"],
    ["60 deg", "sqrt3/2", "1/2",     "sqrt3",    "2/sqrt3",   "2",        "1/sqrt3"],
    ["90 deg", "1",       "0",       "undefined","1",         "undefined","0"],
  ]
};

// Squares and Cubes Table
const squaresTable = {
  headers: ["n", "n^2", "n^3", "sqrt(n)"],
  rows: [
    ["1","1","1","1.000"],["2","4","8","1.414"],["3","9","27","1.732"],
    ["4","16","64","2.000"],["5","25","125","2.236"],["6","36","216","2.449"],
    ["7","49","343","2.646"],["8","64","512","2.828"],["9","81","729","3.000"],
    ["10","100","1000","3.162"],["11","121","1331","3.317"],["12","144","1728","3.464"],
    ["13","169","2197","3.606"],["14","196","2744","3.742"],["15","225","3375","3.873"],
    ["16","256","4096","4.000"],["17","289","4913","4.123"],["18","324","5832","4.243"],
    ["19","361","6859","4.359"],["20","400","8000","4.472"],
  ]
};

// Mensuration Table
const mensurationTable = {
  headers: ["Shape", "Area / CSA", "TSA", "Volume"],
  rows: [
    ["Square",     "a^2",         "4a",          "---"],
    ["Rectangle",  "l x b",       "2(l+b)",      "---"],
    ["Triangle",   "(1/2) x b x h","a+b+c",      "---"],
    ["Circle",     "pi*r^2",      "2*pi*r",      "---"],
    ["Cube",       "6a^2",        "6a^2",        "a^3"],
    ["Cuboid",     "2(lb+bh+lh)", "2(lb+bh+lh)", "l*b*h"],
    ["Cylinder",   "2*pi*r*h",    "2*pi*r(r+h)", "pi*r^2*h"],
    ["Cone",       "pi*r*l",      "pi*r(r+l)",   "(1/3)*pi*r^2*h"],
    ["Sphere",     "4*pi*r^2",    "4*pi*r^2",    "(4/3)*pi*r^3"],
    ["Hemisphere", "2*pi*r^2",    "3*pi*r^2",    "(2/3)*pi*r^3"],
  ]
};

const formulaData = {
  "6": {
    "Basic Arithmetic": [
      { name: "BODMAS Rule", formula: "B -> O -> D -> M -> A -> S", desc: "Brackets, Orders, Division, Multiplication, Addition, Subtraction" },
      { name: "LCM x HCF", formula: "LCM x HCF = Product of two numbers", desc: "For any two numbers a and b" },
      { name: "Divisibility by 2", formula: "Last digit is 0, 2, 4, 6 or 8", desc: "" },
      { name: "Divisibility by 3", formula: "Sum of digits divisible by 3", desc: "" },
      { name: "Divisibility by 9", formula: "Sum of digits divisible by 9", desc: "" },
      { name: "Divisibility by 11", formula: "(Sum of odd-place digits) - (Sum of even-place digits) = 0 or 11", desc: "" },
    ],
    "Fractions & Decimals": [
      { name: "Fraction Addition", formula: "a/b + c/d = (ad + bc) / bd", desc: "" },
      { name: "Fraction Multiplication", formula: "(a/b) x (c/d) = ac / bd", desc: "" },
      { name: "Fraction Division", formula: "(a/b) / (c/d) = (a/b) x (d/c)", desc: "Multiply by reciprocal" },
      { name: "Percentage", formula: "% = (Part / Whole) x 100", desc: "" },
      { name: "Percentage to Fraction", formula: "x% = x/100", desc: "" },
    ],
    "Basic Geometry": [
      { name: "Perimeter of Square", formula: "P = 4a", desc: "a = side" },
      { name: "Area of Square", formula: "A = a^2", desc: "" },
      { name: "Perimeter of Rectangle", formula: "P = 2(l + b)", desc: "" },
      { name: "Area of Rectangle", formula: "A = l x b", desc: "" },
      { name: "Area of Triangle", formula: "A = (1/2) x base x height", desc: "" },
      { name: "Circumference of Circle", formula: "C = 2*pi*r", desc: "pi = 3.14 or 22/7" },
      { name: "Area of Circle", formula: "A = pi*r^2", desc: "" },
    ],
    "Ratio & Proportion": [
      { name: "Ratio", formula: "a : b = a/b", desc: "" },
      { name: "Proportion", formula: "a/b = c/d  =>  ad = bc", desc: "Cross multiplication" },
      { name: "Unitary Method", formula: "Value of 1 unit = Total value / Number of units", desc: "" },
    ],
  },
  "7": {
    "Integers & Algebra": [
      { name: "Additive Inverse", formula: "a + (-a) = 0", desc: "" },
      { name: "Multiplicative Inverse", formula: "a x (1/a) = 1", desc: "a != 0" },
      { name: "Distributive Law", formula: "a(b + c) = ab + ac", desc: "" },
      { name: "Simple Equation", formula: "ax + b = c  =>  x = (c - b) / a", desc: "" },
    ],
    "Lines & Angles": [
      { name: "Complementary Angles", formula: "Angle A + Angle B = 90 deg", desc: "" },
      { name: "Supplementary Angles", formula: "Angle A + Angle B = 180 deg", desc: "" },
      { name: "Vertically Opposite", formula: "Angle A = Angle C (opposite angles)", desc: "Always equal" },
      { name: "Angles on a Line", formula: "Sum = 180 deg", desc: "Linear pair" },
      { name: "Angles at a Point", formula: "Sum = 360 deg", desc: "" },
    ],
    "Triangle Properties": [
      { name: "Angle Sum", formula: "Angle A + Angle B + Angle C = 180 deg", desc: "Sum of angles in a triangle" },
      { name: "Exterior Angle", formula: "Exterior angle = Sum of two non-adjacent interior angles", desc: "" },
      { name: "Pythagoras (intro)", formula: "c^2 = a^2 + b^2", desc: "Right triangle only" },
    ],
    "Perimeter & Area": [
      { name: "Perimeter of Triangle", formula: "P = a + b + c", desc: "" },
      { name: "Area of Triangle", formula: "A = (1/2) x b x h", desc: "" },
      { name: "Area of Parallelogram", formula: "A = base x height", desc: "" },
      { name: "Area of Rhombus", formula: "A = (1/2) x d1 x d2", desc: "d1, d2 = diagonals" },
    ],
    "Data Handling": [
      { name: "Mean", formula: "Mean = Sum of observations / Number of observations", desc: "" },
      { name: "Range", formula: "Range = Maximum value - Minimum value", desc: "" },
      { name: "Probability (basic)", formula: "P(E) = Favourable outcomes / Total outcomes", desc: "" },
    ],
  },
  "8": {
    "Algebraic Identities": [
      { name: "Identity 1", formula: "(a + b)^2 = a^2 + 2ab + b^2", desc: "" },
      { name: "Identity 2", formula: "(a - b)^2 = a^2 - 2ab + b^2", desc: "" },
      { name: "Identity 3", formula: "(a + b)(a - b) = a^2 - b^2", desc: "Difference of squares" },
      { name: "Identity 4", formula: "(x + a)(x + b) = x^2 + (a+b)x + ab", desc: "" },
      { name: "Identity 5", formula: "(a + b + c)^2 = a^2 + b^2 + c^2 + 2ab + 2bc + 2ca", desc: "" },
      { name: "Identity 6", formula: "(a + b)^3 = a^3 + 3a^2*b + 3a*b^2 + b^3", desc: "" },
      { name: "Identity 7", formula: "(a - b)^3 = a^3 - 3a^2*b + 3a*b^2 - b^3", desc: "" },
      { name: "Identity 8", formula: "a^3 + b^3 = (a + b)(a^2 - ab + b^2)", desc: "" },
      { name: "Identity 9", formula: "a^3 - b^3 = (a - b)(a^2 + ab + b^2)", desc: "" },
    ],
    "Mensuration": [
      { name: "Area of Trapezium", formula: "A = (1/2) x (a + b) x h", desc: "a, b = parallel sides, h = height" },
      { name: "Area of Rhombus", formula: "A = (1/2) x d1 x d2", desc: "" },
      { name: "Surface Area of Cube", formula: "SA = 6a^2", desc: "" },
      { name: "Surface Area of Cuboid", formula: "SA = 2(lb + bh + lh)", desc: "" },
      { name: "Volume of Cube", formula: "V = a^3", desc: "" },
      { name: "Volume of Cuboid", formula: "V = l x b x h", desc: "" },
      { name: "Volume of Cylinder", formula: "V = pi*r^2*h", desc: "" },
    ],
    "Exponents": [
      { name: "Product Rule", formula: "a^m x a^n = a^(m+n)", desc: "" },
      { name: "Quotient Rule", formula: "a^m / a^n = a^(m-n)", desc: "" },
      { name: "Power Rule", formula: "(a^m)^n = a^(m*n)", desc: "" },
      { name: "Zero Exponent", formula: "a^0 = 1", desc: "a != 0" },
      { name: "Negative Exponent", formula: "a^(-n) = 1/a^n", desc: "" },
      { name: "Fractional Exponent", formula: "a^(1/n) = nth root of a", desc: "" },
    ],
    "Direct & Inverse Proportion": [
      { name: "Direct Proportion", formula: "x/y = k  =>  x1/y1 = x2/y2", desc: "As x increases, y increases" },
      { name: "Inverse Proportion", formula: "x*y = k  =>  x1*y1 = x2*y2", desc: "As x increases, y decreases" },
    ],
  },
  "9": {
    "Number Systems": [
      { name: "Irrational Number", formula: "Cannot be written as p/q (q != 0)", desc: "e.g. sqrt(2), pi, sqrt(3)" },
      { name: "Rationalisation", formula: "1/(a+sqrt(b)) = (a-sqrt(b)) / (a^2 - b)", desc: "Multiply by conjugate" },
      { name: "Laws of Radicals", formula: "sqrt(a) x sqrt(b) = sqrt(a*b)", desc: "" },
      { name: "Radical Quotient", formula: "sqrt(a) / sqrt(b) = sqrt(a/b)", desc: "" },
    ],
    "Polynomials": [
      { name: "Remainder Theorem", formula: "p(a) = remainder when p(x) divided by (x - a)", desc: "" },
      { name: "Factor Theorem", formula: "If p(a) = 0, then (x - a) is a factor of p(x)", desc: "" },
      { name: "Identity 1", formula: "(a+b)^2 = a^2 + 2ab + b^2", desc: "" },
      { name: "Identity 2", formula: "(a-b)^2 = a^2 - 2ab + b^2", desc: "" },
      { name: "Identity 3", formula: "a^2 - b^2 = (a+b)(a-b)", desc: "" },
      { name: "Identity 4", formula: "a^3+b^3+c^3 - 3abc = (a+b+c)(a^2+b^2+c^2-ab-bc-ca)", desc: "" },
    ],
    "Coordinate Geometry": [
      { name: "Cartesian Plane", formula: "Point P = (x, y)", desc: "x = abscissa, y = ordinate" },
      { name: "Quadrants", formula: "Q1:(+,+)  Q2:(-,+)  Q3:(-,-)  Q4:(+,-)", desc: "" },
      { name: "Distance from Origin", formula: "d = sqrt(x^2 + y^2)", desc: "" },
    ],
    "Lines & Angles": [
      { name: "Angle Sum (Triangle)", formula: "A + B + C = 180 deg", desc: "" },
      { name: "Exterior Angle", formula: "Ext angle = Sum of two interior opposite angles", desc: "" },
      { name: "Linear Pair", formula: "angle1 + angle2 = 180 deg", desc: "Adjacent angles on a straight line" },
      { name: "Vertically Opposite", formula: "angle1 = angle2", desc: "Always equal" },
    ],
    "Heron's Formula": [
      { name: "Semi-perimeter", formula: "s = (a + b + c) / 2", desc: "" },
      { name: "Area of Triangle", formula: "A = sqrt( s(s-a)(s-b)(s-c) )", desc: "Heron's formula" },
    ],
    "Surface Area & Volume": [
      { name: "Cylinder CSA", formula: "2*pi*r*h", desc: "" },
      { name: "Cylinder TSA", formula: "2*pi*r*(r+h)", desc: "" },
      { name: "Cylinder Volume", formula: "pi*r^2*h", desc: "" },
      { name: "Cone CSA", formula: "pi*r*l", desc: "l = sqrt(r^2 + h^2)" },
      { name: "Cone TSA", formula: "pi*r*(r+l)", desc: "" },
      { name: "Cone Volume", formula: "(1/3)*pi*r^2*h", desc: "" },
      { name: "Sphere SA", formula: "4*pi*r^2", desc: "" },
      { name: "Sphere Volume", formula: "(4/3)*pi*r^3", desc: "" },
      { name: "Hemisphere CSA", formula: "2*pi*r^2", desc: "" },
      { name: "Hemisphere TSA", formula: "3*pi*r^2", desc: "" },
      { name: "Hemisphere Volume", formula: "(2/3)*pi*r^3", desc: "" },
    ],
    "Statistics": [
      { name: "Mean", formula: "x-bar = Sum(x) / n", desc: "Sum of all values / count" },
      { name: "Median (odd n)", formula: "Middle value after sorting", desc: "" },
      { name: "Median (even n)", formula: "Average of two middle values", desc: "" },
      { name: "Mode", formula: "Most frequently occurring value", desc: "" },
    ],
  },
  "10": {
    "Algebra": [
      { name: "Quadratic Formula", formula: "x = (-b +/- sqrt(b^2 - 4ac)) / 2a", desc: "Roots of ax^2 + bx + c = 0" },
      { name: "Discriminant", formula: "D = b^2 - 4ac", desc: "D>0: two real roots | D=0: one root | D<0: no real roots" },
      { name: "Sum of Roots", formula: "alpha + beta = -b/a", desc: "" },
      { name: "Product of Roots", formula: "alpha x beta = c/a", desc: "" },
      { name: "AP nth Term", formula: "a(n) = a + (n-1)d", desc: "a = first term, d = common difference" },
      { name: "AP Sum", formula: "S(n) = (n/2) x [2a + (n-1)d]", desc: "" },
      { name: "AP Sum (last term)", formula: "S(n) = (n/2) x (a + l)", desc: "l = last term" },
      { name: "GP nth Term", formula: "a(n) = a x r^(n-1)", desc: "r = common ratio" },
      { name: "GP Sum (finite)", formula: "S(n) = a(r^n - 1) / (r - 1)", desc: "r != 1" },
    ],
    "Coordinate Geometry": [
      { name: "Distance Formula", formula: "d = sqrt( (x2-x1)^2 + (y2-y1)^2 )", desc: "" },
      { name: "Section Formula", formula: "P = ( (mx2+nx1)/(m+n) , (my2+ny1)/(m+n) )", desc: "Divides in ratio m:n" },
      { name: "Midpoint Formula", formula: "M = ( (x1+x2)/2 , (y1+y2)/2 )", desc: "" },
      { name: "Area of Triangle", formula: "A = (1/2)|x1(y2-y3) + x2(y3-y1) + x3(y1-y2)|", desc: "" },
      { name: "Slope of Line", formula: "m = (y2-y1) / (x2-x1)", desc: "" },
      { name: "Equation of Line", formula: "y - y1 = m(x - x1)", desc: "Point-slope form" },
    ],
    "Trigonometry": [
      { name: "sin(theta)", formula: "Opposite / Hypotenuse", desc: "" },
      { name: "cos(theta)", formula: "Adjacent / Hypotenuse", desc: "" },
      { name: "tan(theta)", formula: "Opposite / Adjacent = sin/cos", desc: "" },
      { name: "cosec(theta)", formula: "1 / sin(theta)", desc: "" },
      { name: "sec(theta)", formula: "1 / cos(theta)", desc: "" },
      { name: "cot(theta)", formula: "1 / tan(theta) = cos/sin", desc: "" },
      { name: "Identity 1", formula: "sin^2(theta) + cos^2(theta) = 1", desc: "Most important" },
      { name: "Identity 2", formula: "1 + tan^2(theta) = sec^2(theta)", desc: "" },
      { name: "Identity 3", formula: "1 + cot^2(theta) = cosec^2(theta)", desc: "" },
      { name: "Complementary 1", formula: "sin(90-theta) = cos(theta)", desc: "" },
      { name: "Complementary 2", formula: "tan(90-theta) = cot(theta)", desc: "" },
      { name: "Complementary 3", formula: "sec(90-theta) = cosec(theta)", desc: "" },
    ],
    "Statistics": [
      { name: "Mean (Direct)", formula: "x-bar = Sum(fi*xi) / Sum(fi)", desc: "" },
      { name: "Mean (Assumed Mean)", formula: "x-bar = a + Sum(fi*di) / Sum(fi)", desc: "d = x - a" },
      { name: "Mean (Step Deviation)", formula: "x-bar = a + h x Sum(fi*ui) / Sum(fi)", desc: "u = (x-a)/h" },
      { name: "Median", formula: "M = l + [(n/2 - cf) / f] x h", desc: "l=lower limit, cf=cumulative freq" },
      { name: "Mode", formula: "Mo = l + [(f1-f0) / (2f1-f0-f2)] x h", desc: "" },
      { name: "Empirical Relation", formula: "Mode = 3 Median - 2 Mean", desc: "" },
    ],
    "Surface Area & Volume": [
      { name: "Cube SA", formula: "6a^2", desc: "" },
      { name: "Cube Volume", formula: "a^3", desc: "" },
      { name: "Cuboid SA", formula: "2(lb + bh + lh)", desc: "" },
      { name: "Cuboid Volume", formula: "l*b*h", desc: "" },
      { name: "Cylinder CSA", formula: "2*pi*r*h", desc: "" },
      { name: "Cylinder TSA", formula: "2*pi*r*(r+h)", desc: "" },
      { name: "Cylinder Volume", formula: "pi*r^2*h", desc: "" },
      { name: "Cone CSA", formula: "pi*r*l", desc: "l = sqrt(r^2+h^2)" },
      { name: "Cone TSA", formula: "pi*r*(r+l)", desc: "" },
      { name: "Cone Volume", formula: "(1/3)*pi*r^2*h", desc: "" },
      { name: "Sphere SA", formula: "4*pi*r^2", desc: "" },
      { name: "Sphere Volume", formula: "(4/3)*pi*r^3", desc: "" },
      { name: "Hemisphere CSA", formula: "2*pi*r^2", desc: "" },
      { name: "Hemisphere TSA", formula: "3*pi*r^2", desc: "" },
      { name: "Hemisphere Volume", formula: "(2/3)*pi*r^3", desc: "" },
    ],
    "Circles": [
      { name: "Area of Sector", formula: "A = (theta/360) x pi*r^2", desc: "theta in degrees" },
      { name: "Length of Arc", formula: "l = (theta/360) x 2*pi*r", desc: "" },
      { name: "Area of Segment", formula: "A = Area of sector - Area of triangle", desc: "" },
      { name: "Tangent Length", formula: "PT = sqrt(d^2 - r^2)", desc: "d = distance from external point to centre" },
    ],
    "Probability": [
      { name: "Probability", formula: "P(E) = Favourable outcomes / Total outcomes", desc: "0 <= P(E) <= 1" },
      { name: "Complementary", formula: "P(not E) = 1 - P(E)", desc: "" },
    ],
  },
  "11": {
    "Sets": [
      { name: "Union", formula: "n(A union B) = n(A) + n(B) - n(A intersect B)", desc: "" },
      { name: "Complement", formula: "A' = U - A", desc: "U = Universal set" },
      { name: "De Morgan 1", formula: "(A union B)' = A' intersect B'", desc: "" },
      { name: "De Morgan 2", formula: "(A intersect B)' = A' union B'", desc: "" },
    ],
    "Trigonometry — Compound Angles": [
      { name: "sin(A+B)", formula: "sinA cosB + cosA sinB", desc: "" },
      { name: "sin(A-B)", formula: "sinA cosB - cosA sinB", desc: "" },
      { name: "cos(A+B)", formula: "cosA cosB - sinA sinB", desc: "" },
      { name: "cos(A-B)", formula: "cosA cosB + sinA sinB", desc: "" },
      { name: "tan(A+B)", formula: "(tanA + tanB) / (1 - tanA*tanB)", desc: "" },
      { name: "tan(A-B)", formula: "(tanA - tanB) / (1 + tanA*tanB)", desc: "" },
      { name: "sin 2A", formula: "2 sinA cosA", desc: "Double angle" },
      { name: "cos 2A", formula: "cos^2(A) - sin^2(A) = 1 - 2sin^2(A) = 2cos^2(A) - 1", desc: "" },
      { name: "tan 2A", formula: "2 tanA / (1 - tan^2(A))", desc: "" },
      { name: "sin 3A", formula: "3 sinA - 4 sin^3(A)", desc: "" },
      { name: "cos 3A", formula: "4 cos^3(A) - 3 cosA", desc: "" },
      { name: "sinC + sinD", formula: "2 sin((C+D)/2) cos((C-D)/2)", desc: "Sum to product" },
      { name: "sinC - sinD", formula: "2 cos((C+D)/2) sin((C-D)/2)", desc: "" },
      { name: "cosC + cosD", formula: "2 cos((C+D)/2) cos((C-D)/2)", desc: "" },
      { name: "cosC - cosD", formula: "-2 sin((C+D)/2) sin((C-D)/2)", desc: "" },
      { name: "Sine Rule", formula: "a/sinA = b/sinB = c/sinC = 2R", desc: "R = circumradius" },
      { name: "Cosine Rule", formula: "a^2 = b^2 + c^2 - 2bc cosA", desc: "" },
    ],
    "Sequences & Series": [
      { name: "AP nth Term", formula: "a(n) = a + (n-1)d", desc: "" },
      { name: "AP Sum", formula: "S(n) = (n/2)[2a + (n-1)d]", desc: "" },
      { name: "GP nth Term", formula: "a(n) = a*r^(n-1)", desc: "" },
      { name: "GP Sum", formula: "S(n) = a(r^n - 1) / (r - 1)", desc: "r != 1" },
      { name: "GP Infinite Sum", formula: "S(inf) = a / (1 - r)", desc: "|r| < 1" },
      { name: "Sum of n natural numbers", formula: "Sum = n(n+1)/2", desc: "" },
      { name: "Sum of squares", formula: "Sum of n^2 = n(n+1)(2n+1)/6", desc: "" },
      { name: "Sum of cubes", formula: "Sum of n^3 = [n(n+1)/2]^2", desc: "" },
    ],
    "Straight Lines": [
      { name: "Slope", formula: "m = (y2-y1)/(x2-x1) = tan(theta)", desc: "" },
      { name: "Slope-intercept form", formula: "y = mx + c", desc: "c = y-intercept" },
      { name: "Point-slope form", formula: "y - y1 = m(x - x1)", desc: "" },
      { name: "Two-point form", formula: "(y-y1)/(y2-y1) = (x-x1)/(x2-x1)", desc: "" },
      { name: "Intercept form", formula: "x/a + y/b = 1", desc: "a, b = intercepts" },
      { name: "Distance: Point to Line", formula: "d = |ax1 + by1 + c| / sqrt(a^2 + b^2)", desc: "" },
      { name: "Angle between lines", formula: "tan(theta) = |(m1-m2)/(1+m1*m2)|", desc: "" },
      { name: "Parallel lines", formula: "m1 = m2", desc: "" },
      { name: "Perpendicular lines", formula: "m1 x m2 = -1", desc: "" },
    ],
    "Permutations & Combinations": [
      { name: "Factorial", formula: "n! = n x (n-1) x ... x 2 x 1", desc: "0! = 1" },
      { name: "Permutation", formula: "nPr = n! / (n-r)!", desc: "Ordered arrangement" },
      { name: "Combination", formula: "nCr = n! / (r! x (n-r)!)", desc: "Unordered selection" },
      { name: "Relation", formula: "nPr = r! x nCr", desc: "" },
      { name: "Binomial Theorem", formula: "(a+b)^n = Sum of nCr x a^(n-r) x b^r", desc: "r from 0 to n" },
      { name: "General Term", formula: "T(r+1) = nCr x a^(n-r) x b^r", desc: "" },
    ],
    "Statistics": [
      { name: "Variance", formula: "sigma^2 = Sum(xi - x-bar)^2 / n", desc: "" },
      { name: "Standard Deviation", formula: "sigma = sqrt[ Sum(xi - x-bar)^2 / n ]", desc: "" },
      { name: "Coefficient of Variation", formula: "CV = (sigma / x-bar) x 100", desc: "%" },
    ],
  },
  "12": {
    "Calculus — Derivatives": [
      { name: "First Principle", formula: "f'(x) = lim(h->0) [f(x+h) - f(x)] / h", desc: "" },
      { name: "d/dx (x^n)", formula: "n * x^(n-1)", desc: "Power rule" },
      { name: "d/dx (e^x)", formula: "e^x", desc: "" },
      { name: "d/dx (a^x)", formula: "a^x * ln(a)", desc: "" },
      { name: "d/dx (ln x)", formula: "1/x", desc: "" },
      { name: "d/dx (sin x)", formula: "cos x", desc: "" },
      { name: "d/dx (cos x)", formula: "-sin x", desc: "" },
      { name: "d/dx (tan x)", formula: "sec^2(x)", desc: "" },
      { name: "d/dx (cot x)", formula: "-cosec^2(x)", desc: "" },
      { name: "d/dx (sec x)", formula: "sec(x) * tan(x)", desc: "" },
      { name: "d/dx (cosec x)", formula: "-cosec(x) * cot(x)", desc: "" },
      { name: "d/dx (sin-1 x)", formula: "1 / sqrt(1 - x^2)", desc: "" },
      { name: "d/dx (cos-1 x)", formula: "-1 / sqrt(1 - x^2)", desc: "" },
      { name: "d/dx (tan-1 x)", formula: "1 / (1 + x^2)", desc: "" },
      { name: "Product Rule", formula: "d/dx(u*v) = u*v' + v*u'", desc: "" },
      { name: "Quotient Rule", formula: "d/dx(u/v) = (v*u' - u*v') / v^2", desc: "" },
      { name: "Chain Rule", formula: "dy/dx = (dy/du) * (du/dx)", desc: "" },
    ],
    "Calculus — Integrals": [
      { name: "Integral of x^n", formula: "x^(n+1)/(n+1) + C", desc: "n != -1" },
      { name: "Integral of 1/x", formula: "ln|x| + C", desc: "" },
      { name: "Integral of e^x", formula: "e^x + C", desc: "" },
      { name: "Integral of a^x", formula: "a^x / ln(a) + C", desc: "" },
      { name: "Integral of sin x", formula: "-cos x + C", desc: "" },
      { name: "Integral of cos x", formula: "sin x + C", desc: "" },
      { name: "Integral of tan x", formula: "ln|sec x| + C", desc: "" },
      { name: "Integral of cot x", formula: "ln|sin x| + C", desc: "" },
      { name: "Integral of sec x", formula: "ln|sec x + tan x| + C", desc: "" },
      { name: "Integral of sec^2 x", formula: "tan x + C", desc: "" },
      { name: "Integral of cosec^2 x", formula: "-cot x + C", desc: "" },
      { name: "Integral of 1/(1+x^2)", formula: "tan-1(x) + C", desc: "" },
      { name: "Integral of 1/sqrt(1-x^2)", formula: "sin-1(x) + C", desc: "" },
      { name: "Integration by Parts", formula: "Integral(u*v dx) = u*Integral(v dx) - Integral(u' * Integral(v dx)) dx", desc: "ILATE rule" },
      { name: "Definite Integral", formula: "Integral[a to b] f(x)dx = F(b) - F(a)", desc: "" },
      { name: "Area under curve", formula: "A = Integral[a to b] |f(x)| dx", desc: "" },
    ],
    "Matrices & Determinants": [
      { name: "Determinant 2x2", formula: "|A| = ad - bc  for A = [[a,b],[c,d]]", desc: "" },
      { name: "Determinant 3x3", formula: "Expand along any row or column using cofactors", desc: "" },
      { name: "Inverse of Matrix", formula: "A-1 = adj(A) / |A|", desc: "|A| != 0" },
      { name: "Cramer's Rule", formula: "x = D1/D,  y = D2/D,  z = D3/D", desc: "" },
      { name: "Property", formula: "|A*B| = |A| * |B|", desc: "" },
      { name: "Transpose", formula: "(A*B)^T = B^T * A^T", desc: "" },
    ],
    "Vectors": [
      { name: "Magnitude", formula: "|a| = sqrt(x^2 + y^2 + z^2)", desc: "For vector a = xi + yj + zk" },
      { name: "Unit Vector", formula: "a-hat = a / |a|", desc: "" },
      { name: "Dot Product", formula: "a.b = |a||b|cos(theta) = x1x2 + y1y2 + z1z2", desc: "" },
      { name: "Cross Product Magnitude", formula: "|a x b| = |a||b|sin(theta)", desc: "" },
      { name: "Angle between vectors", formula: "cos(theta) = (a.b) / (|a||b|)", desc: "" },
      { name: "Perpendicular condition", formula: "a.b = 0", desc: "" },
      { name: "Parallel condition", formula: "a x b = 0", desc: "" },
      { name: "Projection of a on b", formula: "(a.b) / |b|", desc: "" },
    ],
    "3D Geometry": [
      { name: "Distance Formula", formula: "d = sqrt( (x2-x1)^2 + (y2-y1)^2 + (z2-z1)^2 )", desc: "" },
      { name: "Direction Cosines", formula: "l^2 + m^2 + n^2 = 1", desc: "l=cos(alpha), m=cos(beta), n=cos(gamma)" },
      { name: "Line (symmetric form)", formula: "(x-x1)/a = (y-y1)/b = (z-z1)/c", desc: "" },
      { name: "Plane (general form)", formula: "ax + by + cz + d = 0", desc: "" },
      { name: "Distance: Point to Plane", formula: "d = |ax1 + by1 + cz1 + d| / sqrt(a^2+b^2+c^2)", desc: "" },
      { name: "Angle between planes", formula: "cos(theta) = |a1a2+b1b2+c1c2| / (|n1| * |n2|)", desc: "" },
    ],
    "Probability": [
      { name: "Conditional Probability", formula: "P(A|B) = P(A intersect B) / P(B)", desc: "P(B) != 0" },
      { name: "Multiplication Rule", formula: "P(A intersect B) = P(A) * P(B|A)", desc: "" },
      { name: "Bayes Theorem", formula: "P(Ai|B) = P(Ai)*P(B|Ai) / Sum[P(Aj)*P(B|Aj)]", desc: "" },
      { name: "Independent Events", formula: "P(A intersect B) = P(A) * P(B)", desc: "" },
      { name: "Binomial Mean", formula: "mu = n*p", desc: "" },
      { name: "Binomial Variance", formula: "sigma^2 = n*p*q", desc: "q = 1-p" },
      { name: "Binomial P(X=r)", formula: "nCr * p^r * q^(n-r)", desc: "" },
    ],
    "Linear Programming": [
      { name: "Objective Function", formula: "Z = ax + by", desc: "Maximize or minimize" },
      { name: "Corner Point Method", formula: "Evaluate Z at each vertex of feasible region", desc: "Optimal value is at a corner point" },
    ],
  },
};

const colors = [
  { bg: "bg-blue-50",   border: "border-blue-400",   badge: "bg-blue-100 text-blue-700",    icon: "??" },
  { bg: "bg-green-50",  border: "border-green-400",  badge: "bg-green-100 text-green-700",  icon: "??" },
  { bg: "bg-purple-50", border: "border-purple-400", badge: "bg-purple-100 text-purple-700",icon: "??" },
  { bg: "bg-orange-50", border: "border-orange-400", badge: "bg-orange-100 text-orange-700",icon: "??" },
  { bg: "bg-pink-50",   border: "border-pink-400",   badge: "bg-pink-100 text-pink-700",    icon: "??" },
  { bg: "bg-teal-50",   border: "border-teal-400",   badge: "bg-teal-100 text-teal-700",    icon: "??" },
  { bg: "bg-yellow-50", border: "border-yellow-400", badge: "bg-yellow-100 text-yellow-700",icon: "?" },
  { bg: "bg-red-50",    border: "border-red-400",    badge: "bg-red-100 text-red-700",      icon: "??" },
];

function DataTable({ title, headers, rows, icon }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm mb-6 overflow-hidden border border-gray-100">
      <div className="bg-indigo-600 px-5 py-3 flex items-center gap-2">
        <span className="text-xl">{icon}</span>
        <h2 className="text-white font-bold text-base">{title}</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-indigo-50">
              {headers.map((h, i) => (
                <th key={i} className="px-4 py-2.5 text-left font-bold text-indigo-700 border-b border-indigo-100 whitespace-nowrap">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                {row.map((cell, j) => (
                  <td key={j} className={`px-4 py-2.5 border-b border-gray-100 text-sm whitespace-nowrap ${j === 0 ? "font-bold text-gray-700" : "font-mono text-indigo-700"}`}>
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function FormulaSheet() {
  const [selectedClass, setSelectedClass] = React.useState("10");
  const [search, setSearch] = React.useState("");
  const [copied, setCopied] = React.useState("");
  const [activeTab, setActiveTab] = React.useState("formulas");

  const data = formulaData[selectedClass] || {};

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
      setTimeout(() => setCopied(""), 2000);
    });
  };

  const totalFormulas = Object.values(data).reduce((a, b) => a + b.length, 0);
  const showTables = ["10", "11", "12"].includes(selectedClass);

  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">?? Maths Formula Sheet</h1>
        <p className="text-gray-500 mt-1">Complete CBSE formulas for Classes 6 to 12</p>
      </div>

      <div className="bg-white rounded-2xl shadow-md p-5 mb-6">
        <div className="flex flex-wrap gap-2 mb-4">
          {["6","7","8","9","10","11","12"].map(cls => (
            <button key={cls}
              onClick={() => { setSelectedClass(cls); setSearch(""); setActiveTab("formulas"); }}
              className={`px-4 py-2 rounded-xl font-bold text-sm transition ${
                selectedClass === cls ? "bg-indigo-600 text-white shadow-md" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}>
              Class {cls}
            </button>
          ))}
        </div>

        <div className="flex gap-4 mb-4">
          <div className="bg-indigo-50 px-4 py-2 rounded-xl text-center">
            <div className="text-xl font-bold text-indigo-600">{totalFormulas}</div>
            <div className="text-xs text-gray-500">Formulas</div>
          </div>
          <div className="bg-green-50 px-4 py-2 rounded-xl text-center">
            <div className="text-xl font-bold text-green-600">{Object.keys(data).length}</div>
            <div className="text-xs text-gray-500">Topics</div>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          <button onClick={() => setActiveTab("formulas")}
            className={`px-4 py-1.5 rounded-lg text-sm font-semibold transition ${activeTab === "formulas" ? "bg-indigo-600 text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}>
            ?? Formulas
          </button>
          {showTables && (
            <>
              <button onClick={() => setActiveTab("trig")}
                className={`px-4 py-1.5 rounded-lg text-sm font-semibold transition ${activeTab === "trig" ? "bg-indigo-600 text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}>
                ?? Trig Table
              </button>
              <button onClick={() => setActiveTab("squares")}
                className={`px-4 py-1.5 rounded-lg text-sm font-semibold transition ${activeTab === "squares" ? "bg-indigo-600 text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}>
                ?? Squares and Cubes
              </button>
              <button onClick={() => setActiveTab("mensuration")}
                className={`px-4 py-1.5 rounded-lg text-sm font-semibold transition ${activeTab === "mensuration" ? "bg-indigo-600 text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}>
                ?? Mensuration Table
              </button>
            </>
          )}
        </div>

        {activeTab === "formulas" && (
          <input type="text" value={search} onChange={e => setSearch(e.target.value)}
            placeholder="Search formula, topic, or keyword..."
            className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 text-sm" />
        )}
      </div>

      {activeTab === "trig" && (
        <DataTable title="Trigonometric Values Table" icon="??"
          headers={trigTable.headers} rows={trigTable.rows} />
      )}

      {activeTab === "squares" && (
        <DataTable title="Squares, Cubes and Square Roots (1 to 20)" icon="??"
          headers={squaresTable.headers} rows={squaresTable.rows} />
      )}

      {activeTab === "mensuration" && (
        <DataTable title="Mensuration Quick Reference" icon="??"
          headers={mensurationTable.headers} rows={mensurationTable.rows} />
      )}

      {activeTab === "formulas" && (
        Object.entries(filtered).length === 0 ? (
          <div className="text-center py-16 text-gray-400">
            <div className="text-5xl mb-3">??</div>
            <p className="text-lg">No formulas found for "{search}"</p>
          </div>
        ) : (
          Object.entries(filtered).map(([chapter, formulas], idx) => {
            const theme = colors[idx % colors.length];
            return (
              <div key={chapter} className={`${theme.bg} rounded-2xl border-l-4 ${theme.border} shadow-sm mb-6 overflow-hidden`}>
                <div className="px-6 py-4 flex items-center gap-3">
                  <span className="text-2xl">{theme.icon}</span>
                  <div>
                    <h2 className="text-lg font-bold text-gray-800">{chapter}</h2>
                    <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${theme.badge}`}>
                      {formulas.length} formula{formulas.length > 1 ? "s" : ""}
                    </span>
                  </div>
                </div>
                <div className="px-4 pb-4 grid grid-cols-1 md:grid-cols-2 gap-3">
                  {formulas.map((f, i) => (
                    <div key={i} className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition group relative">
                      <button onClick={() => copyFormula(f.formula, f.name)}
                        className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition text-xs bg-gray-100 hover:bg-indigo-100 text-gray-500 hover:text-indigo-600 px-2 py-1 rounded-lg">
                        {copied === f.name ? "Copied!" : "Copy"}
                      </button>
                      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">{f.name}</p>
                      <div className="bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 mb-2">
                        <code className="text-indigo-700 font-bold text-sm break-all">{f.formula}</code>
                      </div>
                      {f.desc && <p className="text-xs text-gray-500 leading-relaxed">{f.desc}</p>}
                    </div>
                  ))}
                </div>
              </div>
            );
          })
        )
      )}

      <div className="text-center mt-6 text-sm text-gray-400">
        Hover over any formula card to copy it. Use the tabs above to view Trig Table, Squares and Cubes, and Mensuration tables.
      </div>
    </div>
  );
}

export default FormulaSheet;

