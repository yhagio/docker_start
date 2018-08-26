# Docker Notes

![docker](https://d1q6f0aelx0por.cloudfront.net/product-logos/75765bad-5683-40e7-b4cb-cdd4f7cc9b9e-docker.png)

Download Docker

### Ubuntu (18.04)

https://docs.docker.com/install/linux/docker-ce/ubuntu/

Then post-install steps

https://docs.docker.com/install/linux/linux-postinstall/

❗ https://github.com/docker/docker-snap/issues/1

You might see this error if you run `docker run hello-world` without `sudo`,
to solve, change permission as below:

```bash
$ docker run hello-world
docker: Got permission denied while trying to connect to the Docker daemon socket at unix:///var/run/docker.sock: Post http://%2Fvar%2Frun%2Fdocker.sock/v1.38/containers/create: dial unix /var/run/docker.sock: connect: permission denied.
See 'docker run --help'.

$ ls -l /var/run/docker.sock
srw-rw---- 1 root docker 0 Aug 24 19:28 /var/run/docker.sock

$ sudo chmod 666 /var/run/docker.sock

$ ls -l /var/run/docker.sock
srw-rw-rw- 1 root docker 0 Aug 24 19:28 /var/run/docker.sock

$ docker run hello-world

Hello from Docker!
This message shows that your installation appears to be working correctly.

To generate this message, Docker took the following steps:
 1. The Docker client contacted the Docker daemon.
 2. The Docker daemon pulled the "hello-world" image from the Docker Hub.
    (amd64)
 3. The Docker daemon created a new container from that image which runs the
    executable that produces the output you are currently reading.
 4. The Docker daemon streamed that output to the Docker client, which sent it
    to your terminal.

To try something more ambitious, you can run an Ubuntu container with:
 $ docker run -it ubuntu bash

Share images, automate workflows, and more with a free Docker ID:
 https://hub.docker.com/

For more examples and ideas, visit:
 https://docs.docker.com/engine/userguide/
```

Install docker-compose

https://docs.docker.com/compose/install/


### Commands

```bash
# Show docker version
docker version

# Create and run a container from an image and execute a command
# command should work depending on the content the image has in it
docker run <image name> <command>
# i.e.
docker run busybox echo Hello
docker run busybox ls

# Show containers running
docker ps

# Show containers that have been created ever since
docker ps --all


# <<< Container Life Cycle >>>


# docker run = docker create + docker start

# create hellow-world container
docker create hello-world
# output: 2803538e80ed7d34742699eb2f752868a2aa1ee505564c12bashf43966d385e240a1

# start the container using the id retuned from 'docker create hello-world'
# '-a' means to print the output
docker start -a 2803538e80ed7d34742699eb2f752868a2aa1ee505564c12f43966d385e240a1

# Remove all stoppped containers, networks, dangling images, and  build cache
# Useful to reset and clear up the space
docker system prune

# Get logs from container
docker logs <container id>

# Stop a container

# Stop gracefully
docker stop <container id>

# Terminate immediately
docker kill <container id>


# Execute an additional command inside a container
# '-it' : allow us to provide input to the container
docker exec -it <container id> <command>



# Port mapping localhost:8080 <-> container's :8080
docker run -p 8080:8080 <container id>
```

### Create an image

1 Create `Dockerfile`
2 Specify a base image
3 Run some commands to install dependencies to set up
4 Specify a command to run the application on

**See [examples](https://github.com/yhagio/docker_start/examples)**
