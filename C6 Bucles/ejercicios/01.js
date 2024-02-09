function esIgualYNegativo(a, b) {
  if (a === b && a < 0 && b < 0) {
    return true;
  } else {
    return false;
  }
}

module.exports = esIgualYNegativo;
