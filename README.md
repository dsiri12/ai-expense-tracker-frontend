build docker image:

$ docker build --build-arg VITE_API_URL=http://localhost:8000 -t ai-expense-tracker-frontend .

...
=> => exporting manifest list sha256:a292914440beed4a5803e93468b2caf3f62aec573a6ea76e8a5dc09adfa38e49 0.1s
=> => naming to docker.io/library/ai-expense-tracker-frontend:latest 0.0s
=> => unpacking to docker.io/library/ai-expense-tracker-frontend:latest

remove old container:
$ docker rm -f ai-expense-tracker-frontend

run: -- create the container based on the new build image

$ docker run --name ai-expense-tracker-frontend -p 5173:80 ai-expense-tracker-frontend

```
docker run
    │
    ├── --name ai-expense-tracker-frontend
    │        ↑
    │        Container name
    │
    ├── -p 5173:80
    │        ↑    ↑
    │        │    Container port
    │        Host port
    │
    └── ai-expense-tracker-frontend
             ↑
             Docker image name
```

in chrome:
http://localhost:5173

flow:
.env
│
│ VITE_API_URL
▼
docker build --build-arg
│
▼
npm run build
│
▼
Vite replaces import.meta.env.VITE_API_URL
│
▼
dist/
│
▼
Nginx
│
▼
localhost:5173
