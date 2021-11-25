function christmasElfNameGenerator(fullName) {
  return fullName.split(' ').slice(0, 1).concat('Elf').join(' ');
}

module.exports = christmasElfNameGenerator;
