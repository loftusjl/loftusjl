var iAm = ['Web Developer', 'Web Designer', 'Database Developer'];

getTitle();

function getTitle() {
    for (i = 0; i < iAm.length; i++) {
        var title = iAm[i].split('');
        typeIt(title);
    }
}

let typeIt = {
    writeTitle: function (a) {
        var aString = '';
        for (i = 0; i < a.length; i++) {
            aString += a[i];
            console.log(aString);
        }
    }
}