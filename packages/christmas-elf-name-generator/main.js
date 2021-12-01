function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function christmasElfNameGenerator(fullName) {
  return capitalizeFirstLetter(
    fullName.split(' ').slice(0, 1).concat('Elf').join(' ')
  );
}

module.exports = christmasElfNameGenerator;
