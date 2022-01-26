# Git commit details

**Inside GitCommit folder - commit-info is frontend application and server is backend application**

## Frontend

- Frontend is developed in Vue.js. Vue.js is a progressive javascript framework that works well for this kind of page (single page application). We can also leverage the routing feature of vue.js since url in the problem statement has a different route and query parameters
- Readme.md present in commit-info\README.md which explains how to run the application
- Frontend service will run on http://localhost:8080/ (provided 8080 port is not used already)

## Backend

- Backend is developed in node.js, the reason being it is acting as a mediator here [i.e.] calling gitHub apis. For such (redirection type) applications node.js is useful and not for CPI intensive operations.
- Readme.md file present in server\README.md to which explains how to run the server
- Backend service will run on http://localhost:3000/ (3000 port is mentioned in code. Make sure this port is not used by any other service)

## Application execution

-   Keep both the service running and hit http://localhost:8080/repositories/:owner/:repository/commit/:commitSHA
    - Provide **Owner, repository and commitSHA** as input to the url
    - For e.g.  **http://localhost:8080/repositories/vuejs/docs/commit/85d32ab23103640afdd010085409de6535d965db** [This e.g url will also work as is] [actual changes can be verified at https://github.com/vuejs/docs/commit/85d32ab23103640afdd010085409de6535d965db ]

## Anything that’s missing from the solution that I would add if I had more time.

- There are few console errors, I didn't get time to resolve those.
- Code line numbering is not aligned to the actual line numbers in the code, it needs two different counters (one for old file other for updated file). I added only one counter due to time constraint. 

