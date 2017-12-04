let fs = require('fs');
let path = require('path');
let walk = require('walkdir');

let argv = process.argv.splice(2),
  isCompatible = false,
  newDirName = '',
  rootDir = path.resolve(__dirname, '../');

if (argv[0]) {
  if (argv[0] === 'false') {
    newDirName = 'new-tmpl';
  } else if (argv[0] === 'true') {
    newDirName = 'new-tmpl';
    isCompatible = true;
  } else {
    newDirName = argv[0];
    isCompatible = (argv[1] && argv[1] !== 'false') || false;
  }
} else {
  newDirName = 'new-tmpl';
}
console.log('isCompatible', isCompatible);
console.log('newDirName', newDirName);
console.log(argv);
let tmplDir = path.join(__dirname, '/tmpl/');
let newDir = path.join(rootDir, 'src/pages/' + newDirName);

if (!fs.existsSync(newDir)) {
  fs.mkdirSync(newDir);
  var emitter = walk(tmplDir);
  emitter.on('path', function (filename, stat) {
    let newPath = path.join(newDir, path.relative(tmplDir, filename));
    if (stat.size > 0) {
      if (newPath.indexOf('tmpl.html') > -1) {
        let newPathHtml = newPath.replace(/tmpl\.html/g, newDirName + '.html');
        let resFilename = isCompatible ? (filename.replace(/tmpl\.html/g,'tmpl-promise.html')) : filename;
        fs.writeFileSync(newPathHtml, fs.readFileSync(resFilename));
      } else if (filename.indexOf('tmpl-promise.html') > -1) {} else if (filename.indexOf('tmpl.js') > -1) {
        let newPathJs = newPath.replace(/tmpl\.js/g, newDirName + '.js');
        fs.writeFileSync(newPathJs, fs.readFileSync(filename));
      } else {
        fs.writeFileSync(newPath, fs.readFileSync(filename));
      }
    } else {
      fs.mkdirSync(newPath);
    }
  });
} else {
  if (newDirName === 'new-tmpl') {
    rmdirsSync(newDir);
    fs.mkdirSync(newDir);
  } else {
    console.log(`${path.relative(rootDir, newDir)} is already!`);
  }
};

function rmdirsSync(targetPath) {
  try {
    let files = [];
    if (fs.existsSync(targetPath)) {
      files = fs.readdirSync(targetPath);
      files.forEach(function (file, index) {
        let curPath = targetPath + "/" + file;
        if (fs.statSync(curPath).isDirectory()) { // recurse
          if (!rmdirsSync(curPath)) return false;
        } else { // delete file
          fs.unlinkSync(curPath);
        }
      });
      fs.rmdirSync(targetPath);
    }
  } catch (e) {
    return false;
  }
  return true;
};
