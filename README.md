# api-explorer

A web application that can generate UI components
that can interact with a given API specification. 

API Explorer renders given a JSON specification:

```
{
  "title": "Add new user",
  "url": "https://jsonplaceholder.typicode.com/users",
  "method": "POST",
  "body": [
    {
      "name": "email",
      "type": "email",
      "max": 24,
      "min": 3
    },
}
```

To change the API specification change the contents
of the configuration file:  

```
src/config/config.json 
```

Or invoke the ApiExplorer component

###### Setup
 
