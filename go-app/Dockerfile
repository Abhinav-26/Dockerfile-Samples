FROM golang:1.8.5-jessie

RUN mkdir /go-app

# create a working directory
WORKDIR /go-app

# add source code
ADD . /go-app

# run main.go
CMD ["go", "run", "app.go"]