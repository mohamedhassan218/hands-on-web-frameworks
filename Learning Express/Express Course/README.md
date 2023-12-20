# REST API
## Introduction
- It's an application programming interface architecture style that conforms to specific architectural constraints. It's not a protocol or standard.

## Best Practices for REST API
1. **Accept and resond with JSON**
    - REST APIs should accept **`JSON`** for request payload and also send responses to JSON.
    - Server-side technologies have libraries that can decode JSON without doing much work.
    - There're another way to transfer data, **`XML`**, and it's widely supported by frameworks but it requires complicated work.
    - See this code:

        ```javascript
        const express = require('express');
        const bodyParser = require('body-parser');

        const app = express();

        app.use(bodyParser.json());

        app.post('/', (req, res) => {
            res.json(req.body);
        });

        app.listen(3000, () => console.log('server started'));
        ```
2. **Use nouns instead of verbs in endpoint paths**
    - We should use the nouns which represent the entity that the endpoint that we're retrieving or manipulating. This is because our **`HTTP Request Method`** already has the verb.
        - **`GET`**: retieves resources.
        - **`POST`**: submits new data to the server.
        - **`PUT`**: updates existing data.
        - **`DELETE`**: removes data.
            - Note: those methods map to the [**`CRUD`**]() operations.
    - See this code:
        
        ```javascript
        const express = require('express');

        const app = express();

        app.use(express.json());

        app.put('/articles/:id', (req, res) => {
            const { id } = req.params;
            res.json(req.body);
        });

        app.listen(3000, () => console.log('server started'));
        ```
3. **Use logical nesting on endpoints**
    - You've to group those endpoints that contain associated information.
    - This is good practice regardless of whether your data is structured like this in your database. In fact, it may be advisable to avoid mirroring your database structure in your endpoints to avoid giving attackers unnecessary information.
    - See this code:
        
        ```javascript
        const express = require('express');
        const bodyParser = require('body-parser');

        const app = express();

        app.use(bodyParser.json());

        app.get('/articles/:articleId/comments', (req, res) => {
            const { articleId } = req.params;
            const comments = [];
            res.json(comments);
        });

        app.listen(3000, () => console.log('server started'));
        ```    
4. **Handle errors and return standard error codes**
    - To eliminate confusion for API users when an error occurs, we should handle errors gracefully and return HTTP response codes that indicate what kind of error occurred.
        - **`400`** Bad Request: this means that client-side input fails validation.
        - **`401`** Unauthorized: this means the user isn't not authorized to access a resource.
        - **`403`** Forbidden: this means the user is authenticated, but it's not allowed to access a resource.
        - **`404`** Not Found: this indicates that a resource is not found.
        - **`500`** Internal server error: this is a generic server error.
        - **`502`** Bad Gateway: this indicates an invalid response from an upstream server.
        - **`503`** Service Unavailable: this indicates that something unexpected happened on server side.
    - See this code:
        
        ```javascript
        const express = require('express');
        const bodyParser = require('body-parser');

        const app = express();

        const users = [
            { email: 'abc@foo.com' }
        ]

        app.use(bodyParser.json());

        app.post('/users', (req, res) => {
        const { email } = req.body;
        const userExists = users.find(u => u.email === email);
        if (userExists) {
            return res.status(400).json({ error: 'User already exists' })
        }
            res.json(req.body);
        });


        app.listen(3000, () => console.log('server started'));
        ```
    - Whenever your API does not successfully complete, you should fail gracefully by sending an error with information to help users make corrective action.
5. **Allow filtering, sorting and pagination**
    - Filtering and pagination both increase performance by reducing the usage of server resources. As more data accumulates in the database, the more important these features become.
    - See the code:

        ```javascript
        const express = require('express');
        const bodyParser = require('body-parser');

        const app = express();

        const employees = [
            { firstName: 'Jane', lastName: 'Smith', age: 20 },
            { firstName: 'John', lastName: 'Smith', age: 30 },
            { firstName: 'Mary', lastName: 'Green', age: 50 },
        ]

        app.use(bodyParser.json());

        app.get('/employees', (req, res) => {
        const { firstName, lastName, age } = req.query;
        let results = [...employees];
        if (firstName) {
            results = results.filter(r => r.firstName === firstName);
        }

        if (lastName) {
            results = results.filter(r => r.lastName === lastName);
        }

        if (age) {
            results = results.filter(r => +r.age === +age);
        }
            res.json(results);
        });

        app.listen(3000, () => console.log('server started'));
        ```
    -  We run filter on with each query parameter value to locate the items that we want to return. Finally we get:

        ```JSON
        [
            {
                "firstName": "John",
                "lastName": "Smith",
                "age": 30
            }
        ]
        ```
6. **Maintain good security practices**
    - Most communication between client and server should be private since we often send and receive private information. Therefore, using SSL/TLS for security is a must.
    - **What is SSL/TLS?**
        - Secure Sockets Layer (SSL) certificates, sometimes called digital certificates, are used to establish an encrypted connection between a browser or user’s computer and a server or website.
        - TLS is an updated, more secure version of SSL. We still refer to our security certificates as SSL because it’s a more common term, but when you buy SSL from DigiCert, you get the most trusted, up-to-date TLS certificates.
            - **Note**: HTTPS appears in the URL when a website is secured by an SSL/TLS certificate.
7. **Cache data to improve performance**
    - We can add caching to return data from the local memory cache instead of querying the database to get the data every time we want to retrieve some data that users request.
    - The good thing about caching is that users can get data faster. However, the data that users get may be outdated.
    - There are many kinds of caching solutions like Redis, in-memory caching, and more. We can change the way data is cached as our needs change. Express has **`apicache`**, see this code:

        ```javascript
        const express = require('express');
        const bodyParser = require('body-parser');
        const apicache = require('apicache');           // Use apicache.
        const app = express();
        let cache = apicache.middleware;
        app.use(cache('5 minutes'));                    // Cache the results for 5 minutes.

        const employees = [
            { firstName: 'Jane', lastName: 'Smith', age: 20 },
            { firstName: 'John', lastName: 'Smith', age: 30 },
            { firstName: 'Mary', lastName: 'Green', age: 50 },
        ]

        app.use(bodyParser.json());

        app.get('/employees', (req, res) => {
            res.json(employees);
        });

        app.listen(3000, () => console.log('server started'));
        ```
8. **Versioning your API**
    - We should have different versions of API if we're making any changes to them that may break clients. The versioning can be done according to semantic version (for example, 2.0.6 to indicate major version 2 and the sixth patch) like most apps do nowadays.
    - This way, we can gradually phase out old endpoints instead of forcing everyone to move to the new API at the same time. The v1 endpoint can stay active for people who don’t want to change, while the v2, with its shiny new features, can serve those who are ready to upgrade. This is especially important if our API is public. We should version them so that we won't break third party apps that use our APIs.
    - Versioning is usually done with /v1/, /v2/, etc. added at the start of the API path. See this code:
    
        ```javascript
        const express = require('express');
        const bodyParser = require('body-parser');
        const app = express();
        app.use(bodyParser.json());

        app.get('/v1/employees', (req, res) => {
            const employees = [];
            res.json(employees);
        });

        app.get('/v2/employees', (req, res) => {
            const employees = [];
            res.json(employees);
        });

        app.listen(3000, () => console.log('server started'));
        ```

- I used this article to learn the topic and write this file: [**`Article`**](https://stackoverflow.blog/2020/03/02/best-practices-for-rest-api-design/).
- You can find more details on this website: [**`Website`**](https://docs.strapi.io/dev-docs/api/rest).

### *Thank You For Reading*
