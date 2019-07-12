FROM ubuntu:trusty
COPY built/ /usr/local
RUN apt-get update && \
    apt-get install -y --no-install-recommends \
       libtalloc2 \
       libdbd-sqlite3 \
       libdbi1 && \
    apt-get clean 
RUN ldconfig -i
VOLUME /etc/osmocom
VOLUME /data
WORKDIR /etc/osmocom
COPY osmo-nitb.cfg /etc/osmocom/
CMD ["/usr/local/bin/osmo-nitb", "-P", "-c", "osmo-nitb.cfg", "-l", "/data/hlr.db"]
