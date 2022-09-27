function addFullNameProperty(obj) {
  // Add your code after this line
  var fullName={
    firstName:obj.firstName,
    lastName:obj.lastName,
  };
  fullName.fullName=`${obj.firstName} ${obj.lastName}`;
  return fullName;
}
const cosa={
  firstName:"Jaden",
  lastName:"Smith"
}