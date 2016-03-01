# URL Shortener

> **User stories:**
>
> 1) I can pass a URL as a parameter and I will receive a shortened URL in the JSON response.  
> 2) If I pass an invalid URL that doesn't follow the valid http://www.example.com format, the JSON response will contain an error instead.  
> 3) When I visit that shortened URL, it will redirect me to my original link.

**Example creation usage:**  

[https://url-shortner-lucaslmuller.c9users.io/new/https://www.google.com](https://url-shortner-lucaslmuller.c9users.io/new/https://www.google.com)

[https://url-shortner-lucaslmuller.c9users.io/new/http://freecodecamp.com/news](https://url-shortner-lucaslmuller.c9users.io/new/http://freecodecamp.com/news)  

**Example creation output:**  

`{ "original_url" : "http://www.freecodecamp.com/news", "short_url" : "https://url-shortner-lucaslmuller.c9users.io/3" }`  

**Usage:**  

[https://url-shortner-lucaslmuller.c9users.io/3](https://url-shortner-lucaslmuller.c9users.io/3)  

**Will redirect to:**  

[http://freecodecamp.com/news](http://freecodecamp.com/news)