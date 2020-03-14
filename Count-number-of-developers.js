function countDevelopers(list) {
  const _devs = list.filter(dev => {
    return dev.continent === "Europe" && dev.language === "JavaScript";
  });

  if (_devs.length <= 0) {
    return 0;
  } else return _devs.length;
}
