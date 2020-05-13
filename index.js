class Formatter {
  //add static methods here
  static capitalize(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
  } 

  static sanitize(str){
    return str.replace(/[^a-z0-9-' ]/gi, "");
  }

  static titleize(str){
    const special = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"];
    return Formatter.capitalize(str.split(" ").map(s => {
      if(special.includes(s)){
        return s;
      }
      else{
        return Formatter.capitalize(s);
      }
    }).join(" "));
  }
}