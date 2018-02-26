function getDependencies(tree) {
  if (!tree) return [];
  const result = [];
  function getDep(depTree) {
    if (!depTree) return;
    Object.keys(depTree).forEach((depName) => {
      const dependency = `${depName}@${depTree[depName].version}`;
      if (result.indexOf(dependency) === -1) {
        result.push(dependency);
      }
      getDep(depTree[depName].dependencies);
    });
  }
  getDep(tree.dependencies);
  return result.sort();
}

module.exports = getDependencies;
