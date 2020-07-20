//Exercice 1
String.prototype.filter = function(w) {
    return this.split(' ').filter(w).join(' ');
}