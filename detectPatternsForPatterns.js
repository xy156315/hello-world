function toRegExp(pattern) {
  if (pattern instanceof RegExp) {
    return pattern;
  }

  if (typeof pattern !== "string") {
    throw new TypeError("Pattern must be a string or RegExp.");
  }

  if (pattern.startsWith("/")) {
    for (let i = pattern.length - 1; i > 0; i -= 1) {
      if (pattern[i] !== "/") {
        continue;
      }

      let backslashCount = 0;
      for (let j = i - 1; j >= 0 && pattern[j] === "\\"; j -= 1) {
        backslashCount += 1;
      }

      if (backslashCount % 2 === 1) {
        continue;
      }

      const source = pattern.slice(1, i);
      const flags = pattern.slice(i + 1);
      if (/^[gimsuy]*$/.test(flags)) {
        return new RegExp(source, flags);
      }
      break;
    }
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
