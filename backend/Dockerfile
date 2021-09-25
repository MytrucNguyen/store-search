FROM python:3.8

ENV LC_ALL C.UTF-8
ENV LANG C.UTF-8

# set working directory
WORKDIR /usr/src/app

ARG home="/usr/src/app"

# add and install requirements
COPY ./requirements.txt ${home}/requirements.txt
RUN pip3 install -r ${home}/requirements.txt

COPY ./* ${home}

RUN chmod +x ${home}/entrypoint.sh


EXPOSE 5004

# run server
CMD ["/usr/src/app/entrypoint.sh"]
