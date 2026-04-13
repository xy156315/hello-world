function toRegExp(pattern) {
  if (pattern instanceof RegExp) {
    return pattern;
  }

  if (typeof pattern !== "string") {
    throw new TypeError("Pattern must be a string or RegExp.");
  }

  const slashRegex = /^\/(.+)\/([gimsuy]*)$/;
  const match = pattern.match(slashRegex);
  if (match) {
    return new RegExp(match[1], match[2]);
  }

  return new RegExp(pattern);
}

function detectPatternsForPatterns(value, patterns) {
  if (typeof value !== "string") {
    throw new TypeError("Value must be a string.");
  }

  if (!Array.isArray(patterns) || patterns.length === 0) {
    return false;
  }

  return patterns.some((pattern) => toRegExp(pattern).test(value));
}

module.exports = {
  detectPatternsForPatterns,
};
