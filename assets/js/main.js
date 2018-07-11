var iAm = ['Web Developer', 'Web Designer', 'Database Developer'];

getTitle();

function getTitle() {
    for (i = 0; i < iAm.length; i++) {
        var title = iAm[i].split('');
        console.log(title);
    }
}
function typeIt(a) {
    for (i = 0; i < a.length; i++) {
        console.log(a);
    }
}