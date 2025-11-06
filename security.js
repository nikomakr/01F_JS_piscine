if (
  (traveler.alreadyHadTheVirus === true && traveler.recovered === true) ||
  traveler.isVaccinated === true
) {
  traveler.isImmune = true;
} else {
  traveler.isImmune = false;
}
