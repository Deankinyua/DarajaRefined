// note: What are JSON libraries in simple terms?

let stringjson = "Name-Dean KamanuAddress-Nairobi";

let result = stringjson.indexOf("Name") + 5;
let result2 = stringjson.indexOf("Address");
console.log(stringjson.substring(result, result2));

let json = `{
  "Name": "Jamsheed Kamardeen",
  "Address": "28-378 BlahBlah House, BlahBlah Nagar, Blah City, India - 238283",
}`;

`You dont make them like this,
String jsonstring = "{ \"Name\" : \"" + user.name + "\" }"

No! You use JSON libraries. Using a JSON library in a Java project, you write your code like this.
JSONObject obj=new JSONObject();
obj.put("Name",user.name);
obj.put("Address",user.address);
System.out.println(obj.toString());

and it will print the correct JSON string. No matter what user inputs that can create problems, the library will handle it. If user inputs a ", library will add an escape character infront of it. etc etc.

Similarly, the retrieval part. You dont look for where the " starts and where it ends.
JSONObject details = new JSONObject(obj);
String name = details.get("Name") // will get you the Name
String address = details.get("Address") //will get you the Address
int age = details.getInt("Age") //will get you the age as an Integer

It will remove all unwanted characters and give you a representation in the datatype you request.

This is why you need a JSON Library!`;
