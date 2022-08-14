FROM eclipse-mosquitto:latest

COPY config/mosquitto.conf /mosquitto/config/mosquitto.conf

EXPOSE 1883 8883

ENTRYPOINT ["sh", "./docker-entrypoint.sh"]

CMD ["/usr/sbin/mosquitto", "-c", "/mosquitto/config/mosquitto.conf"]

#CMD ["/usr/sbin/mosquitto", "-c", "/mosquitto-no-auth.conf"]
