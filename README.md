# URL Shortener

> **User stories:**
>
> 1) I can pass a URL as a parameter and I will receive a shortened URL in the JSON response.  
> 2) If I pass an invalid URL that doesn't follow the valid http://www.example.com format, the JSON response will contain an error instead.  
> 3) When I visit that shortened URL, it will redirect me to my original link.

**Example creation usage:**  

[https://shurli.herokuapp.com/new/https://www.google.com](https://shurli.herokuapp.com/new/https://www.google.com)

[https://shurli.herokuapp.com/new/http://freecodecamp.com/news](https://shurli.herokuapp.com/new/http://freecodecamp.com/news)  

**Example creation output:**  

`{ "original_url": "http://freecodecamp.com/news", "short_url": "https://shurli.herokuapp.com/4" }`  

**Usage:**  

[https://shurli.herokuapp.com/4](https://shurli.herokuapp.com/4)  

**Will redirect to:**  

[http://freecodecamp.com/news](http://freecodecamp.com/news)