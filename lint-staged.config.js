const path = require('path')

module.exports = {
  'src/**/*.ts': (absolutePaths) => {
    const cwd = process.cwd()
    console.log(absolutePaths);
    const relativePaths = absolutePaths.map((file) =>"--files=\"" +  path.relative(cwd, file) + '"')


    console.log(`ng lint angular-starter-project ${relativePaths.join(" ")}`);


    return `ng lint angular-starter-project ${relativePaths.join(" ")}`
  }
}
