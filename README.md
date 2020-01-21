# API Explorer

## Overview
A web application generates UI components
which can interact with a given API specification. 

API Explorer renders components based on a JSON specification,
each entry in "body" represents any valid HTML-5 <input> attribute.

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
    }
  ]
}
```

For example the following spec: 

```
{
	name: 'full-name',
	type: 'text',
	placeholder: 'John Doe',
	required: true,
}
```

Will render this:

```
<div class="form-group">
	<label class="form-label" for="full-name_bodyParam">
		full-name
	</label>
	<input name="full-name" placeholder="John Doe" required="" type="text" id="full-name_bodyParam" class="form-control">
</div>
```

To change the API specification change the contents
of the configuration file:  

```
src/config/config.json 
```

Or invoke the ApiExplorer component as follows:

```
<ApiExplorer
title={myData.title}
url={myData.url}
method={myData.method}
body={myData.body}/>
```

## Setup

###### Install dependencies

``` npm i ```

Make sure you are using at least Node v10! 

###### Start app 

``` npm start ```

To view the app in your browser,
open localhost:3000.   

###### Run Tests

``` npm test ```

